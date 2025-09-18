import { defineConfig } from 'vitepress'

const REPO_URL = 'https://github.com/Zhanbingli/my_ebook'

const nav = {
  zh: [
    { text: '首页', link: '/' },
    { text: '关于', link: '/about' },
    { text: '文章', link: '/articles/education-ai' },
    { text: 'GitHub', link: REPO_URL }
  ],
  en: [
    { text: 'Home', link: '/en/' },
    { text: 'About', link: '/en/about' },
    { text: 'Articles', link: '/en/articles/education-ai' },
    { text: 'GitHub', link: REPO_URL }
  ]
}

const sidebar = {
  zh: [
    {
      text: '开始阅读',
      items: [
        { text: '介绍', link: '/introduction' },
        { text: '贡献指南', link: '/contributing' },
        { text: '更新指南', link: '/update-guide' }
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
  en: [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/en/introduction' },
        { text: 'How to Contribute', link: '/en/contributing' },
        { text: 'Update Guide', link: '/en/update-guide' }
      ]
    },
    {
      text: 'Articles',
      items: [
        { text: 'Educational Revolution in AI Era', link: '/en/articles/education-ai' },
        { text: 'Research Paper', link: '/en/articles/research-paper' },
        { text: 'Dialogue with ChatGPT', link: '/en/articles/chatgpt-communication' },
        { text: 'Records', link: '/en/articles/records' }
      ]
    }
  ]
}

const searchTranslations = {
  zh: {
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
  },
  en: {
    button: {
      buttonText: 'Search docs',
      buttonAriaLabel: 'Search docs'
    },
    modal: {
      noResultsText: 'No results found',
      resetButtonTitle: 'Clear search query',
      footer: {
        selectText: 'to select',
        navigateText: 'to navigate'
      }
    }
  }
}

const footer = {
  zh: {
    message: '基于 VitePress 构建 · 医学与 AI 知识分享',
    copyright: 'Copyright © 2024 李占兵'
  },
  en: {
    message: 'Built with VitePress · Medicine & AI Knowledge Sharing',
    copyright: 'Copyright © 2024 Li Zhanbing'
  }
}

export default defineConfig({
  title: '李占兵的知识库',
  description: '医学与 AI 的交融：一座动态更新的知识灯塔',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  themeConfig: {
    logo: '/logo.png',
    socialLinks: [{ icon: 'github', link: REPO_URL }],
    editLink: {
      pattern: `${REPO_URL}/edit/main/docs/:path`
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      level: [2, 3],
      label: '本页提纲'
    }
  },

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: '李占兵的知识库',
      description: '医学与 AI 的交融：一座动态更新的知识灯塔',
      themeConfig: {
        nav: nav.zh,
        sidebar: sidebar.zh,
        footer: footer.zh,
        editLink: {
          text: '在 GitHub 上编辑此页面'
        },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '索引',
        langMenuLabel: '语言',
        darkModeSwitchLabel: '主题',
        darkModeSwitchTitle: '切换外观',
        outline: {
          label: '本页提纲'
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              root: {
                translations: searchTranslations.zh
              }
            }
          }
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: "Dr. Li Zhanbing's Knowledge Base",
      description: 'Medicine x AI: a living knowledge platform',
      themeConfig: {
        nav: nav.en,
        sidebar: sidebar.en,
        footer: footer.en,
        editLink: {
          text: 'Edit this page on GitHub'
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        outline: {
          label: 'On this page'
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              en: {
                translations: searchTranslations.en
              }
            }
          }
        }
      }
    }
  },

  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },

  sitemap: {
    hostname: 'https://book.zhanbing.site'
  }
})
