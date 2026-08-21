// src/App.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar, { SECTIONS } from './components/navigation/Navbar';
import S01Cover from './pages/sections/S01Cover';
import S02DataProblem from './pages/sections/S02DataProblem';
import S03HiddenProblem from './pages/sections/S03HiddenProblem';
import S04Philosophy from './pages/sections/S04Philosophy';
import S05Solution from './pages/sections/S05Solution';
import S06PruningEngine from './pages/sections/S06PruningEngine';
import S07DomainKnowledge from './pages/sections/S07DomainKnowledge';
import S08CoralAIPoc from './pages/sections/S08CoralAIPoc';
import S09CoralAITech from './pages/sections/S09CoralAITech';
import S10PocToProduct from './pages/sections/S10PocToProduct';
import S11TechLandscape from './pages/sections/S11TechLandscape';
import S12BusinessImpact from './pages/sections/S12BusinessImpact';
import S13Market from './pages/sections/S13Market';
import S14Roadmap from './pages/sections/S14Roadmap';
import S15Team from './pages/sections/S15Team';
import S16Vision from './pages/sections/S16Vision';
import S17Final from './pages/sections/S17Final';

const TOTAL = SECTIONS.length;

const App: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLElement | null>>(Array(TOTAL).fill(null));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { threshold: 0.4, root: containerRef.current }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavSelect = useCallback((index: number) => {
    const target = sectionRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Keyboard Arrow / Page Up Down navigation for instant high-speed slide control
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowRight', 'PageDown', 'Space'].includes(e.key)) {
        if (e.key === 'Space' && e.target !== document.body) return;
        e.preventDefault();
        setActiveIdx((prev) => {
          const next = Math.min(prev + 1, TOTAL - 1);
          sectionRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return next;
        });
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        setActiveIdx((prev) => {
          const next = Math.max(prev - 1, 0);
          sectionRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  const sections = [
    S01Cover,
    S02DataProblem,
    S03HiddenProblem,
    S04Philosophy,
    S05Solution,
    S06PruningEngine,
    S07DomainKnowledge,
    S08CoralAIPoc,
    S09CoralAITech,
    S10PocToProduct,
    S11TechLandscape,
    S12BusinessImpact,
    S13Market,
    S14Roadmap,
    S15Team,
    S16Vision,
    S17Final,
  ];

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <Navbar activeIdx={activeIdx} onSelect={handleNavSelect} />

      {/* Main Slide Scroll Container */}
      <div ref={containerRef} className="slide-scroll-area">
        {sections.map((SectionComp, i) => (
          <div key={SECTIONS[i].id} ref={setRef(i)}>
            <SectionComp />
          </div>
        ))}
      </div>

      {/* Floating Bottom Status Indicator */}
      <div className="bottom-status-bar">
        <span>{SECTIONS[activeIdx].num}</span> / {String(TOTAL).padStart(2, '0')} — {SECTIONS[activeIdx].title}
      </div>
    </div>
  );
};

export default App;
