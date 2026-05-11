import { useToast } from 'vue-toastification'
import type { Ref } from 'vue'

const toast = useToast()

export interface DetailedErrorMessage {
  field: string
  message: string
}

export interface DetailedErrorMessageItem {
  field: string
  message: string
  location?: string
  field_full?: string
  ids?: number[]
  id?: string
  name?: string
  user_type?: string
}

export interface ApiError {
  code?: string
  details: DetailedErrorMessage | DetailedErrorMessage[]
}

export interface InnerAxiosError {
  error: ApiError
  status: number
}

export interface FieldErrors {
  [field: string]: string
}

function snakeToCamelCase(field: string): string {
  if (!field) return ''

  return field.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
}

export function getErrorMessages(error: unknown): string[] {
  if (!checkApiErrorType(error)) {
    console.error('invalid error format', error)

    return []
  }

  const details = error.details

  if (Array.isArray(details)) return Array.from(new Set(details.filter(item => !item.field).map(item => item.message)))

  return details.field ? [] : [details.message]
}

export function getFieldsErrors(error: unknown): FieldErrors {
  const result: FieldErrors = {}

  if (!checkApiErrorType(error)) {
    console.error('invalid error format', error)
    return result
  }

  if (!Array.isArray(error.details)) {
    result[error.details.field] = error.details.message
    return result
  }

  for (const item of error.details) {
    result[item.field] = item.message
  }
  return result
}

export function getErrorMessagesWithField(error: unknown): string[] {
  if (!checkApiErrorType(error)) {
    console.error('invalid error format', error)

    return []
  }

  if (Array.isArray(error.details)) return Array.from(new Set(error.details.map(item => item.message)))

  return Array.from(new Set([error.details.message]))
}

export function setFieldsErrors(error: unknown, errors: Ref<Record<string, string | undefined>>) {
  if (!checkApiErrorType(error)) {
    console.error('invalid error format', error)

    return errors.value
  }

  const details = error.details

  if (Array.isArray(details)) {
    details.forEach(detail => {
      const fieldName = snakeToCamelCase(detail.field)
      if (fieldName in errors.value) errors.value[fieldName] = detail.message
    })

    return errors.value
  }

  const singleFieldName = snakeToCamelCase(details.field)

  if (singleFieldName in errors.value) {
    errors.value[singleFieldName] = Array.isArray(error.details) ? error.details[0]?.message : error.details?.message

    return errors.value
  }

  showApiError(error)

  return errors.value
}

export function showApiError(error: unknown) {
  const messages = getErrorMessages(error)
  if (messages.length > 0) toast.error(messages[0])
}

export function checkApiErrorType(obj: unknown): obj is ApiError {
  return typeof obj === 'object' && obj !== null && 'details' in obj
}
