import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

// Sample projects data - replace with your actual projects
const projects = [
  {
    title: "Wedding Film Editing",
    description: "Crafted emotional wedding stories through cinematic editing, color grading, and sound design. Enhanced key moments with smooth transitions and synchronized music.",
    image: "/projects/wedding.jpg",
    tags: ["Adobe Premiere Pro", "DaVinci Resolve", "Color Grading"],
    demoLink: "https://vimeo.com/yourweddingvideo",
  },
  {
    title: "Corporate Brand Video",
    description: "Produced and edited professional corporate videos focusing on brand messaging and company culture. Incorporated motion graphics and dynamic transitions.",
    image: "/projects/corporate.jpg",
    tags: ["After Effects", "Premiere Pro", "Motion Graphics"],
    demoLink: "https://youtube.com/yourcorporatevideo",
  },
  {
    title: "Social Media Campaign",
    description: "Created engaging short-form video content for Instagram and TikTok. Optimized for mobile viewing with eye-catching effects and trending music.",
    image: "/projects/social.jpg",
    tags: ["CapCut", "Instagram", "TikTok"],
    demoLink: "https://instagram.com/yourcampaign",
  },
  {
    title: "Product Photography",
    description: "Shot and edited product photos with attention to lighting, composition, and post-processing. Enhanced product features through strategic editing.",
    image: "/projects/product.jpg",
    tags: ["Photoshop", "Lightroom", "Photography"],
    demoLink: "https://behance.net/yourproductphoto",
  },
  {
    title: "Music Video Edit",
    description: "Edited music videos with precise rhythm matching, visual effects, and color grading. Created engaging storytelling through creative transitions.",
    image: "/projects/music.jpg",
    tags: ["Final Cut Pro", "After Effects", "Color Grading"],
    demoLink: "https://youtube.com/yourmusicvideo",
  },
  {
    title: "Event Highlights",
    description: "Captured and edited highlight reels for corporate events and conferences. Quick turnaround with dynamic editing and professional finishing.",
    image: "/projects/event.jpg",
    tags: ["Premiere Pro", "Live Events", "Quick Editing"],
    demoLink: "https://vimeo.com/yourevent",
  },
  {
    title: "Documentary Short",
    description: "Edited a documentary short film focusing on environmental conservation. Balanced interviews with B-roll footage and ambient soundscapes.",
    image: "/projects/documentary.jpg",
    tags: ["Documentary", "Storytelling", "Sound Design"],
    demoLink: "https://vimeo.com/yourdocumentary",
  },
  {
    title: "Brand Identity Design",
    description: "Developed comprehensive brand identity packages including logos, color schemes, and marketing materials.",
    image: "/projects/brand.jpg",
    tags: ["Illustrator", "Branding", "Design"],
    demoLink: "https://behance.net/yourbrand",
  },
  {
    title: "Motion Graphics Package",
    description: "Created custom motion graphics package for broadcast television including lower thirds, transitions, and title sequences.",
    image: "/projects/motion.jpg",
    tags: ["After Effects", "Motion Design", "Broadcast"],
    demoLink: "https://vimeo.com/yourmotiongraphics",
  },
  {
    title: "Commercial Edit",
    description: "Edited television commercials with focus on pacing, visual impact, and brand messaging. Collaborated with clients for revisions.",
    image: "/projects/commercial.jpg",
    tags: ["Commercial", "Editing", "Client Work"],
    demoLink: "https://youtube.com/yourcommercial",
  },
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

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
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-secondary rounded-xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-text-accent rounded-full hover:bg-text-accent/80 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 text-text-primary">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-sans px-3 py-1 rounded-full bg-background-accent text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More/Less Button */}
        {projects.length > 6 && (
          <motion.button
            className="mt-12 mx-auto flex items-center gap-2 px-6 py-3 rounded-full border-2 border-text-accent text-text-accent hover:bg-text-accent hover:text-background-primary transition-colors duration-300"
            onClick={() => setShowAll(!showAll)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? (
              <>
                View Less <ChevronUp size={20} />
              </>
            ) : (
              <>
                View More <ChevronDown size={20} />
              </>
            )}
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection; 