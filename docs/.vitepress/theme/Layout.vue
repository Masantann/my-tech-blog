<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import Home from './views/Home.vue'
import Article from './views/Article.vue'

const { frontmatter } = useData()

// 路由逻辑：如果 markdown 文件的 frontmatter 写了 layout: home，就显示 Home 组件
const isHome = computed(() => frontmatter.value.layout === 'home')
</script>

<template>
    <div class="app-container">
        <nav class="global-nav">
            <span>My Blog</span>
        </nav>

        <component :is="isHome ? Home : Article" />

    </div>
</template>

<style>
/* 全局布局样式 */
.global-nav {
    height: 60px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-weight: bold;
}
</style>