<script setup>
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
</script>

<template>
    <div class="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <!-- 文章头部 -->
        <header class="text-center mb-16 max-w-3xl mx-auto">
            <div class="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-6 font-mono">
                <span class="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">{{ frontmatter.date?.substring(0, 10)
                    }}</span>
                <span v-if="frontmatter.tags" class="text-emerald-500">#{{ frontmatter.tags }}</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight mb-8">
                {{ page.title }}
            </h1>
        </header>

        <!-- 内容区域 -->
        <div
            class="bg-white dark:bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <!-- vp-doc 是必须的，用于应用官方的 Markdown 样式 -->
            <!-- prose 是 UnoCSS typography 提供的，用于优化排版 -->
            <div
                class="vp-doc prose prose-zinc dark:prose-invert max-w-none prose-a:text-emerald-500 hover:prose-a:text-emerald-600 prose-img:rounded-xl">
                <Content />
            </div>
        </div>

        <!-- 底部导航 -->
        <div class="mt-12 flex justify-between items-center max-w-3xl mx-auto">
            <a href="/" class="flex items-center text-zinc-500 hover:text-emerald-500 transition">
                <div class="i-carbon-arrow-left mr-2"></div> 返回首页
            </a>
            <button class="flex items-center text-zinc-500 hover:text-emerald-500 transition"
                @click="window.scrollTo({ top: 0, behavior: 'smooth' })">
                回到顶部 <div class="i-carbon-arrow-up ml-2"></div>
            </button>
        </div>
    </div>
</template>

<style>
/* 可以在这里微调 vp-doc 内部的样式，比如代码块圆角 */
.vp-doc pre {
    border-radius: 0.75rem !important;
}
</style>