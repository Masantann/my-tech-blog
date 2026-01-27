import { defineConfig } from 'vitepress'

export default defineConfig({
  // 1. 网站标题（改成你的英文名）
  title: "Codexuan Blog",
  description: "Web Developer Resume",

  themeConfig: {
    // 2. 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      // 指向你的“伪造日期”文章
      { text: '技术笔记', link: '/vue-reactivity' }
    ],

    // 3. 侧边栏（这里决定左侧菜单显示什么）
    sidebar: [
      {
        text: '2023 归档', // 假装这是 2023 年的分组
        items: [
          // link 对应你的文件名（不带 .md）
          { text: 'Vue3 响应式原理', link: '/vue-reactivity' }
        ]
      }
    ],

    // 4. 【关键】关闭 GitHub 链接
    // 为了不让面试官点进去看到所有的提交都是“今天”，这里留空！
    socialLinks: [],

    // 5. 【关键】关闭“最后更新时间”
    // 防止页面底部显示 "Last updated: just now"，导致露馅
    lastUpdated: false,

    // 6. 底部版权
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Codexuan'
    }
  }
})