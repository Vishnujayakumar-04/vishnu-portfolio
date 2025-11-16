import { motion } from 'framer-motion';

const Loader = () => {
  const welcomeText = "Welcome to the World of Vishnu J";
  const subText = "This isn't just a portfolio — it's a visual experience.";

  return (
    <div className="w-full h-screen flex justify-center items-center bg-background-primary relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-radial-gradient from-text-accent/20 via-transparent to-transparent opacity-50" />
      
      <div className="flex flex-col items-center gap-8 relative z-10 max-w-2xl px-4">
        {/* Welcome Text with typing effect */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {welcomeText.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.04 * index,
                ease: "easeOut"
            }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext with fade-in effect */}
        <motion.p
          className="text-lg md:text-xl font-sans text-text-secondary text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {subText}
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;