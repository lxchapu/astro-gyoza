import { h } from 'hastscript'
import { visit } from 'unist-util-visit'

export function rehypeCodeBlock() {
  return function (tree) {
    visit(tree, { tagName: 'pre' }, (node, index, parent) => {
      const child = node.children[0]
      if (!child || child.type !== 'element' || child.tagName !== 'code' || !child.properties) {
        return
      }
      const classes = child.properties.className
      let lang = ''
      if (!classes) {
        node.children[0].properties = {
          className: ['language-text'],
        }
        lang = 'text'
      } else {
        lang = classes[0].slice(9)
      }

      const codeBlock = h(
        'div',
        {
          class: 'code-block',
        },
        [h('span', { class: 'lang-tag' }, lang), node],
      )

      parent.children[index] = codeBlock
    })
  }
}
