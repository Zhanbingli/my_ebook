# 我的动态书籍 📚

[![部署状态](https://github.com/Zhanbingli/my_ebook/workflows/部署动态书籍/badge.svg)](https://github.com/Zhanbingli/my_ebook/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 基于GitHub的动态更新书籍 - 展示如何使用现代技术栈创建可协作的数字出版物

🌐 **在线阅读**: [https://book.zhanbing.site](https://book.zhanbing.site)

## ✨ 特色功能

- 🔄 **动态更新** - 内容实时更新，版本控制
- 👥 **协作编写** - 支持多人贡献，Pull Request工作流
- 📱 **响应式设计** - 完美适配各种设备
- 🔍 **全文搜索** - 快速定位需要的内容
- 🚀 **自动部署** - GitHub Actions自动构建和发布
- 📖 **现代阅读体验** - 基于VitePress的优雅界面

## 🛠️ 技术栈

- **[VitePress](https://vitepress.dev/)** - 现代化静态站点生成器
- **[Vue.js](https://vuejs.org/)** - 渐进式JavaScript框架
- **[GitHub Actions](https://github.com/features/actions)** - 自动化CI/CD
- **[GitHub Pages](https://pages.github.com/)** - 免费静态网站托管

## 📚 内容结构

```
docs/
├── index.md              # 首页
├── introduction.md       # 项目介绍
├── contributing.md       # 贡献指南
├── articles/            # 文章目录
│   ├── education-ai.md   # AI时代的教育变革
│   ├── research-paper.md # 研究论文分析
│   └── ...
├── images/              # 图片资源
└── .vitepress/          # VitePress配置
    └── config.js
```

## 🚀 快速开始

### 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/Zhanbingli/my_ebook.git
   cd my_ebook
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **在浏览器中访问**
   ```
   http://localhost:5173
   ```

### 构建部署

```bash
# 构建静态文件
npm run build

# 预览构建结果
npm run preview
```

## 📝 如何贡献

我们欢迎各种形式的贡献！请查看 [贡献指南](docs/contributing.md) 了解详细信息。

### 快速贡献步骤

1. 🍴 Fork 这个仓库
2. 🌟 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. ✍️ 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 📤 推送到分支 (`git push origin feature/AmazingFeature`)
5. 🔄 开启一个 Pull Request

### 贡献类型

- 📝 **内容贡献** - 新增文章、完善现有内容
- 🐛 **问题反馈** - 报告错误、提出改进建议  
- 💡 **功能建议** - 提出新功能想法
- 🎨 **设计改进** - 优化用户界面和体验
- 📖 **文档完善** - 改进说明文档

## 📋 项目结构

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions部署配置
├── docs/                    # 文档源文件
│   ├── .vitepress/
│   │   └── config.js        # VitePress配置
│   ├── articles/            # 文章目录
│   ├── images/              # 图片资源
│   ├── index.md             # 首页
│   ├── introduction.md      # 介绍页面
│   └── contributing.md      # 贡献指南
├── package.json             # 项目依赖
└── README.md               # 项目说明
```

## 🔧 配置说明

### VitePress配置

主要配置在 `docs/.vitepress/config.js` 中：

```javascript
export default defineConfig({
  title: '我的动态书籍',
  description: '基于GitHub的动态更新书籍',
  lang: 'zh-CN',
  // ... 更多配置
})
```

### GitHub Pages设置

**自定义域名部署**：

1. 在DNS管理面板添加CNAME记录：`book -> Zhanbingli.github.io`
2. 进入仓库的 Settings -> Pages
3. 在 "Custom domain" 填入：`book.zhanbing.site`
4. 勾选 "Enforce HTTPS"
5. 推送代码到main分支即可自动部署

**访问地址**：
- 动态书籍：`https://book.zhanbing.site`
- 与您的主域名和现有博客完全独立

## 📊 部署状态

- ✅ **自动构建** - 每次推送到main分支自动触发
- ✅ **部署检查** - 构建成功后自动部署到GitHub Pages
- ✅ **状态监控** - 通过GitHub Actions查看部署状态

## 🎯 使用场景

这个项目适合以下场景：

### 📖 个人知识库
- 整理学习笔记和思考
- 创建专业技能文档
- 建立个人品牌展示

### 👥 团队协作
- 团队知识共享
- 项目文档维护
- 培训材料开发

### 🏫 教育用途
- 课程内容管理
- 学生作业展示
- 教学资源分享

### 📚 开源项目
- API文档维护
- 用户指南编写
- 社区贡献管理

## 🔮 未来计划

- [ ] 添加评论系统集成
- [ ] 支持多语言切换
- [ ] 集成分析统计
- [ ] 添加PDF导出功能
- [ ] 支持主题自定义
- [ ] 集成RSS订阅

## 📄 许可证

本项目采用 [MIT License](LICENSE) 许可证。

## 🤝 贡献者

感谢所有为这个项目做出贡献的人！

<a href="https://github.com/Zhanbingli/my_ebook/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Zhanbingli/my_ebook" />
</a>

## 📞 联系方式

- 📧 Email: your.email@example.com  
- 🐦 Twitter: [@yourusername](https://twitter.com/yourusername)
- 💼 LinkedIn: [yourprofile](https://linkedin.com/in/yourprofile)

## 🙏 致谢

- [VitePress](https://vitepress.dev/) - 优秀的静态站点生成器
- [GitHub](https://github.com/) - 提供免费的代码托管和部署服务
- [Vue.js](https://vuejs.org/) - 强大的前端框架
- 所有贡献者和用户的支持

---

**喜欢这个项目？给个⭐️支持一下！**

[![Star History Chart](https://api.star-history.com/svg?repos=Zhanbingli/my_ebook&type=Date)](https://star-history.com/#Zhanbingli/my_ebook&Date) 