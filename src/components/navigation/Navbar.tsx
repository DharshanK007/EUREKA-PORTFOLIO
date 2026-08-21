// src/components/navigation/Navbar.tsx
import React from 'react';

export interface SectionMeta {
  id: string;
  num: string;
  title: string;
  category: string;
}

export const SECTIONS: SectionMeta[] = [
  { id: 'cover', num: '01', title: 'Cover', category: 'Overview' },
  { id: 'problem', num: '02', title: 'The Data Problem', category: 'Problem' },
  { id: 'hidden-problem', num: '03', title: 'Hidden Cost', category: 'Problem' },
  { id: 'philosophy', num: '04', title: 'Philosophy', category: 'Concept' },
  { id: 'solution', num: '05', title: 'Solution', category: 'Concept' },
  { id: 'pruning-engine', num: '06', title: 'Pruning Engine', category: 'Concept' },
  { id: 'domain-knowledge', num: '07', title: 'Domain Knowledge', category: 'Concept' },
  { id: 'coral-ai-poc', num: '08', title: 'CoralAI PoC', category: 'CoralAI PoC' },
  { id: 'coral-ai-tech', num: '09', title: 'PoC Architecture', category: 'CoralAI PoC' },
  { id: 'poc-to-product', num: '10', title: 'Multi-Domain Scale', category: 'Scale & Landscape' },
  { id: 'tech-landscape', num: '11', title: 'Tech Landscape', category: 'Scale & Landscape' },
  { id: 'business-impact', num: '12', title: 'Business Impact', category: 'Impact & Market' },
  { id: 'market', num: '13', title: 'Market & Model', category: 'Impact & Market' },
  { id: 'roadmap', num: '14', title: 'Product Roadmap', category: 'Team & Roadmap' },
  { id: 'team', num: '15', title: 'Founding Team', category: 'Team & Roadmap' },
  { id: 'vision', num: '16', title: 'Vision & Ask', category: 'Team & Roadmap' },
  { id: 'final', num: '17', title: 'Closing', category: 'Overview' },
];

const CATEGORIES = [
  { label: 'Overview', firstIdx: 0 },
  { label: 'Problem', firstIdx: 1 },
  { label: 'Concept', firstIdx: 3 },
  { label: 'CoralAI PoC', firstIdx: 7 },
  { label: 'Scale & Landscape', firstIdx: 9 },
  { label: 'Impact & Market', firstIdx: 11 },
  { label: 'Team & Roadmap', firstIdx: 13 },
];

interface NavbarProps {
  activeIdx: number;
  onSelect: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeIdx, onSelect }) => {
  const currentSec = SECTIONS[activeIdx];

  const handlePrev = () => {
    if (activeIdx > 0) onSelect(activeIdx - 1);
  };

  const handleNext = () => {
    if (activeIdx < SECTIONS.length - 1) onSelect(activeIdx + 1);
  };

  return (
    <header className="top-navbar">
      <a href="#cover" className="brand-logo" onClick={(e) => { e.preventDefault(); onSelect(0); }}>
        <span className="brand-badge" />
        <span>Distilio</span>
      </a>

      {/* Category group buttons */}
      <div className="nav-links-wrapper">
        {CATEGORIES.map((cat) => {
          const isCatActive = currentSec.category === cat.label;

          return (
            <button
              key={cat.label}
              className={`nav-category-btn ${isCatActive ? 'active' : ''}`}
              onClick={() => onSelect(cat.firstIdx)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Slide Navigation Prev/Next controls */}
      <div className="nav-controls">
        <button
          className="nav-ctrl-btn"
          onClick={handlePrev}
          disabled={activeIdx === 0}
          style={{ opacity: activeIdx === 0 ? 0.4 : 1 }}
        >
          ← Prev
        </button>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'white', margin: '0 0.2rem' }}>
          {activeIdx + 1}/{SECTIONS.length}
        </span>
        <button
          className="nav-ctrl-btn"
          onClick={handleNext}
          disabled={activeIdx === SECTIONS.length - 1}
          style={{ opacity: activeIdx === SECTIONS.length - 1 ? 0.4 : 1 }}
        >
          Next →
        </button>
      </div>
    </header>
  );
};

export default Navbar;
