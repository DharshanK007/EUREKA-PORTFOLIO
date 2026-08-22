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
      subtitle="Evaluating operational relevance before data enters cloud storage."
      bgImage="/images/network_flow.png"
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 0.95fr', gap: '1.25rem', alignItems: 'stretch' }}>
        {/* Traditional Approach Box */}
        <div className="light-card" style={{ borderColor: 'rgba(239, 68, 68, 0.35)', background: '#FEF2F2' }}>
          <div className="tag" style={{ color: '#DC2626', borderColor: 'rgba(239, 68, 68, 0.35)', marginBottom: '0.65rem' }}>
            WHAT CURRENT TECH LACKS
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.65rem' }}>
            Traditional Accumulation
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: '#7F1D1D', fontSize: '0.82rem', fontWeight: 500 }}>
            <li>❌ <strong>Blind Ingestion:</strong> Dumps 100% of raw stream noise into cloud storage without checking value</li>
            <li>❌ <strong>Post-Ingest Lag:</strong> Tries to manage costs <em>after</em> expensive cloud retention bills accumulate</li>
            <li>❌ <strong>Content Ignorance:</strong> Treats critical risk signals and &gt;80% baseline noise with identical priority</li>
            <li>❌ <strong>Linear Cost Drag:</strong> Forces hardware & cloud storage scaling to double every 18 months</li>
            <li>❌ <strong>Sluggish Analytics:</strong> Forces AI pipelines & SQL queries to search through bloated noise</li>
          </ul>
        </div>

        {/* Distilio Approach Box */}
        <div className="light-card light-card-accent" style={{ border: '2px solid var(--accent-blue)' }}>
          <div className="tag tag-teal" style={{ marginBottom: '0.65rem' }}>
            HOW DISTILIO SOLVES IT
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.65rem' }}>
            Distilio Pre-Ingest Engine
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-heading)', fontSize: '0.82rem', fontWeight: 600 }}>
            <li>⚡ <strong>Pre-Ingestion Stream Gate:</strong> Scores & prunes data streams <em>in-flight</em> before entering storage</li>
            <li>⚡ <strong>Domain-Native Intelligence:</strong> Applies objective relevance indicators (RM-NPI) to prioritize key data</li>
            <li>⚡ <strong>Dual-Channel Safety:</strong> Guarantees 100% anomaly retention while compressing &gt;80% noise</li>
            <li>⚡ <strong>Adaptive Stream Tiering:</strong> Routes high-value signals to hot storage & routine data to cold tiers</li>
            <li>⚡ <strong>Accelerated Compute:</strong> Delivers 3x–10x faster query execution & AI pipeline throughput</li>
          </ul>
        </div>

        {/* Visual Showcase Card */}
        <div className="light-card" style={{ padding: '0.85rem' }}>
          <img
            src="/images/network_flow.png"
            alt="Intelligent Data Stream Routing"
            className="card-image-box"
            style={{ height: '140px', marginBottom: '0.65rem' }}
          />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', color: 'var(--text-heading)', marginBottom: '0.2rem' }}>
            Intelligent Data Stream Gate
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
            Decides storage tier and compute priority before ingestion into cloud data warehouses.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600, borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem' }}>
            <span>• Pre-Ingest In-Flight Filtering</span>
            <span>• Zero Anomaly Blind-Spots</span>
            <span>• 40%–70% Cloud Storage Savings</span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S05Solution;
