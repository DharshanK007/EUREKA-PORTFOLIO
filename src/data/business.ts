// src/data/business.ts

export const businessModels = [
  {
    name: 'Enterprise Subscription',
    desc: 'Annual or monthly subscription license per organization / data volume tier.',
    status: 'proposed',
  },
  {
    name: 'Usage-Based Pricing',
    desc: 'Pricing linked to volume of data processed through the pruning engine.',
    status: 'proposed',
  },
  {
    name: 'Savings-Linked Pricing',
    desc: 'Fraction of validated infrastructure cost reduction delivered to the customer.',
    status: 'proposed',
  },
  {
    name: 'Enterprise Implementation',
    desc: 'Paid domain-specific formulation and integration for large-scale deployments.',
    status: 'proposed',
  },
];

export const kpiCategories = [
  {
    category: 'Storage Efficiency',
    metrics: ['Reduction in actively processed data volume', 'Reduction in storage footprint where applicable'],
    validated: false,
  },
  {
    category: 'Compute Efficiency',
    metrics: ['Reduction in compute requirements for downstream analytics', 'Reduction in processing time'],
    validated: false,
  },
  {
    category: 'Processing Efficiency',
    metrics: ['Reduction in redundant computation', 'Improved analytical throughput'],
    validated: false,
  },
  {
    category: 'Resource Utilization',
    metrics: ['Improved prioritization of high-value data', 'Reduced infrastructure scaling pressure'],
    validated: false,
  },
];

export const beforeAfter = {
  before: ['Collect', 'Store', 'Scale', 'Process all data', 'Analyze (if capacity allows)'],
  after: ['Collect', 'Understand business need', 'Prioritize', 'Optimize', 'Process relevant data', 'Analyze efficiently'],
};

export const competitorComparison = [
  {
    category: 'Storage Lifecycle / Tiering',
    existingBasis: 'Age, access frequency, file size',
    proposedBasis: 'Business relevance to current operation',
  },
  {
    category: 'Data Compression',
    existingBasis: 'Generic encoding efficiency',
    proposedBasis: 'Domain-informed selective compression',
  },
  {
    category: 'Data Governance / Catalogs',
    existingBasis: 'Metadata classification, compliance',
    proposedBasis: 'Operational relevance scoring',
  },
  {
    category: 'FinOps / Cloud Cost Tools',
    existingBasis: 'Resource usage patterns, rightsizing',
    proposedBasis: 'Data-level intelligence before infrastructure decisions',
  },
  {
    category: 'Data Observability',
    existingBasis: 'Quality, freshness, lineage monitoring',
    proposedBasis: 'Relevance to active business operation',
  },
];
