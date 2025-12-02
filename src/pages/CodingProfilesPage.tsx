import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import { ExternalLink, Github, Code, CheckSquare } from 'lucide-react';

// Demo coding profiles data
const codingProfiles = [
  {
    name: "GitHub",
    username: "johndoe",
    description: "My open source projects and contributions.",
    stats: [
      { label: "Repositories", value: "42" },
      { label: "Stars", value: "215" },
      { label: "Followers", value: "98" }
    ],
    link: "https://github.com/",
    icon: <Github size={32} />,
    color: "bg-[#333]"
  },
  {
    name: "LeetCode",
    username: "johndoe_dev",
    description: "My problem-solving journey with 300+ problems solved.",
    stats: [
      { label: "Problems", value: "328" },
      { label: "Contest Rating", value: "1845" },
      { label: "Rank", value: "Top 10%" }
    ],
    link: "https://leetcode.com/",
    icon: <Code size={32} />,
    color: "bg-[#FFA116]"
  },
  {
    name: "HackerRank",
    username: "johndoe_dev",
    description: "Certified in Problem Solving and JavaScript.",
    stats: [
      { label: "Badges", value: "15" },
      { label: "Certificates", value: "4" },
      { label: "Points", value: "3250" }
    ],
    link: "https://www.hackerrank.com/",
    icon: <CheckSquare size={32} />,
    color: "bg-[#00EA64]"
  }
];

const CodingProfilesPage = () => {
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
            <span className="violet-gradient">Coding Profiles</span>
          </h1>
          <p className="text-text-secondary text-center max-w-2xl">
            Check out my coding profiles where I showcase my problem-solving skills,
            participate in coding challenges, and contribute to open source projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {codingProfiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="animated-border-box p-1 rounded-xl h-full"
            >
              <div className="glassmorphism p-6 rounded-xl h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-lg ${profile.color} flex items-center justify-center`}>
                    {profile.icon}
                  </div>
                  <a 
                    href={profile.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-text-accent transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <h2 className="text-2xl font-bold text-text-primary mb-1">{profile.name}</h2>
                <p className="text-text-accent mb-4">@{profile.username}</p>
                
                <p className="text-text-secondary mb-6 flex-grow">
                  {profile.description}
                </p>
                
                <div className="border-t border-text-secondary/10 pt-6">
                  <div className="grid grid-cols-3 gap-2">
                    {profile.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <p className="text-xl font-bold text-text-primary">{stat.value}</p>
                        <p className="text-xs text-text-secondary">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-gradient">Coding Achievements</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Coding Contests", value: "25+" },
              { label: "Problems Solved", value: "500+" },
              { label: "Open Source PRs", value: "42" },
              { label: "Certifications", value: "8" }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="glassmorphism p-6 rounded-xl"
              >
                <p className="text-3xl font-bold text-text-accent mb-2">{achievement.value}</p>
                <p className="text-text-secondary">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default CodingProfilesPage;