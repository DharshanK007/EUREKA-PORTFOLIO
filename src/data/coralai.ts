// src/data/coralai.ts

export const coralaiSummary = {
  name: 'CoralAI / CoralDarwin',
  status: 'Proof of Concept',
  domain: 'Oceanography / Environmental Science',
  purpose:
    'Demonstrates that domain knowledge can drive intelligent, context-aware data prioritization and optimization.',
  caution:
    'CoralAI is the first implementation domain — not the boundary of the product.',
};

export const coralaiPocFlow = [
  { label: 'Timestamped Environmental Data', sub: 'SST · Rainfall · River Discharge · NDVI' },
  { label: 'Spatial Grid Representation', sub: 'Geographic indexing of observations' },
  { label: 'RM-NPI (Domain Relevance Indicator)', sub: 'Domain-specific risk / relevance scoring' },
  { label: 'Dual-Channel Autoencoder', sub: 'AI-based latent representation' },
  { label: 'Selective Processing', sub: 'Risk-aware + Anomaly-aware pathways' },
  { label: 'Optimized Data Flow', sub: 'Latent caching · Quantization · Tiered storage' },
];

export const dualChannel = {
  channel1: {
    name: 'Channel 1 — Domain-Aligned Risk',
    desc: 'Encodes information according to the domain-specific relevance indicator (RM-NPI). Prioritizes data that corresponds to known physical risk patterns.',
  },
  channel2: {
    name: 'Channel 2 — Discovery / Anomaly',
    desc: 'Captures patterns not fully explained by the known domain indicator — preserving information about emerging or unknown phenomena.',
  },
  insight:
    'The dual-channel architecture ensures the system does not blindly force all information into one predetermined relevance definition.',
};

export const coralaiProves = [
  'A domain can define what information matters.',
  'That domain knowledge can guide AI representation.',
  'The resulting representation can support selective processing.',
  'The same philosophy can be translated into infrastructure / data optimization decisions.',
];
