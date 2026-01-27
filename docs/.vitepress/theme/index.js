import Layout from './Layout.vue'
import './style.css'

export default {
    Layout, // 指定使用我们自己的 Layout
    enhanceApp({ app }) {
        // 以后可以在这里注册全局组件
    }
}