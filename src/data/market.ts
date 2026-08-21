// src/data/market.ts

export const targetIndustries = [
  { name: 'Technology', icon: 'cpu', desc: 'SaaS platforms with continuous log and telemetry streams' },
  { name: 'FinTech', icon: 'trending-up', desc: 'Real-time transaction, risk, and compliance data' },
  { name: 'Healthcare Tech', icon: 'activity', desc: 'Patient, monitoring, and clinical operational data' },
  { name: 'Manufacturing', icon: 'settings', desc: 'IoT sensor, machine, and operational data' },
  { name: 'Telecom', icon: 'radio', desc: 'Network, usage, and infrastructure data at scale' },
  { name: 'IoT / Edge', icon: 'wifi', desc: 'High-frequency device and sensor data streams' },
  { name: 'Analytics Platforms', icon: 'bar-chart-2', desc: 'Organizations with expensive analytical workloads' },
];

export const customerProfile = {
  headline: 'Organizations with large, continuously growing data volumes and significant processing costs.',
  criteria: [
    'Continuous data generation at scale',
    'Significant storage infrastructure investment',
    'High-cost analytical workloads',
    'Difficulty identifying high-value information',
    'Data-management complexity growing faster than team capacity',
    'Infrastructure scaling pressure',
  ],
};

export const marketNote =
  'All listed segments represent target addressable markets. No existing customer relationships are implied.';
