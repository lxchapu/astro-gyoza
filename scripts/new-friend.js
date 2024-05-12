import { input } from '@inquirer/prompts'
import fs from 'fs'
import path from 'path'
import { isFileNameSafe } from './utils.js'

function getFriendFullPath(fileName) {
  return path.join('./src/content/friends', `${fileName}.yaml`)
}

const fileName = await input({
  message: '请输入文件名称',
  validate: (value) => {
    if (!isFileNameSafe(value)) {
      return '文件名只能包含字母、数字和连字符'
    }
    const fullPath = getFriendFullPath(value)
    if (fs.existsSync(fullPath)) {
      return `${fullPath} 已存在`
    }
    return true
  },
})

const title = await input({
  message: '请输入标题',
})
const description = await input({
  message: '请输入描述',
})
const link = await input({
  message: '请输入地址',
})
const avatar = await input({
  message: '请输入头像地址',
})

const content = `title: ${title}
description: ${description}
link: ${link}
avatar: ${avatar}
`

const fullPath = getFriendFullPath(fileName)
fs.writeFileSync(fullPath, content)
console.log(`${fullPath} 创建成功`)
