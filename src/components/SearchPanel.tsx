import { useAtom } from 'jotai'
import { searchPanelOpenAtom } from '@/store/searchPanel'
import appConfig from '@/config.json'
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react'
import '@docsearch/css'
import { RootPortal } from './RootPortal'

export function SearchPanel() {
  const [isOpen, setIsOpen] = useAtom(searchPanelOpenAtom)

  const onOpen = () => {
    setIsOpen(true)
  }
  const onClose = () => {
    setIsOpen(false)
  }

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
  })

  return (
    isOpen && (
      <RootPortal>
        <DocSearchModal
          appId={appConfig.docSearch.appId}
          apiKey={appConfig.docSearch.apiKey}
          indexName={appConfig.docSearch.indexName}
          initialScrollY={window.scrollY}
          onClose={onClose}
        />
      </RootPortal>
    )
  )
}
