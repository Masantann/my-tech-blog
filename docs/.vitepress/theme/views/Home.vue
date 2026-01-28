<script setup>
import { data as posts } from '../../../posts/posts.data.mjs'

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
}
</script>

<template>
    <div class="pt-28 pb-16 px-4 max-w-6xl mx-auto">
        <!-- Hero Section -->
        <div class="mb-16 text-center space-y-4">
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-800 dark:text-white">
                Thinking in <span class="text-emerald-500">Code</span>
            </h1>
            <p class="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                探索前端技术的边界，记录数字花园的生长。
            </p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <!-- 个人简介卡片 (左上角) -->
            <div
                class="card p-8 md:col-span-1 flex flex-col justify-between bg-gradient-to-br from-emerald-50 to-white dark:from-zinc-900 dark:to-zinc-900">
                <div>
                    <div
                        class="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-3xl mb-4">
                        👋</div>
                    <h3 class="text-xl font-bold mb-2 dark:text-white">我是 Codexuan</h3>
                    <p class="text-sm text-zinc-500 dark:text-zinc-400">
                        前端开发者，热爱 Vue3 和极致的 UI 设计。这里是我的思考集散地。
                    </p>
                </div>
                <div class="mt-6 flex gap-3">
                    <div class="i-carbon-logo-github text-xl hover:text-emerald-500 cursor-pointer"></div>
                    <div class="i-carbon-logo-twitter text-xl hover:text-emerald-500 cursor-pointer"></div>
                </div>
            </div>

            <!-- 最新文章 (占据 2 格宽) -->
            <a v-if="posts[0]" :href="posts[0].url"
                class="card group relative overflow-hidden md:col-span-2 min-h-[300px] flex items-end p-8">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <!-- 这里可以用 posts[0].poster 做背景图 -->
                <div class="absolute inset-0 bg-zinc-800 z-0 group-hover:scale-105 transition-transform duration-700">
                </div>

                <div class="relative z-20 text-white">
                    <div class="text-emerald-400 text-sm font-mono mb-2">{{ formatDate(posts[0].date) }}</div>
                    <h2 class="text-3xl font-bold leading-tight group-hover:text-emerald-300 transition">{{
                        posts[0].title }}</h2>
                    <p class="mt-2 text-gray-300 line-clamp-2">{{ posts[0].excerpt || '点击阅读全文...' }}</p>
                </div>
            </a>

            <!-- 其他文章列表 -->
            <a v-for="(post, index) in posts.slice(1)" :key="post.url" :href="post.url"
                class="card p-6 flex flex-col group hover:-translate-y-1">
                <div class="flex items-center justify-between mb-4">
                    <span
                        class="text-xs font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Article</span>
                    <span class="text-xs text-zinc-400">{{ formatDate(post.date) }}</span>
                </div>
                <h3
                    class="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2 group-hover:text-emerald-500 transition">
                    {{ post.title }}
                </h3>
                <div
                    class="mt-auto pt-4 flex items-center text-sm text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <div class="i-carbon-arrow-right ml-1"></div>
                </div>
            </a>
        </div>
    </div>
</template>