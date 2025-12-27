import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground = ({ className = '' }: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animated grid
    let animationFrame: number;
    let time = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 50;
      const lineColor = 'rgba(255, 215, 0, 0.1)';
      
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + (time * 0.1) % gridSize, 0);
        ctx.lineTo(x + (time * 0.1) % gridSize, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + (time * 0.1) % gridSize);
        ctx.lineTo(canvas.width, y + (time * 0.1) % gridSize);
        ctx.stroke();
      }

      time += 1;
      animationFrame = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Floating orbs animation variants
  const orbVariants = {
    animate: {
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const orbVariants2 = {
    animate: {
      y: [0, 40, 0],
      x: [0, -25, 0],
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.5, 0.2],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  const orbVariants3 = {
    animate: {
      y: [0, -50, 0],
      x: [0, 30, 0],
      scale: [1, 1.15, 1],
      opacity: [0.25, 0.55, 0.25],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };

  // Floating shapes variants
  const shapeVariants = {
    animate: {
      rotate: [0, 360],
      y: [0, -40, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Animated Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Gradient Orbs - Responsive */}
      <motion.div
        className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] rounded-full blur-3xl opacity-30"
        variants={orbVariants}
        animate="animate"
      />
      
      <motion.div
        className="absolute top-1/2 right-4 sm:right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-[#FF4500] via-[#FFA500] to-[#FFD700] rounded-full blur-3xl opacity-25"
        variants={orbVariants2}
        animate="animate"
      />
      
      <motion.div
        className="absolute bottom-20 left-1/4 sm:left-1/3 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-r from-[#FFA500] via-[#FFD700] to-[#FF4500] rounded-full blur-3xl opacity-20"
        variants={orbVariants3}
        animate="animate"
      />

      {/* Additional smaller orbs - Responsive */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-15"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          },
        }}
      />

      {/* Floating 3D Shapes - Responsive */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 border-[#FFD700] opacity-20"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
        variants={shapeVariants}
        animate="animate"
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-[#FFA500] opacity-25"
        style={{
          transform: 'rotate(45deg)',
        }}
        animate={{
          rotate: [45, 405],
          y: [0, -30, 0],
          transition: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      />

      <motion.div
        className="absolute top-2/3 left-1/4 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 border-2 border-[#FF4500] opacity-20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="url(#gradient1)"
          strokeWidth="2"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF4500" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background-primary opacity-40" />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

