import { motion } from 'framer-motion'
import { useCurrentModal, useModal } from '@/components/ui/modal'
import { useEffect, useState } from 'react'
import { useDebounceValue } from '@/hooks/useDebounceValue'

let pagefind: any = null
async function loadPagefind() {
  if (import.meta.env.PROD && !pagefind) {
    const url = '/pagefind/pagefind.js'
    pagefind = await import(/* @vite-ignore */ url)
  }
}

export function SearchButton() {
  const { present } = useModal()

  const openModal = () => {
    present({
      content: <SearchPanel />,
    })
  }

  useSearchKeyboardEvents({ onOpen: openModal })

  return (
    <button
      className="size-9 rounded-full shadow-lg shadow-zinc-800/5 border border-primary bg-white/50 dark:bg-zinc-800/50 backdrop-blur"
      type="button"
      aria-label="Search"
      onClick={openModal}
    >
      <i className="iconfont icon-search"></i>
    </button>
  )
}

function SearchPanel() {
  const [keyword, setKeyword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<any[]>([])
  const debouncedKeyword = useDebounceValue(keyword, 350)

  const { dismiss } = useCurrentModal()

  async function search(value: string) {
    if (!value) {
      setResults([])
      return
    }
    setIsLoading(true)
    await loadPagefind()
    if (pagefind) {
      const res = await pagefind.search(value)
      const nextResults = await Promise.all(res.results.map((r: any) => r.data()))
      setResults(nextResults)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    search(debouncedKeyword)
  }, [debouncedKeyword])

  let resultList = null
  if (import.meta.env.DEV) {
    resultList = (
      <div className="h-full flex items-center justify-center">
        <div className="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2zm2 0h12v-6a6 6 0 0 0-12 0zm5-18h2v3h-2zm8.778 2.808l1.414 1.414l-2.12 2.121l-1.415-1.414zM2.808 6.222l1.414-1.414l2.121 2.12L4.93 8.344zM7 14a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3z"
            />
          </svg>
          <div>
            <div className="font-semibold mb-1">抱歉</div>
            <div className="text-sm">该功能基于 pagefind，请在构建后再次尝试。</div>
          </div>
        </div>
      </div>
    )
  } else if (isLoading) {
    resultList = (
      <div className="h-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          viewBox="0 0 24 24"
          className="animate-spin"
        >
          <path
            fill="currentColor"
            d="M12 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m0 15a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m8.66-10a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5A1 1 0 0 1 20.66 7M7.67 14.5a1 1 0 0 1-.367 1.366l-2.598 1.5a1 1 0 1 1-1-1.732l2.598-1.5a1 1 0 0 1 1.366.366M20.66 17a1 1 0 0 1-1.366.366l-2.598-1.5a1 1 0 0 1 1-1.732l2.598 1.5A1 1 0 0 1 20.66 17M7.67 9.5a1 1 0 0 1-1.367.366l-2.598-1.5a1 1 0 1 1 1-1.732l2.598 1.5A1 1 0 0 1 7.67 9.5"
          />
        </svg>
      </div>
    )
  } else if (keyword.length === 0) {
    resultList = (
      <div className="h-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"
          />
        </svg>
      </div>
    )
  } else if (results.length === 0) {
    resultList = (
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11 11v2l-5.327 6H11v2H3v-2l5.326-6H3v-2zm10-8v2l-5.327 6H21v2h-8v-2l5.326-6H13V3z"
            />
          </svg>
          <div>无内容</div>
        </div>
      </div>
    )
  } else {
    resultList = (
      <>
        <div className="text-sm px-3 mb-2">找到以下 {results.length} 条结果</div>
        {results.map((item) => {
          return (
            <a
              href={item.url}
              key={item.url}
              className="hover:bg-accent/10 rounded block px-3 py-2"
              onClick={dismiss}
            >
              <div className="font-semibold">{item.meta.title}</div>
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: item.excerpt }}></p>
            </a>
          )
        })}
      </>
    )
  }

  return (
    <motion.div
      className="bg-primary rounded-lg w-[90vw] h-[80vh] max-w-[680px] max-h-[480px] border border-primary flex flex-col"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
    >
      <input
        className="px-4 py-3 outline-none bg-transparent border-b border-primary"
        type="text"
        placeholder="Search..."
        maxLength={64}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="px-4 py-3 overflow-y-auto grow">{resultList}</div>
      <div className="px-3 py-2 flex justify-end">
        <a
          href="https://pagefind.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center "
        >
          <span className="mr-2 text-xs">Search by</span>
          <span className="font-semibold">pagefind</span>
        </a>
      </div>
    </motion.div>
  )
}

function useSearchKeyboardEvents({ onOpen }: { onOpen: () => void }) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        onOpen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onOpen])
}
