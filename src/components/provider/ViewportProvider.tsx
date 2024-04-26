import { useSetAtom } from 'jotai'
import { useEffect } from 'react'
import { isMobileAtom } from '@/store/viewport'

export function ViewportProvider() {
  const setIsMobile = useSetAtom(isMobileAtom)

  const handleResize = (event: MediaQueryListEvent) => {
    setIsMobile(!event.matches)
  }

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')
    setIsMobile(!query.matches)
    query.addEventListener('change', handleResize)
    return () => {
      query.removeEventListener('change', handleResize)
    }
  }, [])

  return null
}
