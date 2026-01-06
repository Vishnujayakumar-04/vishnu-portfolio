import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import ParticlesBackground from '../components/ParticlesBackground';

type DetailSection = {
  title: string;
  body: string;
};

type ProjectDetail = {
  category: string;
  title: string;
  subtitle: string;
  overview: string;
  sections: DetailSection[];
  techStack: string;
  outcome: string;
  documentLabel?: string;
  documentLink?: string;
};

const projectDetails: Record<string, ProjectDetail> = {
  'pudocs-department-management': {
    category: 'Mobile Application',
    title: 'PUDoCS - University Management System (Mobile)',
    subtitle:
      'Centralized mobile app for students, staff & office with timetable, notices and admin controls.',
    overview:
      'PUDoCS is a centralized mobile application built for the Computer Science Department of Pondicherry University to manage academic & administrative workflows. The platform offers role-based access where students can view notices, timetables, and updates, while staff and office can upload announcements, manage timetables, and coordinate department operations digitally.',
    sections: [
      {
        title: 'Tech Stack',
        body:
          '• Frontend: React Native (Expo), TypeScript, Native Components, Reanimated\n• Backend: Firebase (Future upgrade: Node.js + Express + SQL/NoSQL)\n• Database: Firestore Cloud DB\n• Tools: GitHub, Expo CLI, Figma',
      },
      {
        title: 'Core Features',
        body:
          '• Role-based Login: Student / Staff / Office\n• Timetable view linked to student class\n• Staff & Office notice/event upload panel\n• Global departmental notice board\n• UG/PG timetable management\n• Event posting & registration link support',
      },
      {
        title: 'Future Enhancements',
        body:
          '• Automatic timetable generator (no clash)\n• Attendance & internal marks tracking\n• Student result dashboard\n• Push Notifications (FCM)\n• Dark mode + UI animation revamp\n• Admin panel for bulk data upload\n• Backend migration for scalability',
      },
    ],
    techStack:
      'React Native (Expo), TypeScript, Firebase, Firestore, Reanimated, GitHub, Expo CLI, Figma',
    outcome:
      'A scalable mobile solution that digitizes department operations, improving communication and administrative efficiency for students, staff, and office personnel.',
  },
  'supermarket-billing-inventory': {
    category: 'Desktop Application',
    title: 'Supermarket Billing & Inventory System',
    subtitle:
      'A complete retail billing platform handling customers, items, GST billing, invoice printing, and sales reports.',
    overview:
      'This project focuses on simplifying supermarket billing and stock management in a single interface. Cashiers can quickly search items, apply GST, generate invoices, and keep track of daily sales while the back office monitors inventory levels.',
    sections: [
      {
        title: 'My Role',
        body:
          'Designed the database, implemented the billing screens, invoice generation, GST calculation logic, and reporting modules for daily and monthly sales.',
      },
      {
        title: 'Key Features',
        body:
          'Customer and item master data, barcode / item code lookup, GST-inclusive billing, invoice printing, stock updates after each sale, and sales summary reports.',
      },
    ],
    techStack:
      'Desktop-based UI (e.g., Java / .NET GUI), relational database (MySQL / SQL Server), and report generation tools for invoices and summaries.',
    outcome:
      'Provides a fast cashier workflow and clear reporting for small and medium supermarkets, reducing manual errors and improving checkout speed.',
  },
  'event-management-website': {
    category: 'Web Development',
    title: 'Event Management Website',
    subtitle:
      'A modern website for booking and managing events with service catalog and vendor details.',
    overview:
      'The website helps customers discover event services such as weddings, corporate meets, and parties. It presents packages, vendor information, and simple booking forms in a clean, responsive layout.',
    sections: [
      {
        title: 'My Role',
        body:
          'Created the entire front‑end, structured the pages, integrated forms, and ensured the design remains responsive across devices.',
      },
      {
        title: 'Key Features',
        body:
          'Landing page with hero section, service catalog, vendor detail sections, online enquiry and booking forms, responsive navigation, and contact information.',
      },
    ],
    techStack:
      'HTML, CSS, JavaScript, and Bootstrap / Tailwind CSS for building responsive and visually appealing layouts.',
    outcome:
      'Delivers a professional online presence for event businesses and demonstrates my ability to design clean, user‑friendly web UIs.',
  },
  'billing-software-supermart': {
    category: 'Desktop Application',
    title: 'Billing Software (Supermart Version)',
    subtitle:
      'A lightweight and fast billing tool optimized for small supermarts.',
    overview:
      'This project provides a minimal but powerful billing interface focused on speed. It supports GST calculations, QR payment integration, and basic item lookup without requiring a heavy backend.',
    sections: [
      {
        title: 'My Role',
        body:
          'Implemented the billing screen, GST logic, QR payment integration placeholder, and invoice preview functionality with local data storage.',
      },
      {
        title: 'Key Features',
        body:
          'Item search, auto‑calculated totals with GST, QR payment option, invoice preview/print, and persistent local storage for recent bills and items.',
      },
    ],
    techStack:
      'Desktop UI framework or web‑based UI running locally, JavaScript / backend language for calculations, and local storage / lightweight database.',
    outcome:
      'Suitable for small shops that need fast billing on a single machine, highlighting performance‑focused UI and practical GST handling.',
  },
  'chatbot-application': {
    category: 'AI / Chatbot',
    title: 'Chatbot Application',
    subtitle:
      'An interactive chatbot built to answer queries and assist users using basic AI/ML logic.',
    overview:
      'The chatbot simulates a virtual assistant that can answer frequently asked questions, guide users through simple flows, and provide quick responses without human support.',
    sections: [
      {
        title: 'My Role',
        body:
          'Designed the conversation flows, implemented the front‑end chat UI, and integrated rule‑based / ML‑based response logic.',
      },
      {
        title: 'Key Features',
        body:
          'Chat interface with message bubbles, predefined intents, simple NLP or keyword matching, quick‑reply buttons, and basic logging of conversations.',
      },
    ],
    techStack:
      'Web front‑end (HTML, CSS, JavaScript / React) plus simple AI logic using rule‑based engines or basic ML/NLP libraries.',
    outcome:
      'Shows my understanding of conversational UI and how to combine front‑end development with AI concepts to automate support.',
  },
  'tourist-guide-management': {
    category: 'Web / Travel',
    title: 'Tourist Guide Management System',
    subtitle:
      'A travel assistant system that helps visitors discover places, routes, and stay options.',
    overview:
      'This system organizes tourist information such as attractions, routes, accommodations, and guides into a single platform so travelers can plan trips more confidently.',
    sections: [
      {
        title: 'My Role',
        body:
          'Modelled the data for places and routes, built the UI for browsing locations, and implemented search/filter features for destinations and stays.',
      },
      {
        title: 'Key Features',
        body:
          'Place listings with descriptions and photos, route suggestions, basic map or direction links, recommended stays, and simple guide management modules.',
      },
    ],
    techStack:
      'Web application built with HTML, CSS, JavaScript / React and a backend or JSON data source for places and routes.',
    outcome:
      'Demonstrates skills in organizing structured information and designing user‑friendly travel planning interfaces.',
  },
  'document-saver-digilocker': {
    category: 'Web Application',
    title: 'Document Saver (DigiLocker Clone)',
    subtitle:
      'A secure online locker for personal documents with authentication and document management.',
    overview:
      'Inspired by DigiLocker, this project lets users create an account, upload important documents, preview them, and manage them safely from anywhere.',
    sections: [
      {
        title: 'My Role',
        body:
          'Designed the authentication flow, document upload and preview modules, and UI for organizing files into categories.',
      },
      {
        title: 'Key Features',
        body:
          'User registration and login, secure document upload, file preview (PDF/images), folder or category organization, and basic access control.',
      },
    ],
    techStack:
      'Web stack with HTML, CSS, JavaScript / React and a backend with storage service (e.g., Node.js + cloud storage / Firebase).',
    outcome:
      'Highlights my understanding of authentication, file handling, and building secure, user‑centric web applications.',
  },
};

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectDetails[projectId ?? ''];

  if (!project) {
    return (
      <SectionWrapper>
        <ParticlesBackground className="opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-text-primary mb-4">
            Project Not Found
          </h1>
          <p className="text-text-secondary mb-6">
            The project you are looking for does not exist or the link is invalid.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-sm font-semibold text-white hover:opacity-90 transition-all duration-300"
          >
            Back to Projects
          </Link>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <ParticlesBackground className="opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-text-secondary mb-3">
            {project.category}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
            {project.title}
          </h1>

          {projectId === 'pudocs-department-management' && (
            <>
              <p className="text-text-secondary text-sm mb-2 opacity-70">
                Status: <span className="text-yellow-400 font-semibold">In Progress (65%)</span>
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="https://github.com/Vishnujayakumar-04/PUDoCS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-text-accent/40 rounded-lg hover:bg-text-accent hover:text-background-primary transition-all duration-300 text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <span className="inline-flex items-center px-4 py-2 border border-yellow-400/40 text-yellow-400 rounded-lg text-sm">
                  🚀 Live Coming Soon
                </span>
              </div>
            </>
          )}

          <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-6">
            {project.subtitle}
          </p>

          <div className="h-px w-16 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] mb-8" />

          <section className="mb-8">
            <h2 className="text-lg sm:text-xl font-display font-semibold text-text-primary mb-2">
              Overview
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>
          </section>

          {project.sections.map((section) => (
            <section key={section.title} className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                {section.title}
              </h2>
              {section.title === 'Tech Stack' || section.title === 'Core Features' || section.title === 'Future Enhancements' ? (
                <ul className="list-disc ml-6 text-text-secondary text-sm sm:text-base leading-relaxed space-y-2">
                  {section.body.split('\n').map((item, idx) => (
                    <li key={idx} className={item.startsWith('•') ? '' : 'font-semibold'}>
                      {item.startsWith('•') ? item.substring(1).trim() : item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {section.body}
                </p>
              )}
            </section>
          ))}

          {!project.sections.some(s => s.title === 'Tech Stack') && (
            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-display font-semibold text-text-primary mb-2">
                Tech Stack
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {project.techStack}
              </p>
            </section>
          )}

          <section className="mb-10">
            <h2 className="text-lg sm:text-xl font-display font-semibold text-text-primary mb-2">
              Outcome
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              {project.outcome}
            </p>
          </section>

          {project.documentLink && project.documentLabel && (
            <section className="mb-10">
              <h2 className="text-lg sm:text-xl font-display font-semibold text-text-primary mb-3">
                Document
              </h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.documentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-background-accent text-text-primary border border-text-accent/40 hover:border-text-accent hover:bg-background-accent/70 text-xs sm:text-sm font-medium transition-all duration-300"
                >
                  Open in new tab
                </a>
                <a
                  href={project.documentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-xs sm:text-sm font-semibold text-white hover:opacity-90 transition-all duration-300"
                >
                  Download PDF
                </a>
              </div>
            </section>
          )}

          <div className="pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-text-accent transition-colors"
            >
              ← Back to all projects
            </Link>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectDetailPage;


