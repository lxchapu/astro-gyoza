import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getProjectFullPath(fileName) {
  return path.join('./src/content/projects', `${fileName}.yaml`)
}

const fileName = await input({
  message: '请输入文件名称',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return '文件名只能包含字母、数字和连字符'
    }
    const fullPath = getProjectFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} 已存在`
    }
    return true
  },
})

const title = await input({
  message: '请输入项目名称',
})
const description = await input({
  message: '请输入项目描述',
})
const link = await input({
  message: '请输入项目地址',
})
const image = await input({
  message: '请输入预览图片地址',
})

const content = `title: ${title}
description: ${description}
link: ${link}
image: ${image}
`

const fullPath = getProjectFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} 创建成功`)
