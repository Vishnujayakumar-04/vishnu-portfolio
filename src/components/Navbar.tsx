import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import resumePdf from '../../Assets/Vishnu Resume.pdf';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Internship', path: '/internship' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Contact', path: '/contact' }
];

// Note: Education path will scroll to #education on homepage, or navigate to /education if separate page exists

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const currentLink = navLinks.find((link) => link.path === path);
    setActive(currentLink?.name || '');
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (location.pathname === '/' && (path === '/projects' || path === '/experience' || path === '/education')) {
      e.preventDefault();
      const sectionId = path.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-background-primary/80 backdrop-blur-lg' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <Link to="/" className="text-2xl font-bold shrink-0">
            <span className="font-dancing text-3xl sm:text-4xl bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text hover:scale-105 transition-transform inline-block">
              Vishnu J
            </span>
        </Link>

          {/* Center - Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 text-sm font-display font-semibold tracking-wide transition-colors ${
                  active === link.name
                    ? 'text-[#FFD700]'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                onClick={(e) => {
                  handleNavClick(e, link.path);
                  setActive(link.name);
                }}
              >
                {link.name}
              </Link>
          ))}
          </div>

          {/* Right - Resume Button */}
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block px-6 py-2 text-sm font-display font-semibold tracking-wide border-2 border-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 transition-opacity shrink-0"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>

        {/* Mobile Navigation */}
          <motion.div
          initial={false}
            animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
          className="lg:hidden overflow-hidden"
          >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-sm font-display font-semibold tracking-wide transition-colors ${
                  active === link.name
                    ? 'text-[#FFD700]'
                    : 'text-text-secondary hover:text-text-primary'
                  }`}
                  onClick={(e) => {
                  handleNavClick(e, link.path);
                  setActive(link.name);
                  setIsOpen(false);
                  }}
                >
                {link.name}
                  </Link>
              ))}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm font-display font-semibold tracking-wide text-center border-2 border-transparent bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>
          </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;