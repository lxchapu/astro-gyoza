---
title: Gyoza 使用指南
date: 2024-04-01
lastMod: 2024-08-10T03:58:16.758Z
summary: 欢迎使用 Gyoza，Gyoza 是一款 Astro 博客主题，它保持简洁和可爱的风格。本篇文章将会介绍如何使用并部署 Gyoza。
category: 教程
tags: [Astro, Gyoza]
sticky: 1
---

## 前置条件

- node 版本 >= 18.18.0
- pnpm 版本 > 8.1.0

## 安装

### 克隆仓库

登录 Github 账号，打开 [lxchapu/astro-gyoza](https://github.com/lxchapu/astro-gyoza)，点击右上角的 Fork 按钮，将仓库克隆到你自己的账号下。

复制这个仓库的地址，打开终端，使用 `git clone` 命令将仓库克隆到本地。

> 本项目推荐使用 pnpm 作为你的包管理器，如果你还没有安装 pnpm，请先安装 pnpm。

### 安装依赖

```sh
cd astro-gyoza
pnpm install
```

### 命令介绍

本地运行

```sh
pnpm dev
```

打包静态文件

```sh
pnpm build
```

本地预览

```sh
pnpm preview
```

### 配置项

本项目中的绝大部分配置都定义在 `src/config.json` 文件中。

你应该首先将 `site.url` 修改成自己的域名，避免导航错误。

以下是配置项的说明：

```json
{
  "site": {
    "url": "", // 网站地址
    "title": "", // 网站标题
    "description": "", // 通用的网站描述 SEO
    "keywords": "", // 通用的网站关键词 SEO
    "lang": "zh-CN", // 网站的语言
    "favicon": "", // 浏览器图标，存放在 public 目录下
    "appleTouchIcon": "" // 苹果设备图标，存放在 public 目录下
  },
  "author": {
    "name": "", // 作者名称
    "twitterId": "", // 推特账号 ID，以 @ 开头，用于 Open Graph
    "avatar": "" // 作者头像地址
  },
  // 首页 Hero 组件
  "hero": {
    "name": "", // 显示的名称
    "bio": "", // 一句话介绍
    "description": "", // 补充描述
    // 社交账号
    "socials": [
      {
        "name": "", // 社交平台类型
        "icon": "", // 社交平台图标
        "url": "", // 链接
        "color": "" // 图标颜色
      }
    ],
    "yiyan": "" // 显示一言
  },
  "color": {
    // 强调色，请填写 16 进制颜色值。每次会从中随机取出一组
    "accent": [{ "light": "", "dark": "" }],
    // 背景色
    "bg": {
      "primary": { "light": "", "dark": "" },
      "secondary": { "light": "", "dark": "" }
    },
    // 文字颜色
    "text": {
      "primary": { "light": "", "dark": "" },
      "secondary": { "light": "", "dark": "" }
    },
    // 边框颜色
    "border": {
      "primary": { "light": "", "dark": "" }
    }
  },
  // 顶部导航栏
  "menus": [
    {
      "name": "首页",
      "link": "/",
      "icon": "icon-pantone"
    }
  ],
  "posts": {
    "perPage": 10 // 每一页显示的文章数量
  },
  "footer": {
    "startTime": "" // 博客网站开始时间 请使用 ISO 格式
  },
  // Waline 评论系统，前往 https://waline.js.org/ 查看
  "waline": {
    "serverURL": ""
  },
  // 赞助
  "sponsor": {
    "wechat": "" // 微信赞赏码图片地址
  },
  // 如果需要使用网站数据统计，将 enable 修改为 true，并填写对应的配置
  "analytics": {
    "enable": false,
    // https://analytics.google.com
    "google": {
      "measurementId": ""
    },
    // https://umami.is/docs
    "umami": {
      "serverUrl": "",
      "websiteId": ""
    },
    // https://clarity.microsoft.com/
    "microsoftClarity": {
      "projectId": ""
    }
  }
}
```

## 部署

本项目推荐使用 GitHub Actions 自动部署到 Vercel。

### 准备工作

1.  **Fork 仓库**: 如果你还没有 Fork 本项目，请先 Fork 到你自己的 GitHub 账号下。
2.  **在 Vercel 创建项目**:
    - 登录 Vercel 账号。
    - 点击 "Add New..." -> "Project"。
    - 选择你 Fork 的仓库，点击 "Import"。
    - 在配置页面，**无需**点击 "Deploy"。我们需要先获取一些信息。

### 获取 Vercel 环境变量

部署需要以下三个 Vercel 相关的变量：

1.  **`VERCEL_TOKEN`**:
    - 访问 Vercel 的 [Access Tokens](https://vercel.com/account/tokens) 页面。
    - 创建一个新的 Token。
    - **立即复制生成的 Token**，因为离开页面后将无法再次查看。
2.  **`VERCEL_ORG_ID` 和 `VERCEL_PROJECT_ID`**:
    - **安装 Vercel CLI**: 如果你还没有安装，请在终端运行 `pnpm i -g vercel`。
    - **登录 Vercel CLI**: 运行 `vercel login` 并按照提示操作。
    - **链接项目**: 在你的本地项目根目录（`astro-gyoza`）下运行 `vercel link`。
      - CLI 会引导你关联到 Vercel 上的项目。如果之前没有创建过，它会提示你创建一个新的 Vercel 项目。
      - 关联成功后，会在项目根目录下生成一个 `.vercel` 隐藏文件夹。
    - **获取 ID**: 打开 `.vercel/project.json` 文件，你将找到 `orgId` 和 `projectId`。
      - `orgId` 对应 `VERCEL_ORG_ID`。
      - `projectId` 对应 `VERCEL_PROJECT_ID`。

### 配置 GitHub Secrets

1.  在你 Fork 的 GitHub 仓库页面，点击 "Settings" -> "Secrets and variables" -> "Actions"。
2.  点击 "New repository secret"。
3.  依次添加以下三个 Secrets：
    - `VERCEL_TOKEN`: 粘贴你之前生成的 Vercel Access Token。
    - `VERCEL_ORG_ID`: 粘贴你的 Vercel Org ID。
    - `VERCEL_PROJECT_ID`: 粘贴你的 Vercel Project ID。

### 配置 Vercel 项目设置

为了确保部署完全由 GitHub Actions 控制，我们需要调整 Vercel 上的项目设置。

1.  **进入 Vercel 项目设置**: 登录 Vercel，进入你的项目，点击 "Settings"。
2.  **修改 Framework Preset**:
    - 在 "General" 选项卡下，找到 "Framework Preset" 设置。
    - 点击 "Edit"，选择 "Other"。
    - 点击 "Save"。
3.  **覆盖 Build Command**:
    - 在 "General" 选项卡下，找到 "Build & Development Settings"。
    - 展开 "Build Command" 右侧的 "Override" 开关。
    - **将输入框留空**（即清除默认的构建命令）。
    - 点击 "Save"。

### 触发部署

配置完成后，每次向 `main` 分支推送代码时，GitHub Actions 会自动运行 `.github/workflows/deploy.yml` 文件中定义的流程，构建并将项目部署到 Vercel。

你可以在 GitHub 仓库的 "Actions" 选项卡中查看部署状态。
