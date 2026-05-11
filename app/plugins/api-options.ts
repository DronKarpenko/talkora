import { useApiOptions } from '@/shared/plugins/api/gen/ApiOptions'
import { setApiOptionsGetter } from '@/shared/store/plugin-options'

export default defineNuxtPlugin(() => {
  setApiOptionsGetter(useApiOptions)
})
