import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import ParticlesBackground from '../components/ParticlesBackground';

// Demo projects data
const projects = [
  {
    name: "MOZO - Handyman App",
    description:
      "A mobile application for finding professional handymen. The app helps promote part-time jobs and recommends handymen within their geo-location.",
    tags: [
      {
        name: "mobile",
        color: "blue-gradient",
      },
      {
        name: "geolocation",
        color: "green-gradient",
      },
      {
        name: "android",
        color: "violet-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "#",
    demo_link: "#",
  },
  {
    name: "Real-Time Object Detection Android App",
    description:
      "An Android application for real-time object detection, implemented with an intuitive user interface to achieve high accuracy in object recognition.",
    tags: [
      {
        name: "android",
        color: "blue-gradient",
      },
      {
        name: "ml",
        color: "orange-gradient",
      },
      {
        name: "computer-vision",
        color: "violet-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "#",
    demo_link: "#",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with user authentication, product management, cart functionality, and payment processing integration.",
    tags: [
      {
        name: "react",
        color: "blue-gradient",
      },
      {
        name: "mongodb",
        color: "green-gradient",
      },
      {
        name: "tailwind",
        color: "violet-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com/",
    demo_link: "https://example.com/",
  },
  {
    name: "AI Content Generator",
    description:
      "An AI-powered application that generates various types of content including blog posts, social media captions, and marketing copy.",
    tags: [
      {
        name: "nextjs",
        color: "blue-gradient",
      },
      {
        name: "openai",
        color: "orange-gradient",
      },
      {
        name: "typescript",
        color: "violet-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com/",
    demo_link: "https://example.com/",
  },
  {
    name: "Task Management System",
    description:
      "A collaborative task management platform with real-time updates, task assignment, progress tracking, and deadline notifications.",
    tags: [
      {
        name: "react",
        color: "blue-gradient",
      },
      {
        name: "firebase",
        color: "orange-gradient",
      },
      {
        name: "redux",
        color: "violet-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com/",
    demo_link: "https://example.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "A responsive portfolio website with animated transitions, interactive elements, and a contact form, showcasing my skills and projects.",
    tags: [
      {
        name: "react",
        color: "blue-gradient",
      },
      {
        name: "threejs",
        color: "green-gradient",
      },
      {
        name: "framer",
        color: "violet-gradient",
      },
    ],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com/",
    demo_link: "https://example.com/",
  },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    setAnimateCard({ y: 100, opacity: 0 });
    
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

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
            <span className="violet-gradient">My Projects</span>
          </h1>
          <p className="text-text-secondary text-center max-w-2xl">
            Explore my portfolio of projects that showcase my skills in web development, 
            design, and problem-solving. Each project represents a unique challenge and solution.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['All', 'Web App', 'Mobile App', 'UI/UX', 'Other'].map((category) => (
              <motion.div
                key={category}
                onClick={() => handleFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`py-2 px-4 rounded-full cursor-pointer transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-text-accent text-white'
                    : 'bg-background-accent text-text-secondary'
                }`}
              >
                {category}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsPage;