// src/data/solution.ts

export const philosophyStatements = [
  'No data should be assumed to be useless.',
  'Data relevance depends on business objective, domain, operation, and context.',
  'Our goal is not to reduce data — it is to make the existing data more efficient and more useful.',
];

export const pruningActions = [
  { action: 'Prioritize', desc: 'Surface highest-relevance data for active processing', icon: 'arrow-up' },
  { action: 'Filter', desc: 'Exclude data outside operational scope without deleting', icon: 'filter' },
  { action: 'Compress', desc: 'Reduce storage footprint while preserving informational content', icon: 'minimize' },
  { action: 'Tier', desc: 'Move data to appropriate storage tier based on relevance', icon: 'layers' },
  { action: 'Cache', desc: 'Cache high-value representations for faster downstream access', icon: 'zap' },
  { action: 'Deprioritize', desc: 'Reduce compute allocation for lower-relevance data', icon: 'pause' },
  { action: 'Retain by Policy', desc: 'Keep data per compliance/business policy without active processing', icon: 'shield' },
];

export const engineFlow = [
  { label: 'Enterprise Data', type: 'source' },
  { label: 'Business Requirement', type: 'context' },
  { label: 'Domain Knowledge', type: 'context' },
  { label: 'Intelligent Pruning Engine', type: 'engine' },
  { label: 'Prioritize / Compress / Tier / Retain', type: 'split' },
  { label: 'Efficient Data Flow', type: 'output' },
  { label: 'Analysis / Operation', type: 'destination' },
];

export const traditionalVsProposed = {
  traditional: [
    'Collect everything',
    'Store everything',
    'Scale infrastructure',
    'Process / analyze later',
  ],
  proposed: [
    'Collect',
    'Understand business need',
    'Apply domain knowledge',
    'Identify relevant information',
    'Intelligently prune / compress / prioritize',
    'Efficient data flow',
    'Analysis / operation',
  ],
};
