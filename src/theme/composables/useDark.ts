import { ref, watch } from 'vue'
import { Storage, Theme } from '../enums'
import { getStorage, setStorage } from './useStorage'

export const isDark = ref(getStorage(Storage.THEME) === Theme.DARK)

export function toggleDark() {
  isDark.value = !isDark.value
  setStorage(Storage.THEME, isDark.value ? Theme.DARK : Theme.LIGHT)
}

watch(isDark, (v) => {
  document.documentElement.setAttribute('class', v ? Theme.DARK : '')
}, {
  immediate: true
})
