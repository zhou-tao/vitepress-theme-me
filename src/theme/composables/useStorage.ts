import type { Storage } from '../enums'

export const setStorage = (key: Storage, value: any) => {
  localStorage[key] = value
}

export const getStorage = (key: Storage) => {
  return localStorage[key]
}
