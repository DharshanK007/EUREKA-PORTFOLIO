// src/pages/sections/S05Solution.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S05Solution: React.FC = () => {
  return (
    <PageWrapper
      id="solution"
      num="05"
      title="A Business-Native"
      highlightTitle="Data Optimization Layer."
      subtitle="Evaluate relevance before data enters the pile."
      bgImage="/images/network_flow.png"
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 0.9fr', gap: '1.25rem', alignItems: 'stretch' }}>
        <div className="light-card" style={{ borderColor: 'rgba(239, 68, 68, 0.3)', background: '#FEF2F2' }}>
          <div className="tag" style={{ color: '#DC2626', borderColor: 'rgba(239, 68, 68, 0.3)', marginBottom: '0.75rem' }}>
            TRADITIONAL APPROACH
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            Indiscriminate Accumulation
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-body)', fontSize: '0.88rem' }}>
            <li>❌ Store everything blindly</li>
            <li>❌ Scale hardware as volume grows</li>
            <li>❌ Query slowly through low-signal noise</li>
          </ul>
        </div>

        <div className="light-card light-card-accent">
          <div className="tag tag-teal" style={{ marginBottom: '0.75rem' }}>
            DISTILIO APPROACH
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.75rem' }}>
            Contextual Prioritization
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-heading)', fontSize: '0.88rem', fontWeight: 600 }}>
            <li>⚡ Score relevance against business need</li>
            <li>⚡ Prune, compress, and tier intelligently</li>
            <li>⚡ Accelerate downstream AI & analytics</li>
          </ul>
        </div>

        <div className="light-card" style={{ padding: '0.8rem' }}>
          <img
            src="/images/network_flow.png"
            alt="Intelligent Data Stream Routing"
            className="card-image-box"
            style={{ height: '140px', marginBottom: '0.75rem' }}
          />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-heading)' }}>
            Intelligent Data Stream Gate
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Decides storage tier and compute priority before ingestion.
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S05Solution;
