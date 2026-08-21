// src/pages/sections/S13Market.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S13Market: React.FC = () => {
  return (
    <PageWrapper
      id="market"
      num="13"
      title="Target Market &"
      highlightTitle="Monetization Strategy."
      subtitle="Capturing enterprise cloud waste by shifting optimization upstream to the data stream."
      bgImage="/images/network_flow.png"
    >
      {/* Enterprise Market Context Banner */}
      <div className="light-card" style={{ padding: '0.85rem 1.25rem', marginBottom: '1.25rem', borderLeft: '4px solid var(--accent-teal)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="tag tag-teal" style={{ fontSize: '0.75rem' }}>CURRENT ENTERPRISE SPEND</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-heading)' }}>
              $120B+ Cloud Data Storage & Analytics Market
            </span>
          </div>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Enterprises pay millions for raw cloud data lakes — Distilio monetizes by cutting waste before bills occur.
          </span>
        </div>
      </div>

      {/* 3 Monetization Models */}
      <div className="grid-cards-3">
        {/* Model 1 */}
        <div className="light-card">
          <div className="tag tag-blue" style={{ marginBottom: '0.75rem' }}>MODEL 01</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
            Enterprise SaaS
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.75rem', fontSize: '0.88rem' }}>
            Annual subscription licensing based on the volume of data processed through the stream pruning layer.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            <span>• Tiered pricing per TB stream processed</span>
            <span>• Predictable annual enterprise software contract</span>
          </div>
        </div>

        {/* Model 2 */}
        <div className="light-card light-card-accent" style={{ border: '1px solid var(--accent-teal)' }}>
          <div className="tag tag-teal" style={{ marginBottom: '0.75rem' }}>MODEL 02</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
            Domain Modules
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.75rem', fontSize: '0.88rem' }}>
            Pre-built industry relevance modules (FinTech, Healthcare, IoT) with domain-tuned indicator matrices.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--accent-teal)', fontWeight: 600 }}>
            <span>• Turnkey vertical domain add-on pricing</span>
            <span>• Eliminates custom in-house ML model build time</span>
          </div>
        </div>

        {/* Model 3 */}
        <div className="light-card">
          <div className="tag tag-blue" style={{ marginBottom: '0.75rem' }}>MODEL 03</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
            Value-Share (ROI)
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.75rem', fontSize: '0.88rem' }}>
            Performance-based gain-sharing scaled against hard, validated cloud infrastructure bill reductions.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            <span>• 100% ROI-aligned risk-free enterprise buyer entry</span>
            <span>• Monetizes a fraction of proven cloud savings</span>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S13Market;
