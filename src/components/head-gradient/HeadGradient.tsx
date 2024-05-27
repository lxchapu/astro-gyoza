import { motion } from 'framer-motion'

export function HeadGradient() {
  return (
    <motion.div
      className="absolute -z-1 top-0 inset-x-0 h-[350px] bg-gradient-to-r from-accent/5 to-accent/15"
      style={{
        maskImage: 'linear-gradient(black, transparent)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    ></motion.div>
  )
}
