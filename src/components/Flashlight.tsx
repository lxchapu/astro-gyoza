import { useLayoutEffect, useState } from 'react'

export function Flashlight() {
  const [cursorX, setCursorX] = useState(0)
  const [cursorY, setCursorY] = useState(0)
  const isMobile = !window.matchMedia('(hover: hover)').matches

  if (isMobile) {
    return null
  }

  const backgroundImage = `radial-gradient(
    circle 16vmax at ${cursorX}px ${cursorY}px,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 80%,
    rgba(0, 0, 0, 0.8) 100%
  )`

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorX(event.clientX)
      setCursorY(event.clientY)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      style={{
        backgroundImage,
        display: isMobile ? 'none' : 'block',
      }}
    ></div>
  )
}
