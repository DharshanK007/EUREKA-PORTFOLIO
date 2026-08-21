// src/components/diagrams/FlowDiagram.tsx
// Vertical flow diagram — accepts an array of steps
import React from 'react';

export interface FlowStep {
  label: string;
  sub?: string;
  type?: 'source' | 'context' | 'engine' | 'split' | 'output' | 'destination' | 'default';
}

interface FlowDiagramProps {
  steps: FlowStep[];
  compact?: boolean;
}

const typeStyles: Record<string, string> = {
  source:       'flow-node',
  context:      'flow-node',
  engine:       'flow-node accent',
  split:        'flow-node teal',
  output:       'flow-node',
  destination:  'flow-node dark',
  default:      'flow-node',
};

const FlowDiagram: React.FC<FlowDiagramProps> = ({ steps, compact = false }) => {
  return (
    <div className={`flex flex-col items-center gap-0 ${compact ? 'scale-90' : ''}`}>
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className={typeStyles[step.type ?? 'default']} style={{ minWidth: '200px', maxWidth: '280px' }}>
            <div>{step.label}</div>
            {step.sub && (
              <div style={{ fontSize: '0.7rem', opacity: 0.75, marginTop: '2px', fontWeight: 400 }}>
                {step.sub}
              </div>
            )}
          </div>
          {i < steps.length - 1 && (
            <div className="flow-arrow">↓</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FlowDiagram;
