export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    title: 'Mangola – AWS E-Commerce Deployment',
    category: 'Cloud Infrastructure',
    description:
      'Deployed a scalable e-commerce platform on AWS using EC2 instances, RDS for database management, S3 for static assets, CloudFront CDN for global delivery, and Route 53 for DNS management. Containerized with Docker and automated CI/CD pipeline via Jenkins.',
    tech: ['AWS', 'EC2', 'RDS', 'S3', 'CloudFront', 'Route 53', 'Docker', 'Jenkins'],
    github: 'https://github.com/Vishnujayakumar-04',
  },
  {
    title: 'TrekBuddy – AI Tourism Platform',
    category: 'Full-Stack / AI',
    description:
      'Full-stack AI-powered travel planning platform with Groq LLM integration for intelligent trip recommendations. Built with Next.js and TypeScript, deployed on Vercel with Firebase backend for real-time data management.',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Groq AI', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Vishnujayakumar-04',
  },
  {
    title: 'SUNTIME – Smart UV Tracking App',
    category: 'Mobile / ML',
    description:
      'React Native mobile application using TensorFlow Lite for real-time UV exposure tracking and personalized health recommendations. Features location-based sun data, exposure timers, and push notification alerts.',
    tech: ['React Native', 'Expo', 'TensorFlow Lite', 'Firebase', 'TypeScript'],
    github: 'https://github.com/Vishnujayakumar-04',
  },
  {
    title: 'Real-Time Object Detection',
    category: 'AI / Computer Vision',
    description:
      'Computer vision system using TensorFlow for real-time object identification and tracking in live video streams. Implemented custom detection models with optimized inference pipelines for edge deployment.',
    tech: ['TensorFlow', 'Python', 'OpenCV', 'Computer Vision', 'NumPy'],
    github: 'https://github.com/Vishnujayakumar-04',
  },
  {
    title: 'PUDoCS – University Management System',
    category: 'Mobile Application',
    description:
      'Centralized mobile app for the Computer Science Department of Pondicherry University. Role-based access for students, staff, and office with timetable management, notices, and admin controls.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Firestore'],
    github: 'https://github.com/Vishnujayakumar-04/PUDoCS',
    status: 'In Progress',
  },
];
