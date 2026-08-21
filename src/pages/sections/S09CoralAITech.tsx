// src/pages/sections/S09CoralAITech.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S09CoralAITech: React.FC = () => {
  return (
    <PageWrapper
      id="coral-ai-tech"
      num="09"
      title="Dual-Channel Autoencoder"
      highlightTitle="Architecture."
      subtitle="Ensuring the system never blindly forces information into a single fixed bucket."
      bgImage="/images/ocean_depths.png"
    >
      {/* Primary Channel Cards */}
      <div className="grid-cards-2" style={{ marginBottom: '1.25rem' }}>
        <div className="light-card light-card-accent">
          <div className="tag tag-blue" style={{ marginBottom: '0.75rem' }}>CHANNEL 1 — RISK ALIGNED</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
            Domain-Aligned Risk
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.75rem', fontSize: '0.88rem' }}>
            Encodes data according to the domain relevance indicator (RM-NPI). Prioritizes data matching known physical risk patterns.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            <span>• RM-NPI relevance indicator weighting</span>
            <span>• Known physical risk pattern preservation</span>
          </div>
        </div>

        <div className="light-card" style={{ border: '1px solid var(--accent-teal)', background: '#F0FDF4' }}>
          <div className="tag tag-teal" style={{ marginBottom: '0.75rem' }}>CHANNEL 2 — DISCOVERY</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
            Anomaly Discovery
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.75rem', fontSize: '0.88rem' }}>
            Captures unexpected patterns not explained by known indicators — preserving critical emerging phenomena.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--accent-teal)', fontWeight: 600 }}>
            <span>• Residual reconstruction error tracking</span>
            <span>• Zero blind-spots for novel climate events</span>
          </div>
        </div>
      </div>

      {/* Latent Fusion & Routing Banner */}
      <div className="light-card" style={{ padding: '0.9rem 1.25rem', marginBottom: '1.25rem', borderLeft: '4px solid var(--accent-blue)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="tag tag-blue" style={{ fontSize: '0.75rem' }}>LATENT FUSION LAYER</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-heading)' }}>
              Dual-Vector Adaptive Routing
            </span>
          </div>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Combines risk scores + residual anomalies to dynamically prune, compress, or elevate data streams.
          </span>
        </div>
      </div>

      {/* Technical Highlights / Performance Specs */}
      <div className="grid-cards-3">
        <div className="light-card" style={{ padding: '0.85rem 1rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--accent-blue)', marginBottom: '0.15rem' }}>
            &lt; 5 ms
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-heading)' }}>
            Real-Time Edge Evaluation
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            In-line stream evaluation prior to cloud ingest
          </div>
        </div>

        <div className="light-card" style={{ padding: '0.85rem 1rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--accent-teal)', marginBottom: '0.15rem' }}>
            &gt; 80%
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-heading)' }}>
            Intelligent Data Reduction
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Low-signal baseline noise safely pruned
          </div>
        </div>

        <div className="light-card" style={{ padding: '0.85rem 1rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--text-heading)', marginBottom: '0.15rem' }}>
            100%
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-heading)' }}>
            Signal & Anomaly Preservation
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Zero loss of critical physical risk events
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S09CoralAITech;

