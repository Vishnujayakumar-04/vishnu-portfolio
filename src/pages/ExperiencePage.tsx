import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';

const ExperiencePage = () => {
  const experiences = [
    {
      company: "Integra Software Services Pvt. Ltd.",
      role: "IT Support & Help Desk",
      period: "Nov 2022 – Nov 2022",
      description: [
        "I successfully completed a 15-day internship in IT Support at Integra Software Services Pvt. Ltd.",
        "This experience helped me gain hands-on technical skills in system troubleshooting, IT maintenance, and support operations."
      ]
    },
    {
      company: "Luca Digital Solution",
      role: "Social Media Manager",
      period: "Sep 2025 – Nov 2025",
      description: [
        "Creating and editing videos, posters, and reels based on client requirements",
        "Managing and scheduling posts on Instagram, Facebook, and YouTube",
        "Developing creative ideas for social media engagement",
        "Supporting clients by maintaining consistent branding and online presence"
      ]
    }
  ];

  return (
    <SectionWrapper>
      <ParticlesBackground className="opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="violet-gradient">Experience</span>
          </h1>
          <p className="text-text-secondary text-center max-w-2xl">
            My professional journey and work experiences that have shaped my skills and expertise.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto w-full">
          <div className="relative w-full pt-8">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FF4500]" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-16 pl-12 md:pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 ml-2.5 md:left-1/2 md:-ml-2.5 w-3 h-3 rounded-full bg-[#FF4500] border-2 border-[#FFD700] z-10" />
                
                {/* Content */}
                <div className={`md:w-[48%] bg-background-accent/10 rounded-xl p-6 backdrop-blur-sm border border-text-accent/10 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <h3 className="text-2xl font-extrabold mb-2 tracking-wider text-text-primary">
                    {exp.company}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-text-secondary text-sm mb-4">
                    <span className="text-text-accent font-medium">{exp.role}</span>
                    <span>{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperiencePage;

