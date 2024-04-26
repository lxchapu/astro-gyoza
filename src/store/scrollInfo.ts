import { atom } from 'jotai'

export const pageScrollLocationAtom = atom(0)
export const pageScrollDirectionAtom = atom<'up' | 'down' | null>(null)
