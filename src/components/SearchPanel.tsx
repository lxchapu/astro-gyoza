import { useAtom } from 'jotai'
import { searchPanelOpenAtom } from '@/store/searchPanel'
import { docSearchConfig } from '@/config'
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
          appId={docSearchConfig.appId}
          apiKey={docSearchConfig.apiKey}
          indexName={docSearchConfig.indexName}
          initialScrollY={window.scrollY}
          onClose={onClose}
        />
      </RootPortal>
    )
  )
}
