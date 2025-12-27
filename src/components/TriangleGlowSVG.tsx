import { motion } from 'framer-motion';
import triangleGlowDark from '../assets/triangle-glow-dark.svg';
import triangleGlowLight from '../assets/triangle-glow-light.svg';

interface TriangleGlowSVGProps {
  variant?: 'dark' | 'light';
  className?: string;
}

const TriangleGlowSVG = ({ variant = 'dark', className = '' }: TriangleGlowSVGProps) => {
  const triangleSrc = variant === 'dark' ? triangleGlowDark : triangleGlowLight;

  // Framer Motion animation variants for breathing effect
  const glowVariants = {
    pulse: {
      filter: [
        'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5)) drop-shadow(0 0 16px rgba(255, 215, 0, 0.3))',
        'drop-shadow(0 0 18px rgba(255, 215, 0, 0.85)) drop-shadow(0 0 36px rgba(255, 215, 0, 0.6)) drop-shadow(0 0 54px rgba(255, 215, 0, 0.4))',
        'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5)) drop-shadow(0 0 16px rgba(255, 215, 0, 0.3))',
      ],
      opacity: [0.9, 1, 0.9],
      scale: [1, 1.08, 1],
      transition: {
        duration: 2.5,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className={`svg-triangle-wrapper ${className}`}
      variants={glowVariants}
      animate="pulse"
    >
      <img 
        src={triangleSrc} 
        alt="Glowing Triangle" 
        className="svg-triangle"
      />
    </motion.div>
  );
};

export default TriangleGlowSVG;

