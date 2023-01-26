import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
				'/api': {
						target: 'https://my-json-server.typicode.com/capcito/frontend-ws/',
						changeOrigin: true,
						rewrite: (path) => path.replace(/^\/api/, '')
				},
		},
}

})
