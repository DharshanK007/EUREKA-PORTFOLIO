// src/components/navigation/NavDots.tsx
import React from 'react';

interface NavDotsProps {
  total: number;
  active: number;
  labels: string[];
  onSelect: (index: number) => void;
}

const NavDots: React.FC<NavDotsProps> = ({ total, active, labels, onSelect }) => {
  return (
    <nav className="nav-dots" aria-label="Section navigation">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          className={`nav-dot${active === i ? ' active' : ''}`}
          onClick={() => onSelect(i)}
          title={labels[i] || `Section ${i + 1}`}
          aria-label={labels[i] || `Section ${i + 1}`}
          aria-current={active === i ? 'true' : 'false'}
        />
      ))}
    </nav>
  );
};

export default NavDots;
