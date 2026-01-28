<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()

const toggleTheme = () => {
    isDark.value = !isDark.value
}
</script>

<template>
    <nav
        class="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-gray-200/50 dark:border-white/10 transition-all">
        <div class="flex items-center gap-4">
            <a href="/"
                class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500">
                Codexuan
            </a>
        </div>

        <div class="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="/" class="hover:text-emerald-500 transition">首页</a>
            <a href="/posts" class="hover:text-emerald-500 transition">归档</a>
            <a href="https://github.com/yourname" target="_blank" class="hover:text-emerald-500 transition">GitHub</a>

            <!-- 主题切换按钮 -->
            <button @click="toggleTheme" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <div class="i-carbon-sun dark:i-carbon-moon text-lg"></div>
            </button>
        </div>
    </nav>
</template>