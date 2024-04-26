import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { useAtom } from 'jotai'
import { searchPanelOpenAtom } from '@/store/searchPanel'
import { useState } from 'react'

export function SearchPanel({ zIndex = 999 }: { zIndex?: number }) {
  const [isOpen, setIsOpen] = useAtom(searchPanelOpenAtom)
  const overlayZIndex = zIndex - 1
  const contentZIndex = zIndex

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-gray-800/40"
                style={{ zIndex: overlayZIndex }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              ></motion.div>
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                className="fixed top-1/2 left-1/2"
                style={{ zIndex: contentZIndex, x: '-50%' }}
                initial={{ opacity: 0, y: 'calc(-50% + 20px)' }}
                animate={{ opacity: 1, y: '-50%' }}
                exit={{ opacity: 0, y: 'calc(-50% + 20px)' }}
              >
                <SearchPanelImpl />
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

function SearchPanelImpl() {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<any[]>([])

  return (
    <div className="h-[500px] max-h-[80vh] w-[700px] max-w-[90vw] bg-base rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 flex flex-col">
      <SearchInput value={query} onChange={setQuery} />
      <SearchResults query={query} isLoading={isLoading} results={results} />
      <FooterBar />
    </div>
  )
}

function SearchInput({ value, onChange }: { value: string; onChange(value: string): void }) {
  return (
    <input
      className="w-full shrink-0 border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 text-lg bg-transparent focus-visible:outline-none"
      autoComplete="off"
      maxLength={512}
      spellCheck={false}
      type="search"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

function SearchResults({
  query,
  isLoading,
  results,
}: {
  query: string
  isLoading: boolean
  results: any[]
}) {
  return (
    <div className="grow min-h-0">
      {isLoading && <span>加载中...</span>}
      {!isLoading && query === '' && <span>输入关键词进行搜索</span>}
      {!isLoading && query !== '' && results.length === 0 && <span>没有找到相关结果</span>}
      {!isLoading && query !== '' && results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li></li>
          ))}
        </ul>
      )}
    </div>
  )
}

function FooterBar() {
  return (
    <div className="shrink-0 flex items-center justify-end px-4 py-2 text-xs">
      <a href="https://www.fusejs.io/" target="_black" rel="noreferrer noopener">
        Search by Fuse.js
      </a>
    </div>
  )
}
