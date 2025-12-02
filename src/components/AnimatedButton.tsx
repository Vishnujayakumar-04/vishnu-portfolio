import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AnimatedButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  isExternal?: boolean;
}

const AnimatedButton = ({ 
  text, 
  link, 
  onClick, 
  className = '', 
  icon,
  isExternal = false
}: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonContent = (
    <motion.div
      className={`relative button-glow overflow-hidden py-3 px-6 font-medium rounded-full flex items-center justify-center gap-2 transition-all duration-300 ${
        isHovered ? 'bg-text-accent text-white' : 'bg-background-accent text-white'
      } ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon && (
        <motion.span
          initial={{ x: 0 }}
          animate={{ x: isHovered ? -4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {icon}
        </motion.span>
      )}
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.span>
      
      {/* Blurred background effect */}
      <motion.div
        className="absolute inset-0 -z-10 bg-text-accent rounded-full opacity-30 blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 0.6 : 0, 
          scale: isHovered ? 1.1 : 0.8 
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  if (link) {
    if (isExternal) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          {buttonContent}
        </a>
      );
    }
    return (
      <Link to={link} onClick={onClick}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick}>
      {buttonContent}
    </button>
  );
};

export default AnimatedButton;