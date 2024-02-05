import { nextTick, ref, watch } from 'vue'
import { Storage, Theme } from '../enums'
import { getStorage, setStorage } from './useStorage'

export const isDark = ref(getStorage(Storage.THEME) === Theme.DARK)

export function toggleDark(e: MouseEvent) {
  // @ts-expect-error experimental API
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const setDarkValue = () => {
    isDark.value = !isDark.value
    setStorage(Storage.THEME, isDark.value ? Theme.DARK : Theme.LIGHT)
  }
  if (!isAppearanceTransition) {
    setDarkValue()
    return
  }
  const x = e.clientX
  const y = e.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    setDarkValue()
    await nextTick()
  })
  transition.ready
    .then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ]
      document.documentElement.animate(
        {
          clipPath: isDark.value
            ? [...clipPath].reverse()
            : clipPath
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)'
        }
      )
    })
}

watch(isDark, (v) => {
  document.documentElement.setAttribute('class', v ? Theme.DARK : '')
}, {
  immediate: true
})
