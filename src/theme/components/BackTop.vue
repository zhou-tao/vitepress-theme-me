<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const percent = ref(0)

  onMounted(() => {
    window.onscroll = () => {
      const scrollEl = document.documentElement
      const scrollTop = window.pageYOffset || scrollEl.scrollTop || document.body.scrollTop
      const curScrollPer = scrollTop / (scrollEl.getBoundingClientRect().height - scrollEl.clientHeight) * 100
      percent.value = Number(curScrollPer.toFixed(0))
    }
  })

  function scrollTop() {
    document.documentElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
</script>

<template>
  <div v-show="percent" :style="{ opacity: percent / 40 }" class="back-top" @click="scrollTop">
    <div i-ri-arrow-up-s-line size="1.8rem" />
    <div w10 text-center font-mono>
      {{ percent }}%
    </div>
  </div>
</template>

<style scoped>
.back-top {
  @apply font-normal hover:op100! transition-opacity ease transition-300;
  @apply fixed z-10 right-8 bottom-8 cursor-pointer flex flex-col items-center;
}
</style>
