import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedButton from '../components/AnimatedButton';
import CertificateCard from '../components/CertificateCard';
import TimelineSection, { TimelineItem } from '../components/TimelineSection';
import { useState, useEffect } from 'react';
import resumePdf from '../../Assets/Vishnu Resume.pdf';

// Internship data
const internshipData: TimelineItem[] = [
  {
    title: "Image Creative Education",
    subtitle: "SWARAN AAKARSH INFOTAINMENT",
    description: "For Adobe Xd, Premier Pro, After Effects.",
    location: "Thiruvalluvar Salai, Iyyanar Nagar, Pudupalaiyam, Puducherry",
    durationBadge: "One Month Internship",
    dateRange: "7 - 30 June 2023",
    certificateLink: "/Assets/Image Creative.jpg"
  },
  {
    title: "Integra Software Solution",
    subtitle: "IT Support & Help Desk with a certificate of completion",
    description: "Hands-on in IT Support: maintenance, troubleshooting, technical support. Certificate clickable for verification.",
    location: "Pakkamudayanpet, Annamalai Nagar, Puducherry",
    durationBadge: "Fifteen Days Internship",
    dateRange: "11 - 28 November 2022",
    certificateLink: "/Assets/Integra Intern Certificate.jpg"
  }
];

// Education data
const educationData: TimelineItem[] = [
  {
    title: "Pondicherry University",
    subtitle: "M.Sc. Computer Science (2024–2026)",
    description: "CGPA: 7.75",
    location: "Puducherry",
    durationBadge: "2024–2026",
    dateRange: "Pursuing"
  },
  {
    title: "Sri Manakula Vinayagar Engineering College",
    subtitle: "BCA - Computer Application",
    description: "School of Arts and Science - CGPA - 7.90",
    location: "Puducherry",
    durationBadge: "2021-2024",
    certificateLink: "/certificates/bca.pdf"
  },
  {
    title: "Vidya Bhavan Higher Secondary School",
    subtitle: "HSC - Higher Secondary",
    description: "Puducherry - 67.8%",
    location: "Puducherry",
    durationBadge: "2020-2021",
    certificateLink: "/certificates/12th.pdf"
  },
  {
    title: "Petit Seminaire Higher Secondary School",
    subtitle: "SSLC - High School",
    description: "Puducherry - 49.6%",
    location: "Puducherry",
    durationBadge: "2018-2019",
    certificateLink: "/certificates/10th.pdf"
  }
];

