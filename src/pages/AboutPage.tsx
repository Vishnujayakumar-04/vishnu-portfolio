import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import ThreeScene from '../components/ThreeScene';

// For demo, using placeholder icons
const techIcons = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
];

const AboutPage = () => {
  return (
    <SectionWrapper>
      <ParticlesBackground className="opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center md:items-start"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 md:mb-6 text-center md:text-left">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">About Me</span>
          </h1>
          
          <div className="space-y-2 sm:space-y-3 md:space-y-4 text-text-secondary">
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
                <h4 className="text-xs sm:text-sm md:text-base font-display font-semibold text-text-primary mb-1">Web Technologies:</h4>
                <p className="text-xs sm:text-sm md:text-base">HTML, CSS, JavaScript, Bootstrap, React (Basics), Node.js (Learning)</p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm md:text-base font-display font-semibold text-text-primary mb-1">Databases:</h4>
                <p className="text-xs sm:text-sm md:text-base">MySQL, Firebase (Basics)</p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm md:text-base font-display font-semibold text-text-primary mb-1">Design &amp; Editing Tools:</h4>
                <p className="text-xs sm:text-sm md:text-base">Adobe Photoshop, Adobe XD, Canva, CapCut, DaVinci Resolve, Filmora</p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm md:text-base font-display font-semibold text-text-primary mb-1">Other Skills:</h4>
                <p className="text-xs sm:text-sm md:text-base">UI/UX Principles, Responsive Design, MS Word, Excel, PowerPoint</p>
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
          className="md:w-1/2 flex flex-col items-center"
        >
          <div className="w-full max-w-xs sm:max-w-sm animated-border-box p-4 sm:p-6 rounded-xl hover:shadow-lg hover:shadow-[#FFA500]/20 transition-all duration-300">
            <div className="rounded-xl overflow-hidden mb-6">
              <motion.img
                src="/Assets/Profile.jpg"
                alt="Vishnu J"
                className="w-full h-auto rounded-xl max-h-80 object-cover"
                initial={{ scale: 1.1, filter: 'blur(8px)' }}
                animate={{ scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8 }}
              />
            </div>
            
            <h3 className="text-lg sm:text-xl font-display font-semibold text-text-primary mb-3 sm:mb-4 text-center">
              Tech I Work With
            </h3>
            
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px]">
              <ThreeScene icons={techIcons} />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutPage;