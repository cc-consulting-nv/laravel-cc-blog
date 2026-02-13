<script setup>
import { ref, computed, onMounted, nextTick } from "vue";

// SDK is exposed globally via window.ccSdk
// Access via getter to ensure it's available after initialization
const getSdk = () => window.ccSdk;
const getTokenProvider = () => window.ccTokenProvider;

// State
const posts = ref([]);
const categories = ref([]);
const loading = ref(false);
const error = ref(null);
const isAuthenticated = ref(false);
const currentUser = ref(null);
const isCheckingAuth = ref(true); // Show loading while checking auth on mount

// Edit/Create modal state
const showModal = ref(false);
const editingPost = ref(null);
const formData = ref({
    title: "",
    content: { type: "doc", content: [{ type: "paragraph", content: [] }] },
    excerpt: "",
    status: "draft",
    categoryId: null,
    isFeatured: false,
});

// Login form state - magic link flow
const loginStep = ref("email"); // 'email' or 'code'
const loginForm = ref({
    email: "",
});
const verificationCode = ref(["", "", "", "", "", ""]);
const codeInputRefs = ref([]);
const loginError = ref(null);
const loginLoading = ref(false);

// Check auth status on mount
onMounted(async () => {
    try {
        await checkAuth();
        if (isAuthenticated.value) {
            await loadData();
        }
    } finally {
        isCheckingAuth.value = false;
    }
});

async function checkAuth() {
    const tokens = getTokenProvider().getTokens();
    console.log("[Blog Admin] checkAuth - tokens:", {
        hasAccessToken: !!tokens?.accessToken,
        hasRefreshToken: !!tokens?.refreshToken,
    });

    // If we have an access token, try to get the current user
    // The SDK will automatically handle 401 errors and refresh if needed
    if (tokens?.accessToken) {
        try {
            currentUser.value = await getSdk().getCurrentUser();
            isAuthenticated.value = true;
            console.log(
                "[Blog Admin] Auth check passed, user:",
                currentUser.value?.name,
            );
        } catch (e) {
            console.log("[Blog Admin] Auth check failed:", e.message);
            isAuthenticated.value = false;
            getTokenProvider().clearTokens();
        }
    }
}

// Email validation
const isValidEmail = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(loginForm.value.email);
});

// Code validation
const isCodeComplete = computed(() => {
    return verificationCode.value.every((digit) => digit.length === 1);
});

const fullCode = computed(() => verificationCode.value.join(""));

// Send auth code to email
async function handleSendAuthCode() {
    if (!isValidEmail.value) {
        loginError.value = "Please enter a valid email address";
        return;
    }

    loginLoading.value = true;
    loginError.value = null;

    try {
        await getSdk().requestAuthCode(loginForm.value.email);
        loginStep.value = "code";
        // Focus first code input after DOM update
        await nextTick();
        codeInputRefs.value[0]?.focus();
    } catch (e) {
        loginError.value = e.message || "Failed to send auth code";
    } finally {
        loginLoading.value = false;
    }
}

// Verify the 6-digit code
async function handleVerifyCode() {
    if (!isCodeComplete.value) {
        loginError.value = "Please enter the 6-digit code";
        return;
    }

    loginLoading.value = true;
    loginError.value = null;

    try {
        const tokens = await getSdk().loginWithMagicLink(
            loginForm.value.email,
            fullCode.value,
        );
        if (tokens) {
            await checkAuth();
            await loadData();
        }
    } catch (e) {
        loginError.value = e.message || "Invalid code";
    } finally {
        loginLoading.value = false;
    }
}

// Code input handlers
function setCodeInputRef(el, index) {
    if (el) {
        codeInputRefs.value[index] = el;
    }
}

function handleCodeInput(index, event) {
    const value = event.target.value.replace(/[^0-9]/g, "");
    verificationCode.value[index] = value;

    // Auto-advance to next input
    if (value && index < 5) {
        codeInputRefs.value[index + 1]?.focus();
    }

    // Auto-submit when complete
    if (isCodeComplete.value && isValidEmail.value) {
        handleVerifyCode();
    }
}

