import type { CompanyApiResponse, FetchError, FetchErrorCode } from './types'

function mapStatusToError(status: number, body: CompanyApiResponse): FetchError {
  if (status === 400) {
    return { code: 'invalid_ticker', message: body.error }
  }

  if (status === 429) {
    return { code: 'rate_limit', message: body.error }
  }

  if (status === 502) {
    return { code: 'no_data', message: body.error }
  }

  return { code: 'unknown', message: body.error ?? `Request failed with status ${status}.` }
}

function mapNetworkError(error: unknown): FetchError {
  if (error instanceof TypeError) {
    return { code: 'network' }
  }

  return {
    code: 'unknown',
    message: error instanceof Error ? error.message : undefined,
  }
}

export async function fetchCompanyData(ticker: string): Promise<CompanyApiResponse> {
  const normalized = ticker.trim().toUpperCase()

  try {
    const response = await fetch(`/api/company?ticker=${encodeURIComponent(normalized)}`)
    const contentType = response.headers.get('content-type') ?? ''

    if (!contentType.includes('application/json')) {
      throw {
        code: 'network',
        message: 'API returned a non-JSON response. Use vercel dev or restart npm run dev after vite.config changes.',
      } satisfies FetchError
    }

    const body = (await response.json()) as CompanyApiResponse

    if (!response.ok) {
      const fetchError = mapStatusToError(response.status, body)
      throw fetchError
    }

    return body
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error) {
      throw error as FetchError
    }

    throw mapNetworkError(error)
  }
}

export function isFetchError(error: unknown): error is FetchError {
  return Boolean(error && typeof error === 'object' && 'code' in error)
}

export function getFetchErrorCode(error: unknown): FetchErrorCode {
  if (isFetchError(error)) return error.code
  return 'unknown'
}
