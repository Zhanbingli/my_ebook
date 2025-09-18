# 李占兵的动态知识库 📚

[![部署状态](https://github.com/Zhanbingli/my_ebook/workflows/部署动态书籍/badge.svg)](https://github.com/Zhanbingli/my_ebook/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A living knowledge system where clinical insight meets intelligent tooling.

🌐 **在线阅读**: [book.zhanbing.site](https://book.zhanbing.site)

## ✨ 现在的亮点

- **现代化界面**：定制 VitePress 主题、渐变背景与改进的导航交互，让长时间阅读舒适顺滑。
- **知识图谱式导航**：首页展示核心板块、指标与推荐路线，中文与英文内容完全对齐。
- **自动化驱动**：GitHub Actions 一次提交即触发构建部署，版本透明可追溯。

## 🧭 内容地图

```
docs/
├── index.md            # 全新视觉首页（中文）
├── en/index.md         # 全新视觉首页（英文）
├── introduction.md     # 项目简介与使用方式
├── articles/           # 医学 × AI 主题文章
├── en/                 # 英文镜像内容
└── .vitepress/
    ├── config.mjs      # 结构化多语言配置、主题色等
    └── theme/          # 自定义渐变 UI 与交互增强
```

## 🚀 快速开始

```bash
# 安装依赖
yarn install # 或 npm install / pnpm install

# 启动开发环境
npm run dev

# 生成静态站点
npm run build

# 预览生产构建
npm run preview
```

> 默认使用 VitePress，本地开发服务地址为 `http://localhost:5173`。

## 🛠️ 技术栈

- **VitePress 1.x**：文档与知识库生成
- **Vue 3**：前端渲染框架
- **GitHub Actions + Pages**：CI/CD & 托管

## 🤝 如何参与贡献

1. Fork 仓库并创建功能分支：`git checkout -b feat/your-topic`
2. 提交修改并推送到分支：`git commit && git push`
3. 通过 Pull Request 分享你的观点或案例

欢迎提交：
- 新的临床与 AI 交叉案例
- UI/UX 改进意见或组件
- 多语言翻译与术语校正

## 🔮 Roadmap

- [ ] 引入阅读进度与收藏功能
- [ ] 增补可视化时间线与知识脉络
- [ ] 集成轻量数据分析/访问统计

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源，欢迎任何形式的合理使用与二次创作。
