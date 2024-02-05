<script setup lang="ts">
  import { useData } from 'vitepress'
  import { onMounted, ref } from 'vue'
  import Empty from '../components/Empty.vue'
  import Icon from '../components/Icon.vue'

  const { frontmatter } = useData()

  const { items = [], title = 'Card' } = frontmatter.value

  const isMobile = ref(false)

  onMounted(() => {
    isMobile.value = document.documentElement.clientWidth < 768
  })
</script>

<template>
  <h1 class="page-title text-center">
    {{ title }}
  </h1>
  <Empty v-if="!items.length" />
  <ul v-else class="card">
    <div
      v-for="item, idx in items"
      :key="item.link"
      class="slide-enter"
      :style="{
        '--enter-stage': isMobile ? idx : Math.ceil((idx + 1) / 2),
        '--enter-step': '240ms',
      }"
    >
      <a :href="item.link" class="item inline-block border-none! rounded">
        <li flex px4 pt3 pb-6>
          <Icon v-if="item.icon" :icon="item.icon" size="1.8rem" opacity-50 mr4 mt2.5 flex-shrink-0 />
          <div>
            <div text-1.3rem>{{ item.text }}</div>
            <div text-base opacity-50 font-normal line-clamp-2>{{ item.description }}</div>
          </div>
        </li>
      </a>
    </div>
  </ul>
</template>

<style scoped>
.card {
  @apply grid grid-cols-1 md:grid-cols-2 gap-y6;
}

.item:hover {
  background-color: #88888811;
}
</style>
