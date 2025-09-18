# Dr. Li Zhanbing's Living Knowledge Base 📚

[![Deployment Status](https://github.com/Zhanbingli/my_ebook/workflows/部署动态书籍/badge.svg)](https://github.com/Zhanbingli/my_ebook/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern VitePress site where clinical insight meets intelligent tooling, continuously refined in public.

🌐 **Live site**: [book.zhanbing.site](https://book.zhanbing.site)

## ✨ Highlights

- **Refined interface** – Custom gradients, glassmorphism navigation, and responsive feature panels deliver a contemporary reading experience.
- **Structured knowledge mapping** – The home page showcases core tracks, metrics, and recommended journeys in both Simplified Chinese and English.
- **Automated delivery** – GitHub Actions compiles and deploys every commit, keeping the knowledge base versioned and transparent.

## 🗂 Repository Layout

```
docs/
├── index.md            # Landing page (zh-CN)
├── en/index.md         # Landing page (en-US)
├── introduction.md     # Project overview
├── articles/           # Domain articles (Medicine × AI)
├── en/                 # English mirror content
└── .vitepress/
    ├── config.mjs      # Multi-locale site config & shared navigation
    └── theme/          # Custom theme entry + gradient-based styling
```

A detailed breakdown of the recent modernization work is available in [`TECHNICAL_REPORT.md`](./TECHNICAL_REPORT.md).

## 🚀 Getting Started

```bash
# Install dependencies
yarn install            # or npm install / pnpm install

# Start local dev server
npm run dev

# Build static assets
npm run build

# Preview the production build
npm run preview
```

The default VitePress dev server runs at `http://localhost:5173`.

## 🛠 Tech Stack

- **VitePress 1.x** for documentation scaffolding and theme extensibility
- **Vue 3** powering interactive components and enhancements
- **GitHub Actions + GitHub Pages** for CI/CD and hosting

## 🤝 Contributing

1. Fork the repository and create a feature branch: `git checkout -b feat/your-topic`
2. Commit your changes and push: `git commit && git push`
3. Open a Pull Request describing the context and impact

Contribution ideas:
- Clinical × AI case studies or workflow retrospectives
- UI/UX refinements or reusable components
- Localization improvements and glossary curation

## 🧭 Roadmap

- [ ] Reading progress indicator and bookmarks
- [ ] Visual timeline + knowledge graph overlays
- [ ] Lightweight analytics for content insights

## 📄 Technical Report

The English-language technical report summarizing the refactor, theming upgrades, and documentation refresh can be found at [`TECHNICAL_REPORT.md`](./TECHNICAL_REPORT.md).

## 📬 Contact

- Email: zhanbing2025@gmail.com  
- Twitter: [@yourusername](https://twitter.com/lizhanning)  
- LinkedIn: [yourprofile](https://linkedin.com/in/)

## 📜 License

Released under the [MIT License](LICENSE). Feel free to remix, localize, or build upon the project with attribution.

---

> 中文读者提示：站点与内容结构在中文、英文之间保持同步；如需中文说明，可直接访问线上站点或参考文档目录中的中文页面。
