import React from 'react';

interface CertificateCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ imgSrc, title, description }) => {
  return (
    <a
      href={imgSrc}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group flex flex-col items-center transition-all duration-300 rounded-xl overflow-visible shadow-lg bg-background-secondary hover:scale-105 hover:shadow-2xl hover:shadow-[#FFA500]/30 border border-transparent hover:border-[#FFA500]/50 cursor-pointer h-full"
      aria-label={title}
    >
      <div className="w-full overflow-hidden rounded-t-xl flex items-center justify-center bg-background-primary" style={{ height: '200px', minHeight: '200px' }}>
        <img
          src={imgSrc}
          alt={title}
          className="object-contain w-full h-full max-h-full"
          draggable={false}
        />
      </div>
      <div className="p-3 sm:p-4 w-full bg-background-secondary flex-shrink-0 flex flex-col items-center justify-center">
        <div className="font-bold text-text-primary text-center text-sm sm:text-base md:text-lg mb-2 sm:mb-3 leading-tight whitespace-nowrap overflow-visible" style={{ fontSize: 'clamp(12px, 2.5vw, 18px)' }}>{title}</div>
        <div className="text-text-secondary text-center text-xs sm:text-sm leading-tight whitespace-nowrap overflow-visible">{description}</div>
      </div>
    </a>
  );
};

export default CertificateCard;
