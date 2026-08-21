// src/pages/sections/S12BusinessImpact.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S12BusinessImpact: React.FC = () => {
  return (
    <PageWrapper
      id="business-impact"
      title="From inefficient accumulation"
      highlightTitle="to intelligent data flow."
      subtitle="Measurable efficiency gains across storage, compute, and analytics."
      bgImage="/images/business_growth_kpi.png"
    >
      <div className="grid-cards-3">
        <div className="light-card">
          <div className="big-stat-val">3x – 10x</div>
          <div className="big-stat-label">Compute Acceleration</div>
          <div className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>Downstream AI pipelines process high-relevance latent vectors instantly.</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • Faster model training iterations & query execution
          </div>
        </div>

        <div className="light-card light-card-accent">
          <div className="big-stat-val" style={{ color: 'var(--accent-blue)' }}>40% – 70%</div>
          <div className="big-stat-label">Storage Optimization</div>
          <div className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>Intelligent tiering and domain compression cut active footprint.</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • Substantial cloud storage bill reduction per month
          </div>
        </div>

        <div className="light-card">
          <div className="big-stat-val">100%</div>
          <div className="big-stat-label">Signal Retention</div>
          <div className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>Dual-channel engine guarantees critical anomalies are never lost.</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-teal)', fontWeight: 600 }}>
            • High-priority risk events preserved with full fidelity
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S12BusinessImpact;
