import type { APIContext } from 'astro'
import rss from '@astrojs/rss'
import { siteConfig } from '@/config'
import { getSortedPosts } from '@/utils/content'

export async function GET(context: APIContext) {
  const sortedPosts = await getSortedPosts()

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site!,
    items: sortedPosts.map((post) => ({
      link: `/posts/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
    })),
    customData: `<language>${siteConfig.lang}</language>`,
  })
}
