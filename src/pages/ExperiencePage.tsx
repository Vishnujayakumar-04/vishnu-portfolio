import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import MinimalAnimatedBackground from '../components/MinimalAnimatedBackground';
import TimelineSection, { TimelineItem } from '../components/TimelineSection';

const ExperiencePage = () => {
  // Experience data matching TimelineSection structure
  const experienceData: TimelineItem[] = [
    {
      title: "Integra Software Services Pvt. Ltd.",
      subtitle: "IT Support & Help Desk with a certificate of completion",
      description: "I successfully completed a 15-day internship in IT Support. This experience helped me gain hands-on technical skills in system troubleshooting, IT maintenance, and support operations.",
      location: "Pakkamudayanpet, Annamalai Nagar, Puducherry",
      durationBadge: "Fifteen Days Internship",
      dateRange: "11 - 28 November 2022",
      certificateLink: "/Assets/Integra Intern Certificate.jpg"
    },
    {
      title: "Luca Digital Solution",
      subtitle: "Social Media Manager",
      description: "Creating and editing videos, posters, and reels based on client requirements. Managing and scheduling posts on Instagram, Facebook, and YouTube. Developing creative ideas for social media engagement and supporting clients by maintaining consistent branding and online presence.",
      location: "Puducherry",
      durationBadge: "Social Media Manager",
      dateRange: "Sep 2024 – Nov 2024"
    }
  ];

  return (
    <SectionWrapper>
      <MinimalAnimatedBackground />
      <ParticlesBackground className="opacity-20" />
      <TimelineSection title="Experience" items={experienceData} />
    </SectionWrapper>
  );
};

export default ExperiencePage;

