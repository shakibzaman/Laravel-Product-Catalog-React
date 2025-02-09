import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
    const config = {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/index.jsx'],
                refresh: true,
            }),
            react(),
        ],
        build: {
            manifest: true,
            outDir: 'public/build',
            rollupOptions: {
                input: {
                    app: resolve(__dirname, 'resources/js/index.jsx'),
                    css: resolve(__dirname, 'resources/css/app.css')
                }
            }
        },
        resolve: {
            alias: {
                '@': '/resources/js',
            },
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        css: {
            postcss: {
                plugins: [tailwindcss()]
            }
        }
    };

    // Development specific config
    if (command !== 'build') {
        config.server = {
            historyApiFallback: true,
            host: '0.0.0.0',
            port: 5173,
            strictPort: true,
            hmr: {
                host: 'localhost',
            },
            watch: {
                usePolling: true,
                interval: 300,
            },
        };
    }

    return config;
});
