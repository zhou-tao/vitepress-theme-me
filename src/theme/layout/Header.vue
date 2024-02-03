<script setup lang="ts">
  import { onBeforeMount, watch, ref } from 'vue'
  import { withBase, useData } from 'vitepress'
  import Icon from '../components/Icon.vue'

  const { site } = useData()

  const { logo, nav = [] } = site.value?.themeConfig

  const themeIcon = ref<'sun' | 'moon'>('sun')
  let toggleDarkFunc

  const defaultLogo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiMwMEQyNkEiIGQ9Ik0yOCA4LjQ0MWMuMDEuODYtLjE4IDEuNjctLjUyIDIuNGMtLjE1LjMzLS4xLjcxLjEzLjk5YzEuNDkgMS44MiAyLjM5IDQuMTQgMi4zOSA2LjY3YzAgLjcwMi0uMDY5IDEuMzg4LS4yIDIuMDVjLjAxLS4wNTMtLjQxNi4wNTUtLjQwNiAwbC0xLjgyNCAxLjI1NmwtMTEuNzQ4IDMuOTkyTDQuNCAyMS44MDdsLTEuOTgyLTEuMjMzYy4wMDcuMDQtLjIzMy0uMTAyLS4yMjYtLjA2MkExMC41NTcgMTAuNTU3IDAgMCAxIDIgMTguNTAyYzAtMi41My45LTQuODUgMi4zOS02LjY3Yy4yMy0uMjguMjgtLjY3LjEzLTFjLS4zNC0uNzItLjUzLTEuNTQtLjUyLTIuNGMuMDQtMi45NSAyLjQzLTUuMzYgNS4zOC01LjQzYTUuNDkgNS40OSAwIDAgMSA1LjU2IDQuNzNjLjAyLjE1LjE1LjI3LjMxLjI3aDEuNDljLjE2IDAgLjI5LS4xMi4zMS0uMjdhNS40OTkgNS40OTkgMCAwIDEgNS41Ny00LjczYzIuOTUuMDcgNS4zNCAyLjQ4IDUuMzggNS40NCIvPjxwYXRoIGZpbGw9IiNGRkY0NzgiIGQ9Ik0xMyA4LjVhMy41IDMuNSAwIDEgMS03IDBhMy41IDMuNSAwIDAgMSA3IDBtMTMgMGEzLjUgMy41IDAgMSAxLTcgMGEzLjUgMy41IDAgMCAxIDcgMCIvPjxwYXRoIGZpbGw9IiMxQzFDMUMiIGQ9Ik0xMiA4LjVhMi41IDIuNSAwIDEgMS01IDBhMi41IDIuNSAwIDAgMSA1IDBtMTMgLjAwMWEyLjUgMi41IDAgMSAxLTUgMGEyLjUgMi41IDAgMCAxIDUgMG0tNy41IDUuNWEuNS41IDAgMSAwIDAtMWEuNS41IDAgMCAwIDAgMW0tMi41LS41YS41LjUgMCAxIDEtMSAwYS41LjUgMCAwIDEgMSAwIi8+PHBhdGggZmlsbD0iI0ZDRDUzRiIgZD0iTTI3LjU3IDIwLjM5MWMtMS4xOCAwLTIuMjctLjQtMy4xNS0xLjA2YTEzLjQzMiAxMy40MzIgMCAwIDAtOC40My0yLjk1Yy0zLjIyIDAtNi4xNyAxLjEyLTguNDkgM3YtLjAxYTUuMTkgNS4xOSAwIDAgMS0zLjEgMS4wMkgyLjE3Yy44OSA0LjkgNS4xOCA4LjYxIDEwLjMzIDguNjFoN2M1LjE1IDAgOS40NC0zLjcxIDEwLjMzLTguNjF6Ii8+PC9nPjwvc3ZnPg=='

  onBeforeMount(async () => {
    const { isDark, toggleDark } = await import('../composables/useDark')
    toggleDarkFunc = toggleDark
    watch(isDark, (v) => {
      themeIcon.value = v ? 'sun' : 'moon'
    })
  })
</script>

<template>
  <header class="header">
    <a href="/">
      <img class="logo" :src="logo ? withBase(logo) : defaultLogo" alt="logo">
    </a>
    <nav class="nav">
      <a v-for="n in nav" :key="n.link" :href="n.link" :title="n.text">
        <Icon v-if="n.icon" :icon="n.icon" />
        <template v-else>
          {{ n.text }}
        </template>
      </a>
      <a cursor="pointer" @click="toggleDarkFunc">
        <Icon :icon="{ name: themeIcon }" />
      </a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  @apply flex justify-between p8;
}
.header a {
  @apply op-60 hover:op-100 transition-200 ease;
}

.logo {
  @apply w10 h10 rounded-full;
}

.nav {
  @apply grid grid-flow-col gap-5;
}
</style>
