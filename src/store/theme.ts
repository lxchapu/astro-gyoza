import { getLocalTheme } from '@/utils/theme'
import { atom } from 'jotai'

export type Theme = 'light' | 'dark' | 'system'

export const themeAtom = atom<Theme>(getLocalTheme())
