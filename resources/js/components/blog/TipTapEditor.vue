<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import MarkdownPaste from "../../extensions/markdown-paste.js";
import { watch, ref } from "vue";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Extension } from "@tiptap/core";

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => ({
            type: "doc",
            content: [{ type: "paragraph", content: [] }],
        }),
    },
});

const emit = defineEmits(["update:modelValue"]);

const uploading = ref(false);

async function handleImageUpload(file, editor) {
    const apiClient = window.ccApiClient;
    if (!apiClient) {
        console.error("[TipTap] No API client available");
        return;
    }

    uploading.value = true;
    try {
        const url = await apiClient.uploadImage(file);
        editor.chain().focus().setImage({ src: url }).run();
    } catch (err) {
        console.error("[TipTap] Image upload failed:", err);
        alert("Image upload failed: " + err.message);
    } finally {
        uploading.value = false;
    }
}

const ImageUploadHandler = Extension.create({
    name: "imageUploadHandler",

    addProseMirrorPlugins() {
        const editorInstance = this.editor;

        return [
            new Plugin({
                key: new PluginKey("imageUploadHandler"),
                props: {
                    handlePaste(view, event) {
                        const items = event.clipboardData?.items;
                        if (!items) return false;

                        for (const item of items) {
                            if (item.type.startsWith("image/")) {
                                event.preventDefault();
                                const file = item.getAsFile();
                                if (file) {
                                    handleImageUpload(file, editorInstance);
                                }
                                return true;
                            }
                        }
                        return false;
                    },
                    handleDrop(view, event) {
                        const files = event.dataTransfer?.files;
                        if (!files || files.length === 0) return false;

                        for (const file of files) {
                            if (file.type.startsWith("image/")) {
                                event.preventDefault();
                                handleImageUpload(file, editorInstance);
                                return true;
                            }
                        }
                        return false;
                    },
                },
            }),
        ];
    },
});

const editor = useEditor({
    extensions: [
        StarterKit,
        Image.configure({ inline: false, allowBase64: false }),
        Link.configure({ openOnClick: false }),
        Placeholder.configure({ placeholder: "Start writing..." }),
        MarkdownPaste,
        ImageUploadHandler,
    ],
    content: props.modelValue,
    onUpdate({ editor: ed }) {
        emit("update:modelValue", ed.getJSON());
    },
});

watch(
    () => props.modelValue,
    (val) => {
        if (!editor.value) return;
        const current = JSON.stringify(editor.value.getJSON());
        const incoming = JSON.stringify(val);
        if (current !== incoming) {
            editor.value.commands.setContent(val, false);
        }
    },
);

function setLink() {
    const url = prompt("Enter URL:");
    if (!url) return;
    editor.value.chain().focus().setLink({ href: url }).run();
}

function addImageByUrl() {
    const url = prompt("Enter image URL:");
    if (!url) return;
    editor.value.chain().focus().setImage({ src: url }).run();
}

function triggerFileUpload() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
        const file = e.target.files?.[0];
        if (file) handleImageUpload(file, editor.value);
    };
    input.click();
}
</script>

