// src/pages/sections/S10PocToProduct.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S10PocToProduct: React.FC = () => {
  return (
    <PageWrapper
      id="poc-to-product"
      num="10"
      title="Oceanography is the first domain —"
      highlightTitle="not the boundary."
      subtitle="The domain relevance model changes. The core pruning engine remains constant."
      bgImage="/images/enterprise_cloud.png"
    >
      <div className="grid-cards-4">
        <div className="light-card light-card-accent">
          <div className="tag tag-teal" style={{ marginBottom: '0.75rem' }}>CURRENT POC</div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.3rem' }}>Oceanography</h4>
          <p className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>RM-NPI environmental risk scoring</p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-teal)', fontWeight: 600 }}>
            • Proves &gt;80% stream noise pruning
          </div>
        </div>

        <div className="light-card">
          <div className="tag" style={{ marginBottom: '0.75rem' }}>EXPANSION 1</div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.3rem' }}>FinTech</h4>
          <p className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>Transaction fraud period relevance</p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • High-frequency anomaly detection
          </div>
        </div>

        <div className="light-card">
          <div className="tag" style={{ marginBottom: '0.75rem' }}>EXPANSION 2</div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.3rem' }}>Healthcare</h4>
          <p className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>Patient chronic condition vitals</p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • Continuous telemetry vital scoring
          </div>
        </div>

        <div className="light-card">
          <div className="tag" style={{ marginBottom: '0.75rem' }}>EXPANSION 3</div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.3rem' }}>IoT & Industry</h4>
          <p className="big-stat-desc" style={{ marginBottom: '0.5rem' }}>Predictive maintenance sensors</p>
          <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            • Edge vibration & thermal anomaly filter
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S10PocToProduct;
