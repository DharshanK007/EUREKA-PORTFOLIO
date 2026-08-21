// src/pages/sections/S15Team.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { founders } from '../../data/company';

const S15Team: React.FC = () => {
  return (
    <PageWrapper
      id="team"
      title="The Founders behind"
      highlightTitle="Distilio."
      subtitle="Multidisciplinary founding team in systems architecture, AI engineering, and product strategy."
      bgImage="/images/ai_brain_network.png"
    >
      <div className="grid-cards-3">
        {founders.map((f) => (
          <div key={f.name} className="light-card">
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-teal))',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.15rem',
              marginBottom: '1rem',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)'
            }}>
              {f.name.split(' ').map(n => n[0]).join('')}
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--text-heading)', marginBottom: '0.2rem' }}>
              {f.name}
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 700, marginBottom: '0.6rem' }}>
              {f.role}
            </div>
            <div className="tag tag-teal" style={{ marginBottom: '0.75rem', fontSize: '0.75rem' }}>
              {f.expertise}
            </div>
            <p className="big-stat-desc">
              {f.contribution}
            </p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default S15Team;
