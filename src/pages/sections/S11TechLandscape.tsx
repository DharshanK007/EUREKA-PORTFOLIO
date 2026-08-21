// src/pages/sections/S11TechLandscape.tsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';

const S11TechLandscape: React.FC = () => {
  return (
    <PageWrapper
      id="tech-landscape"
      num="11"
      title="Existing tools vs. our"
      highlightTitle="proposed differentiation."
      subtitle="Moving from reactive file lifecycle rules to pre-ingestion business relevance."
      bgImage="/images/datacenter.png"
    >
      {/* Detailed Side-by-Side Comparison */}
      <div className="grid-cards-2" style={{ marginBottom: '1.25rem' }}>
        {/* Current Tools Column */}
        <div className="light-card" style={{ background: '#F8FAFC', border: '1px solid var(--border-subtle)' }}>
          <div className="tag" style={{ marginBottom: '0.75rem', color: '#64748B', borderColor: '#CBD5E1' }}>
            CURRENT MARKET TOOLS (Tiering, Compression, FinOps)
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
            Reactive Post-Ingestion Management
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.85rem', fontSize: '0.88rem' }}>
            Existing cloud lifecycle policies (AWS S3 Glacier, Snowflake auto-clustering, Parquet) evaluate data <strong>after it enters disk</strong> using basic file age, size, or access frequency logs.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: '#64748B' }}>
            <li>❌ <strong>Indiscriminate Accumulation:</strong> Stores 100% of raw stream noise first</li>
            <li>❌ <strong>Blind to Content:</strong> Cannot distinguish high-risk data from routine noise</li>
            <li>❌ <strong>Manual Scripting:</strong> Requires static SQL/lifecycle rules written by hand</li>
          </ul>
        </div>

        {/* Distilio Proposed Differentiation Column */}
        <div className="light-card light-card-accent" style={{ border: '2px solid var(--accent-blue)' }}>
          <div className="tag tag-blue" style={{ marginBottom: '0.75rem' }}>
            DISTILIO PROPOSED DIFFERENTIATION
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
            Proactive In-Stream Relevance Engine
          </h3>
          <p className="big-stat-desc" style={{ marginBottom: '0.85rem', fontSize: '0.88rem' }}>
            Distilio acts <strong>pre-ingestion in-flight</strong>, scoring stream packets against domain relevance indicators (e.g. RM-NPI) to decide storage priority before hardware costs accumulate.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--accent-blue)', fontWeight: 600 }}>
            <li>⚡ <strong>Pre-Ingest Pruning:</strong> Filters &gt;80% baseline noise before cloud ingestion</li>
            <li>⚡ <strong>Domain-Native Intelligence:</strong> Guarantees 100% critical anomaly preservation</li>
            <li>⚡ <strong>Downstream AI Speedup:</strong> Delivers 3x–10x faster query & model execution</li>
          </ul>
        </div>
      </div>

      {/* Structured Key Matrix Breakdown */}
      <div className="grid-cards-3">
        <div className="light-card" style={{ padding: '0.85rem 1rem' }}>
          <div className="tag tag-teal" style={{ fontSize: '0.7rem', marginBottom: '0.3rem' }}>EXECUTION TIMING</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-heading)' }}>
            Pre-Ingest vs. Post-Ingest
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Filters noise at edge/stream boundary vs. archiving disk files months later.
          </div>
        </div>

        <div className="light-card" style={{ padding: '0.85rem 1rem' }}>
          <div className="tag tag-blue" style={{ fontSize: '0.7rem', marginBottom: '0.3rem' }}>DECISION BASIS</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-heading)' }}>
            Domain Context vs. File Age
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Evaluates operational relevance indicators vs. static timestamp & byte size.
          </div>
        </div>

        <div className="light-card" style={{ padding: '0.85rem 1rem' }}>
          <div className="tag tag-teal" style={{ fontSize: '0.7rem', marginBottom: '0.3rem' }}>BUSINESS ROI</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-heading)' }}>
            Direct Cost Reduction + AI Speed
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Cuts cloud bills 40-70% & accelerates ML pipeline throughput instantly.
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default S11TechLandscape;
