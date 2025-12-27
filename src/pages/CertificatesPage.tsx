import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import CertificateCard from '../components/CertificateCard';
import MinimalAnimatedBackground from '../components/MinimalAnimatedBackground';

// Certificates data
const certificates = [
  {
    title: "Train to Transformed Data Scientist",
    imgSrc: "/Assets/IMG_20250823_214143.jpg",
    description: "Train to Transformed Data Scientist Certificate."
  },
  {
    title: "NXT WAVE",
    imgSrc: "/Assets/Certificate.png",
    description: "NXT Wave AI Workshop Certificate."
  },
  {
    title: "The Joy of Computing Using Python – NPTEL",
    imgSrc: "/Assets/THE JOY OF COMPUTING USING PYTHON.png",
    description: "NPTEL online course certificate for 'The Joy of Computing Using Python'."
  },
  {
    title: "ICT Academy Certificate",
    imgSrc: "/Assets/ICT ACADEMIY CERTIFICATE.png",
    description: "ICT Academy Certificate of completion."
  },
  {
    title: "Udemy Certificate",
    imgSrc: "/Assets/Udemy Certificate.jpg",
    description: "Udemy online course certificate."
  }
];

const CertificatesPage = () => {
  return (
    <SectionWrapper className="min-h-0 flex-col justify-start py-8">
      <MinimalAnimatedBackground />
      <ParticlesBackground className="opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-2 sm:mb-3">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
              Certificates
            </span>
          </h1>
          <p className="text-text-secondary text-center max-w-2xl text-xs sm:text-sm md:text-base px-4 line-clamp-2">
            A collection of my professional certifications, course completions, and achievements 
            that showcase my continuous learning and expertise in various technologies.
          </p>
        </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6 sm:gap-8 items-center w-full"
            >
          {/* First Row - 3 Certificates */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center items-start w-full max-w-7xl mx-auto">
            {certificates.slice(0, 3).map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-[450px] sm:max-w-[480px]"
              >
                <CertificateCard
                  title={certificate.title}
                  imgSrc={certificate.imgSrc}
                  description={certificate.description}
                />
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 Certificates Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center items-start w-full max-w-4xl mx-auto">
            {certificates.slice(3, 5).map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="w-full max-w-[450px] sm:max-w-[480px]"
              >
                <CertificateCard
                  title={certificate.title}
                  imgSrc={certificate.imgSrc}
                  description={certificate.description}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default CertificatesPage;

