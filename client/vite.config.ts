import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // ... other alias configurations ...
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add .ts and .tsx extensions
    },
});
