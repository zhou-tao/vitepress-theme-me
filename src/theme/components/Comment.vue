<script setup lang='ts'>
  import { computed } from 'vue'
  import { useData, useRoute } from 'vitepress'

  // @ts-expect-error waline
  import { Waline } from '@waline/client/component'
  import '@waline/client/dist/waline.css'

  const data = useData()
  const serverURL = data.site.value.themeConfig.waline?.serverURL

  const path = computed(() => {
    return useRoute().path.replace(/(\/)?(index)?(\.html)?$/, '')
  })
  const shouldShowWaline = computed(() => {
    return serverURL && data.page.value.frontmatter.comment
  })

  const walineProps = Object.assign({
    serverURL
  }, data.site.value.themeConfig.waline)
</script>

<template>
  <Waline v-if="shouldShowWaline" v-bind="walineProps" :path="path" mt12 />
</template>

<style>
.wl-content .vemoji,
.wl-content .wl-emoji {
  width: 1.25em;
  margin: 0 0.2em -0.25em;
}

.wl-card .wl-delete,
.wl-card .wl-like,
.wl-card .wl-reply,
.wl-card .wl-edit {
  margin: 0 6px;
}
</style>
