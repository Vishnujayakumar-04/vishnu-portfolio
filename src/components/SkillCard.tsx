import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillCardProps {
  name: string;
  icon: string;
  level: number;
  index: number;
}

const SkillCard = ({ name, icon, level, index }: SkillCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.5, 
            delay: index * 0.1 
          } 
        },
        hidden: { opacity: 0, y: 50 }
      }}
      className="p-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div 
        className="flex flex-col items-center glassmorphism p-6 rounded-xl w-[140px] h-[180px] relative overflow-hidden"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(145, 94, 255, 0.4)" }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-background-primary flex items-center justify-center mb-4"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ 
            scale: hover ? 1.1 : 1,
            rotate: hover ? 10 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <img src={icon} alt={name} className="w-10 h-10" />
        </motion.div>
        
        <h3 className="text-text-primary font-medium text-center">{name}</h3>
        
        <div className="w-full mt-4">
          <div className="w-full h-2 bg-background-primary rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-text-accent"
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                visible: { 
                  width: `${level}%`,
                  transition: { 
                    duration: 1.2, 
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut"
                  }
                },
                hidden: { width: 0 }
              }}
            />
          </div>
          <div className="text-xs text-text-secondary mt-1 text-right">
            {level}%
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;