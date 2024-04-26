import { searchPanelOpenAtom } from '@/store/searchPanel'
import { useSetAtom } from 'jotai'

export function SearchButton() {
  const setSearchPanelOpen = useSetAtom(searchPanelOpenAtom)

  return (
    <button
      className="size-9 rounded-full shadow-lg shadow-zinc-800/5 border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 backdrop-blur"
      type="button"
      onClick={() => setSearchPanelOpen(true)}
    >
      <i className="iconfont icon-search"></i>
    </button>
  )
}
