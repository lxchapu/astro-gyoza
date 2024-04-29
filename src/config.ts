export const siteConfig = {
  title: 'Gyoza',
  description: '这是一个基于 Astro 的博客主题。',
  author: 'lxchapu',
  keywords: 'Gyoza,blogs,Astro,theme,lxchapu,博客主题',
  lang: 'zh-CN',
  perPage: 10,
  startTime: '2024-04-14T00:00:00Z',
  twitterId: '@lxchapu',
}

export const menus = [
  {
    name: '首页',
    link: '/',
    icon: 'icon-pantone',
  },
  {
    name: '归档',
    link: '/archives',
    icon: 'icon-archive',
  },
  {
    name: '项目',
    link: '/projects',
    icon: 'icon-flask',
  },
  {
    name: '关于',
    link: '/about',
    icon: 'icon-ghost',
  },
  {
    name: '友链',
    link: '/links',
    icon: 'icon-hearts',
  },
]

export const docSearchConfig = {
  appId: '',
  apiKey: '',
  indexName: '',
}
