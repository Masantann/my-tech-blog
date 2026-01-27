<script setup>
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
</script>

<template>
    <div class="article-view">
        <div class="article-header">
            <h1>{{ page.title }}</h1>
            <div class="meta" v-if="frontmatter.date">
                <span>🕒 发布于：{{ frontmatter.date }}</span>
            </div>
        </div>

        <Content class="markdown-body" />

        <div class="article-footer">
            <a href="/">← 返回首页</a>
        </div>
    </div>
</template>

<style scoped>
.article-view {
    max-width: 760px;
    margin: 0 auto;
    padding: 40px 20px;
}

.article-header {
    margin-bottom: 40px;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
}

.article-header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.meta {
    color: #888;
    font-size: 0.9rem;
}

/* 可以在 style.css 里补充 .markdown-body 的样式 */
</style>