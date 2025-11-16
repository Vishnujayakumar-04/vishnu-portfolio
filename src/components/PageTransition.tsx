import { motion } from 'framer-motion';

const PageTransition = () => {
  return (
    <motion.div
      className="page-transition"
      initial={{ x: '-100%' }}
      animate={{ x: '0%' }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-display font-bold text-gradient"
      >
        Loading...
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;