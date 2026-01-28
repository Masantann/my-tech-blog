// docs/.vitepress/config.mjs
import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetUno, presetIcons, presetTypography, presetWebFonts } from 'unocss'

export default defineConfig({
  title: "Codexuan",
  description: "A digital garden",
  themeConfig: {
    // 禁用默认的 nav 和 sidebar，完全由我们接管 Layout
    nav: [],
    sidebar: [],
  },
  vite: {
    plugins: [
      Unocss({
        presets: [
          presetUno(), // 兼容 Tailwind CSS
          presetIcons({
            scale: 1.2,
            warn: true,
          }), // 支持图标 class="i-carbon-sun"
          presetTypography(), // 优美的排版 prose
          presetWebFonts({
            fonts: {
              sans: 'Inter:400,600,800', // 引入现代英文字体
              mono: 'Fira Code',
            },
          }),
        ],
        shortcuts: {
          'btn': 'px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition duration-300',
          'card': 'bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300',
          'flex-center': 'flex items-center justify-center',
        },
        theme: {
          colors: {
            primary: '#10b981', // Emerald 500
          }
        }
      })
    ]
  }
})