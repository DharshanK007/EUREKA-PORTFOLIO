// src/data/problem.ts

export const problemStats = [
  { value: '2.5 quintillion', unit: 'bytes', label: 'of data created every day globally' },
  { value: '80–90%', unit: '', label: 'of enterprise data is never analyzed after collection' },
  { value: '60%', unit: '', label: 'of stored data is redundant, obsolete, or trivial [industry estimates]' },
];

export const accumulationFlow = [
  { label: 'Data Generation', icon: 'db', sub: 'Logs · Transactions · Sensors · Records' },
  { label: 'Data Accumulation', icon: 'stack', sub: 'Everything retained — just in case' },
  { label: 'Storage + Processing', icon: 'server', sub: 'All data treated equally' },
  { label: 'Infrastructure Pressure', icon: 'alert', sub: 'Scaling costs rise. Complexity grows.' },
];

export const hiddenProblem = {
  headline: 'The organization retains everything — because everything might matter someday.',
  sub: 'But potential value ≠ immediate operational value.',
  tiers: [
    { label: 'High Relevance', color: '#1E5FA8', pct: 15, desc: 'Directly contributes to current operation' },
    { label: 'Medium Relevance', color: '#2A8C8C', pct: 25, desc: 'Useful in near-term analyses' },
    { label: 'Low Current Relevance', color: '#7CA3C4', pct: 35, desc: 'May become important later' },
    { label: 'Unknown Relevance', color: '#B8CDE0', pct: 25, desc: 'Analytical value not yet determined' },
  ],
  insight:
    'Without a mechanism for understanding relevance, all tiers consume equal storage, compute, and processing resources.',
};

export const keyMessage =
  'The problem is not data abundance. The problem is data without contextual prioritization.';
