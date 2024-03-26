import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tscongPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  plugins: [
    svgr({
      svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg'
    }),
    react({
      include: '**/*.tsx'
    }),
    tscongPaths()
  ],
  resolve: {
    alias: {
      src: '/src'
    }
  },
  build: {
    outDir: './build'
  },
  server: {
    port: 3000
  }
});
