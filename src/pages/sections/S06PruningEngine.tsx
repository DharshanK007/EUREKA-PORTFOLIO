// src/pages/sections/S06PruningEngine.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S06PruningEngine: React.FC = () => {
  return (
    <PageWrapper
      id="pruning-engine"
      title="Understand the objective first —"
      highlightTitle="then execute action."
      subtitle="Pruning is not deletion — it is intelligent curation."
      bgImage="/images/pruning_engine_flow.png"
    >
      <div className="grid-cards-4" style={{ marginBottom: '1.5rem' }}>
        {[
          { step: '01', title: 'Raw Ingestion', desc: 'Enterprise data stream capture' },
          { step: '02', title: 'Context Match', desc: 'Map stream to business goal' },
          { step: '03', title: 'Relevance Score', desc: 'Domain-aware evaluation' },
          { step: '04', title: 'Intelligent Action', desc: 'Prioritize, compress & tier' },
        ].map((item) => (
          <div key={item.step} className="light-card" style={{ padding: '1.25rem 1rem' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--accent-blue)', marginBottom: '0.4rem' }}>
              {item.step}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
              {item.title}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      <div className="light-card light-card-accent" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-heading)' }}>SUPPORTED ACTIONS:</span>
        {['Prioritize', 'Filter', 'Compress', 'Tier', 'Deprioritize', 'Retain by Policy'].map((act) => (
          <span key={act} className="tag tag-teal" style={{ fontSize: '0.82rem', padding: '0.35rem 0.85rem' }}>
            {act}
          </span>
        ))}
      </div>
    </PageWrapper>
  );
};

export default S06PruningEngine;
