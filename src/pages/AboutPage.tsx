import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import ThreeScene from '../components/ThreeScene';
import AnimatedButton from '../components/AnimatedButton';

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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center md:items-start"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="violet-gradient">About Me</span>
          </h1>
          
          <div className="space-y-4 text-text-secondary">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I'm <span className="text-text-accent font-medium">Vishnu J</span> — a Software Developer, Graphic Designer, and Social Media Manager with a good foundation in both creative and technical skills.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              As a fresher, I enjoy exploring new ideas and turning them into simple and effective digital solutions. I work on poster design, photo editing, video editing, social media content, and basic front-end web development. I like combining creativity with technology to produce clean, meaningful work.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-4"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-2">I have hands-on experience with:</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>HTML, CSS, JavaScript</li>
                <li>Bootstrap, React (Basics), Node.js (Learning)</li>
                <li>MySQL and Firebase (Basics)</li>
                <li>UI/UX principles and responsive web design</li>
                <li>Adobe Photoshop, Adobe XD, Canva</li>
                <li>CapCut, DaVinci Resolve, Premiere Pro, Filmora (Basics)</li>
                <li>MS Word, Excel, PowerPoint</li>
              </ul>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="pt-4"
            >
              I've also worked on internships in IT support and digital media management, which helped me understand real-world workflows and teamwork.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="pt-4"
            >
              I'm always learning, improving my skills, and trying new creative approaches to everything I do.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="pt-6"
            >
              <AnimatedButton
                text="View Resume"
                link="/Assets/Software Developer.pdf"
                isExternal
                className="mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center"
        >
          <div className="w-full max-w-sm animated-border-box p-6 rounded-xl">
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
            
            <h3 className="text-xl font-semibold text-text-primary mb-4 text-center">
              Tech I Work With
            </h3>
            
            <div className="w-full h-[300px]">
              <ThreeScene icons={techIcons} />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutPage;