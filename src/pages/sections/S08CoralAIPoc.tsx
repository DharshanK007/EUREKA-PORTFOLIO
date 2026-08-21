// src/pages/sections/S08CoralAIPoc.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S08CoralAIPoc: React.FC = () => {
  return (
    <PageWrapper
      id="coral-ai-poc"
      num="08"
      title="CoralAI — Proof of Concept in"
      highlightTitle="Oceanography & Climate."
      subtitle="Validating domain-native relevance scoring on high-noise, petabyte-scale environmental feeds."
      bgImage="/images/oceanography.png"
    >
      <div className="grid-cards-3">
        {/* Card 1: Why Oceanography Was Chosen */}
        <div className="light-card">
          <div className="tag tag-blue" style={{ marginBottom: '0.75rem' }}>01. DOMAIN SELECTION</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            Why Oceanography?
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.75rem' }}>
            Oceanography generates massive, noisy multi-sensor streams (SST, Salinity, NDVI, Chlorophyll) where <strong>90% is routine baseline noise</strong> and 10% contains critical climate risk events.
          </p>
          <div style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 700 }}>
            • Ultimate high-complexity benchmark domain
          </div>
        </div>

        {/* Card 2: How It Is Considered a PoC */}
        <div className="light-card light-card-accent">
          <div className="tag tag-teal" style={{ marginBottom: '0.75rem' }}>02. POC VALIDATION</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            How It Acts as a PoC
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.75rem' }}>
            Proves that <strong>domain-native algorithms (RM-NPI)</strong> can score & filter stream relevance *before* entering expensive cloud storage or AI pipelines.
          </p>
          <div style={{ fontSize: '0.8rem', color: 'var(--accent-teal)', fontWeight: 700 }}>
            • Proves objective-driven data pruning
          </div>
        </div>

        {/* Card 3: What We Have Done On It */}
        <div className="light-card" style={{ border: '2px solid var(--accent-blue)' }}>
          <div className="tag tag-blue" style={{ marginBottom: '0.75rem' }}>03. IMPLEMENTATION</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            What We Built: CoralDarwin
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '1.25rem' }}>
            Engineered dual-channel autoencoders compressing feeds by <strong>&gt;80%</strong> while guaranteeing <strong>100% signal preservation</strong> for marine bleaching anomalies.
          </p>

          <a
            href="https://coraldarwin.online"
            target="_blank"
            rel="noopener noreferrer"
            className="poc-link-btn"
          >
            <span>Launch CoralDarwin Live PoC</span>
            <span style={{ fontSize: '1.1rem' }}>↗</span>
          </a>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S08CoralAIPoc;