function handleCodeKeydown(index, event) {
    // Handle backspace - go to previous input
    if (
        event.key === "Backspace" &&
        !verificationCode.value[index] &&
        index > 0
    ) {
        codeInputRefs.value[index - 1]?.focus();
    }

    // Handle arrow keys
    if (event.key === "ArrowLeft" && index > 0) {
        event.preventDefault();
        codeInputRefs.value[index - 1]?.focus();
    }
    if (event.key === "ArrowRight" && index < 5) {
        event.preventDefault();
        codeInputRefs.value[index + 1]?.focus();
    }
}

function handleCodePaste(event) {
    event.preventDefault();
    const pastedData = event.clipboardData?.getData("text") || "";
    const digits = pastedData.replace(/[^0-9]/g, "").slice(0, 6);

    if (digits.length > 0) {
        for (let i = 0; i < 6; i++) {
            verificationCode.value[i] = digits[i] || "";
        }

        // Focus last filled input or first empty
        const lastFilledIndex = Math.min(digits.length - 1, 5);
        codeInputRefs.value[lastFilledIndex]?.focus();

        // Auto-submit if complete
        if (isCodeComplete.value && isValidEmail.value) {
            handleVerifyCode();
        }
    }
}

function resetToEmail() {
    loginStep.value = "email";
    verificationCode.value = ["", "", "", "", "", ""];
    loginError.value = null;
}

// Go to code step and focus first input
async function goToCodeStep() {
    loginStep.value = "code";
    loginError.value = null;
    await nextTick();
    codeInputRefs.value[0]?.focus();
}

function handleLogout() {
    getTokenProvider().clearTokens();
    isAuthenticated.value = false;
    currentUser.value = null;
    posts.value = [];
}

async function loadData() {
    loading.value = true;
    error.value = null;

    try {
        const [postsResponse, categoriesResponse] = await Promise.all([
            getSdk().listBlogPosts({ status: undefined }), // All posts for admin
            getSdk().getBlogCategories(),
        ]);
        posts.value = postsResponse.data || [];
        categories.value = categoriesResponse || [];
    } catch (e) {
        error.value = e.message || "Failed to load data";
    } finally {
        loading.value = false;
    }
}

function openCreateModal() {
    editingPost.value = null;
    formData.value = {
        title: "",
        content: { type: "doc", content: [{ type: "paragraph", content: [] }] },
        excerpt: "",
        status: "draft",
        categoryId: null,
        isFeatured: false,
    };
    showModal.value = true;
}

function openEditModal(post) {
    editingPost.value = post;
    formData.value = {
        title: post.title,
        content: post.content || {
            type: "doc",
            content: [{ type: "paragraph", content: [] }],
        },
        excerpt: post.excerpt || "",
        status: post.status,
        categoryId: post.category?.id || null,
        isFeatured: post.isFeatured,
    };
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
    editingPost.value = null;
}

async function savePost() {
    loading.value = true;

    try {
        if (editingPost.value) {
            await getSdk().updateBlogPost(
                editingPost.value.ulid,
                formData.value,
            );
        } else {
            await getSdk().createBlogPost(formData.value);
        }
        closeModal();
        await loadData();
    } catch (e) {
        error.value = e.message || "Failed to save post";
    } finally {
        loading.value = false;
    }
}

async function deletePost(post) {
    if (!confirm(`Delete "${post.title}"?`)) return;

    loading.value = true;
    try {
        await getSdk().deleteBlogPost(post.ulid);
        await loadData();
    } catch (e) {
        error.value = e.message || "Failed to delete post";
    } finally {
        loading.value = false;
    }
}

async function publishPost(post) {
    loading.value = true;
    try {
        await getSdk().publishBlogPost(post.ulid);
        await loadData();
    } catch (e) {
        error.value = e.message || "Failed to publish post";
    } finally {
        loading.value = false;
    }
}

const statusColors = {
    draft: "bg-slate-700 text-slate-300",
    scheduled: "bg-yellow-900/50 text-yellow-300",
    published: "bg-green-900/50 text-green-300",
    archived: "bg-red-900/50 text-red-300",
};
</script>

