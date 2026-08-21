// src/pages/sections/S07DomainKnowledge.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S07DomainKnowledge: React.FC = () => {
  return (
    <PageWrapper
      id="domain-knowledge"
      title="Generic rules cannot determine"
      highlightTitle="analytical importance."
      subtitle="The difference between infrastructure metrics and business context."
      bgImage="/images/data_stream.png"
    >
      <div className="grid-cards-2">
        <div className="light-card" style={{ background: 'rgba(255, 255, 255, 0.94)' }}>
          <div className="tag" style={{ marginBottom: '1rem', color: '#64748B' }}>
            GENERIC OPTIMIZATION
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '1rem' }}>
            Asks Infrastructure Questions
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-body)', fontSize: '0.9rem', marginBottom: '1rem' }}>
            <li>• "How old is this file?"</li>
            <li>• "How often is it accessed?"</li>
            <li>• "How large is the payload?"</li>
          </ul>
          <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 600, borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
            ❌ Result: Blind tiering based on file metadata, missing business criticality.
          </div>
        </div>

        <div className="light-card light-card-accent">
          <div className="tag tag-blue" style={{ marginBottom: '1rem' }}>
            DISTILIO DOMAIN ENGINE
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '1rem' }}>
            Asks Business Questions
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-heading)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>
            <li>⚡ "What operational goal are we achieving?"</li>
            <li>⚡ "Which features drive risk or value?"</li>
            <li>⚡ "What does domain expertise prescribe?"</li>
          </ul>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600, borderTop: '1px solid rgba(37, 99, 235, 0.2)', paddingTop: '0.5rem' }}>
            ⚡ Result: Context-aware stream routing aligned directly to business goals.
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S07DomainKnowledge;
