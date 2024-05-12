import { h } from 'hastscript'
import { visit } from 'unist-util-visit'

export function rehypeTableBlock() {
  return function (tree) {
    visit(tree, { tagName: 'table' }, (node, index, parent) => {
      const divWrapper = h('div', { class: 'table-block' }, [node])
      parent.children[index] = divWrapper
    })
  }
}
