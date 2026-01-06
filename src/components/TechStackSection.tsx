import { motion, useScroll, useTransform } from 'framer-motion';
import { Code } from 'lucide-react';
import { useRef } from 'react';

// Icon URLs mapping - all icons from reliable CDN sources with fallbacks
const iconUrls: Record<string, string> = {
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'ReactJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'NextJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'Tailwind CSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  'Framer Motion': 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
  'Shadcn': 'https://raw.githubusercontent.com/shadcn-ui/shadcn-ui/main/apps/www/public/icon.png',
  'NodeJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'ExpressJS': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDneBGnQL7E9hZDwztRO1GfQcCj1FqRrhBw&s',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'GitHub': 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png',
  'Vercel': 'https://img.icons8.com/ios_filled/1200/vercel.jpg',
  'Postman': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'npm': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
  'Figma': 'https://www.shutterstock.com/image-vector/figma-mobile-app-icon-on-260nw-2622289095.jpg',
  'Firebase': 'https://img.icons8.com/color/512/firebase.png',
  'REST API': 'https://miro.medium.com/1*106km8msNjMje898Y6H7ww.png',

};

const techStack = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'ReactJS' },
  { name: 'NextJS' },
  { name: 'Tailwind CSS' },
  { name: 'Framer Motion' },
  { name: 'Shadcn' },
  { name: 'NodeJS' },
  { name: 'ExpressJS' },
  { name: 'MongoDB' },
  { name: 'SQL' },
  { name: 'GitHub' },
  { name: 'Vercel' },
  { name: 'Postman' },
  { name: 'Java' },
  { name: 'npm' },
  { name: 'Figma' },
  { name: 'Firebase' },
  { name: 'REST API' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const TechStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  // Transform scroll progress to triangle formation (0 = start, 1 = full)
  const triangleScale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const triangleOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, 1]);
  const triangleBlur = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start"
    >
      <div className="relative w-full max-w-5xl mx-auto mb-4 sm:mb-6">
        {/* Glowing Yellow Triangle Outline - CSS Based */}
        <div className="relative w-full flex items-center justify-center py-8 sm:py-12 md:py-16">
          <div className="glowing-triangle-container">
            {/* CSS Border Triangle with scroll-based formation animation */}
            <motion.div
              style={{
                scale: triangleScale,
                opacity: triangleOpacity,
                filter: `blur(${triangleBlur}px)`,
              }}
              className="glowing-triangle"
            ></motion.div>
            
            {/* Text inside triangle */}
            <div className="relative flex flex-col items-center -mt-8 z-10">
              <p className="text-xs tracking-[3px] opacity-70">BETTER THAN YESTERDAY.</p>
              <h2 className="text-4xl font-extrabold mt-1">My Tech Stack</h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 mt-3 sm:mt-4"
        >
          {techStack.map((tech) => {
            const iconUrl = iconUrls[tech.name];
            
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(255, 165, 0, 0.4)',
                  transition: { duration: 0.2 },
                }}
                className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full
                           bg-background-accent/60 backdrop-blur-md
                           border border-text-accent/15
                           hover:border-[#FFA500]/50
                           transition-all duration-300 cursor-pointer
                           hover:bg-background-accent/70
                           shadow-lg shadow-black/10
                           hover:shadow-xl hover:shadow-[#FFA500]/20"
              >
                <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0 inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  {iconUrl ? (
                    <img 
                      src={iconUrl} 
                      alt={`${tech.name} icon`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        // Try alternative CDN source if first fails
                        const target = e.target as HTMLImageElement;
                        const techName = tech.name.toLowerCase().replace(/\s+/g, '');
                        
                        // Alternative sources
                        const alternatives: Record<string, string> = {
                          'html': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
                          'css': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
                          'javascript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
                          'typescript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
                          'reactjs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
                          'nextjs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
                          'tailwindcss': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
                          'framermotion': 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
                          'shadcn': 'https://raw.githubusercontent.com/shadcn-ui/shadcn-ui/main/apps/www/public/icon.png',
                          'nodejs': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
                          'expressjs': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDneBGnQL7E9hZDwztRO1GfQcCj1FqRrhBw&s',
                          'mongodb': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
                          'sql': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
                          'github': 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png',
                          'vercel': 'https://img.icons8.com/ios_filled/1200/vercel.jpg',
                          'postman': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
                          'java': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
                          'npm': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg',
                          'figma': 'https://www.shutterstock.com/image-vector/figma-mobile-app-icon-on-260nw-2622289095.jpg',
                          'firebase': 'https://img.icons8.com/color/512/firebase.png',
                          'restapi': 'https://miro.medium.com/1*106km8msNjMje898Y6H7ww.png',

                        };
                        
                        const altUrl = alternatives[techName];
                        if (altUrl && target.src !== altUrl) {
                          target.src = altUrl;
                        } else {
                          // Final fallback - hide image and show code icon
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.fallback-icon')) {
                            const fallback = document.createElement('span');
                            fallback.className = 'fallback-icon';
                            fallback.innerHTML = '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
                            parent.appendChild(fallback);
                          }
                        }
                      }}
                    />
                  ) : (
                    <Code className="w-full h-full transition-transform duration-300 group-hover:scale-110 text-text-accent" />
                  )}
                </span>
                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
