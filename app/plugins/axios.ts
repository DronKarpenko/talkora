import axios from 'axios'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const instance = axios.create({
    baseURL: config.public.baseUrl,
    timeout: 10000,
  })

  return {
    provide: {
      axios: instance,
    },
  }
})
