import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getPostFullPath(fileName) {
  return path.join('./src/content/posts', `${fileName}.md`)
}

const fileName = await input({
  message: '请输入文件名称',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return '文件名只能包含字母、数字和连字符'
    }
    const fullPath = getPostFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} 已存在`
    }
    return true
  },
})

const title = await input({
  message: '请输入文章标题',
})

const content = `---
title: ${title}
date: ${new Date().toISOString()}
tags: []
comments: true
draft: false
---
`

const fullPath = getPostFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} 创建成功`)
