import { useHeaderBgOpacity } from './hooks'

export function BluredBackground() {
  const opacity = useHeaderBgOpacity()

  return (
    <div
      className="absolute inset-0 -z-1 border-b border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 backdrop-saturate-150 backdrop-blur-lg transform-gpu"
      style={{
        opacity,
      }}
    ></div>
  )
}