<template>
    <div class="tiptap-editor rounded-md border border-slate-700 bg-slate-800">
        <!-- Toolbar -->
        <div
            v-if="editor"
            class="flex flex-wrap gap-1 border-b border-slate-700 p-2"
        >
            <button
                type="button"
                @click="editor.chain().focus().toggleBold().run()"
                :class="[
                    'rounded px-2 py-1 text-xs font-medium',
                    editor.isActive('bold')
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600',
                ]"
                title="Bold"
            >
                B
            </button>
            <button
                type="button"
                @click="editor.chain().focus().toggleItalic().run()"
                :class="[
                    'rounded px-2 py-1 text-xs font-medium italic',
                    editor.isActive('italic')
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600',
                ]"
                title="Italic"
            >
                I
            </button>
            <button
                type="button"
                @click="editor.chain().focus().toggleStrike().run()"
                :class="[
                    'rounded px-2 py-1 text-xs font-medium line-through',
                    editor.isActive('strike')
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600',
                ]"
                title="Strikethrough"
            >
                S
            </button>

            <div class="mx-1 w-px bg-slate-600"></div>

            <button
                type="button"
                @click="
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                "
                :class="[
                    'rounded px-2 py-1 text-xs font-medium',
                    editor.isActive('heading', { level: 2 })
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600',
                ]"
                title="Heading 2"
            >
                H2
            </button>
            <button
                type="button"
                @click="
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                "
                :class="[
                    'rounded px-2 py-1 text-xs font-medium',
                    editor.isActive('heading', { level: 3 })
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600',
                ]"
                title="Heading 3"
            >
                H3
            </button>

            <div class="mx-1 w-px bg-slate-600"></div>

            <button
                type="button"
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="[
                    'rounded px-2 py-1 text-xs font-medium',
                    editor.isActive('bulletList')
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600',
                ]"
                title="Bullet List"
            >
                &bull; List
            </button>
            <button
                type="button"
                @click="editor.chain().focus().toggleOrderedList().run()"
                :class="[
                    'rounded px-2 py-1 text-xs font-medium',
                    editor.isActive('orderedList')
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600',
                ]"
                title="Ordered List"
            >
                1. List
            </button>

            <div class="mx-1 w-px bg-slate-600"></div>

            <button
                type="button"
                @click="editor.chain().focus().toggleBlockquote().run()"
                :class="[
                    'rounded px-2 py-1 text-xs font-medium',
                    editor.isActive('blockquote')
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600',
                ]"
                title="Blockquote"
            >
                &ldquo; Quote
            </button>
            <button
                type="button"
                @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="[
                    'rounded px-2 py-1 text-xs font-medium',
                    editor.isActive('codeBlock')
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600',
                ]"
                title="Code Block"
            >
                &lt;/&gt;
            </button>

            <div class="mx-1 w-px bg-slate-600"></div>

            <button
                type="button"
                @click="setLink"
                :class="[
                    'rounded px-2 py-1 text-xs font-medium',
                    editor.isActive('link')
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600',
                ]"
                title="Insert Link"
            >
                Link
            </button>
            <button
                type="button"
                @click="triggerFileUpload"
                class="rounded bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300 hover:bg-slate-600"
                title="Upload Image"
            >
                Image
            </button>
            <button
                type="button"
                @click="addImageByUrl"
                class="rounded bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300 hover:bg-slate-600"
                title="Image from URL"
            >
                URL
            </button>
        </div>

        <!-- Upload indicator -->
        <div
            v-if="uploading"
            class="flex items-center gap-2 border-b border-slate-700 bg-slate-800/80 px-3 py-2 text-xs text-amber-400"
        >
            <div
                class="h-3 w-3 animate-spin rounded-full border-2 border-amber-400 border-t-transparent"
            ></div>
            Uploading image...
        </div>

        <!-- Editor Content -->
        <EditorContent
            :editor="editor"
            class="tiptap-content prose prose-invert max-w-none px-4 py-3"
        />
    </div>
</template>

<style>
.tiptap-content .ProseMirror {
    min-height: 200px;
    outline: none;
}

.tiptap-content .ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #64748b;
    pointer-events: none;
    height: 0;
}

.tiptap-content .ProseMirror img {
    max-width: 100%;
    height: auto;
    border-radius: 0.375rem;
    margin: 1rem 0;
}

.tiptap-content .ProseMirror h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: #f1f5f9;
}

.tiptap-content .ProseMirror h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    color: #f1f5f9;
}

.tiptap-content .ProseMirror p {
    margin-bottom: 0.75rem;
    color: #cbd5e1;
    line-height: 1.625;
}

.tiptap-content .ProseMirror ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
}

.tiptap-content .ProseMirror ol {
    list-style-type: decimal;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
}

.tiptap-content .ProseMirror li {
    margin-bottom: 0.25rem;
    color: #cbd5e1;
}

.tiptap-content .ProseMirror blockquote {
    border-left: 3px solid #6366f1;
    padding-left: 1rem;
    margin: 1rem 0;
    color: #94a3b8;
    font-style: italic;
}

.tiptap-content .ProseMirror pre {
    background: #0f172a;
    border-radius: 0.375rem;
    padding: 0.75rem 1rem;
    margin: 0.75rem 0;
    overflow-x: auto;
}

.tiptap-content .ProseMirror code {
    font-family: ui-monospace, monospace;
    font-size: 0.875rem;
    color: #e2e8f0;
}

.tiptap-content .ProseMirror a {
    color: #818cf8;
    text-decoration: underline;
}

.tiptap-content .ProseMirror hr {
    border-color: #334155;
    margin: 1.5rem 0;
}
</style>
