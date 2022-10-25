import { motion } from 'framer-motion'

const AnimatedRoute = ({ children }: { children: any }) => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0, position: 'absolute' }}
        animate={{
          opacity: 1,
          transition: { duration: 0.6, delay: 0.6, timingFunction: 'ease' }
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.6, timingFunction: 'ease' }
        }}
      >
        {children}
      </motion.main>
    </>
  )
}

export default AnimatedRoute
