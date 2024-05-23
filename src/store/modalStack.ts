import { atom } from 'jotai'

export const modalStackAtom = atom<
  {
    id: string
    content: React.ReactNode
  }[]
>([])
