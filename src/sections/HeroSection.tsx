import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import resumePdf from '../../assets/Vishnu_Resume.pdf';

const HeroSection = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0a0f25] to-[#050816]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FFD700]/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF4500]/[0.03] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-24 pb-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-400 text-sm sm:text-base font-medium tracking-wide mb-3">
              Hi, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="font-dancing bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
                Vishnu J
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mb-6">
              Cloud & DevOps Engineer
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
              M.Sc. Computer Science graduate focused on AWS Cloud infrastructure,
              DevOps automation, CI/CD pipelines, containerization, and scalable
              deployment workflows. Building reliable, production-grade systems.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-black hover:opacity-90 hover:shadow-lg hover:shadow-[#FFA500]/20 transition-all duration-300"
              >
                View Projects
              </button>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-semibold border border-white/[0.12] text-white hover:border-[#FFD700]/40 hover:text-[#FFD700] transition-all duration-300"
              >
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-xl text-sm font-semibold border border-white/[0.12] text-white hover:border-[#FFD700]/40 hover:text-[#FFD700] transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] p-[2px]">
                <div className="rounded-full overflow-hidden w-full h-full bg-[#050816]">
                  <img
                    src="/assets/Profile.jpg"
                    alt="Vishnu J — Cloud & DevOps Engineer"
                    className="w-full h-full object-cover object-center scale-150"
                    style={{ objectPosition: 'center 50%' }}
                    loading="eager"
                  />
                </div>
              </div>
              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD700]/10 via-[#FFA500]/10 to-[#FF4500]/10 blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center pb-8"
        >
          <motion.button
            onClick={() => {
              const el = document.getElementById('about');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 hover:text-gray-400 transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
