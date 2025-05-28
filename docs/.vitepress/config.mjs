import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的动态书籍',
  description: '基于GitHub的动态更新书籍',
  lang: 'zh-CN',
  
  // 使用自定义域名时不需要base路径
  // base: '/my-dynamic-book/',
  
  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: 'GitHub', link: 'https://github.com/Zhanbingli/my_ebook' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '开始阅读',
        items: [
          { text: '介绍', link: '/introduction' },
          { text: '如何贡献', link: '/contributing' }
        ]
      },
      {
        text: '文章集合',
        items: [
          { text: 'AI时代的教育变革', link: '/articles/education-ai' },
          { text: '研究论文', link: '/articles/research-paper' },
          { text: '与ChatGPT的对话', link: '/articles/chatgpt-communication' },
          { text: '记录', link: '/articles/records' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zhanbingli/my_ebook' }
    ],

    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 Zhanbing Li'
    },

    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/Zhanbingli/my_ebook/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },

  // 站点地图
  sitemap: {
    hostname: 'https://book.zhanbing.site'
  }
}) 