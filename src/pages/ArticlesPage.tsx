import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Demo articles data
const articles = [
  {
    title: "Building Responsive Websites with Tailwind CSS",
    excerpt: "Learn how to quickly build beautiful, responsive websites using Tailwind CSS utility classes without writing custom CSS.",
    date: "Mar 15, 2023",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    categories: ["CSS", "Tailwind", "Frontend"]
  },
  {
    title: "React Performance Optimization Techniques",
    excerpt: "Explore advanced techniques to optimize your React applications for better performance and user experience.",
    date: "Feb 22, 2023",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    categories: ["React", "Performance", "JavaScript"]
  },
  {
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt: "A comprehensive guide to TypeScript fundamentals for JavaScript developers looking to add static typing to their projects.",
    date: "Jan 10, 2023",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    categories: ["TypeScript", "JavaScript", "Development"]
  },
  {
    title: "Building a RESTful API with Node.js and Express",
    excerpt: "Step-by-step tutorial on creating a robust RESTful API using Node.js, Express, and MongoDB for your web applications.",
    date: "Dec 5, 2022",
    readTime: "15 min read",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    categories: ["Node.js", "API", "Backend"]
  },
  {
    title: "Modern CSS Techniques Every Developer Should Know",
    excerpt: "Discover powerful CSS techniques including Grid, Flexbox, and CSS variables that will level up your web development skills.",
    date: "Nov 18, 2022",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    categories: ["CSS", "Web Design", "Frontend"]
  },
];

const ArticlesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  
  // Get unique categories
  const categories = ['All', ...new Set(articles.flatMap(article => article.categories))];
  
  // Filter articles based on selected category
  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(article => article.categories.includes(activeFilter));

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
            <span className="violet-gradient">Featured Articles</span>
          </h1>
          <p className="text-text-secondary text-center max-w-2xl">
            Explore my articles about web development, design trends, and technology insights.
            I share tips, tutorials, and best practices from my experience in the industry.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
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
          className="space-y-8"
        >
          {filteredArticles.map((article, index) => (
            <motion.div
              key={`article-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="animated-border-box p-1 rounded-xl"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glassmorphism rounded-xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                    <motion.img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.categories.map((category, catIndex) => (
                          <span
                            key={catIndex}
                            className="text-xs px-2 py-1 rounded-full bg-background-accent text-text-accent"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      
                      <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                        {article.title}
                      </h2>
                      
                      <p className="text-text-secondary mb-4">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex flex-col xs:flex-row xs:items-center justify-between mt-4">
                      <div className="flex items-center gap-4 text-sm text-text-secondary mb-3 xs:mb-0">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <a
                        href={article.link}
                        className="flex items-center gap-1 text-text-accent hover:gap-2 transition-all duration-300"
                      >
                        <span>Read More</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ArticlesPage;