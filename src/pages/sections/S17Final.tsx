// src/pages/sections/S17Final.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { company } from '../../data/company';

const S17Final: React.FC = () => {
  return (
    <PageWrapper
      id="final"
      num="17"
      bgImage="/images/hero_datacenter.png"
    >
      <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
          lineHeight: 1.1,
          color: 'var(--text-heading)',
          marginBottom: '0.85rem'
        }}>
          The future is not about collecting more data.
        </h2>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
          lineHeight: 1.1,
          color: 'var(--accent-blue)',
          marginBottom: '2.5rem'
        }}>
          It is about knowing what data matters.
        </h2>

        <div style={{
          width: '60px',
          height: '4px',
          background: 'var(--accent-teal)',
          margin: '0 auto 2.5rem',
          borderRadius: '99px'
        }} />

        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
          color: 'var(--text-heading)',
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem'
        }}>
          {company.name}
        </div>

        <div style={{ fontSize: '1.2rem', color: 'var(--accent-blue)', fontWeight: 700 }}>
          {company.tagline}
        </div>
      </div>
    </PageWrapper>
  );
};

export default S17Final;
