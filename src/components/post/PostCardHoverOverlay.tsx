import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function PostCardHoverOverlay() {
  const ref = useRef<HTMLDivElement>(null)
  const [enter, setEnter] = useState(false)

  const handleMouseEnter = () => {
    setEnter(true)
  }
  const handleMouseLeave = () => {
    setEnter(false)
  }
  const handleFocus = () => {
    setEnter(true)
  }
  const handleBlur = () => {
    setEnter(false)
  }

  useEffect(() => {
    const $ref = ref.current
    if (!$ref) return
    const $parent = $ref.parentElement?.parentElement
    if (!$parent) return

    $parent.addEventListener('mouseenter', handleMouseEnter)
    $parent.addEventListener('mouseleave', handleMouseLeave)
    $parent.addEventListener('focus', handleFocus)
    $parent.addEventListener('blur', handleBlur)

    return () => {
      $parent.removeEventListener('mouseenter', handleMouseEnter)
      $parent.removeEventListener('mouseleave', handleMouseLeave)
      $parent.removeEventListener('focus', handleFocus)
      $parent.removeEventListener('blur', handleBlur)
    }
  }, [])

  return (
    <>
      <div ref={ref} className="hidden"></div>
      <AnimatePresence>
        {enter && (
          <motion.div
            className="absolute inset-y-4 -inset-x-4 -z-1 bg-accent/10 rounded-lg"
            initial={{ opacity: 0.2, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            layout
            layoutId="post-card-hover-overlay"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
