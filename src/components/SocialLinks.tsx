import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

// WhatsApp Icon SVG Component
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m9.866-8.983c.016-.216-.085-.436-.303-.55l-1.16-.58a.495.495 0 00-.678.19l-.88 1.33a.47.47 0 01-.564.2l-1.4-.44a10.1 10.1 0 01-3.08-2.03 9.87 9.87 0 01-2.03-3.08l-.44-1.4a.472.472 0 01.2-.564l1.33-.88a.495.495 0 00.19-.678l-.58-1.16a.5.5 0 00-.55-.303l-1.33.265a10.05 10.05 0 00-6.16 6.49 9.9 9.9 0 00.265 7.7l.265 1.33a.5.5 0 00.55.303l1.16-.58a.495.495 0 00.678.19l1.33-.88a.472.472 0 01.564.2l.44 1.4a10.1 10.1 0 002.03 3.08 9.87 9.87 0 003.08 2.03l1.4.44a.47.47 0 01.564-.2l1.33.88a.495.495 0 00.678-.19l.58 1.16a.5.5 0 00.55.303l1.33-.265a10.05 10.05 0 006.16-6.49 9.9 9.9 0 00-.265-7.7"/>
  </svg>
);

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
  {
    name: 'WhatsApp',
    icon: <WhatsAppIcon />,
    url: 'https://wa.me/919487052144',
    color: 'hover:text-[#f5f5f5] hover:bg-[#25D366]',
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
      {socialLinks.map((social) => (
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