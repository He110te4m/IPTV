/**
 * Type checking utility functions
 */

/**
 * Check if value is a string
 * @param value - Value to check
 * @returns boolean
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * Check if value is a number
 * @param value - Value to check
 * @returns boolean
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' || (typeof value === 'string' && /^\d+$/.test(value))
}

/**
 * Check if value is a boolean
 * @param value - Value to check
 * @returns boolean
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

/**
 * Check if value is an array
 * @param value - Value to check
 * @returns boolean
 */
export function isArray(value: unknown): value is any[] {
  return Array.isArray(value)
}

/**
 * Check if value is an object
 * @param value - Value to check
 * @returns boolean
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object'
}

/**
 * Check if value is a function
 * @param value - Value to check
 * @returns boolean
 */
export function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === 'function'
}

/**
 * Check if value is a Date object
 * @param value - Value to check
 * @returns boolean
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

/**
 * Check if value is null
 * @param value - Value to check
 * @returns boolean
 */
export function isNull(value: unknown): value is null {
  return value === null
}

/**
 * Check if value is undefined
 * @param value - Value to check
 * @returns boolean
 */
export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined'
}

/**
 * Check if value is a UUID
 * @param value - Value to check
 * @returns boolean
 */
export function isUuid(value: unknown): value is string {
  if (!isString(value)) {
    return false
  }
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  return uuidRegex.test(value)
}

/**
 * Check if value is a GUID
 * @param value - Value to check
 * @returns boolean
 */
export function isGuid(value: unknown): value is string {
  if (!isString(value)) {
    return false
  }
  const guidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  return guidRegex.test(value)
}

/**
 * Check if value is an email
 * @param value - Value to check
 * @returns boolean
 */
export function isEmail(value: unknown): value is string {
  if (!isString(value)) {
    return false
  }
  const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/
  return emailRegex.test(value)
}

/**
 * Check if value is a URL
 * @param value - Value to check
 * @returns boolean
 */
export function isUrl(value: unknown): value is string {
  if (!isString(value)) {
    return false
  }
  const urlRegex = /^(?:https?:\/\/)?[\w\-.][-\w]*\.[\w\-.][\w/#?=%.~&-]*$/
  return urlRegex.test(value)
}
