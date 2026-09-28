import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { incidentBriefDevApi } from './vite/incidentBriefDevApi.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), incidentBriefDevApi(env.OPENAI_API_KEY)],
    server: {
      proxy: {
        '/api/company': {
          target: 'https://nina-lab.vercel.app',
          changeOrigin: true,
        },
      },
    },
  }
})
