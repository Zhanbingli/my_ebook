# How to Contribute

Thank you for your interest in this dynamic book project! We welcome all forms of contribution to make this book better.

## 🤝 Ways to Contribute

### 📝 Content Contributions
- Add new chapters or articles
- Improve existing content
- Fix errors and enhance expressions
- Add examples and case studies

### 🐛 Issue Reporting
- Report content errors
- Suggest improvements
- Provide feedback on reading experience

### 💡 Idea Sharing
- Propose new topic suggestions
- Share relevant resources
- Participate in discussions and exchanges

## 📋 Contribution Process

### Step 1: Preparation

1. **Fork the Repository**
   ```bash
   # Click the Fork button on GitHub
   # Then clone to local
   git clone https://github.com/yourusername/my_ebook.git
   cd my_ebook
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

### Step 2: Create Content

1. **Create New Branch**
   ```bash
   git checkout -b feature/new-article
   ```

2. **Add Content**
   - Create new `.md` files in the `docs/en/articles/` directory
   - Or edit existing files

3. **Preview Changes**
   - View in browser at `http://localhost:5173`
   - Ensure formatting and display are correct

### Step 3: Submit Changes

1. **Commit Code**
   ```bash
   git add .
   git commit -m "Add new article: Article Title"
   git push origin feature/new-article
   ```

2. **Create Pull Request**
   - Create Pull Request on GitHub
   - Describe your changes in detail
   - Wait for review and merge

## ✍️ Writing Standards

### File Structure
```
docs/
├── en/               # English content
│   ├── articles/     # Article directory
│   │   ├── education-ai.md
│   │   └── new-article.md
│   └── images/       # Image resources
├── articles/         # Chinese content
└── .vitepress/       # Configuration files
    └── config.mjs
```

### Markdown Format

Each article should include:

```markdown
# Article Title

::: info Chapter Information
**Updated**: January 2024  
**Reading Time**: About 15 minutes  
**Difficulty Level**: Beginner/Intermediate/Advanced  
:::

## Abstract
Brief description of article content...

## Main Content
...

---

*Next Chapter: [Link to next chapter](/en/articles/next-article)*
```

### Style Guide

#### Heading Hierarchy
- `#` - Article title (only one per article)
- `##` - Main sections
- `###` - Subsections
- `####` - Detailed points

#### Emphasis and Tips
```markdown
::: info Information
Important information content
:::

::: tip Tips
Useful suggestions
:::

::: warning Notice
Content that needs attention
:::

::: danger Warning
Important warning information
:::
```

#### Code Blocks
```markdown
```javascript
// Code example
function example() {
    return "Hello World";
}
``` // Backticks should be here
```

#### Quotes and Links
```markdown
> This is a quote

[Internal link](/en/articles/other-article)
[External link](https://example.com)
```

## 🎨 Images and Media

### Image Standards
- Formats: PNG, JPG, WebP
- Size: Recommended not to exceed 1MB
- Dimensions: Width not exceeding 800px
- Naming: Use meaningful file names

### Adding Images
```markdown
![Image description](../images/image-name.png)
```

### Image Optimization
- Use compression tools to reduce file size
- Add meaningful alt text for images
- Consider using SVG format for icons

## 📚 Content Types

### Academic Articles
- Well-structured academic papers
- Include abstract, keywords, references
- Use appropriate citation format

### Technical Tutorials
- Step-by-step operation guides
- Include code examples and screenshots
- Provide actually runnable code

### Reflection Notes
- Personal viewpoints and thoughts
- Learning insights and summaries
- Inspiration and idea records

## 🔍 Quality Standards

### Content Quality
- ✅ Accurate and valuable content
- ✅ Clear logic and reasonable structure
- ✅ Fluent language, easy to understand
- ✅ Standard format, beautiful layout

### Technical Requirements
- ✅ Correct Markdown syntax
- ✅ Working links and references
- ✅ Proper image formatting
- ✅ Valid configuration updates

### Review Process
- ✅ Self-review before submission
- ✅ Peer review for major changes
- ✅ Testing in development environment
- ✅ Final review before publishing

## 🚀 Advanced Features

### Multi-language Support
- Create parallel content in both Chinese and English
- Use consistent structure across languages
- Update navigation for both versions

### Interactive Elements
- Code playgrounds
- Interactive diagrams
- Embedded videos
- Comment sections

### SEO Optimization
- Use descriptive titles and headings
- Add meta descriptions
- Optimize image alt text
- Create meaningful URLs

## 🆘 Getting Help

### Where to Ask Questions
- 📧 **Email**: [your-email@example.com]
- 💬 **GitHub Issues**: For technical problems
- 🗨️ **Discussions**: For general questions
- 📚 **Documentation**: Check existing guides first

### Common Issues

**Q: Build failing after my changes?**
A: Check VitePress build logs and ensure all links are valid

**Q: How to add new pages to navigation?**
A: Update the sidebar configuration in `docs/.vitepress/config.mjs`

**Q: Images not showing?**
A: Verify image paths and ensure images are in the correct directory

**Q: Want to preview before submitting?**
A: Use local development server with `npm run dev`

## 🌟 Recognition

### Contributors
All contributors will be:
- Listed in the project README
- Mentioned in release notes
- Given credit in relevant articles

### Contribution Types
- 🖋️ **Content**: Writing and editing articles
- 🔧 **Technical**: Code improvements and fixes
- 🐛 **Testing**: Finding and reporting issues
- 💡 **Ideas**: Suggesting improvements
- 🎨 **Design**: UI/UX enhancements

---

> 💝 **Thank you** for making this dynamic book better for everyone! Your contributions help create a valuable resource for the community.

*Ready to contribute? [Start with your first article](/en/articles/education-ai) or [check out the update guide](./update-guide)* 