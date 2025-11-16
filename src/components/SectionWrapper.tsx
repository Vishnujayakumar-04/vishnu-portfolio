import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

interface SectionWrapperProps {
  children: ReactNode;
  idName?: string;
  className?: string;
}

const SectionWrapper = ({ children, idName = '', className = '' }: SectionWrapperProps) => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="show"
      id={idName}
      className={`relative w-full mx-auto max-w-7xl min-h-screen flex items-center ${className}`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  );
};

export default SectionWrapper;