import type { APIContext } from 'astro'
import rss from '@astrojs/rss'
import { site, follow } from '@/config.json'
import { getSortedPosts } from '@/utils/content'

export async function GET(context: APIContext) {
  const sortedPosts = await getSortedPosts()
  
  const generateCustomData = () => {
    let customData = `<language>${site.lang}</language>\n`
    
    if (follow?.enable && follow.feedId && follow.userId) {
      customData += `
    <follow_challenge>
      <feedId>${follow.feedId}</feedId>
      <userId>${follow.userId}</userId>
    </follow_challenge>`
    }
    
    return customData
  }

  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items: sortedPosts.map((post) => ({
      link: `/posts/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
    })),
    customData: generateCustomData(),
  })
}
