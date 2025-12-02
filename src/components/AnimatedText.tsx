import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delayMultiplier?: number;
}

const AnimatedText = ({ text, className = '', once = true, delayMultiplier = 0.1 }: AnimatedTextProps) => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * delayMultiplier, duration: 0.5 }
    }));
  }, [controls, delayMultiplier]);
  
  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          custom={index}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedText;