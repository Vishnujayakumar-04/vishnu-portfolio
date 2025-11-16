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
      className="relative group flex flex-col items-center transition-transform duration-300 rounded-xl overflow-hidden shadow-lg bg-background-secondary hover:scale-105 hover:shadow-2xl border border-transparent hover:border-text-accent cursor-pointer aspect-[4/3]"
      style={{ minHeight: 180 }}
      aria-label={title}
    >
      <img
        src={imgSrc}
        alt={title}
        className="object-contain w-full h-full"
        draggable={false}
        style={{ maxHeight: '220px', background: 'inherit' }}
      />
      <div className="p-4 w-full">
        <div className="font-semibold text-text-primary text-center text-lg mb-2">{title}</div>
        <div className="text-text-secondary text-center text-sm">{description}</div>
      </div>
    </a>
  );
};

export default CertificateCard;
