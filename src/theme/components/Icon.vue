<script setup lang="ts">
  import { computed } from 'vue'

  type RiName = 'discord'
    | 'facebook'
    | 'github'
    | 'instagram'
    | 'linkedin'
    | 'mastodon'
    | 'slack'
    | 'twitter'
    | 'youtube'
    | 'zhihu'
    | 'bilibili'
    | 'sun'
    | 'moon'

  interface SvgIcon {
    svg: string
  }

  interface LocalIcon {
    src: string
  }

  interface RiIcon {
    name: RiName
  }

  const props = withDefaults(defineProps<{
    icon: SvgIcon | LocalIcon | RiIcon
    size?: string | number
  }>(), {
    icon: () => ({ name: 'github' }),
    size: '1.23rem'
  })

  const svgCode = computed(() => (props.icon as SvgIcon).svg)
  const riName = computed(() => (props.icon as RiIcon).name)
  const iconPath = computed(() => (props.icon as LocalIcon).src)
  const iconSize = computed(() => {
    return typeof props.size === 'number' ? `${props.size}px` : props.size
  })
</script>

<template>
  <div v-if="svgCode" class="svg-icon" :style="{ fontSize: iconSize }" v-html="svgCode" />
  <div v-else-if="riName" :class="`i-ri-${riName}-line`" :style="{ width: iconSize, height: iconSize }" />
  <div v-else>
    <img :src="iconPath" :width="size" :height="size">
  </div>
</template>

<style scoped>
.svg-icon {
  color: currentColor;
  display: inline-block;
  vertical-align: text-bottom;
}

img {
  object-fit: cover;
  object-position: center;
}
</style>
