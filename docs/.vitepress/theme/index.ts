import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import './styles.css'

const theme: Theme = {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h('div', { class: 'home-hero__backdrop' }),
      'layout-bottom': () => h('div', { class: 'layout-gradient' })
    })
  },
  enhanceApp({ router }) {
    router.onAfterRouteChanged = () => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
}

export default theme
