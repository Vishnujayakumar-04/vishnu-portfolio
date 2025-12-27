import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import TimelineSection, { TimelineItem } from '../components/TimelineSection';

const InternshipPage = () => {
  // Internship data
  const internshipData: TimelineItem[] = [
    {
      title: "Image Creative Education",
      subtitle: "SWARAN AAKARSH INFOTAINMENT",
      description: "For Adobe Xd, Premier Pro, After Effects.",
      location: "Thiruvalluvar Salai, Iyyanar Nagar, Pudupalaiyam, Puducherry",
      durationBadge: "One Month Internship",
      dateRange: "7 - 30 June 2023",
      certificateLink: "/Assets/Image Creative.jpg"
    },
    {
      title: "Integra Software Solution",
      subtitle: "IT Support & Help Desk with a certificate of completion",
      description: "Hands-on in IT Support: maintenance, troubleshooting, technical support. Certificate clickable for verification.",
      location: "Pakkamudayanpet, Annamalai Nagar, Puducherry",
      durationBadge: "Fifteen Days Internship",
      dateRange: "11 - 28 November 2022",
      certificateLink: "/Assets/Integra Intern Certificate.jpg"
    }
  ];

  return (
    <SectionWrapper>
      <ParticlesBackground className="opacity-20" />
      <TimelineSection title="Internships" items={internshipData} />
    </SectionWrapper>
  );
};

export default InternshipPage;

