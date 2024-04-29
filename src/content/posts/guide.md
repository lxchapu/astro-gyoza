---
title: Gyoza 使用指南
date: 2024-04-01
lastMod: 2024-04-23
summary: 欢迎使用 Gyoza，Gyoza 是一款 Astro 博客主题，它保持简洁和可爱的风格。本篇文章将会介绍如何使用并部署 Gyoza。
category: 技术
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

打开 `astro.config.js`，将 `site` 字段修改成你自己的域名。

你可以在 `src/config.ts` 文件中修改项目的其他配置。

## 部署

> 这里只介绍了 Vercel，你当然可以选择其他平台例如：Cloudflare Pages 或你自己的服务器。

> 部署之前，确保你已经修改 `astro.config.js` 中的 `site`。

### 部署到 Vercel

登录 Vercel 账号，点击右上角的 Add new... 选择 Project。然后在 Import Git Repository 中选择刚刚 Fork 的仓库，点击 Import 按钮。

进入项目配置页面，直接点击 Deploy 按钮，静静等待部署完成就 👌 了。

Vercel 会为你分配一个域名，你可以在项目设置中设置自定义域名，更多操作请参考 Vercel 文档。
