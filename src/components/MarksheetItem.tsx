import React from 'react';

interface MarksheetItemProps {
  title: string;
  pdfUrl: string;
}

const MarksheetItem: React.FC<MarksheetItemProps> = ({ title, pdfUrl }) => {
  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl bg-background-secondary py-4 px-3 shadow-md hover:shadow-lg text-text-primary font-medium transition-all duration-200 border border-text-accent/20 hover:border-text-accent flex items-center justify-center gap-2 group cursor-pointer hover:bg-background-accent"
      aria-label={title}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text-accent group-hover:scale-105 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11V7m0 9v-3m.5 5.5a9.5 9.5 0 11.001-19.001A9.5 9.5 0 0112.5 19.5z" />
        <rect x="9" y="16" width="6" height="2" rx="1" fill="currentColor" className="text-text-accent" />
      </svg>
      <span>{title}</span>
    </a>
  );
};

export default MarksheetItem;
