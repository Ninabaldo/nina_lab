import type { Plugin } from 'vite'
import { buildScopoPreviewHtml, resolveScopoLang } from '../api/_lib/scopoPreviewHtml.js'

export function scopoPreviewDevApi(): Plugin {
  return {
    name: 'scopo-preview-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const requestUrl = req.url?.split('?')[0]
        if (requestUrl !== '/api/scopo-preview') {
          next()
          return
        }

        try {
          const url = new URL(req.url ?? '', 'http://localhost')
          const html = await buildScopoPreviewHtml(
            resolveScopoLang(url.searchParams.get('lang') ?? undefined),
          )
          res.statusCode = 200
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.setHeader('Cache-Control', 'no-store')
          res.end(html)
        } catch {
          res.statusCode = 502
          res.end('<!doctype html><title>scopo preview unavailable</title>')
        }
      })
    },
  }
}
