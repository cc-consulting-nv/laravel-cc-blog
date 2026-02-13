import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        lib: {
            entry: {
                'blog-admin': resolve(__dirname, 'resources/js/blog-admin.js'),
                'markdown-paste': resolve(__dirname, 'resources/js/extensions/markdown-paste.js'),
            },
            formats: ['es'],
        },
        rollupOptions: {
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: 'chunks/[name]-[hash].js',
            },
        },
    },
});
