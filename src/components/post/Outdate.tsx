import { useEffect, useState } from 'react'
import { getDiffInDays, getFormattedDate } from '@/utils/date'
import { motion, AnimatePresence } from 'framer-motion'

export function Outdate({ lastMod }: { lastMod: Date }) {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const diffDays = getDiffInDays(lastMod)
    if (diffDays > 30) {
      setIsShow(true)
    }
  }, [lastMod])

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className="flex justify-center text-sm p-4 rounded-lg bg-amber-300/10 border border-amber-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span>
            这篇文章最后修改于 {getFormattedDate(lastMod)}
            ，部分内容可能已经不适用，如有疑问可联系作者。
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
