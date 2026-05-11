import type { ApiOptions } from '@/shared/plugins/api'

export function useApiOptions(): ApiOptions {
  const config = useRuntimeConfig()

  return {
    apiBaseUrl: config.public.baseUrl,
    getAccessToken: () => '',
    handleReload: () => window.location.href = '/login',
  }
}
