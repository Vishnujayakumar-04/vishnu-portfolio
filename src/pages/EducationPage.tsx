import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';

const EducationPage = () => {
  return (
    <SectionWrapper>
      <ParticlesBackground className="opacity-20" />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-12 tracking-wider-plus uppercase text-center bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
          Education
        </h1>

        <div className="max-w-5xl mx-auto">
          <div className="relative w-full pt-8">
            {/* Horizontal timeline line */}
            <div className="hidden md:block absolute left-0 right-0 top-10 h-0.5 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500]" />

            <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-10">
              {/* MSc Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative md:flex-1 mb-16 md:mb-0"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-3 w-4 h-4 rounded-full bg-[#FF4500] border-2 border-[#FFD700] z-10" />
                <div className="bg-background-accent/10 rounded-xl p-6 backdrop-blur-sm border border-text-accent/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
                      <div className="md:flex-1">
                        <h3 className="text-2xl font-extrabold mb-2 tracking-wider uppercase bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
                          MSc - Computer Science
                        </h3>
                        <p className="text-xl text-text-primary mt-2">PONDICHERRY UNIVERSITY</p>
                        <p className="text-text-secondary mt-1">PUDUCHERRY</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                        <span className="text-text-secondary">2024 - 2026</span>
                        <span className="mt-2 px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-500">
                          CGPA: 7.75
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href="/Assets/Software Developer.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 text-white text-sm rounded-md shadow font-semibold"
                    >
                      Certificate
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* BCA Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative md:flex-1 mb-16 md:mb-0"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-3 w-4 h-4 rounded-full bg-[#FF4500] border-2 border-[#FFD700] z-10" />
                <div className="bg-background-accent/10 rounded-xl p-6 backdrop-blur-sm border border-text-accent/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
                      <div className="md:flex-1">
                        <h3 className="text-2xl font-extrabold mb-2 tracking-wider uppercase bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
                          BCA - Computer Application
                        </h3>
                        <p className="text-xl text-text-primary mt-2">Sri Manakula Vinayagar Engineering College</p>
                        <p className="text-text-secondary mt-1">School of Arts and Science</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                        <span className="text-text-secondary">2021 - 2024</span>
                        <span className="mt-2 px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-500">
                          CGPA: 7.90
                        </span>
                      </div>
                    </div>
                    {/* Semester Mark Sheets */}
                    <div className="mt-6">
                      <h4 className="text-lg font-bold text-center mb-4 text-text-primary">Semester Mark Sheets</h4>
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mx-auto text-center">
                        <a
                          href="/Assets/Ist-Semester Marksheet.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-background-secondary rounded p-3 text-text-accent hover:underline text-sm"
                        >
                          1st Semester
                        </a>
                        <a
                          href="/Assets/IIst-Semester Marksheet.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-background-secondary rounded p-3 text-text-accent hover:underline text-sm"
                        >
                          2nd Semester
                        </a>
                        <a
                          href="/Assets/IIIst-Semester Marksheet.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-background-secondary rounded p-3 text-text-accent hover:underline text-sm"
                        >
                          3rd Semester
                        </a>
                        <a
                          href="/Assets/IVst-Semester Marksheet.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-background-secondary rounded p-3 text-text-accent hover:underline text-sm"
                        >
                          4th Semester
                        </a>
                        <a
                          href="/Assets/Vst-Semester Marksheet.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-background-secondary rounded p-3 text-text-accent hover:underline text-sm"
                        >
                          5th Semester
                        </a>
                        <a
                          href="/Assets/OVERALL MARKEET.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-background-secondary rounded p-3 text-text-accent hover:underline text-sm"
                        >
                          Overall
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href="/Assets/Software Developer.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 text-white text-sm rounded-md shadow font-semibold"
                    >
                      Certificate
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* HSC Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative md:flex-1 mb-16 md:mb-0"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-3 w-4 h-4 rounded-full bg-[#FF4500] border-2 border-[#FFD700] z-10" />
                <div className="bg-background-accent/10 rounded-xl p-6 backdrop-blur-sm border border-text-accent/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
                      <div className="md:flex-1">
                        <h3 className="text-2xl font-extrabold mb-2 tracking-wider uppercase bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
                          HSC
                        </h3>
                        <p className="text-xl text-text-primary mt-2">Vidya Bhavan Higher Secondary School</p>
                        <p className="text-text-secondary mt-1">Puducherry</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                        <span className="text-text-secondary">2020 - 2021</span>
                        <span className="mt-2 px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-500">
                          Percentage: 67.8%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href="/Assets/12th (1).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 text-white text-sm rounded-md shadow font-semibold"
                    >
                      Certificate
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* SSLC Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative md:flex-1 mb-0"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-3 w-4 h-4 rounded-full bg-[#FF4500] border-2 border-[#FFD700] z-10" />
                <div className="bg-background-accent/10 rounded-xl p-6 backdrop-blur-sm border border-text-accent/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
                      <div className="md:flex-1">
                        <h3 className="text-2xl font-extrabold mb-2 tracking-wider uppercase bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
                          SSLC - HIGH SCHOOL
                        </h3>
                        <p className="text-xl text-text-primary mt-2">Petit Seminaire Higher Secondary School</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                        <span className="text-text-secondary">2018 - 2019</span>
                        <span className="mt-2 px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-500">
                          Percentage: 49.6%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href="/Assets/10th marksheet.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 text-white text-sm rounded-md shadow font-semibold"
                    >
                      Certificate
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default EducationPage;


