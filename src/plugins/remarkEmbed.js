import { visit } from 'unist-util-visit'

export function remarkEmbed() {
  return function (tree) {
    visit(tree, (node) => {
      if (node.type === 'leafDirective') {
        if (!['youtube', 'bilibili', 'codepen'].includes(node.name)) return

        const data = node.data || (node.data = {})
        const attributes = node.attributes || {}
        const id = attributes.id

        if (!id) return

        data.hName = 'iframe'
        switch (node.name) {
          case 'youtube':
            data.hProperties = {
              class: 'video',
              title: 'YouTube Video Player',
              src: `https://www.youtube.com/embed/${id}`,
              frameBorder: 0,
              allow:
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
              allowFullScreen: true,
              loading: 'lazy',
            }
            break
          case 'bilibili':
            data.hProperties = {
              class: 'video',
              title: 'Bilibili Video Player',
              src: `//player.bilibili.com/player.html?isOutside=true&bvid=${id}`,
              frameBorder: 0,
              allowFullScreen: true,
              loading: 'lazy',
            }
            break
          case 'codepen':
            data.hProperties = {
              class: 'codepen',
              title: 'CodePen Embed',
              src: `https://codepen.io/${attributes.author}/embed/${id}`,
              frameBorder: 0,
              allowFullScreen: true,
              loading: 'lazy',
            }
            break
        }
      }
    })
  }
}
