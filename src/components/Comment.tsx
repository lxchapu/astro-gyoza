import { useEffect, useRef } from 'react'
import { init } from '@waline/client'
import { waline } from '@/config.json'
import '@waline/client/style'
// TODO: Use custom comment system
export function Comment() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const walineInst = init({
      el: ref.current,
      serverURL: waline.serverURL,
      dark: "[data-theme='dark']",
      login: 'force',
      imageUploader: false,
      search: false,
      locale: {
        placeholder: '发条友善的评论吧（支持 Markdown 语法）…',
      },
      emoji: ['//unpkg.com/@waline/emojis@1.1.0/bilibili'],
    })

    return () => {
      if (ref.current) {
        walineInst?.destroy()
      }
    }
  }, [])

  return <div ref={ref}></div>
}
