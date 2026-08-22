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
        {/* Existing Technologies Column */}
        <div className="light-card" style={{ borderColor: 'rgba(239, 68, 68, 0.35)', background: '#FEF2F2' }}>
          <div className="tag" style={{ color: '#DC2626', borderColor: 'rgba(239, 68, 68, 0.35)', marginBottom: '0.65rem' }}>
            EXISTING TECHNOLOGIES
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.65rem' }}>
            Reactive Storage Policies
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', color: '#7F1D1D', fontSize: '0.82rem', fontWeight: 500 }}>
            <li>• <strong>Indiscriminate Ingestion:</strong> Existing cloud platforms (AWS, Snowflake, Azure) dump 100% of raw data streams into disk before evaluation.</li>
            <li>• <strong>Post-Storage Management:</strong> Lifecycle rules try to tier or archive data <em>after</em> expensive cloud retention bills have already accumulated.</li>
            <li>• <strong>Metadata-Only Rules:</strong> FinOps tools optimize strictly using static file age or access logs, completely blind to business relevance.</li>
            <li>• <strong>Compounding Cost & Lag:</strong> Linear hardware scaling creates storage bloat and slows downstream database & AI query performance.</li>
          </ul>
        </div>

        {/* Distilio Solution Column */}
        <div className="light-card light-card-accent" style={{ border: '2px solid var(--accent-blue)' }}>
          <div className="tag tag-teal" style={{ marginBottom: '0.65rem' }}>
            DISTILIO PROPOSED ENGINE
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.65rem' }}>
            Pre-Ingest Relevance Gate
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', color: 'var(--text-heading)', fontSize: '0.82rem', fontWeight: 600 }}>
            <li>• <strong>In-Stream Evaluation:</strong> Scores & prunes data streams <em>in-flight</em> before entering cloud data warehouses.</li>
            <li>• <strong>Domain-Native Intelligence:</strong> Applies objective business indicators to separate high-value risk signals from routine noise.</li>
            <li>• <strong>Dual-Channel Preservation:</strong> Guarantees 100% anomaly & critical event retention while compressing over 80% baseline noise.</li>
            <li>• <strong>Downstream Acceleration:</strong> Reduces cloud storage footprints by 40%–70% and speeds up AI & analytics compute by 3x–10x.</li>
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
            <span>• Pre-Ingestion In-Flight Filtering</span>
            <span>• Guaranteed Anomaly Preservation</span>
            <span>• 40%–70% Cloud Storage Reduction</span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S05Solution;
