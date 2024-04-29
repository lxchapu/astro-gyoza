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
    // 去掉 pathName 结尾的 '/'
    if (pathName !== '/') {
      setPathName(pathName.replace(/\/$/, ''))
    } else {
      setPathName(pathName)
    }
    setTitle(title)
    setDescription(description)
    setSlug(slug)
  }, [pathName, title, description, slug])

  return null
}
