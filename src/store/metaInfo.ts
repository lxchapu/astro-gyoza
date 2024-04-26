import { atom } from 'jotai'

export const pathNameAtom = atom('')
export const metaTitleAtom = atom('')
export const metaDescriptionAtom = atom('')
export const metaSlugAtom = atom('')

export const hasMetaInfoAtom = atom((get) => {
  const title = get(metaTitleAtom)
  const description = get(metaDescriptionAtom)
  const slug = get(metaSlugAtom)
  return title !== '' && description !== '' && slug !== ''
})
