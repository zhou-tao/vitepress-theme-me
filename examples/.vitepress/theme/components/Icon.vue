<script setup lang="ts">
  import { computed } from 'vue'

  interface SvgIcon {
    svg: string
  }

  interface LocalIcon {
    src: string
  }

  const props = withDefaults(defineProps<{
    icon: SvgIcon | LocalIcon
    size?: string | number
  }>(), {
    size: '1.23rem'
  })

  const svgCode = computed(() => (props.icon as SvgIcon).svg)
  const iconPath = computed(() => (props.icon as LocalIcon).src)
  const iconSize = computed(() => {
    return typeof props.size === 'number' ? `${props.size}px` : props.size
  })
</script>

<template>
  <div v-if="svgCode" class="svg-icon" :style="{ fontSize: iconSize }" v-html="svgCode" />
  <span v-else>
    <img :src="iconPath" :style="{ width: iconSize, height: iconSize }">
  </span>
</template>

<style scoped>
.svg-icon {
  color: currentColor;
  display: inline-block;
  vertical-align: text-bottom;
}

img {
  display: inline;
  object-fit: cover;
  object-position: center;
}
</style>
