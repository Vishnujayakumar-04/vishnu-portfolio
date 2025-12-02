import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SkillCard from '../components/SkillCard';
import ParticlesBackground from '../components/ParticlesBackground';

// Demo skills data
const skills = [
  {
    name: "Web Programming",
    icon: "🌐",
    level: 85
  },
  {
    name: "Java",
    icon: "☕",
    level: 80
  },
  {
    name: "Adobe Photoshop",
    icon: "🎨",
    level: 90
  },
  {
    name: "Adobe XD",
    icon: "✏️",
    level: 85
  },
  {
    name: "MS Office",
    icon: "📊",
    level: 90
  }
];

const SkillsPage = () => {
  return (
    <SectionWrapper>
      <ParticlesBackground className="opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="violet-gradient">My Skills</span>
          </h1>
          <p className="text-text-secondary text-center max-w-2xl">
            I've developed expertise in various technologies and tools throughout my career.
            Here's an overview of my technical skills and proficiency levels.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={`skill-${index}`}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="text-gradient">Other Competencies</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Soft Skills
              </h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Effective Communication</li>
                <li>Team Collaboration</li>
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Adaptability</li>
              </ul>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Development Methodologies
              </h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Agile/Scrum</li>
                <li>Test-Driven Development</li>
                <li>CI/CD Pipelines</li>
                <li>Clean Code Principles</li>
                <li>Code Reviews</li>
              </ul>
            </div>
            
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Design Skills
              </h3>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>Responsive Web Design</li>
                <li>User Experience (UX)</li>
                <li>User Interface (UI)</li>
                <li>Design Systems</li>
                <li>Wireframing & Prototyping</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsPage;