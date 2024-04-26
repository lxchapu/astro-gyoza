import { getLocalTheme } from '@/utils/theme'
import { atom } from 'jotai'

export const themeAtom = atom(getLocalTheme())
