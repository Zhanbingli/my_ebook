# 📚 Dynamic Book Update Guide

## 🔄 Update Methods Overview

You can update this dynamic book through several different approaches:

### 1. 📝 Direct GitHub Web Editing (Recommended for Beginners)

**Best for**: Modifying existing articles, fixing errors, small content updates

**Steps**:
1. Visit your GitHub repository: `https://github.com/Zhanbingli/my_ebook`
2. Navigate to the file you want to edit (e.g., `docs/en/articles/education-ai.md`)
3. Click the ✏️ "Edit this file" button in the top right
4. Make your changes in the online editor
5. Fill out the commit information:
   ```
   Title: Update AI education article - Add new case study
   Description: Added practical application examples in chapter 3, enhanced theoretical explanations
   ```
6. Select "Commit directly to the main branch"
7. Click "Commit changes"

**⚡ Auto-deployment**: Your changes will be live in 2-3 minutes!

### 2. 💻 Local Development Environment (Recommended for Power Users)

**Best for**: Major modifications, adding multiple files, previewing changes

**Initial Setup**:
```bash
# Clone repository to local machine
git clone https://github.com/Zhanbingli/my_ebook.git
cd my_ebook

# Install dependencies
npm install

# Start local preview server
npm run dev
```

**Daily Update Workflow**:
```bash
# 1. Pull latest changes
git pull origin main

# 2. Edit files (using your favorite editor)

# 3. Preview changes
npm run dev
# Visit http://localhost:5173 to see changes

# 4. Commit and push changes
git add .
git commit -m "Update: Add new learning notes"
git push origin main
```

### 3. 📄 Adding New Articles

**Method A: Online Creation**
1. On GitHub, navigate to `docs/en/articles/` directory
2. Click "Add file" → "Create new file"
3. Use filename format: `new-article-name.md`
4. Write content following Markdown format

**Method B: Local Creation**
```bash
# Create new article file
touch docs/en/articles/my-new-article.md

# Edit file content
# Update sidebar configuration
```

**📋 Update Navigation Menu**:
After adding new articles, update the sidebar configuration in `docs/.vitepress/config.mjs`:

```javascript
// In the 'en' locale section
sidebar: [
  {
    text: 'Articles',
    items: [
      { text: 'Educational Revolution in AI Era', link: '/en/articles/education-ai' },
      { text: 'Research Paper', link: '/en/articles/research-paper' },
      { text: 'Dialogue with ChatGPT', link: '/en/articles/chatgpt-communication' },
      { text: 'Records', link: '/en/articles/records' },
      { text: 'My New Article', link: '/en/articles/my-new-article' } // Add this line
    ]
  }
]
```

## 📝 Content Writing Standards

### Markdown Format Requirements
```markdown
# Article Title

## Main Section

### Subsection

- List items
- Use proper punctuation

**Bold important content**

> Quote content

\`\`\`javascript
// Code block example
console.log("Hello World");
\`\`\`
```

### Adding Images
```markdown
# Method 1: Relative path
![Description](../images/my-image.png)

# Method 2: External link
![Description](https://example.com/image.jpg)
```

## 🔄 Update Best Practices

### Commit Message Standards
```bash
# Good commit messages
git commit -m "Update: AI education article adds practical cases"
git commit -m "Fix: Correct error in chapter 3"
git commit -m "Add: Learning methodology article"

# Avoid these commit messages
git commit -m "update"
git commit -m "fix"
```

### Update Frequency Recommendations
- **Small fixes**: Update anytime (corrections, additions)
- **New articles**: 1-2 times per week
- **Major revisions**: Prepare in branches, test thoroughly before merging

### Version Management
```bash
# Create feature branch (for major changes)
git checkout -b feature/new-chapter
# After editing
git push origin feature/new-chapter
# Create Pull Request on GitHub
```

## 🚀 Advanced Features

### 1. Automated Workflows
- ✅ Auto-deploy to GitHub Pages on every commit
- ✅ Auto-generate sitemap
- ✅ Auto-optimize search index

### 2. Collaboration Features
- **Issue Tracking**: Discuss improvements in GitHub Issues
- **Pull Requests**: Invite others to contribute content
- **Comment System**: Consider integrating Giscus comments

### 3. Analytics & Insights
- **GitHub Insights**: View repository access statistics
- **Optional Integration**: Google Analytics and other analytics tools

## 🆘 Common Issues

**Q: Website not updating after changes?**
A: Check if GitHub Actions ran successfully. Usually takes 2-3 minutes to deploy.

**Q: How to recover accidentally deleted content?**
A: Find previous versions in GitHub history, copy content or restore entire file.

**Q: How to preview changes?**
A: Use local development environment `npm run dev`, or view file preview on GitHub.

**Q: Can I schedule content publishing?**
A: Yes, requires modifying GitHub Actions workflow to add scheduled triggers.

## 🌐 Multi-language Support

### Adding Content in Different Languages

**For Chinese content**: Place files in `docs/` directory
**For English content**: Place files in `docs/en/` directory

```bash
# Chinese article
docs/articles/my-chinese-article.md

# English article  
docs/en/articles/my-english-article.md
```

### Language-specific Configuration

Update both language sections in `docs/.vitepress/config.mjs`:

```javascript
locales: {
  root: {
    // Chinese configuration
    sidebar: [
      // Chinese menu items
    ]
  },
  en: {
    // English configuration  
    sidebar: [
      // English menu items
    ]
  }
}
```

## 📞 Need Help?

- 📧 Ask questions through GitHub Issues
- 📖 Check the [Contributing Guide](./contributing.md)
- 🔗 Reference [VitePress Official Documentation](https://vitepress.dev/)
- 🌐 Language switching available in top navigation

---

> 💡 **Pro Tip**: Test major changes locally first before pushing to GitHub! 