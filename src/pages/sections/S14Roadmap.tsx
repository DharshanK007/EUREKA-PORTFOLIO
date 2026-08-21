// src/pages/sections/S14Roadmap.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S14Roadmap: React.FC = () => {
  return (
    <PageWrapper
      id="roadmap"
      title="Phased Product"
      highlightTitle="Execution Roadmap."
      subtitle="From proven PoC to multi-domain enterprise platform."
      bgImage="/images/tech_roadmap_team.png"
    >
      <div className="grid-cards-4">
        <div className="light-card light-card-accent">
          <div className="tag tag-teal" style={{ marginBottom: '0.75rem' }}>PHASE 01 (CURRENT)</div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
            CoralAI Validation
          </h4>
          <p className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>Proven dual-channel engine & oceanography relevance model.</p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-teal)', fontWeight: 600 }}>
            • Live benchmark on ocean data streams
          </div>
        </div>

        <div className="light-card">
          <div className="tag" style={{ marginBottom: '0.75rem' }}>PHASE 02</div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
            Engine Decoupling
          </h4>
          <p className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>Generalizing pruning core & rule configuration APIs.</p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • Modular SDK & policy config hooks
          </div>
        </div>

        <div className="light-card">
          <div className="tag" style={{ marginBottom: '0.75rem' }}>PHASE 03</div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
            Enterprise Pilots
          </h4>
          <p className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>Co-validating engine in FinTech & Healthcare environments.</p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • Live stream production deployments
          </div>
        </div>

        <div className="light-card">
          <div className="tag" style={{ marginBottom: '0.75rem' }}>PHASE 04</div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
            Platform Scale
          </h4>
          <p className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>Full cloud ecosystem integration & automated policy engine.</p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • AWS, GCP & Snowflake native connectors
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S14Roadmap;
