import { createPortal } from 'react-dom'

export function RootPortal({
  to = document.body,
  children,
}: {
  to?: HTMLElement
  children: React.ReactNode
}) {
  return createPortal(children, to)
}
