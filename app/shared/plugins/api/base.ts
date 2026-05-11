import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import axios, { AxiosError } from 'axios'
import { Configuration } from './gen'
import type { BaseAPI } from './gen/base'
import type { InnerAxiosError } from './errors'

import { usePluginOptionsStorage } from '@/shared'

export type ApiConstructor<T> = new (...args: ConstructorParameters<typeof BaseAPI>) => T

export interface ApiOptions {
  apiBaseUrl: string
  getAccessToken: () => string
  refreshTokens: () => Promise<void>
  handleReload: () => void
  getLanguage: () => string
}

const OPTIONS_NOT_PROVIDED_ERROR = new Error('options not provide')

export function useApi<T extends BaseAPI>(apiConstructor: ApiConstructor<T>) {
  const optionsStorage = usePluginOptionsStorage()
  if (!optionsStorage.getApiOptions)
    throw OPTIONS_NOT_PROVIDED_ERROR

  const options = optionsStorage.getApiOptions()

  const conf = new Configuration({
    accessToken: options.getAccessToken,
  })

  const axiosInstance = axios.create()

  configureAxios(axiosInstance)

  function configureAxios(axiosInstance: AxiosInstance) {
    const configurator = (config: InternalAxiosRequestConfig) => configureRequest(config)

    axiosInstance.interceptors.request.use(configurator)

    axiosInstance.interceptors.response.use(response => response, handleError)
  }

  function configureRequest(config: InternalAxiosRequestConfig) {
    if (config.headers) {
      const language = options.getLanguage()
      if (language)
        config.headers['Accept-Language'] = language

      const token = options.getAccessToken()
      if (token)
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
  }

  async function handleError(error: AxiosError<InnerAxiosError>) {
    const token = options.getAccessToken()
    const originalRequest = error.config

    if (!error.response || !originalRequest?.headers) {
      const errorData = error.response?.data
      throw Array.isArray(errorData) ? { details: errorData } : errorData?.error
    }

    if (
      error.request.responseType === 'blob'
      && error.response.data instanceof Blob
      && error.response.data.type
      && error.response.data.type.toLowerCase().includes('json')
    ) {
      const parsedError = JSON.parse(await error.response.data.text())
      throw Array.isArray(parsedError) ? { details: parsedError } : parsedError.error
    }

    const responseData = error.response.data

    if (!token || error.response.status !== 401 || originalRequest.headers.RepeatRequest)
      throw Array.isArray(responseData) ? { details: responseData } : responseData?.error

    const errorToCheck = Array.isArray(responseData) ? null : responseData?.error

    if (errorToCheck?.code === 'INVALID_CREDENTIALS')
      throw errorToCheck

    const isRefreshTokenRequest = originalRequest.url?.includes('/auth/refresh-token')
    if (isRefreshTokenRequest) {
      options.handleReload()
      return Promise.reject(new Error('Session expired'))
    }

    try {
      await options.refreshTokens()

      const newAccessToken = options.getAccessToken()
      if (newAccessToken)
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

      originalRequest.headers.RepeatRequest = true

      return await axiosInstance.request(originalRequest)
    }
    catch (e) {
      if (e instanceof AxiosError) {
        const status = e.response?.status

        if (status === 401) {
          options.handleReload()
          return Promise.reject(new Error('Session expired'))
        }

        const errorData = e.response?.data
        throw Array.isArray(errorData) ? { details: errorData } : errorData?.error
      }

      throw e
    }
  }

  return new apiConstructor(conf, options.apiBaseUrl, axiosInstance)
}
