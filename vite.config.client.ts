import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/client/index.ts'), // or 'index.js' if using JavaScript
			name: 'client',
			formats: ['es'],
			fileName: () => `client.es.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
		},
		outDir: 'dist',
		emptyOutDir: false, // Prevent clearing the dist folder
		sourcemap: true,
	},
	plugins: [react()],
});
