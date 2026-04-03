/**
 * Blog Admin Entry Point
 *
 * Initializes the Vue blog admin component with a lightweight API client.
 * Uses localStorage for token persistence.
 */
import { createApp } from "vue";
import BlogAdmin from "./components/blog/BlogAdmin.vue";

// Get API URL from meta tag or environment
const defaultApiUrl = window.location.hostname.includes("localtest.me")
    ? "https://cc.localtest.me"
    : "https://app.closedcircuitconsulting.com";

const apiUrl =
    document.querySelector('meta[name="cc-api-url"]')?.content ||
    import.meta.env.VITE_CC_PLATFORM_API_URL ||
    defaultApiUrl;

const TOKEN_KEY = "cc_blog_admin_tokens";

// Simple token provider backed by localStorage
const tokenProvider = {
    getTokens() {
        try {
            const raw = localStorage.getItem(TOKEN_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    },
    setTokens(tokens) {
        localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
    },
    clearTokens() {
        localStorage.removeItem(TOKEN_KEY);
    },
};

/**
 * Refresh tokens by calling the API directly.
 * Returns new tokens or throws on failure.
 */
async function refreshTokens() {
    const tokens = tokenProvider.getTokens();
    if (!tokens?.refreshToken) {
        throw new Error("No refresh token available");
    }

    const response = await fetch(`${apiUrl}/auth/refresh`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify({ refresh_token: tokens.refreshToken }),
    });

    if (!response.ok) {
        throw new Error(`Token refresh failed: ${response.status}`);
    }

    const data = await response.json();
    const newAccessToken =
        data.access_token || data.accessToken || data.data?.access_token;
    const newRefreshToken =
        data.refresh_token || data.refreshToken || data.data?.refresh_token;

    if (!newAccessToken) {
        throw new Error("No access token in refresh response");
    }

    const newTokens = {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken || tokens.refreshToken,
    };

    tokenProvider.setTokens(newTokens);
    return newTokens;
}

/**
 * Lightweight API client — wraps fetch with auth headers and auto token refresh.
 */
const apiClient = {
    async request(method, path, body = null, retry = true) {
        const tokens = tokenProvider.getTokens();
        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
        };
        if (tokens?.accessToken) {
            headers["Authorization"] = `Bearer ${tokens.accessToken}`;
        }

        const options = { method, headers };
        if (body !== null) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(`${apiUrl}${path}`, options);

        // Auto-refresh on 401
        if (response.status === 401 && retry) {
            try {
                await refreshTokens();
                return this.request(method, path, body, false);
            } catch {
                tokenProvider.clearTokens();
                window.dispatchEvent(new CustomEvent("cc:unauthorized"));
                throw new Error("Session expired. Please log in again.");
            }
        }

        return response;
    },

    async json(method, path, body = null) {
        const response = await this.request(method, path, body);
        if (!response.ok) {
            const text = await response.text();
            let message = `Request failed (${response.status})`;
            try {
                const json = JSON.parse(text);
                message = json.message || json.error || message;
            } catch {}
            throw new Error(message);
        }
        return response.json();
    },

    // Auth
    async requestAuthCode(email) {
        await this.json("POST", "/sendBlogAuthCode", { email });
    },

    async loginWithMagicLink(email, code) {
        const data = await this.json("POST", "/authCodeLogin", { identifier: email, authCode: parseInt(code, 10) });
        const accessToken = data.access_token || data.accessToken || data.data?.access_token;
        const refreshToken = data.refresh_token || data.refreshToken || data.data?.refresh_token;
        if (accessToken) {
            tokenProvider.setTokens({ accessToken, refreshToken });
        }
        return { accessToken, refreshToken };
    },

    async getCurrentUser() {
        const data = await this.json("GET", "/v1/users/me");
        return data.data || data;
    },

    // Blog posts
    async listBlogPosts(params = {}) {
        const qs = new URLSearchParams(
            Object.fromEntries(
                Object.entries({ status: "all", ...params }).filter(
                    ([, v]) => v !== undefined && v !== null,
                ),
            ),
        ).toString();
        const data = await this.json("GET", `/v1/blog${qs ? "?" + qs : ""}`);
        return data;
    },

    async getBlogCategories() {
        const data = await this.json("GET", "/v1/blog/categories");
        return data.data || data;
    },

    async getBlogPost(slug) {
        const data = await this.json("GET", `/v1/blog/${slug}`);
        return data.data || data;
    },

    async createBlogPost(payload) {
        const data = await this.json("POST", "/v1/blog", payload);
        return data.data || data;
    },

    async updateBlogPost(ulid, payload) {
        const data = await this.json("PUT", `/v1/blog/${ulid}`, payload);
        return data.data || data;
    },

    async deleteBlogPost(ulid) {
        await this.request("DELETE", `/v1/blog/${ulid}`);
    },

    async publishBlogPost(ulid) {
        const data = await this.json("POST", `/v1/blog/${ulid}/publish`);
        return data.data || data;
    },

    async uploadImage(file) {
        // Step 1: Get presigned URL from CC API
        const data = await this.json("POST", "/v1/media/signed-storage-url", {
            content_type: file.type,
        });

        // Step 2: Upload file directly to S3/R2
        const uploadResponse = await fetch(data.url, {
            method: "PUT",
            headers: { "Content-Type": file.type },
            body: file,
        });

        if (!uploadResponse.ok) {
            throw new Error(`Image upload failed: ${uploadResponse.status}`);
        }

        // Step 3: Confirm upload with CC API
        await this.json("POST", "/v1/media/upload", { key: data.key });

        return data.publicUrl;
    },
};

// Expose globally for Vue components
window.ccApiClient = apiClient;
window.ccTokenProvider = tokenProvider;

// Mount Vue app if element exists
const mountPoint = document.getElementById("blog-admin-app");
if (mountPoint) {
    const app = createApp(BlogAdmin);
    app.mount(mountPoint);
    console.log("[Blog Admin] Mounted with API:", apiUrl);
}
