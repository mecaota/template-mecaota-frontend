import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets'),
      '@atoms': path.join(__dirname, 'src/components/atoms'),
      '@molecules': path.join(__dirname, 'src/components/molecules'),
      '@lib': path.join(__dirname, 'src/lib'),
      '@organisms': path.join(__dirname, 'src/components/organisms'),
    },
  },
});
