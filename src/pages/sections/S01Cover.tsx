// src/pages/sections/S01Cover.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S01Cover: React.FC = () => {
  return (
    <PageWrapper
      id="cover"
      num="01"
      bgImage="/images/hero_datacenter.png"
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '2.5rem', alignItems: 'center' }}>
        {/* Left Column: Hero Content */}
        <div>
          <div className="tag tag-blue" style={{ marginBottom: '1.25rem' }}>
            PROPOSED ENTERPRISE TECHNOLOGY LAYER
          </div>

          <h1 className="slide-title-hero" style={{ fontSize: 'clamp(3.8rem, 6.8vw, 6rem)', marginBottom: '1.1rem' }}>
            Distilio
          </h1>

          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
            fontWeight: 800,
            color: 'var(--accent-blue)',
            lineHeight: 1.25,
            marginBottom: '1.1rem'
          }}>
            Relevance, not retention.
          </div>

          <p style={{
            fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
            color: 'var(--text-body)',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            We score data against what your business actually needs to decide — before it ever enters the pile.
          </p>

          {/* Value Highlight Badges */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="tag tag-teal" style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}>
              ⚡ Pre-Ingestion Pruning
            </span>
            <span className="tag tag-blue" style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}>
              🧠 Domain-Aware Scoring
            </span>
            <span className="tag tag-teal" style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}>
              🛡️ Signal Preservation
            </span>
          </div>
        </div>

        {/* Right Column: Large Datacenter Showcase Image */}
        <div className="light-card light-card-accent" style={{ padding: '1rem', position: 'relative' }}>
          <img
            src="/images/hero_datacenter.png"
            alt="Enterprise Datacenter Storage Optimization"
            style={{
              width: '100%',
              height: '320px',
              borderRadius: '12px',
              objectFit: 'cover',
              border: '1px solid var(--border-subtle)'
            }}
          />
          <div style={{
            marginTop: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-heading)' }}>
                Enterprise Cloud Data Engine
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Intelligent software layer for high-throughput enterprise infrastructure.
              </div>
            </div>
            <span className="tag tag-blue" style={{ flexShrink: 0 }}>Active Layer</span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S01Cover;
