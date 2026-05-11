import type { Ref } from 'vue'
import type { ApiOptions } from '@/shared/plugins/api'
import { API_BASE_URL } from '@/shared/utils/constants'
import { getI18n, useAuthStore } from '@/shared'

export function useApiOptions(): ApiOptions {
  const authStore = useAuthStore()
  const locale: Ref<string> = (getI18n().global as any).locale

  return {
    apiBaseUrl: API_BASE_URL,
    getAccessToken: () => authStore.accessToken || '',
    refreshTokens: () => authStore.refreshTokens(),
    handleReload: () => window.location.href = '/login',
    getLanguage: () => locale.value,
  }
}
