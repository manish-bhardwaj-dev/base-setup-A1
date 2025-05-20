import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'

export default defineConfig(() => {
    return {
        plugins: [
            ViteImageOptimizer({
                test: /\.(jpg|png)$/i,
                includePublic: true,
                logStats: true,
                png: {
                    quality: 100,
                },
                jpg: {
                    quality: 100,
                },
            }),
        ],
        build: {
            rollupOptions: {
                output: {
                    chunkFileNames: 'js/[name]-[hash].js',
                    entryFileNames: 'js/[name]-[hash].js',
                    assetFileNames: ({ name }) => {
                        if (/\.(jpg|png)$/.test(name ?? '')) {
                            return 'images/[name]-[hash][extname]'
                        }
                        if (/\.css$/.test(name ?? '')) {
                            return 'css/[name]-[hash][extname]'
                        }
                        return '[name]-[hash][extname]'
                    },
                },
            },
        },
    }
})
