<script setup lang="ts">
  import { useData, useRoute } from 'vitepress'
  import { computed } from 'vue'
  import NotFound from '../pages/not-found.vue'
  import List from '../pages/list.vue'
  import Card from '../pages/card.vue'
  import Pager from '../components/Pager.vue'

  const PageLayout = { List, Card }

  const { page, frontmatter } = useData()
  const route = useRoute()

  const Layout = computed(() => PageLayout[frontmatter.value.layout])
  const hidePager = computed(() => frontmatter.value.layout === 'home' || route.path === '/')
</script>

<template>
  <main class="main">
    <article class="article">
      <NotFound v-if="page.isNotFound" />
      <template v-else-if="Layout">
        <component :is="Layout" :key="route.path" />
      </template>
      <Content v-else class="slide-enter-content" />
      <Pager v-if="!hidePager" />
    </article>
    <slot />
  </main>
</template>

<style scoped>
.main {
  @apply px-12 py-10 of-x-hidden max-w-main m-auto;
}
</style>
