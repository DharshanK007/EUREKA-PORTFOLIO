// src/pages/sections/S16Vision.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S16Vision: React.FC = () => {
  return (
    <PageWrapper
      id="vision"
      title="Our Vision &"
      highlightTitle="Strategic Priorities."
      subtitle="Building the intelligent data optimization layer for the enterprise."
      bgImage="/images/data_stream.png"
    >
      <div className="grid-cards-3">
        <div className="light-card light-card-accent">
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🤝</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            Pilot Partners
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.6rem' }}>
            Data-intensive enterprises looking to co-validate pruning against live production streams.
          </p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-teal)', fontWeight: 600 }}>
            • Early design-partner access & custom engine tuning
          </div>
        </div>

        <div className="light-card">
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔬</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            Technical Advisory
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.6rem' }}>
            Experts in high-throughput distributed systems, vector storage, and enterprise data architecture.
          </p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • Deep expertise in database & stream optimization
          </div>
        </div>

        <div className="light-card">
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🌐</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            Domain Experts
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.6rem' }}>
            Specialists in FinTech, Healthcare, and IoT to co-design domain-specific relevance models.
          </p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • Guarantees vertical objective accuracy & compliance
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S16Vision;
