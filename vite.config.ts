import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, 'src/app/styles'),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@styles/variables.scss";`
            }
        }
    },
    plugins: [react()],
})
