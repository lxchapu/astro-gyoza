---
title: Markdown 示例
date: 2024-04-01
summary: 这是一篇 Markdown 文章的示例。展示了 Markdown 的语法和渲染效果。
category: 例子
tags: [Markdown]
---

下面是在 Astro 中编写 Markdown 内容时，可以使用的一些基本 Markdown 语法示例。

## 标题

你应该避免在 Markdown 正文中重复创建文章标题，因为文章标题会根据 `frontmatter` 中 `title` 自动生成。

> 避免标题层级过深，一般到三级标题就够了。

# 一级

## 二级

### 三级 `inline code`

#### 四级

##### 五级

###### 六级

## 段落

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

使用行尾使用两个空格进行段落内的换行

All work and no play makes Jack a dull boy.  
All work and no play makes Jack a dull boy.

## 图片

小尺寸的图片

![图片描述](https://picsum.photos/seed/picsum/250/400)

大尺寸的图片

![图片描述](https://picsum.photos/seed/picsum/1200/900)

带标题的图片

![图片描述](https://picsum.photos/seed/picsum/400/300 '图片标题')

## 强调

这是**重要内容**，这是*次要内容*

## 删除线

~~这是一段被删除的文本。~~

## 引用

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

嵌套的引用

> 引用
>
> > 嵌套的引用

带脚标的引用

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## 分割线

---

## 链接

这是内部链接 [Gyoza 使用指南](/posts/guide)

这是外部连接 [React **中文**文档](https://zh-hans.react.dev/)

自动渲染成连接 <https://github.com>

邮箱地址 <mail@example.com>

## 表格

设置单元格对齐

| Name  | Age |  Fruit |
| :---- | :-: | -----: |
| Bob   | 27  |  Apple |
| Alice | 23  | Banana |
| John  | 28  | Orange |

支持行内 Markdown

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

表格溢出

| A                                                        | B                                                                                                             | C                                                                                                                                    | D                                                 | E                                                          | F                                                                    |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| Lorem ipsum dolor sit amet, consectetur adipiscing elit. | Phasellus ultricies, sapien non euismod aliquam, dui ligula tincidunt odio, at accumsan nulla sapien eget ex. | Proin eleifend dictum ipsum, non euismod ipsum pulvinar et. Vivamus sollicitudin, quam in pulvinar aliquam, metus elit pretium purus | Proin sit amet velit nec enim imperdiet vehicula. | Ut bibendum vestibulum quam, eu egestas turpis gravida nec | Sed scelerisque nec turpis vel viverra. Vivamus vitae pretium sapien |

## 代码块

### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

```
const var text = "hello world"
```

## KaTeX 公式

使用 `$` 符号包裹公式生成行内公式，例如：$E = mc^2$。

使用 `$$` 符号包裹公式来生成独立公式。例如：

$$
e^{i\pi} + 1 = 0
$$

也可以使用代码块（` ```math `）的方式：

```math
\oint_{\partial V} \mathbf{E} \cdot d\mathbf{A} = \frac{Q}{\epsilon_0}
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

## Spoiler

```md
||hide content||
```

正常情况下，该内容会隐藏 ||hide content||，鼠标悬浮时才会显示。
