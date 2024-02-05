<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vitepress'

  const route = useRoute()

  const prevPath = computed(() => route.path.split('/').slice(0, -1).join('/') || '/')
</script>

<template>
  <div class="pager slide-enter animate-delay-600!" m="t8 b8">
    <span font="mono" op50>&gt; </span>
    <a :href="prevPath" font="mono" op="50 hover:75">cd ..</a>
  </div>
</template>
