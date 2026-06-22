export interface Certification {
  title: string;
  issuer: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Train to Transformed Data Scientist',
    issuer: 'Professional Training',
    image: '/assets/IMG_20250823_214143.jpg',
  },
  {
    title: 'NXT Wave AI Workshop',
    issuer: 'NXT Wave',
    image: '/assets/Certificate.png',
  },
  {
    title: 'The Joy of Computing Using Python',
    issuer: 'NPTEL',
    image: '/assets/THE JOY OF COMPUTING USING PYTHON.png',
  },
  {
    title: 'ICT Academy Certificate',
    issuer: 'ICT Academy',
    image: '/assets/ICT ACADEMIY CERTIFICATE.png',
  },
  {
    title: 'Udemy Certificate',
    issuer: 'Udemy',
    image: '/assets/Udemy Certificate.jpg',
  },
];
