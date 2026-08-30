import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({ mode }) => {
  const isLibraryBuild = mode === 'library';

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    ...(isLibraryBuild
      ? {
          publicDir: false,
          build: {
            emptyOutDir: true,
            outDir: 'dist',
            lib: {
              entry: path.resolve(__dirname, 'src/library.ts'),
              formats: ['es', 'cjs'],
              fileName: (format: string) => `index.${format === 'es' ? 'js' : 'cjs'}`,
              cssFileName: 'style',
            },
            rollupOptions: {
              external: ['react', 'react-dom', 'react/jsx-runtime'],
            },
          },
        }
      : { build: { outDir: 'site-dist' } }),
  };
});
