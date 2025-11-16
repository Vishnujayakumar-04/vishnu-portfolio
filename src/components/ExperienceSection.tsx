import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Senior Video Editor",
    company: "Creative Studios Inc.",
    location: "Mumbai, India",
    period: "2021 - Present",
    description: [
      "Lead editor for high-profile wedding films and corporate videos",
      "Managed a team of junior editors and established post-production workflows",
      "Implemented color grading standards and quality control processes",
    ],
  },
  {
    title: "Graphic Designer & Video Editor",
    company: "Digital Media Solutions",
    location: "Bangalore, India",
    period: "2019 - 2021",
    description: [
      "Created social media content for major brands",
      "Designed marketing materials and brand identity packages",
      "Edited promotional videos and product demonstrations",
    ],
  },
  {
    title: "Freelance Video Editor",
    company: "Self-Employed",
    location: "Remote",
    period: "2017 - 2019",
    description: [
      "Edited wedding films, music videos, and corporate content",
      "Collaborated with international clients on various projects",
      "Developed personal brand and client relationships",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-background-primary relative">
      {/* Title */}
      <motion.h2 
        className="text-4xl md:text-5xl font-display font-bold text-center mb-16 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      {/* Experience Timeline */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-text-accent/30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-text-accent" />
              </div>

              {/* Content */}
              <div className="bg-background-secondary rounded-xl p-6 ml-8 hover:shadow-card transition-shadow duration-300">
                <h3 className="text-xl font-display font-semibold text-text-primary mb-2">
                  {experience.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-text-secondary text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {experience.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {experience.location}
                  </span>
                </div>
                <h4 className="text-text-accent font-medium mb-3">
                  {experience.company}
                </h4>
                <ul className="list-disc list-inside text-text-secondary space-y-2">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 