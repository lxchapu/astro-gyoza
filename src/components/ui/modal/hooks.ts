import { useContext, useId, useRef } from 'react'
import { useSetAtom } from 'jotai'
import { modalStackAtom } from '@/store/modalStack'
import { CurrentModalContext } from './context'

type ModalProps = {
  id?: string
  content: React.ReactNode
}

export function useModal() {
  const id = useId()
  const currentCount = useRef(0)
  const setModalStack = useSetAtom(modalStackAtom)

  return {
    present(props: ModalProps) {
      const modalId = `${id}-${currentCount.current++}`
      const modalProps = {
        ...props,
        id: props.id ?? modalId,
      }
      setModalStack((stack) => [...stack, modalProps])
      return () => {
        setModalStack((stack) => stack.filter((modal) => modal.id !== modalProps.id))
      }
    },
  }
}

export function useCurrentModal() {
  return useContext(CurrentModalContext)
}
