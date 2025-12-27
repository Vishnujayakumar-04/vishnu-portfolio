import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import TechStackSection from '../components/TechStackSection';
import MinimalAnimatedBackground from '../components/MinimalAnimatedBackground';

const SkillsPage = () => {
  return (
    <SectionWrapper className="flex-col justify-start">
      <MinimalAnimatedBackground />
      <ParticlesBackground className="opacity-20" />
      <TechStackSection />
    </SectionWrapper>
  );
};

export default SkillsPage;