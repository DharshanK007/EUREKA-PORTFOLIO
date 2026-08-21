// src/pages/sections/S02DataProblem.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S02DataProblem: React.FC = () => {
  return (
    <PageWrapper
      id="problem"
      title="Organisations collect endless data."
      highlightTitle="They lack the intelligence to prioritize it."
      subtitle="Collecting data is easy. Knowing what matters is the real challenge."
      bgImage="/images/data_tsunami_crisis.png"
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '1.5rem', alignItems: 'center' }}>
        <div className="grid-cards-3">
          <div className="light-card">
            <div className="big-stat-val">2.5 EB</div>
            <div className="big-stat-label">Daily Accumulation</div>
            <div className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>
              Organisations hoard raw data fearing they will lose critical information.
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
              • Storage volume doubling every 18 months
            </div>
          </div>

          <div className="light-card light-card-accent">
            <div className="big-stat-val" style={{ color: 'var(--accent-cyan)' }}>~80%</div>
            <div className="big-stat-label">Dark & Unused</div>
            <div className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>
              Over 80% of retained enterprise data is never queried or analysed again.
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
              • High cloud storage costs with zero analytical yield
            </div>
          </div>

          <div className="light-card">
            <div className="big-stat-val">60%</div>
            <div className="big-stat-label">Redundant Drag</div>
            <div className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>
              60% of stored data is redundant, obsolete, or trivial (ROT).
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              • Sluggish query performance across bloated data lakes
            </div>
          </div>
        </div>

        {/* Real datacenter visual image card */}
        <div className="light-card" style={{ padding: '0.85rem' }}>
          <img
            src="/images/datacenter.png"
            alt="Enterprise Datacenter Storage Scaling"
            className="card-image-box"
            style={{ height: '170px', marginBottom: '0.75rem' }}
          />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: 'white' }}>
            Enterprise Datacenter Scaling Drag
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Hardware costs & energy footprints compound without proportional business ROI.
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S02DataProblem;
