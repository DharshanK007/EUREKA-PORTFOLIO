// src/pages/sections/S03HiddenProblem.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S03HiddenProblem: React.FC = () => {
  return (
    <PageWrapper
      id="hidden-problem"
      num="03"
      title="Retaining everything doesn't mean"
      highlightTitle="understanding anything."
      subtitle="Potential value is not immediate operational value. Treating all data equally creates massive technical debt."
      bgImage="/images/dark_data_noise.png"
    >
      <div className="grid-cards-2" style={{ marginBottom: '1.5rem' }}>
        <div className="light-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-heading)' }}>
              High Relevance Data
            </span>
            <span className="tag tag-teal">~15%</span>
          </div>
          <p className="big-stat-desc" style={{ marginBottom: '0.6rem' }}>Directly drives active business operations and real-time decision making.</p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-teal)', fontWeight: 600 }}>
            • Requires sub-millisecond retrieval & high-priority compute index
          </div>
        </div>

        <div className="light-card" style={{ borderColor: '#FECDD3', background: '#FFF1F2' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-heading)' }}>
              Low & Unknown Relevance
            </span>
            <span className="tag" style={{ color: '#E11D48', borderColor: '#FECDD3' }}>~60%</span>
          </div>
          <p className="big-stat-desc" style={{ marginBottom: '0.6rem' }}>Consumes equal storage, compute, and indexing overhead without immediate utility.</p>
          <div style={{ fontSize: '0.78rem', color: '#BE123C', fontWeight: 600 }}>
            • Dilutes search accuracy & inflates monthly infrastructure bills
          </div>
        </div>
      </div>

      <div className="light-card light-card-accent" style={{ textAlign: 'center', padding: '1.25rem' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-heading)' }}>
          "Infrastructure scales with data volume — <span style={{ color: 'var(--accent-blue)' }}>not business value.</span>"
        </div>
      </div>
    </PageWrapper>
  );
};

export default S03HiddenProblem;
