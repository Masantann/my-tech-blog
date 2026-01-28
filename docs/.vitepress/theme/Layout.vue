<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import NavBar from './components/NavBar.vue'
import Home from './views/Home.vue'
import Article from './views/Article.vue'

const { frontmatter } = useData()
const isHome = computed(() => frontmatter.value.layout === 'home')
</script>

<template>
    <div class="min-h-screen antialiased bg-gray-50 dark:bg-black transition-colors duration-300">
        <!-- 顶部导航 -->
        <NavBar />

        <!-- 页面内容 + 过渡动画 -->
        <main>
            <Transition name="fade" mode="out-in">
                <component :is="isHome ? Home : Article" :key="isHome ? 'home' : 'article'" />
            </Transition>
        </main>

        <!-- 页脚 -->
        <footer class="py-12 text-center text-sm text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 mt-20">
            <p>Designed with ❤️ by Codexuan</p>
            <p class="mt-2 text-xs opacity-60">Powered by VitePress & UnoCSS</p>
        </footer>
    </div>
</template>