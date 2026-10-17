import { resolveLabPreviewLang } from './previewLang.js'

const SCOPO_ORIGIN = 'https://scopo-omega.vercel.app'

export function resolveScopoLang(input: string | undefined): string {
  return resolveLabPreviewLang(input, ['it'])
}

function buildScopoLocaleScript(lang: string, moduleSrc: string): string {
  const langLiteral = JSON.stringify(lang)
  const moduleLiteral = JSON.stringify(moduleSrc)

  return `<script>
(function () {
  var lang = ${langLiteral};
  var moduleSrc = ${moduleLiteral};

  function loadApp() {
    var script = document.createElement('script');
    script.type = 'module';
    script.crossOrigin = 'anonymous';
    script.src = moduleSrc;
    document.body.appendChild(script);
  }

  function writeLocale(payload) {
    if (!payload || typeof payload !== 'object') {
      return { state: { locale: lang }, version: 4 };
    }
    if (!payload.state || typeof payload.state !== 'object') payload.state = {};
    payload.state.locale = lang;
    return payload;
  }

  function patchPersistedLocale(done) {
    try {
      var request = indexedDB.open('scopo', 1);
      request.onupgradeneeded = function (event) {
        var db = event.target.result;
        if (!db.objectStoreNames.contains('scopo')) {
          db.createObjectStore('scopo');
        }
      };
      request.onerror = function () {
        done();
      };
      request.onsuccess = function () {
        var db = request.result;
        if (!db.objectStoreNames.contains('scopo')) {
          done();
          return;
        }
        var tx = db.transaction('scopo', 'readwrite');
        var store = tx.objectStore('scopo');
        var getReq = store.get('scopo');
        getReq.onerror = function () {
          done();
        };
        getReq.onsuccess = function () {
          try {
            var raw = getReq.result;
            var payload =
              typeof raw === 'string' && raw ? JSON.parse(raw) : writeLocale(null);
            payload = writeLocale(payload);
            store.put(JSON.stringify(payload), 'scopo');
          } catch (e) {
            /* keep defaults */
          }
          done();
        };
      };
    } catch (e) {
      done();
    }
  }

  patchPersistedLocale(loadApp);
})();
</script>`
}

export async function buildScopoPreviewHtml(lang: string): Promise<string> {
  const response = await fetch(`${SCOPO_ORIGIN}/`)
  if (!response.ok) {
    throw new Error(`Unable to load scopo preview (${response.status}).`)
  }

  const html = await response.text()
  const moduleMatch = html.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/)
  const moduleSrc = moduleMatch
    ? new URL(moduleMatch[1], SCOPO_ORIGIN).href
    : `${SCOPO_ORIGIN}/assets/index.js`

  const withoutModule = html.replace(
    /<script type="module" crossorigin src="[^"]+"><\/script>\s*/,
    '',
  )

  const inject = `<base href="${SCOPO_ORIGIN}/">${buildScopoLocaleScript(lang, moduleSrc)}`

  return withoutModule
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace('<head>', `<head>${inject}`)
}
