<script setup lang="ts">
  import { useData } from 'vitepress'
  import { computed, ref } from 'vue'
  import { groupByTime } from '../util'
  import Empty from '../components/Empty.vue'

  const { frontmatter } = useData()

  const { items = [], title = 'List' } = frontmatter.value

  const groupedList = computed(() => groupByTime(items))
</script>

<template>
  <h1 class="page-title">
    {{ title }}
  </h1>
  <Empty v-if="!items.length" />
  <ul v-else class="list">
    <div v-for="({ _idx, key, records }) in groupedList" :key="key">
      <div
        v-if="key" class="slide-enter" :style="{
          '--enter-stage': _idx,
          '--enter-step': '60ms',
        }"
        relative
        select-none
        h20
      >
        <span class="year">{{ key }}</span>
      </div>
      <div
        v-for="item in records"
        :key="item.link"
        class="slide-enter"
        :style="{
          '--enter-stage': item._idx,
          '--enter-step': '60ms',
        }"
      >
        <a :href="item.link" class="item">
          <li class="list-none! text-1.3rem leading-1.2em my-4.5 tracking-wide">
            {{ item.text }}
            <span text-base op60 ml2 font-sans>{{ item.time }}</span>
          </li>
        </a>
      </div>
    </div>
  </ul>
</template>

<style scoped>
.year {
  @apply text-8em color-transparent absolute left--1rem md:left--3rem  top--2rem font-bold text-stroke-2 text-stroke-hex-aaa op15;
}
</style>
