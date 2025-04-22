<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const taglines = [
  "做你所热爱的",
  "信念生根，灵魂自在"
]
const current = ref(0)
let timer = null
onMounted(() => {
  timer = setInterval(() => {
    current.value = (current.value + 1) % taglines.length
  }, 5000)
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="VPHomeHero">
    <div class="text">
      <div class="name">
        <span class="gradient-text">竹秋拾</span>
      </div>
      <div class="tagline">{{ taglines[current] }}</div>
    </div>

    <div class="image-bg">
      <div class="image">
        <img src="/images/double.jpg" alt="logo">
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPHomeHero {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;
}
.VPHomeHero .name {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.gradient-text {
  background: linear-gradient(135deg, #f1cbd2 25%, #70a8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
.VPHomeHero .text {
  min-width: 220px;
  margin-top: 1rem;
}
.VPHomeHero .tagline {
  font-size: 1.3rem;
  min-height: 2.2em;
  transition: opacity 0.5s;
  color: #666;
}
.image-bg {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(120deg, #e9a1ae 50%, #6a7ad4 90%);
  filter: blur(40px);
  z-index: 0;
}
.image-bg .image {
  position: relative;
  z-index: 1;
  width: 120px;
  height: 120px;
  overflow: hidden;
  mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%);
  mask-repeat: no-repeat;
  mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: cover;
}

.dark .tagline {
  color: #f0eeee;
}
</style>