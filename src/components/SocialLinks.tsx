import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <Github />,
    url: 'https://github.com/Vishnujayakumar-04',
    color: 'hover:text-[#f5f5f5] hover:bg-[#333]',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/vishnu-jayakumar-5b42a8283/',
    color: 'hover:text-[#f5f5f5] hover:bg-[#0077b5]',
  },
  {
    name: 'Instagram',
    icon: <Instagram />,
    url: 'https://www.instagram.com/.mr.p.r.i.n.c.e.?igsh=MW8wM2N3dGFleDkzeg==',
    color: 'hover:text-[#f5f5f5] hover:bg-gradient-to-tr from-[#ffdc80] via-[#fcaf45] via-[#f77737] via-[#f56040] via-[#fd1d1d] via-[#e1306c] to-[#833ab4]',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`flex gap-4 ${className}`}
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-text-secondary transition-all duration-300 border border-text-secondary/20 ${social.color}`}
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;