const HomePage = () => {
  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const jobTitles = ["Computer Science Student", "Web & Mobile App Development Enthusiast", "Creative Designer","Social Media Manager"];

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SectionWrapper className="relative min-h-screen bg-background-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-background-accent/20 via-background-primary to-background-primary" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:pr-6 xl:pr-10 max-w-full lg:max-w-xl"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="font-dancing text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text inline-block hover:scale-105 transition-transform">
                  Vishnu J
                </span>
              </h1>
              <h2 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 sm:mb-6">
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
              <p className="font-sans text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-2xl font-light text-left sm:text-justify">
                I am a Computer Science student with developing skills in web development, mobile application fundamentals, UI/UX concepts, digital design, and social media content management.
                I enjoy learning new technologies, solving problems, and creating clean, user-friendly digital experiences. 
                I focus on consistent improvement and applying both technical and creative skills to meaningful projects.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
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
          <section id="skills" className="mt-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text px-4"
            >
              Skills
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
              {/* Technical Skills */}
          <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background-accent/10 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-text-accent/10 hover:border-text-accent/30 hover:shadow-lg hover:shadow-[#FFA500]/10 transition-all duration-300"
          >
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-3 sm:mb-4 md:mb-6 text-text-primary">
                  Technical Skills
            </h3>
                <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 md:gap-4">
                  {/* HTML */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background-primary/50 rounded-lg hover:bg-background-accent/20 hover:scale-105 hover:shadow-md hover:shadow-[#FFA500]/20 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-text-secondary">HTML</span>
                  </motion.div>

                  {/* CSS */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background-primary/50 rounded-lg hover:bg-background-accent/20 hover:scale-105 hover:shadow-md hover:shadow-[#FFA500]/20 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-text-secondary">CSS</span>
                  </motion.div>

                  {/* JavaScript */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background-primary/50 rounded-lg hover:bg-background-accent/20 hover:scale-105 hover:shadow-md hover:shadow-[#FFA500]/20 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-text-secondary">JavaScript</span>
                  </motion.div>

                  {/* React */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background-primary/50 rounded-lg hover:bg-background-accent/20 hover:scale-105 hover:shadow-md hover:shadow-[#FFA500]/20 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-text-secondary">React (Basics)</span>
                  </motion.div>

                  {/* MySQL */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background-primary/50 rounded-lg hover:bg-background-accent/20 hover:scale-105 hover:shadow-md hover:shadow-[#FFA500]/20 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-text-secondary">MySQL</span>
                  </motion.div>
                  </div>
                </motion.div>

              {/* Creative & Media Skills */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background-accent/10 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-text-accent/10 hover:border-text-accent/30 hover:shadow-lg hover:shadow-[#FFA500]/10 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-3 sm:mb-4 md:mb-6 text-text-primary">
                  Creative & Media Skills
                </h3>
                <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3 md:gap-4">
                  {/* Graphic Design */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background-primary/50 rounded-lg hover:bg-background-accent/20 hover:scale-105 hover:shadow-md hover:shadow-[#FFA500]/20 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-text-secondary">Graphic Design</span>
                  </motion.div>

                  {/* Photo Editing */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background-primary/50 rounded-lg hover:bg-background-accent/20 hover:scale-105 hover:shadow-md hover:shadow-[#FFA500]/20 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-text-secondary">Photo Editing</span>
                  </motion.div>

                  {/* Video Editing */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background-primary/50 rounded-lg hover:bg-background-accent/20 hover:scale-105 hover:shadow-md hover:shadow-[#FFA500]/20 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-text-secondary">Video Editing</span>
                  </motion.div>

                  {/* Social Media Management */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-background-primary/50 rounded-lg hover:bg-background-accent/20 hover:scale-105 hover:shadow-md hover:shadow-[#FFA500]/20 transition-all duration-300 cursor-default"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-medium text-text-secondary">Social Media Management</span>
                  </motion.div>
            </div>
          </motion.div>
            </div>
          </section>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text px-4"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Project Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background-accent/10 rounded-xl p-6 backdrop-blur-sm border border-text-accent/10 hover:border-text-accent/30 hover:shadow-lg hover:shadow-[#FFA500]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-2 sm:mb-3 text-text-primary">
              E-Commerce Platform
            </h3>
            <p className="text-text-secondary text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed flex-grow">
              A full-stack e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, and secure payment integration. Responsive design ensures seamless experience across all devices.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-background-accent text-text-secondary">
                React
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-background-accent text-text-secondary">
                Node.js
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-background-accent text-text-secondary">
                MongoDB
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-background-accent text-text-secondary">
                Express
              </span>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 hover:shadow-lg hover:shadow-[#FFA500]/50 hover:scale-105 text-white text-xs sm:text-sm rounded-md font-semibold transition-all duration-300"
            >
              View Project
            </a>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background-accent/10 rounded-xl p-6 backdrop-blur-sm border border-text-accent/10 hover:border-text-accent/30 hover:shadow-lg hover:shadow-[#FFA500]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-2 sm:mb-3 text-text-primary">
              Task Management App
            </h3>
            <p className="text-text-secondary text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed flex-grow">
              A collaborative task management application designed for teams. Includes real-time updates, task assignments, deadline tracking, and progress visualization. Built with modern web technologies for optimal performance.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-background-accent text-text-secondary">
                JavaScript
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-background-accent text-text-secondary">
                Firebase
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-background-accent text-text-secondary">
                CSS3
              </span>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 hover:shadow-lg hover:shadow-[#FFA500]/50 hover:scale-105 text-white text-xs sm:text-sm rounded-md font-semibold transition-all duration-300"
            >
              View Project
            </a>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background-accent/10 rounded-xl p-6 backdrop-blur-sm border border-text-accent/10 hover:border-text-accent/30 hover:shadow-lg hover:shadow-[#FFA500]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-2 sm:mb-3 text-text-primary">
              Weather Dashboard
            </h3>
            <p className="text-text-secondary text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed flex-grow">
              An intuitive weather dashboard providing real-time weather data and forecasts. Features location-based weather information, hourly and daily forecasts, and beautiful data visualizations. Clean and user-friendly interface.
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-background-accent text-text-secondary">
                HTML5
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-background-accent text-text-secondary">
                CSS3
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-background-accent text-text-secondary">
                JavaScript
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium bg-background-accent text-text-secondary">
                API
              </span>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 hover:shadow-lg hover:shadow-[#FFA500]/50 hover:scale-105 text-white text-xs sm:text-sm rounded-md font-semibold transition-all duration-300"
            >
              View Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
          Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-stretch">
          <CertificateCard title="Train to Transformed Data Scientist" imgSrc="/Assets/IMG_20250823_214143.jpg" description="Train to Transformed Data Scientist Certificate." />
          <CertificateCard title="NXT WAVE" imgSrc="/Assets/Certificate.png" description="NXT Wave AI Workshop Certificate." />
          <CertificateCard title="The Joy of Computing Using Python – NPTEL" imgSrc="/Assets/THE JOY OF COMPUTING USING PYTHON.png" description="NPTEL online course certificate for 'The Joy of Computing Using Python'." />
        </div>
      </section>

      {/* Internship Section - Timeline Format */}
      <div id="internships">
        <TimelineSection title="Internships" items={internshipData} />
              </div>

      {/* Education Section - Timeline Format */}
      <div id="education">
        <TimelineSection title="Education" items={educationData} />
        </div>

      {/* Achievements */}
      <section id="achievements" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
          Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-stretch">
          <CertificateCard title="Android App Development – 3rd Prize" imgSrc="/Assets/Android App Develipment.jpg" description="I won 3rd place in the Science Expo (2022) for my mobile application project ‘Handy Man App’. This achievement reflects my interest in building practical, innovative solutions." />
          <CertificateCard title="Poster Design Competition – 1st Prize" imgSrc="/Assets/Poster Designing.jpg" description="I secured 1st place in the Poster Design event at the Intra-Department Competition (2021), showcasing creativity and strong design skills." />
          <CertificateCard title="Industrial Visit Certificate – Nestsoft TechnoMaster" imgSrc="/Assets/industrial visit.jpg" description="I participated in an industrial visit to Cochin, Kerala conducted by Nestsoft TechnoMaster.in. The session covered SEO, Python, Web Development, Data Science, and Artificial Intelligence, improving my understanding of modern technologies." />
        </div>
      </section>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 flex flex-col items-center"
      >
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 tracking-wider-plus uppercase text-center bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text px-4">
          Get In Touch
        </h2>
        <p className="text-text-secondary text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-4 sm:mb-6 md:mb-8 font-normal text-center px-4">
          Ready to bring your ideas to life? Let's collaborate! Whether you're a startup, established company, or individual with a vision, I'm here to help. From concept to execution, let's create something amazing together.
        </p>

        <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-md w-full px-4">
          {/* Email */}
          <a
            href="mailto:vishnujayakumar4104@gmail.com"
            className="flex items-center gap-2 sm:gap-3 md:gap-4 text-text-secondary hover:text-text-accent transition-colors group w-full justify-center sm:justify-start px-2 sm:px-4"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-full bg-background-accent/50 flex items-center justify-center group-hover:bg-background-accent/70">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <span className="text-xs sm:text-sm md:text-base break-all">vishnujayakumar4104@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919487052144"
            className="flex items-center gap-2 sm:gap-3 md:gap-4 text-text-secondary hover:text-text-accent transition-colors group w-full justify-center sm:justify-start px-2 sm:px-4"
          >
            <div className="w-10 h-10 rounded-full bg-background-accent/50 flex items-center justify-center group-hover:bg-background-accent/70">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.5 2.5c-2.8-1.4-5.1-3.8-6.5-6.5l2.5-2.5c.2-.3.3-.7.2-1-.3-1.2-.5-2.4-.5-3.6 0-.5-.4-1-1-1H4c-.5 0-1 .5-1 1 0 9.4 7.6 17 17 17 .5 0 1-.5 1-1v-3.5c0-.5-.4-1-1-1zM12 3v10l3-3h6V3h-9z"/>
              </svg>
            </div>
            <span className="text-xs sm:text-sm md:text-base">+91 9487052144</span>
          </a>

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