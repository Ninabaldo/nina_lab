import type { Plugin } from 'vite'
import { buildNookPreviewHtml, resolveNookLang } from '../api/_lib/nookPreviewHtml.js'

export function nookPreviewDevApi(): Plugin {
  return {
    name: 'nook-preview-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const requestUrl = req.url?.split('?')[0]
        if (requestUrl !== '/api/nook-preview') {
          next()
          return
        }

        try {
          const url = new URL(req.url ?? '', 'http://localhost')
          const html = await buildNookPreviewHtml(
            resolveNookLang(url.searchParams.get('lang') ?? undefined),
          )
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.setHeader('Cache-Control', 'no-store')
          res.end(html)
        } catch {
          res.statusCode = 502
          res.end('<!doctype html><title>nook preview unavailable</title>')
        }
      })
    },
  }
}
