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

export const headerConfig = {
  menu: [
    {
      title: '首页',
      link: '/',
    },
    {
      title: '归档',
      link: '/archives',
    },
    {
      title: '项目',
      link: '/projects',
    },
    {
      title: '关于',
      link: '/about',
    },
    {
      title: '友链',
      link: '/links',
    },
  ],
}

export const docSearchConfig = {
  appId: '',
  apiKey: '',
  indexName: '',
}
