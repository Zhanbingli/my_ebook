import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '李占兵的知识库',
  description: '医学与AI的交融：动态更新的知识分享平台',
  
  // 多语言配置
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: '李占兵的知识库',
      description: '医学与AI的交融：动态更新的知识分享平台',
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
              { text: '如何贡献', link: '/contributing' },
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

        // 搜索
        search: {
          provider: 'local',
          options: {
            locales: {
              root: {
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
        },

        // 页脚
        footer: {
          message: '基于 VitePress 构建 | 医学与AI知识分享',
          copyright: 'Copyright © 2024 李占兵'
        },

        // 语言切换标签
        langMenuLabel: '切换语言',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Dr. Li Zhanbing\'s Knowledge Base',
      description: 'The Convergence of Medicine and AI: A Dynamic Knowledge Sharing Platform',
      themeConfig: {
        // Navigation
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/about' },
          { text: 'GitHub', link: 'https://github.com/Zhanbingli/my_ebook' }
        ],

        // Sidebar
        sidebar: [
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
        ],

        // Search
        search: {
          provider: 'local',
          options: {
            locales: {
              en: {
                translations: {
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
            }
          }
        },

        // Edit link
        editLink: {
          pattern: 'https://github.com/Zhanbingli/my_ebook/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },

        // Last updated
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },

        // Footer
        footer: {
          message: 'Built with VitePress | Medicine & AI Knowledge Sharing',
          copyright: 'Copyright © 2024 Li Zhanbing'
        }
      }
    }
  },
  
  // 社交链接
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zhanbingli/my_ebook' }
    ]
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