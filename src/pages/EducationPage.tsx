import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import MinimalAnimatedBackground from '../components/MinimalAnimatedBackground';
import TimelineSection, { TimelineItem } from '../components/TimelineSection';

const EducationPage = () => {
  // Education data matching HomePage structure
  const educationData: TimelineItem[] = [
    {
      title: "Pondicherry University",
      subtitle: "M.Sc. Computer Science (2024–2026)",
      description: "CGPA: 7.75",
      location: "Puducherry",
      durationBadge: "2024–2026",
      dateRange: "Pursuing"
    },
    {
      title: "Sri Manakula Vinayagar Engineering College",
      subtitle: "BCA - Computer Application",
      description: "School of Arts and Science - CGPA - 7.90",
      location: "Puducherry",
      durationBadge: "2021-2024",
      certificateLink: "/Assets/OVERALL MARKEET.pdf"
    },
    {
      title: "Vidya Bhavan Higher Secondary School",
      subtitle: "HSC - Higher Secondary",
      description: "Puducherry - 67.8%",
      location: "Puducherry",
      durationBadge: "2020-2021",
      certificateLink: "/Assets/12th (1).pdf"
    },
    {
      title: "Petit Seminaire Higher Secondary School",
      subtitle: "SSLC - High School",
      description: "Puducherry - 49.6%",
      location: "Puducherry",
      durationBadge: "2018-2019",
      certificateLink: "/Assets/10th marksheet.pdf"
    }
  ];

  return (
    <SectionWrapper>
      <MinimalAnimatedBackground />
      <ParticlesBackground className="opacity-20" />
      <TimelineSection title="Education" items={educationData} />
    </SectionWrapper>
  );
};

export default EducationPage;


