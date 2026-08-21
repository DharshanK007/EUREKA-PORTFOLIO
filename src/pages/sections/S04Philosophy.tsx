// src/pages/sections/S04Philosophy.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S04Philosophy: React.FC = () => {
  return (
    <PageWrapper
      id="philosophy"
      title="Don't just store more."
      highlightTitle="Understand what matters."
      subtitle="Context — not file size or age — determines data value."
      bgImage="/images/ai_brain_network.png"
    >
      <div className="grid-cards-3">
        <div className="light-card">
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎯</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            Objective-Driven
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.6rem' }}>
            No data is inherently useless. Its value depends entirely on the business operation being performed.
          </p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • Evaluates data streams against live operational KPIs
          </div>
        </div>

        <div className="light-card light-card-accent">
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🧠</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            Domain-Native
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.6rem' }}>
            Generic rules (age/size) fail. Domain rules accurately evaluate information importance.
          </p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-teal)', fontWeight: 600 }}>
            • Embeds industry-specific risk & relevance indicators
          </div>
        </div>

        <div className="light-card">
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>⚡</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            Selective Attention
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.6rem' }}>
            Assign computational power dynamically where relevance is highest.
          </p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • Directs premium storage tiering to high-impact signals
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S04Philosophy;
