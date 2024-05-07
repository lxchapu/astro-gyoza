import * as Dialog from '@radix-ui/react-dialog'
import { sponsor } from '@/config.json'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function ActionAside() {
  return (
    <div
      className="absolute left-0 bottom-0 flex flex-col gap-4"
      style={{
        transform: 'translateY(calc(100% + 24px))',
      }}
    >
      <ShareButton />
      <DonateButton />
    </div>
  )
}

function ShareButton() {
  return (
    <button
      type="button"
      aria-label="Share this post"
      className="size-6 text-xl leading-none hover:text-accent"
    >
      <i className="iconfont icon-share"></i>
    </button>
  )
}

function DonateButton() {
  const [isOpen, setIsOpen] = useState(false)
  const contentZIndex = 900
  const overlayZIndex = contentZIndex - 1

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Donate to author"
          className="size-6 text-xl leading-none hover:text-accent"
        >
          <i className="iconfont icon-user-heart"></i>
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-zinc-50/80 dark:bg-neutral-900/80"
                style={{ zIndex: overlayZIndex }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0.1 } }}
              ></motion.div>
            </Dialog.Overlay>

            <Dialog.Content
              className="fixed inset-0 flex items-center justify-center"
              style={{ zIndex: contentZIndex }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsOpen(false)
                }
              }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
              >
                <h2 className="text-center mb-5">感谢您的支持，这将成为我前进的最大动力。</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                  <img
                    className="size-[300px] object-cover"
                    src={sponsor.wechat}
                    alt="微信赞赏码"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
