// src/posts/posts.data.js
import { createContentLoader } from 'vitepress'

// 扫描当前目录下的所有 .md 文件
export default createContentLoader('posts/*.md', {
    // 可以在这里转换数据，比如格式化日期
    transform(rawData) {
        return rawData
            .map((page) => {
                return {
                    title: page.frontmatter.title,
                    url: page.url,
                    date: page.frontmatter.date,
                    // 如果你需要摘要，可以开启 excerpt
                    // excerpt: page.excerpt, 
                }
            })
            .sort((a, b) => {
                // 按日期倒序排列 (新的在前面)
                return +new Date(b.date) - +new Date(a.date)
            })
    }
})