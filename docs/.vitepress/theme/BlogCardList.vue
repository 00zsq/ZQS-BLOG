<script setup>
import { ref, computed, onMounted } from 'vue'

const posts = [
  {
    title: '关于作者',
    text: '主包简介',
    date: '2024-04-21',
    link: '/my-blog/aboutMe'
  },
  {
    title: 'CSS权重计算方式',
    text: 'CSS选择器的权重（也称为特异性）是决定样式应用优先级的关键机制',
    date: '2024-04-17',
    link: '/my-blog/HTML-CSS/selector'
  },
  {
    title: '万古不灭的Promise',
    text: 'Promise是异步编程的一种解决方案，将异步操作以同步操作的流程表达出来，避免了地狱回调',
    date: '2024-04-17',
    link: '/my-blog/JS/promise'
  },
  {
    title: '水平垂直居中',
    text: '难道我们还要继续用 margin: auto 吗？是的',
    date: '2024-04-17',
    link: '/my-blog/HTML-CSS/vertical-horizontal-center'
  },
  {
    title: '如何实现add(1)(2)(3)',
    text: '核心是通过 函数柯里化 和 闭包 来逐步收集参数，并在最终调用时返回累加结果',
    date: '2024-04-18',
    link: '/my-blog/JS/add'
  },
  {
    title: '手写call、apply和bind',
    text: 'call 和 apply 都是立即调用函数，区别在于参数传递方式;bind 不会立即调用，而是返回一个绑定了 this 的新函数',
    date: '2024-04-18',
    link: '/my-blog/hand-tearing/call-apply-bind'
  },
  {
    title: 'router的hash和history模式',
    text: '看我踩了什么坑',
    date: '2024-04-19',
    link: '/my-blog/Vue/router-hash-his'
  },
  {
    title: '十分重要的虚拟DOM',
    text: '虚拟DOM一定会提高性能吗？',
    date: '2024-04-19',
    link: '/my-blog/Vue/v-DOM'
  },
  {
    title: '一个页面从 URL 输入到渲染出整个页面的整个过程',
    text: '解析、解析，连接，请求，响应，渲染',
    date: '2024-04-20',
    link: '/my-blog/browser/URL'
  },
]

const pageSize = 5
function getPageFromHash() {
  const match = location.hash.match(/page=(\d+)/)
  return match ? Number(match[1]) : 1
}

const currentPage = ref(getPageFromHash())
const totalPages = computed(() => Math.ceil(posts.length / pageSize))
const pagedPosts = computed(() =>
  posts.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize)
)

function goPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    location.hash = `page=${page}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// 监听 hash 变化（支持浏览器前进后退）
window.addEventListener('hashchange', () => {
  currentPage.value = getPageFromHash()
})

// 首次挂载时同步 hash
onMounted(() => {
  currentPage.value = getPageFromHash()
})
</script>

<template>
  <div>
    <div class="blog-card-list">
      <div v-for="post in pagedPosts" :key="post.link" class="blog-card">
        <a :href="post.link" class="card-link">
          <div class="card-title">{{ post.title }}</div>
          <div v-if="post.text" class="card-desc">{{ post.text }}</div>
          <div class="card-date">{{ post.date }}</div>
        </a>
      </div>
    </div>
    <div class="pagination" v-if="posts.length > 5">
      <button class="pagination-btn" :disabled="currentPage === 1" @click="goPage(currentPage - 1)"
        aria-label="上一页">‹</button>

      <ul class="pager">
        <li v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }" @click="goPage(page)"
          :aria-current="page === currentPage ? 'page' : null">
          {{ page }}
        </li>
      </ul>
      <button class="pagination-btn" :disabled="currentPage === totalPages" @click="goPage(currentPage + 1)"
        aria-label="下一页">›</button>

      <span class="total-count">共 {{ posts.length }} 篇</span>
    </div>
  </div>
</template>

<style scoped>
.blog-card-list {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin: 2rem 0;
  width: 66%;
  margin: auto;
}

.blog-card {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 1.1rem 1.3rem;
  transition: box-shadow 0.2s, background 0.2s, color 0.2s;
}

.blog-card:hover {
  box-shadow: 0 4px 16px rgba(12, 12, 12, 0.18);
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.3em;
}

.card-date {
  color: #888;
  font-size: 0.8em;
  margin-bottom: 0.5em;
}

.card-desc {
  color: #555;
  font-size: 0.98em;
  margin-top: 0.2em;
  line-height: 1.6;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.9em;
  margin-top: 2rem;
}

.pagination-btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
}

.pagination-btn:not(:disabled):hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.pager {
  display: flex;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.pager li {
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
  font-size: 1em;
  line-height: 32px;
  margin: 0;
  padding: 0;
}

.pager li:hover:not(.active) {
  background: rgba(var(--vp-c-brand-rgb), 0.1);
}

.pager li.active {
  background: rgba(var(--vp-c-brand-rgb), 0.1);
  color: var(--vp-c-brand);
  font-weight: 500;
}

.total-count {
  margin-left: 1rem;
  color: var(--vp-c-text-3);
  font-size: 0.85em;
}

/* 暗黑模式适配 */
.dark .blog-card {
  background: rgba(var(--vp-c-bg-alt), 0.8);
  border-color: var(--vp-c-divider-dark);
}

.dark .card-desc {
  color: #bbb;
}

.dark .pagination-btn {
  border-color: var(--vp-c-divider-dark);
}
</style>