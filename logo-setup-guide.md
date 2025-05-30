# 🖼️ Logo设置指南

## 📋 当前状态

您的动态知识库已经配置好了logo功能！现在需要替换临时的SVG文件为您提供的医生插图。

## 🎯 操作步骤

### 步骤1：保存您的医生图片
1. 将您的医生插图保存为PNG格式
2. 重命名为 `logo.png`  
3. 建议尺寸：200x200像素或更大
4. 确保背景透明（如果原图有背景色）

### 步骤2：替换临时文件
1. 将 `logo.png` 复制到 `docs/public/` 目录
2. 删除临时文件 `docs/public/logo.svg`（可选）
3. 更新配置文件中的logo路径

### 步骤3：更新配置（如果使用PNG）
如果您想使用PNG格式而不是SVG，需要修改 `docs/.vitepress/config.mjs`：

```javascript
// 在中文和英文配置中找到：
image: {
  src: /logo.svg,    // 改为 /logo.png
  alt: // ... 保持不变
}
```

## 🎨 Logo显示位置

您的logo将出现在：
- ✅ 中文首页的hero区域
- ✅ 英文首页的hero区域  
- ✅ 浏览器标签页图标（favicon）
- ✅ 社交媒体分享预览

## 📐 技术要求

### 推荐规格：
- **格式**: PNG（支持透明）或SVG（矢量）
- **尺寸**: 200x200px 或更大
- **文件大小**: < 1MB
- **背景**: 透明背景效果最佳

### 响应式设计：
- 手机端：自动缩放到合适大小
- 平板端：保持清晰度
- 桌面端：全尺寸显示

## 🔧 技术细节

当前配置文件已设置：
```javascript
// 中文首页
hero: {
  name: "李占兵的知识库",
  text: "医学与AI的智慧交融", 
  image: {
    src: /logo.svg,  // ← 这里是logo路径
    alt: 李占兵博士的知识库标志
  }
}

// 英文首页
hero: {
  name: "Dr. Li Zhanbing's Knowledge Base",
  text: "Where Medicine Meets AI",
  image: {
    src: /logo.svg,  // ← 这里是logo路径  
    alt: Dr. Li Zhanbing's Knowledge Base Logo
  }
}
```

## ✅ 验证步骤

替换后，请验证：
1. 首页logo正确显示
2. 图片清晰不模糊
3. 在深色/浅色主题下都清晰可见
4. 手机端显示正常

## 🚀 自动部署

一旦您将新logo推送到GitHub：
1. GitHub Actions会自动构建
2. 2-3分钟后网站更新
3. 全球用户看到新logo

---

> 💡 **提示**: 如果您不熟悉文件操作，可以直接在GitHub网页端上传，点击 `docs/public/` → `Add file` → `Upload files` 