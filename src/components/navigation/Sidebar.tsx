// src/components/navigation/Sidebar.tsx
import React from 'react';

const PAGES = [
  { num: '01', label: 'Cover' },
  { num: '02', label: 'The Data Problem' },
  { num: '03', label: 'The Hidden Problem' },
  { num: '04', label: 'Core Philosophy' },
  { num: '05', label: 'Proposed Solution' },
  { num: '06', label: 'Pruning Engine' },
  { num: '07', label: 'Domain Knowledge' },
  { num: '08', label: 'CoralAI — PoC' },
  { num: '09', label: 'CoralAI — Technical' },
  { num: '10', label: 'PoC → Product' },
  { num: '11', label: 'Tech Landscape' },
  { num: '12', label: 'Business Impact' },
  { num: '13', label: 'Market & Model' },
  { num: '14', label: 'Roadmap' },
  { num: '15', label: 'Team' },
  { num: '16', label: 'Vision & Ask' },
  { num: '17', label: 'Closing' },
];

interface SidebarProps {
  active: number;
  onSelect: (i: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ active, onSelect }) => {
  return (
    <aside className="sidebar" aria-label="Portfolio navigation">
      {/* Logo */}
      <div className="sidebar-logo">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.3rem' }}>
          <span className="sidebar-dot" />
          <span className="sidebar-logo-name">Distilio</span>
        </div>
        <div className="sidebar-logo-tag">Investor Portfolio · 2024</div>
      </div>

      {/* Nav list */}
      <nav className="sidebar-nav" aria-label="Sections">
        {PAGES.map((page, i) => (
          <button
            key={i}
            className={`sidebar-item${active === i ? ' active' : ''}`}
            onClick={() => onSelect(i)}
            title={page.label}
            aria-current={active === i ? 'page' : undefined}
          >
            <span className="sidebar-item-num">{page.num}</span>
            <span className="sidebar-item-label">{page.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        Proof of Concept Stage · Confidential
      </div>
    </aside>
  );
};

export default Sidebar;