<template>
    <!-- Initial Loading State -->
    <div
        v-if="isCheckingAuth"
        class="flex min-h-[400px] items-center justify-center"
    >
        <div class="text-center">
            <div
                class="inline-block h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"
            ></div>
            <p class="mt-4 text-slate-400">Loading...</p>
        </div>
    </div>

    <!-- Login Form - Magic Link Flow -->
    <div v-else-if="!isAuthenticated" class="mx-auto max-w-md p-8">
        <h2 class="mb-2 text-2xl font-bold text-slate-100">Blog Admin</h2>
        <p class="mb-6 text-sm text-slate-400">
            Sign in with your CC Platform account
        </p>

        <!-- Step 1: Email Input -->
        <form
            v-if="loginStep === 'email'"
            @submit.prevent="handleSendAuthCode"
            class="space-y-4"
        >
            <div>
                <label class="block text-sm font-medium text-slate-300"
                    >Email address</label
                >
                <input
                    v-model="loginForm.email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    class="mt-1 block w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                />
            </div>
            <div v-if="loginError" class="text-sm text-red-400">
                {{ loginError }}
            </div>
            <button
                type="submit"
                :disabled="loginLoading || !isValidEmail"
                class="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
            >
                {{ loginLoading ? "Sending..." : "Send Auth Code" }}
            </button>
            <button
                type="button"
                @click="goToCodeStep"
                :disabled="!isValidEmail"
                class="w-full text-sm text-slate-400 hover:text-slate-200 disabled:opacity-50"
            >
                I already have a code
            </button>
        </form>

        <!-- Step 2: Code Verification -->
        <div v-else-if="loginStep === 'code'" class="space-y-4">
            <div
                class="rounded-md border border-green-800 bg-green-900/30 p-3 text-sm text-green-300"
            >
                We sent a code to <strong>{{ loginForm.email }}</strong>
            </div>

            <form @submit.prevent="handleVerifyCode">
                <label class="mb-2 block text-sm font-medium text-slate-300"
                    >Enter 6-digit code</label
                >
                <div class="mb-4 flex justify-center gap-2">
                    <input
                        v-for="(_, index) in verificationCode"
                        :key="index"
                        :ref="(el) => setCodeInputRef(el, index)"
                        v-model="verificationCode[index]"
                        type="text"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        maxlength="1"
                        :disabled="loginLoading"
                        class="h-12 w-10 rounded-md border border-slate-700 bg-slate-900 text-center text-xl font-semibold text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none disabled:bg-slate-800"
                        @input="(e) => handleCodeInput(index, e)"
                        @keydown="(e) => handleCodeKeydown(index, e)"
                        @paste="handleCodePaste"
                    />
                </div>
                <div v-if="loginError" class="mb-4 text-sm text-red-400">
                    {{ loginError }}
                </div>
                <button
                    type="submit"
                    :disabled="loginLoading || !isCodeComplete"
                    class="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
                >
                    {{ loginLoading ? "Verifying..." : "Verify Code" }}
                </button>
            </form>

            <button
                type="button"
                @click="resetToEmail"
                class="w-full text-sm text-slate-400 hover:text-slate-200"
            >
                &larr; Use different email
            </button>
        </div>
    </div>

    <!-- Admin Dashboard -->
    <div v-else class="p-6">
        <div class="mb-6 flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold text-slate-100">Blog Admin</h1>
                <p class="text-sm text-slate-400">
                    Logged in as {{ currentUser?.name || currentUser?.email }}
                </p>
            </div>
            <div class="flex gap-4">
                <button
                    @click="openCreateModal"
                    class="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
                >
                    New Post
                </button>
                <button
                    @click="handleLogout"
                    class="rounded-md bg-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-600"
                >
                    Logout
                </button>
            </div>
        </div>

        <!-- Error message -->
        <div
            v-if="error"
            class="mb-4 rounded-md border border-red-800 bg-red-900/30 p-4 text-sm text-red-300"
        >
            {{ error }}
        </div>

        <!-- Loading state -->
        <div v-if="loading && !posts.length" class="py-12 text-center">
            <div
                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"
            ></div>
            <p class="mt-2 text-slate-400">Loading posts...</p>
        </div>

        <!-- Posts table -->
        <div
            v-else
            class="overflow-hidden rounded-lg border border-slate-800 bg-slate-900 shadow"
        >
            <table class="min-w-full divide-y divide-slate-800">
                <thead class="bg-slate-800/50">
                    <tr>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase"
                        >
                            Title
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase"
                        >
                            Status
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase"
                        >
                            Category
                        </th>
                        <th
                            class="px-6 py-3 text-left text-xs font-medium tracking-wider text-slate-400 uppercase"
                        >
                            Published
                        </th>
                        <th
                            class="px-6 py-3 text-right text-xs font-medium tracking-wider text-slate-400 uppercase"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-800 bg-slate-900">
                    <tr
                        v-for="post in posts"
                        :key="post.ulid"
                        class="hover:bg-slate-800/50"
                    >
                        <td class="whitespace-nowrap px-6 py-4">
                            <div class="font-medium text-slate-100">
                                {{ post.title }}
                            </div>
                            <div class="text-sm text-slate-500">
                                {{ post.slug }}
                            </div>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                            <span
                                :class="[
                                    statusColors[post.status],
                                    'inline-flex rounded-full px-2 text-xs leading-5 font-semibold',
                                ]"
                            >
                                {{ post.status }}
                            </span>
                            <span
                                v-if="post.isFeatured"
                                class="ml-1 inline-flex rounded-full bg-purple-900/50 px-2 text-xs leading-5 font-semibold text-purple-300"
                            >
                                Featured
                            </span>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-slate-400">
                            {{ post.category?.name || "-" }}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-slate-400">
                            {{
                                post.publishedAt
                                    ? new Date(
                                          post.publishedAt,
                                      ).toLocaleDateString()
                                    : "-"
                            }}
                        </td>
                        <td
                            class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
                        >
                            <button
                                @click="openEditModal(post)"
                                class="text-indigo-400 hover:text-indigo-300"
                            >
                                Edit
                            </button>
                            <button
                                v-if="post.status === 'draft'"
                                @click="publishPost(post)"
                                class="ml-4 text-green-400 hover:text-green-300"
                            >
                                Publish
                            </button>
                            <button
                                @click="deletePost(post)"
                                class="ml-4 text-red-400 hover:text-red-300"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr v-if="!posts.length">
                        <td colspan="5" class="px-6 py-12 text-center">
                            <p class="text-slate-400">No blog posts yet.</p>
                            <button
                                @click="openCreateModal"
                                class="mt-2 text-indigo-400 hover:text-indigo-300"
                            >
                                Create your first post
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Edit/Create Modal -->
        <div
            v-if="showModal"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
            <div
                class="w-full max-w-2xl rounded-lg border border-slate-700 bg-slate-900 p-6 shadow-xl"
            >
                <h2 class="mb-4 text-xl font-bold text-slate-100">
                    {{ editingPost ? "Edit Post" : "Create Post" }}
                </h2>
                <form @submit.prevent="savePost" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-slate-300"
                            >Title</label
                        >
                        <input
                            v-model="formData.title"
                            type="text"
                            required
                            class="mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-300"
                            >Excerpt</label
                        >
                        <textarea
                            v-model="formData.excerpt"
                            rows="2"
                            class="mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        ></textarea>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-slate-300"
                            >Content (JSON)</label
                        >
                        <textarea
                            :value="JSON.stringify(formData.content, null, 2)"
                            @input="
                                (e) => {
                                    try {
                                        formData.content = JSON.parse(
                                            e.target.value,
                                        );
                                    } catch {}
                                }
                            "
                            rows="6"
                            class="mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 font-mono text-sm text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                        ></textarea>
                        <p class="mt-1 text-xs text-slate-500">
                            TipTap/ProseMirror JSON format
                        </p>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label
                                class="block text-sm font-medium text-slate-300"
                                >Category</label
                            >
                            <select
                                v-model="formData.categoryId"
                                class="mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                            >
                                <option :value="null">No category</option>
                                <option
                                    v-for="cat in categories"
                                    :key="cat.id"
                                    :value="cat.id"
                                >
                                    {{ cat.name }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label
                                class="block text-sm font-medium text-slate-300"
                                >Status</label
                            >
                            <select
                                v-model="formData.status"
                                class="mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-slate-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                                <option value="archived">Archived</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <input
                            v-model="formData.isFeatured"
                            type="checkbox"
                            id="isFeatured"
                            class="h-4 w-4 rounded border-slate-600 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                            for="isFeatured"
                            class="ml-2 text-sm text-slate-300"
                            >Featured post</label
                        >
                    </div>
                    <div class="flex justify-end gap-4 pt-4">
                        <button
                            type="button"
                            @click="closeModal"
                            class="rounded-md bg-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            :disabled="loading"
                            class="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 disabled:opacity-50"
                        >
                            {{ loading ? "Saving..." : "Save" }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
