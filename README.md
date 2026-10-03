# 我的个人博客

在线预览：<https://wangminghuang.github.io/>

## ✨ 功能特性

- 🌗 **明暗主题切换**：基于 Context 持久化到 localStorage，跟随用户偏好
- 📱 **响应式布局**：桌面端侧边栏 + 移动端抽屉菜单，适配各类屏幕
- 📝 **文章系统**：Markdown 渲染 + Prism 代码高亮，按分类归档
- 🗂️ **项目展示**：独立项目详情页，沉淀技术栈与实践总结
- ⚡ **性能优化**：路由级代码分割、组件按需加载、平滑滚动
- 🔍 **SEO 友好**：语义化标签 + 静态资源构建

## 🛠️ 技术栈

| 分类 | 选型 |
| --- | --- |
| 框架 | React 19、React Router v7 |
| 语言 | TypeScript |
| 构建 | Vite 7 |
| 样式 | Styled Components |
| 内容 | react-markdown、rehype-prism-plus、PrismJS |
| 规范 | ESLint、Prettier |
| 部署 | GitHub Pages（`docs/` 目录） |

## 📁 目录结构

```
src/
├── assets/        # 图片等静态资源
├── components/    # 通用组件（Header / Footer / Drawer / Sidebar / Menu / Loading …）
├── contexts/      # React Context（主题等全局状态）
├── data/          # 文章、项目等结构化数据
├── hooks/         # 自定义 Hooks
├── layouts/       # 布局组件
├── pages/         # 路由页面（Home / Articles / ArticleDetail / Projects / ProjectDetail / About）
├── router/        # 路由配置
├── store/         # 全局状态
└── styles/        # 全局样式与主题变量
```

## 🚀 快速开始

环境要求：Node.js ≥ 18，包管理器推荐 pnpm。

```bash
# 安装依赖
pnpm install

# 本地开发（默认 http://localhost:5173）
pnpm dev

# 类型检查 + 构建产物到 docs/
pnpm build

# 本地预览构建产物
pnpm preview

# 代码检查与格式化
pnpm lint
pnpm format
```

## 📦 部署

项目通过 GitHub Pages 托管，`pnpm build` 会将产物输出到 `docs/` 目录，在仓库 Settings → Pages 中选择 `main` 分支的 `/docs` 目录即可自动发布。

## 📄 License

MIT
