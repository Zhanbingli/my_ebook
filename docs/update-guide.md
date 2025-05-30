# 📚 动态书籍更新指南

## 🔄 更新方式总览

您可以通过以下几种方式更新这本动态书籍：

### 1. 📝 GitHub网页直接编辑（推荐新手）

**适用场景**：修改现有文章、修正错误、小幅内容更新

**操作步骤**：
1. 访问您的GitHub仓库：`https://github.com/Zhanbingli/my_ebook`
2. 导航到要编辑的文件（如 `docs/articles/education-ai.md`）
3. 点击文件右上角的 ✏️ "Edit this file" 按钮
4. 在线编辑器中修改内容
5. 填写提交信息：
   ```
   标题：更新AI教育文章 - 添加新案例
   描述：在第三章节添加了实际应用案例，完善了理论说明
   ```
6. 选择 "Commit directly to the main branch"
7. 点击 "Commit changes"

**⚡ 自动部署**：提交后约2-3分钟，网站会自动更新！

### 2. 💻 本地开发环境（推荐熟练用户）

**适用场景**：大幅修改、添加多个文件、预览效果

**初次设置**：
```bash
# 克隆仓库到本地
git clone https://github.com/Zhanbingli/my_ebook.git
cd my_ebook

# 安装依赖
npm install

# 启动本地预览服务器
npm run dev
```

**日常更新流程**：
```bash
# 1. 拉取最新代码
git pull origin main

# 2. 编辑文件（使用您喜欢的编辑器）

# 3. 预览效果
npm run dev
# 访问 http://localhost:5173 查看效果

# 4. 提交更改
git add .
git commit -m "更新：添加新的学习笔记"
git push origin main
```

### 3. 📄 添加新文章

**方法A：在线添加**
1. 在GitHub上进入 `docs/articles/` 目录
2. 点击 "Add file" → "Create new file"
3. 文件名格式：`new-article-name.md`
4. 编写内容，遵循Markdown格式

**方法B：本地添加**
```bash
# 创建新文章文件
touch docs/articles/my-new-article.md

# 编辑文件内容
# 更新侧边栏配置
```

**📋 更新导航菜单**：
新增文章后，需要更新 `docs/.vitepress/config.mjs` 中的侧边栏配置：

```javascript
sidebar: [
  {
    text: '文章集合',
    items: [
      { text: 'AI时代的教育变革', link: '/articles/education-ai' },
      { text: '研究论文', link: '/articles/research-paper' },
      { text: '与ChatGPT的对话', link: '/articles/chatgpt-communication' },
      { text: '记录', link: '/articles/records' },
      { text: '我的新文章', link: '/articles/my-new-article' } // 新增这行
    ]
  }
]
```

## 📝 内容编写规范

### Markdown格式要求
```markdown
# 文章标题

## 主要章节

### 子章节

- 列表项目
- 使用中文标点符号

**重点内容加粗**

> 引用内容

\`\`\`javascript
// 代码块示例
console.log("Hello World");
\`\`\`
```

### 图片添加
```markdown
# 方法1：相对路径
![描述](../images/my-image.png)

# 方法2：外部链接
![描述](https://example.com/image.jpg)
```

## 🔄 更新最佳实践

### 提交信息规范
```bash
# 好的提交信息
git commit -m "更新：AI教育文章增加实践案例"
git commit -m "修复：纠正第3章节中的错误信息"
git commit -m "新增：学习方法论文章"

# 避免的提交信息
git commit -m "update"
git commit -m "fix"
```

### 更新频率建议
- **小修改**：随时更新（修正错误、补充内容）
- **新文章**：每周1-2次
- **大改版**：提前在分支中准备，测试无误后合并

### 版本管理
```bash
# 创建功能分支（大改动时）
git checkout -b feature/new-chapter
# 编辑完成后
git push origin feature/new-chapter
# 在GitHub上创建Pull Request
```

## 🚀 高级功能

### 1. 自动化工作流
- ✅ 每次提交自动部署到GitHub Pages
- ✅ 自动生成站点地图
- ✅ 自动优化搜索索引

### 2. 协作功能
- **Issue跟踪**：在GitHub Issues中讨论改进建议
- **Pull Request**：邀请他人贡献内容
- **评论系统**：可考虑集成Giscus评论系统

### 3. 分析统计
- **GitHub Insights**：查看仓库访问统计
- **可选集成**：Google Analytics等分析工具

## 🆘 常见问题

**Q: 修改后网站没有更新？**
A: 检查GitHub Actions是否运行成功，通常需要2-3分钟部署时间。

**Q: 如何恢复误删的内容？**
A: 在GitHub历史记录中找到之前的版本，复制内容或恢复整个文件。

**Q: 如何预览修改效果？**
A: 使用本地开发环境 `npm run dev`，或在GitHub上查看文件预览。

**Q: 能否设置定时发布？**
A: 可以，需要修改GitHub Actions工作流添加scheduled trigger。

## 📞 需要帮助？

- 📧 通过GitHub Issues提问
- 📖 查看[贡献指南](./contributing.md)
- 🔗 参考[VitePress官方文档](https://vitepress.dev/)

---

> 💡 **小贴士**：建议先在本地测试重大修改，确认无误后再推送到GitHub！ 