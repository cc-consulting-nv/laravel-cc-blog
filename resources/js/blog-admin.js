/**
 * Blog Admin Entry Point
 *
 * This initializes the Vue blog admin component with the cc-platform-sdk.
 * Uses localStorage for token persistence (matching social UI approach).
 */
import { createApp } from "vue";
import { CcPlatformSdk, StorageTokenProvider } from "@cc-consulting-nv/ccsdk";
import BlogAdmin from "./components/blog/BlogAdmin.vue";

// Get API URL from meta tag or environment
// Default based on hostname: localtest.me for local dev, app.closedcircuit.io for production
const defaultApiUrl = window.location.hostname.includes("localtest.me")
    ? "https://cc.localtest.me"
    : "https://app.closedcircuitconsulting.com";

const apiUrl =
    document.querySelector('meta[name="cc-api-url"]')?.content ||
    import.meta.env.VITE_CC_PLATFORM_API_URL ||
    defaultApiUrl;

// Initialize token provider using localStorage for BOTH access and refresh tokens
// This ensures tokens persist across page refreshes
const tokenProvider = new StorageTokenProvider(
    localStorage,
    "cc_blog_admin_tokens",
);

/**
 * Refresh tokens by calling the API directly
 * (Similar to social UI approach to avoid circular dependency)
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

    // Handle different response formats
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

    // Store the new tokens
    tokenProvider.setTokens(newTokens);
    console.log("[Blog Admin] Token refreshed successfully");

    return newTokens;
}

// Initialize SDK with refresh token support
const sdk = new CcPlatformSdk({
    baseUrl: apiUrl,
    tokenProvider,
    dbName: "CcBlogAdminCache",
    onRefreshTokens: refreshTokens,
    onUnauthorized: () => {
        tokenProvider.clearTokens();
        window.dispatchEvent(new CustomEvent("cc:unauthorized"));
    },
});

// Expose SDK globally for Vue components
window.ccSdk = sdk;
window.ccTokenProvider = tokenProvider;

// Debug: log SDK version and methods
console.log("[Blog Admin] SDK version:", CcPlatformSdk.SDK_VERSION);
console.log(
    "[Blog Admin] SDK has requestAuthCode:",
    typeof sdk.requestAuthCode,
);
console.log(
    "[Blog Admin] SDK methods:",
    Object.getOwnPropertyNames(Object.getPrototypeOf(sdk)).filter((m) =>
        m.startsWith("request"),
    ),
);

// Mount Vue app if element exists
const mountPoint = document.getElementById("blog-admin-app");
if (mountPoint) {
    const app = createApp(BlogAdmin);
    app.mount(mountPoint);
    console.log("[Blog Admin] Mounted with API:", apiUrl);
}
