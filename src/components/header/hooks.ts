import { useAtomValue } from 'jotai'
import {
  pathNameAtom,
  metaTitleAtom,
  metaDescriptionAtom,
  metaSlugAtom,
  hasMetaInfoAtom,
} from '@/store/metaInfo'
import { pageScrollLocationAtom, pageScrollDirectionAtom } from '@/store/scrollInfo'
import { isMobileAtom } from '@/store/viewport'
import { floor } from 'lodash-es'

const threshold = 50

export function useHeaderBgOpacity() {
  const scrollY = useAtomValue(pageScrollLocationAtom)
  if (scrollY >= threshold) {
    return 1
  } else {
    return floor(scrollY / threshold, 2)
  }
}

export function useHasMetaInfo() {
  return useAtomValue(hasMetaInfoAtom)
}

export function useShouldHeaderMenuBgShow() {
  const scrollY = useAtomValue(pageScrollLocationAtom)
  return scrollY < threshold
}

export function useIsMobile() {
  return useAtomValue(isMobileAtom)
}

export function useShouldHeaderMetaShow() {
  const hasMetaInfo = useHasMetaInfo()
  const scrollY = useAtomValue(pageScrollLocationAtom)

  return hasMetaInfo && scrollY >= threshold
}

export function useHeaderMetaInfo() {
  const title = useAtomValue(metaTitleAtom)
  const description = useAtomValue(metaDescriptionAtom)
  const slug = useAtomValue(metaSlugAtom)

  return {
    title,
    description,
    slug,
  }
}

export function usePathName() {
  return useAtomValue(pathNameAtom)
}

export function useShouldAccessibleMenuShow() {
  const scrollY = useAtomValue(pageScrollLocationAtom)
  const scrollDirection = useAtomValue(pageScrollDirectionAtom)
  const hasMetaInfo = useHasMetaInfo()

  return hasMetaInfo && scrollY >= 400 && scrollDirection === 'up'
}
