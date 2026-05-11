import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ApiOptions } from '@/shared/plugins/api'

export type ApiOptionGetter = () => ApiOptions

export const usePluginOptionsStorage = defineStore('plugin-options', () => {
  const getApiOptions = ref<ApiOptionGetter | null>(null)

  function setApiOptionsGetter(getter: ApiOptionGetter) {
    getApiOptions.value = getter
  }

  return {
    getApiOptions,
    setApiOptionsGetter,
  }
})
