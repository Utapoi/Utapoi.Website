import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Utapoi",
  description: "The ultimate karaoke experience.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Utapoi' }
    ],
    footer: {
      message: 'Made with ❤️ by Utapoi',
      copyright: 'Copyright © 2020-2023 <a href="https://github.com/Utapoi">Utapoi</a>'
    },
  },
})
