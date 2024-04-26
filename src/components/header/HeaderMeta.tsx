import { siteConfig } from '@/config'
import { AnimatePresence, motion } from 'framer-motion'
import { useHeaderMetaInfo, useShouldHeaderMetaShow } from './hooks'

export function HeaderMeta() {
  const { title, description, slug } = useHeaderMetaInfo()
  const shouldShow = useShouldHeaderMetaShow()

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="absolute inset-0 z-1 flex items-center justify-between md:px-10"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
        >
          <div className="grow min-w-0">
            <div className="truncate text-gray-600/60 dark:text-gray-300/60 text-xs">
              {description}
            </div>
            <h2 className="truncate text-lg">{title}</h2>
          </div>
          <div className="hidden md:block min-w-0 text-right">
            <div className="text-gray-600/60 dark:text-gray-300/60 text-xs truncate">{slug}</div>
            <div className="text-gray-600 dark:text-gray-300">{siteConfig.title}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
