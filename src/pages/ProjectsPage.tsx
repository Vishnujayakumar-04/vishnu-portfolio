import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import MinimalAnimatedBackground from '../components/MinimalAnimatedBackground';

// Projects data - Only working projects
const projects = [
  {
    slug: "tourist-guide-management",
    category: "Web / Travel",
    name: "Tourist Guide Management System",
    description:
      "A travel assistant app that shows places, routes, stay options, and recommendations so visitors can plan trips more easily.",
    tags: [
      { name: "Travel", color: "blue-gradient" },
      { name: "Maps & Routes", color: "green-gradient" },
      { name: "Recommendations", color: "violet-gradient" },
    ],
    status: "Coming Soon",
  },
  {
    slug: "pudocs-department-management",
    category: "Mobile Application",
    name: "PUDoCS - University Management System",
    description:
      "Centralized mobile app for students, staff & office with timetable, notices and admin controls.",
    tags: [
      { name: "React Native", color: "blue-gradient" },
      { name: "Firebase", color: "green-gradient" },
      { name: "TypeScript", color: "violet-gradient" },
    ],
    status: "In Progress • 65%",
    img: "/Projects/pudocs.png",
    summary: "Centralized mobile app for students, staff & office with timetable, notices and admin controls.",
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "Firestore", "Reanimated"],
    github: "https://github.com/Vishnujayakumar-04/PUDoCS",
    live: null,
  },
  {
    slug: "mozo-project",
    category: "Web Application",
    name: "Mozo Project",
    description:
      "Project details coming soon.",
    tags: [
      { name: "Web App", color: "blue-gradient" },
      { name: "Development", color: "green-gradient" },
    ],
    status: "Coming Soon",
  },
  {
    slug: "real-time-object-detection",
    category: "AI / Machine Learning",
    name: "Real Time Object Detection using TensorFlow",
    description:
      "Real-time object detection system using TensorFlow for identifying and tracking objects in live video streams.",
    tags: [
      { name: "TensorFlow", color: "blue-gradient" },
      { name: "AI/ML", color: "green-gradient" },
      { name: "Computer Vision", color: "violet-gradient" },
    ],
    status: "Coming Soon",
  },
];

const ProjectsPage = () => {
  return (
    <SectionWrapper>
      <MinimalAnimatedBackground />
      <ParticlesBackground className="opacity-15" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-10 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">My Projects</span>
          </h1>
          <p className="text-text-secondary text-center max-w-2xl mb-8 sm:mb-10">
            A selection of my best work in web development, mobile applications, AI-powered tools,
            and smart systems, focused on clean UI, performance, and real-world problem solving.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-background-accent/60 border border-text-accent/15 hover:border-text-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Decorative gradient line */}
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute -left-24 top-0 h-full w-64 rotate-12 bg-gradient-to-br from-[#FFD700]/30 via-[#FFA500]/10 to-transparent" />
              </div>

              <div className="relative p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-text-secondary">
                    {project.category}
                  </p>
                  {project.status && (
                    <span className="px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                      {project.status === "Coming Soon" ? "🚀 Coming Soon" : `🟡 ${project.status}`}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3">
                  <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
                    {project.name}
                  </span>
                </h3>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-background-primary/60 text-text-secondary"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A855F7] via-[#6366F1] to-[#EC4899] text-xs sm:text-sm font-semibold text-white hover:shadow-lg hover:shadow-[#6366F1]/40 hover:translate-y-0.5 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsPage;