import { h } from 'hastscript'
import { visit } from 'unist-util-visit'

export function rehypeTableBlock() {
  return function (tree) {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'table') {
        const wrapper = h('div', { class: 'table-wrapper' }, [node])
        parent.children[index] = wrapper
      }
      if (node.tagName === 'th' || node.tagName === 'td') {
        const align = node.properties.align
        if (align) {
          node.properties.style = `text-align: ${align};`
          delete node.properties.align
        }
      }
    })
  }
}
