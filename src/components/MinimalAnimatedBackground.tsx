import { motion } from 'framer-motion';

interface MinimalAnimatedBackgroundProps {
  className?: string;
}

const MinimalAnimatedBackground = ({ className = '' }: MinimalAnimatedBackgroundProps) => {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-primary to-background-accent/30" />
      
      {/* Animated Overlay for subtle color shift */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#FFA500]/5"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Floating Orbs - Minimal */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-[#FFD700]/10 via-[#FFA500]/8 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-[#FF4500]/8 via-[#FFA500]/6 to-transparent rounded-full blur-3xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Minimal Floating Dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#FFA500] rounded-full opacity-20"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Subtle Radial Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background-primary/50"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default MinimalAnimatedBackground;

