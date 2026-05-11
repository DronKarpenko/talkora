import type { ApiOptions } from '@/shared/plugins/api'

export type ApiOptionGetter = () => ApiOptions

let apiOptionsGetter: ApiOptionGetter | null = null

export function setApiOptionsGetter(getter: ApiOptionGetter) {
  apiOptionsGetter = getter
}

export function getApiOptionsGetter(): ApiOptionGetter | null {
  return apiOptionsGetter
}
