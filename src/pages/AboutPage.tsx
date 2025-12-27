import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import MinimalAnimatedBackground from '../components/MinimalAnimatedBackground';

// Tech stack icons - using same icons as My Tech Stack section
const iconUrls: Record<string, string> = {
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'ReactJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'NextJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'Tailwind CSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  'Framer Motion': 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
  'Shadcn': 'https://ui.shadcn.com/favicon.ico',
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
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
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
  { name: 'Python' },
];

// Convert to array format for rendering
const techIcons = techStack.map(tech => ({
  name: tech.name,
  src: iconUrls[tech.name] || '',
}));

const AboutPage = () => {
  return (
    <SectionWrapper>
      <MinimalAnimatedBackground />
      <ParticlesBackground className="opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center md:items-start w-full"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 text-center md:text-left w-full">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">About Me</span>
          </h1>
          
          <div className="space-y-2 sm:space-y-3 text-text-secondary w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xs sm:text-sm md:text-base leading-relaxed"
            >
              Motivated and detail-oriented Computer Science student with strong fundamentals in programming, web development, and problem-solving. Experienced in academic projects, internships, and technical tools commonly used in development workflows. Skilled in applying analytical thinking, debugging techniques, and structured approaches to complete tasks efficiently.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="pt-2 space-y-2 sm:space-y-3"
            >
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-display font-semibold text-text-primary mb-1">Hands-on experience with:</h3>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm md:text-base font-display font-semibold text-text-primary mb-1">Frontend & Mobile:</h4>
                <p className="text-xs sm:text-sm md:text-base">HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, Tailwind CSS, Framer Motion, Shadcn</p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm md:text-base font-display font-semibold text-text-primary mb-1">Backend & Server:</h4>
                <p className="text-xs sm:text-sm md:text-base">NodeJS, ExpressJS, REST API</p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm md:text-base font-display font-semibold text-text-primary mb-1">Database & Cloud:</h4>
                <p className="text-xs sm:text-sm md:text-base">MongoDB, SQL, Firebase</p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm md:text-base font-display font-semibold text-text-primary mb-1">Tools & DevOps:</h4>
                <p className="text-xs sm:text-sm md:text-base">GitHub, Vercel, Postman, npm</p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm md:text-base font-display font-semibold text-text-primary mb-1">Programming Languages:</h4>
                <p className="text-xs sm:text-sm md:text-base">Java, Python</p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm md:text-base font-display font-semibold text-text-primary mb-1">Design Tools:</h4>
                <p className="text-xs sm:text-sm md:text-base">Figma</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="pt-2 sm:pt-4 text-xs sm:text-sm md:text-base leading-relaxed"
            >
              Capable of adapting quickly to new environments, learning emerging technologies, and contributing effectively in both individual and team-based settings. Seeking opportunities to develop technical skills further and grow within a forward-thinking organization.
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center w-full"
        >
          <div className="w-full max-w-xs sm:max-w-sm animated-border-box p-3 sm:p-4 rounded-xl hover:shadow-lg hover:shadow-[#FFA500]/20 transition-all duration-300">
            <div className="rounded-xl overflow-hidden mb-3 sm:mb-4">
              <motion.img
                src="/Assets/Profile.jpg"
                alt="Vishnu J"
                className="w-full h-auto rounded-xl max-h-80 object-cover"
                initial={{ scale: 1.1, filter: 'blur(8px)' }}
                animate={{ scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8 }}
              />
            </div>
            
            <h3 className="text-lg sm:text-xl font-display font-semibold text-text-primary mb-2 sm:mb-3 text-center">
              Tech I Work With
            </h3>

            <div className="w-full grid grid-cols-5 gap-2 sm:gap-3 justify-items-center">
              {techIcons.map((icon) => (
                <motion.div
                  key={icon.name}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-background-accent/40 border border-text-accent/20 flex items-center justify-center shadow-lg shadow-[#FFA500]/20"
                >
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      // Try alternative URL for Shadcn
                      if (icon.name === 'Shadcn') {
                        target.src = 'https://ui.shadcn.com/favicon.ico';
                      } else if (!icon.src) {
                        target.style.display = 'none';
                      }
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutPage;