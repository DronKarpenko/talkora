import axios from 'axios'

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
  })

  return {
    provide: {
      axios: instance
    }
  }
})
