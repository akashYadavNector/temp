// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'; // Import dotenv

import path from 'path'; // Import path module

dotenv.config(); // Load environment variables from .env

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,  //Important line to expose env to the browser
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), //Configure the alias
    },
  },
});
