import { motion } from 'framer-motion';

export interface TimelineItem {
  title: string;
  subtitle: string;
  description: string;
  location: string;
  durationBadge: string;
  dateRange?: string;
  certificateLink?: string;
}

interface TimelineSectionProps {
  title: string;
  items: TimelineItem[];
}

const TimelineSection = ({ title, items }: TimelineSectionProps) => {
  return (
    <section className="container mx-auto px-2 sm:px-4 lg:px-6 py-20 sm:py-24">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
        {title}
      </h2>
      <div className="w-full px-100 md:px-100 lg:px-100">
        <div className="relative w-full pt-8">
          {/* Timeline line - left side */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFD700] via-[#FFA500] to-[#FF4500]" />

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              className="relative mb-16 pl-12 pr-2 md:pr-4 lg:pr-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 ml-2.5 w-3 h-3 rounded-full bg-[#FF4500] border-2 border-[#FFD700] z-10" />
              
              {/* Card - all aligned to the right */}
              <div className="bg-background-accent/10 rounded-xl p-6 backdrop-blur-sm border border-text-accent/10 hover:border-text-accent/30 hover:shadow-lg hover:shadow-[#FFA500]/10 hover:-translate-x-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between items-start gap-6">
                  <div className="md:flex-1">
                    <h3 className="text-2xl font-extrabold mb-2 tracking-wider text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary mt-1">{item.subtitle}</p>
                    <p className="text-text-secondary text-sm mt-2">{item.description}</p>
                    <p className="text-text-secondary text-sm mt-1">{item.location}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end mt-2 md:mt-0 md:ml-8">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-500 mb-1">
                      {item.durationBadge}
                    </span>
                    {item.dateRange && (
                      <span className="text-text-secondary text-sm mb-2">{item.dateRange}</span>
                    )}
                    {item.certificateLink && (
                      <a
                        href={item.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] hover:opacity-90 hover:shadow-lg hover:shadow-[#FFA500]/50 hover:scale-105 text-white text-sm rounded-md shadow font-semibold mt-2 transition-all duration-300"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

