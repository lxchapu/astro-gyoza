import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { pathNameAtom, metaTitleAtom, metaDescriptionAtom, metaSlugAtom } from '@/store/metaInfo'

export function HeaderMetaInfoProvider({
  pathName,
  title = '',
  description = '',
  slug = '',
}: {
  pathName: string
  title?: string
  description?: string
  slug?: string
}) {
  const setPathName = useSetAtom(pathNameAtom)
  const setTitle = useSetAtom(metaTitleAtom)
  const setDescription = useSetAtom(metaDescriptionAtom)
  const setSlug = useSetAtom(metaSlugAtom)

  useEffect(() => {
    setPathName(pathName)
    setTitle(title)
    setDescription(description)
    setSlug(slug)
  }, [pathName, title, description, slug])

  return null
}
