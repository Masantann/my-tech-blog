// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'
import 'uno.css' // 👈 关键：引入 UnoCSS 生成的样式

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        // 可以在这里注册全局组件
    }
}