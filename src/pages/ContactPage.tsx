import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import { MapPin, Mail, Phone } from 'lucide-react';

const contactInfo = {
  email: "vishnujayakumar4104@gmail.com",
  phone: "+91 94870 52144",
  address: "No. 1, 1st cross, Ezhimalaiyan Nagar, Nainarmandapam, Puducherry-605004",
  linkedin: "VISHNU JAYAKUMAR04",
  linkedinUrl: "https://www.linkedin.com/in/vishnu-jayakumar04"
};

const ContactPage = () => {
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
            <span className="violet-gradient">Contact Me</span>
          </h1>
          <p className="text-text-secondary text-center max-w-2xl">
            Feel free to reach out to me for work opportunities, collaborations, or just to say hello.
            I'm always open to discussing new projects and ideas.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-8">
              Let's Talk
            </h2>
            
            <div className="space-y-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-background-accent flex items-center justify-center">
                  <MapPin className="text-text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Location</h3>
                  <p className="text-text-secondary">{contactInfo.address}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-background-accent flex items-center justify-center">
                  <Mail className="text-text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Email</h3>
                  <p className="text-text-secondary">{contactInfo.email}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-background-accent flex items-center justify-center">
                  <Phone className="text-text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Phone</h3>
                  <p className="text-text-secondary">{contactInfo.phone}</p>
                </div>
              </motion.div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Connect With Me
              </h3>
              <SocialLinks />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactPage;