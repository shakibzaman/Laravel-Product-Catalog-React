import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx','resources/css/app.css'], // Ensure this points to the correct entry file
            refresh: true,
        }),
        react(), // Handles JSX
    ],
    resolve: {
        alias: {
            '@': '/resources/js', // Optional: Set up alias for cleaner imports
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    css: {
        postcss: {
          plugins: [tailwindcss()]
        }
      }
});