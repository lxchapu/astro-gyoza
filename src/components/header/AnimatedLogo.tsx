import { AnimatePresence, motion } from 'framer-motion'
import { useShouldHeaderMetaShow, useIsMobile } from './hooks'
import { author } from '@/config.json'

export function AnimatedLogo() {
  const isMobile = useIsMobile()
  const shouldHeaderMetaShow = useShouldHeaderMetaShow()

  if (!isMobile) {
    return <Logo />
  }

  return (
    <AnimatePresence>
      {!shouldHeaderMetaShow && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Logo />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Logo() {
  return (
    <a className="block" href="/" title="这是首页吗？">
      <motion.img
        className="size-[40px] select-none object-cover rounded-2xl"
        src={author.avatar}
        alt="Logo"
        whileHover={{
          rotate: 360,
          transition: {
            ease: [0.4, 0, 0.2, 1],
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            velocity: 1,
            from: 0,
            to: 360
          }
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          velocity: 1
        }}
      />
    </a>
  )
}
