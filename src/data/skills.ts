export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud & AWS',
    icon: '☁️',
    skills: ['AWS EC2', 'S3', 'RDS', 'CloudFront', 'Route 53', 'IAM', 'Auto Scaling', 'ELB'],
  },
  {
    title: 'DevOps & CI/CD',
    icon: '🔧',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'GitHub Actions'],
  },
  {
    title: 'Linux & Infrastructure',
    icon: '🖥️',
    skills: ['Linux Administration', 'Nginx', 'Shell Scripting', 'SSH', 'Networking'],
  },
  {
    title: 'Monitoring & Logging',
    icon: '📊',
    skills: ['CloudWatch', 'Prometheus', 'Grafana', 'ELK Stack'],
  },
  {
    title: 'Development',
    icon: '💻',
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'React Native'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'DynamoDB'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Vercel'],
  },
];
