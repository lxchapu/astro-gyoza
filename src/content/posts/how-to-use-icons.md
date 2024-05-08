---
title: 如何在 Gyoza 中使用图标？
date: 2024-05-08T10:54:27.000Z
tags: [Icon]
category: 教程
comments: true
draft: false
---

Gyoza 选择 font-class 的方式引用图标。这些图标大部分来源于 [Remix Icons](https://remixicon.com/)，并且在 [iconfont](https://www.iconfont.cn/) 上进行管理和导出。

下图展示了项目中的所有图标：

![所有图标](https://s2.loli.net/2024/05/08/mbdT5HqYMEajyRG.webp)

当你在添加首页显示的社交账号时，你可能会想要使用这些图标。在对应的配置项中填写图标下面有 `icon-` 前缀的名称即可。

如果是在组件中使用图标，可以按照如下方式：

```jsx
<i className="iconfont icon-xxx"></i>
```

## 为什么不是 SVG 图标？

你可能看到很多的项目在使用 [iconify](https://iconify.design/)。iconify 是一个开源图标集，包含超过 20 万个图标，提供了多种框架的引入方式。Astro 中也有对应的插件 astro-icon 可以使用（如果对此感兴趣，可以查看他们的[文档](https://github.com/natemoo-re/astro-icon)）。

我在项目中也尝试使用过 iconify，但是出于以下几个原因，我最终还是转向了 font-class 的方式：

- 由于项目中同时使用了 Astro 和 React，而在 Astro 组件和 React 组件中使用 iconify 图标的方式是不同的，这会导致代码中不得不存在两种使用方式。
- iconify 在加载时需要请求它的服务器，~~我会担心请求失败~~，虽然这种担心是多余的。
- 有一个功能是我会在渲染文章时往 markdown 中注入一些图标，例如外部链接尾部的图标，iconify 想要做到这一点并不方便。
- 在 HTML 中直接嵌入 SVG icon 的方式并不优雅，使用 font-class 只需要对应的类名，感觉相较而言最终的 HTML 体积小一点，页面加载会快点。我还没有做过具体的测试，但是至少我会尽量避免页面中出现大量的 SVG 仅仅只是作为图标使用。
- 该项目中用到的图标并不多，主要是一些常用的社交账号的图标，供自定义联系方式时使用。我希望所有图标集中在一起管理，这样更方便一点。

我必须要承认，目前的图标方案并不优雅，每当图标集合发生修改时我都需要更新对应的字体文件和 CSS 文件。而且其他人想要管理图标集合也变得困难。

也许我会在未来尝试其他方式，例如 [@iconify/tailwind](https://github.com/iconify/iconify/tree/main/plugins/tailwind)，如果你有更好的方案，也欢迎给我留言。

## 自定义图标

如果你想要替换 iconfont 的图标，请修改以下文件：

```text
public/fonts/iconfont.ttf
public/fonts/iconfont.woff
public/fonts/iconfont.woff2
src/styles/iconfont.css
```

注意，这将会替换掉项目中使用的所有图标，所以请确保你知道自己在做什么。
