import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedButton from '../components/AnimatedButton';
import TechStackSection from '../components/TechStackSection';
import MinimalAnimatedBackground from '../components/MinimalAnimatedBackground';
import { useState, useEffect } from 'react';
import resumePdf from '../../Assets/Vishnu Resume.pdf';

// Projects data
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

const HomePage = () => {
  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const jobTitles = ["Computer Science Student", "Web & Mobile App Development Enthusiast", "Creative Designer","Social Media Manager"];

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [jobTitles.length]);

      return (
        <>
          <SectionWrapper className="relative min-h-screen">
            <MinimalAnimatedBackground />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:pr-2 xl:pr-4 max-w-full lg:max-w-xl"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
                Hi, I'm{" "}
                <span className="font-dancing text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text inline-block hover:scale-105 transition-transform">
                  Vishnu J
                </span>
              </h1>
              <h2 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4">
                <span className="inline-block whitespace-nowrap">
                  <span className="text-white">I'm a </span>
                <motion.span
                  key={jobTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                    className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text inline-block"
                >
                  {jobTitles[jobTitleIndex]}
                </motion.span>
                </span>
              </h2>
              <p className="font-sans text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 max-w-2xl font-light text-left sm:text-justify">
                I am a Computer Science student with developing skills in web development, mobile application fundamentals, UI/UX concepts, digital design, and social media content management.
                I enjoy learning new technologies, solving problems, and creating clean, user-friendly digital experiences. 
                I focus on consistent improvement and applying both technical and creative skills to meaningful projects.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                <AnimatedButton
                  text="Get in Touch"
                  link="/contact"
                  className="font-display font-semibold bg-text-accent text-background-primary hover:bg-text-accent/90 w-full sm:w-auto"
                />
                <AnimatedButton
                  text="Resume"
                  link={resumePdf}
                  isExternal
                  className="font-display font-semibold border-2 border-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 [background-clip:padding-box] relative w-full sm:w-auto
                  before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-[#FFD700] before:via-[#FFA500] before:to-[#FF4500] before:blur-xl before:opacity-0 before:transition-opacity hover:before:opacity-30"
                />
              </div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-light via-gold-DEFAULT to-gold-dark p-1">
                  <div className="rounded-full overflow-hidden w-full h-full bg-background-primary">
                    <img
                      src="/Assets/Profile.jpg"
                      alt="Vishnu J"
                      className="w-full h-full object-cover object-center scale-150"
                      style={{
                        objectPosition: "center 50%"
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section (moved up under hero) */}
          <section id="skills" className="mt-6 sm:mt-8">
            <TechStackSection />
          </section>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-transparent">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text px-4"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-secondary text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
        >
          A selection of my best work in web development, desktop applications, AI-powered tools,
          and smart systems, focused on clean UI, performance, and real-world problem solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"
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

        {/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center mt-8 sm:mt-10"
            >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-white font-semibold hover:shadow-lg hover:shadow-[#FFA500]/50 hover:scale-105 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            View All Projects
          </Link>
        </motion.div>
      </section>


      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col items-center"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 tracking-wider-plus uppercase text-center bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text px-4">
          Get In Touch
        </h2>
        <p className="text-text-secondary text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-4 sm:mb-5 font-normal text-center px-4 leading-snug line-clamp-3 overflow-hidden">
          Ready to bring your ideas to life? Let's collaborate! Whether you're a startup, established company, or individual with a vision, I'm here to help. From concept to execution, let's create something amazing together.
        </p>

        <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-md w-full px-4">
          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vishnu-jayakumar-5b42a8283/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-accent transition-all duration-300 group hover:scale-110"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background-accent/50 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFA500] group-hover:to-[#FF4500] group-hover:shadow-lg group-hover:shadow-[#FFA500]/50 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/.mr.p.r.i.n.c.e.?igsh=MW8wM2N3dGFleDkzeg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-accent transition-all duration-300 group hover:scale-110"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background-accent/50 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFA500] group-hover:to-[#FF4500] group-hover:shadow-lg group-hover:shadow-[#FFA500]/50 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Vishnujayakumar-04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-accent transition-all duration-300 group hover:scale-110"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background-accent/50 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFA500] group-hover:to-[#FF4500] group-hover:shadow-lg group-hover:shadow-[#FFA500]/50 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="py-8 text-center">
        <p className="text-text-secondary text-sm">
          @Designed By{" "}
          <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text font-semibold">
            VISHNU J
          </span>
        </p>
      </div>
    </>
  );
};

export default HomePage;