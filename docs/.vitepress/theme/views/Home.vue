<script setup>
// 1. 导入刚才写的数据加载器
// data 会自动包含所有文章的列表
import { data as posts } from '../../../posts/posts.data.mjs'

// 用于简单的日期格式化
const formatDate = (rawDate) => {
    const d = new Date(rawDate)
    return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
    <div class="home-view">
        <div class="hero-section">
            <h1 class="glitch-text">Codexuan</h1>
            <p class="subtitle">前端开发 / Vue3 爱好者</p>
        </div>

        <div class="posts-list">
            <h2>📜 最新文章</h2>

            <div class="post-cards">
                <a v-for="post in posts" :key="post.url" :href="post.url" class="post-item">
                    <div class="post-title">{{ post.title }}</div>
                    <div class="post-date" v-if="post.date">{{ formatDate(post.date) }}</div>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 首页样式补充 */
.home-view {
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 1rem;
}

.hero-section {
    text-align: center;
    margin-bottom: 4rem;
}

.glitch-text {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.posts-list h2 {
    text-align: center;
    margin-bottom: 2rem;
    border-bottom: none;
}

.post-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
    margin-bottom: 1rem;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
    background: white;
}

.post-item:hover {
    border-color: #42b883;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.post-title {
    font-weight: 600;
    font-size: 1.1rem;
}

.post-date {
    color: #888;
    font-size: 0.9rem;
    font-family: monospace;
}
</style>