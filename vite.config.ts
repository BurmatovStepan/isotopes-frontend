import react from '@vitejs/plugin-react'
import * as path from 'path';
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), reactRouter()],
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, './src'),
        }
    }
})
