import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="M.Sc. Computer Science graduate from Pondicherry University with a passion for building scalable cloud infrastructure and automating deployment workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed">
              I'm a Cloud & DevOps Engineer focused on AWS infrastructure, container orchestration, 
              and CI/CD pipeline automation. I enjoy designing systems that are reliable, 
              scalable, and easy to maintain.
            </p>
            <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed">
              My experience spans deploying production workloads on AWS (EC2, RDS, S3, CloudFront), 
              containerizing applications with Docker, orchestrating with Kubernetes, and automating 
              infrastructure using Terraform and Ansible. I also build full-stack applications 
              using React, Next.js, and Node.js.
            </p>
            <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed">
              I'm actively seeking roles in Cloud Engineering, DevOps, and Infrastructure — 
              where I can contribute to building and maintaining robust deployment pipelines 
              and cloud-native architectures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4"
          >
            {[
              { label: 'Focus Areas', value: 'AWS, DevOps, CI/CD, Containerization' },
              { label: 'Education', value: 'M.Sc. Computer Science — Pondicherry University' },
              { label: 'Location', value: 'Puducherry, India' },
              { label: 'Languages', value: 'English, Tamil' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <span className="text-[#FFD700] text-sm font-semibold shrink-0 sm:w-32">
                  {item.label}
                </span>
                <span className="text-gray-300 text-sm">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
