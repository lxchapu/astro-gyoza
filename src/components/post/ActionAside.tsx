import * as Dialog from '@radix-ui/react-dialog'
import { sponsor, site } from '@/config.json'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import * as QR from 'qrcode.react'
import { useAtomValue } from 'jotai'
import { metaSlugAtom, metaTitleAtom } from '@/store/metaInfo'
import clsx from 'clsx'

const contentZIndex = 900
const overlayZIndex = contentZIndex - 1

interface ShareData {
  url: string
  text: string
}

const shareList = [
  {
    name: 'Twitter',
    icon: 'icon-x',
    onClick: (data: ShareData) => {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(data.url)}&text=${encodeURIComponent(data.text)}&via=${encodeURIComponent(site.title)}`,
      )
    },
  },
  {
    name: '复制链接',
    icon: 'icon-link',
    onClick: (data: ShareData) => {
      navigator.clipboard.writeText(data.url)
    },
  },
]

function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return isClient
}

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
  const isClient = useIsClient()
  const [isOpen, setIsOpen] = useState(false)
  const postSlug = useAtomValue(metaSlugAtom)
  const postTitle = useAtomValue(metaTitleAtom)

  if (!isClient) return null

  const url = new URL(postSlug, site.url).href
  const text = `嘿，我发现了一片宝藏文章「${postTitle}」哩，快来看看吧！`

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Share this post"
          className="size-6 text-xl leading-none hover:text-accent"
        >
          <i className="iconfont icon-share"></i>
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-gray-800/40"
                style={{ zIndex: overlayZIndex }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
                className="bg-primary rounded-lg p-2 min-w-[420px] border border-primary flex flex-col"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <h2 className="px-3 py-1 font-bold">分享此内容</h2>
                <hr className="my-2 border-primary" />
                <div className="px-3 py-2 grid grid-cols-[180px_auto] gap-3">
                  <QR.QRCodeSVG value={url} size={180} />
                  <div className="flex flex-col gap-2">
                    <div className='text-sm'>分享到...</div>
                    <ul className="flex flex-col gap-2">
                      {shareList.map((item) => (
                        <li
                          className="px-2 py-1 flex gap-2 cursor-pointer rounded-md hover:bg-secondary"
                          key={item.name}
                          onClick={() => item.onClick({ url, text })}
                          role="button"
                          aria-label={`Share to ${item.name}`}
                        >
                          <i className={clsx('iconfont text-accent', item.icon)}></i>
                          <span>{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

function DonateButton() {
  const [isOpen, setIsOpen] = useState(false)

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
                exit={{ opacity: 0 }}
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
