<script setup>
import { ref, onMounted } from 'vue'
import Giscus from '@giscus/vue'

const giscusTheme = ref('light')

onMounted(() => {
  const updateTheme = () => {
    giscusTheme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  }
  updateTheme()
  const observer = new MutationObserver(updateTheme)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})
</script>

<template>
  <Giscus
    repo="00zsq/ZQS-BLOG"
    repo-id="R_kgDOOde6rQ"
    category="Announcements"
    category-id="DIC_kwDOOde6rc4CpVDD"
    mapping="pathname"
    strict="1"
    reactions-enabled="1"
    emit-metadata="1"
    input-position="top"
    :theme="giscusTheme"
    lang="zh-CN"
    loading="lazy"
  />
</template>