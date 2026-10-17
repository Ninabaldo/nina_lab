import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { incidentBriefDevApi } from './vite/incidentBriefDevApi.js'
import { nookPreviewDevApi } from './vite/nookPreviewDevApi.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), incidentBriefDevApi(env.OPENAI_API_KEY), nookPreviewDevApi()],
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
