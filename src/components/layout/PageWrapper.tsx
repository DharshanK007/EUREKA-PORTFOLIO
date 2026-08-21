// src/components/layout/PageWrapper.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface PageWrapperProps {
  id: string;
  num?: string;
  title?: string;
  highlightTitle?: string;
  subtitle?: string;
  bgImage?: string;
  children: React.ReactNode;
}

const slideVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const PageWrapper: React.FC<PageWrapperProps> = ({
  id,
  title,
  highlightTitle,
  subtitle,
  bgImage,
  children,
}) => {
  return (
    <section id={id} className="slide-panel" aria-label={title || id}>
      {/* Background Image Layer with visible opacity */}
      {bgImage && (
        <div
          className="slide-bg-overlay"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      
      {/* Ambient gradient overlay */}
      <div className="slide-bg-gradient" />

      {/* Main animated content wrapper */}
      <motion.div
        className="slide-content-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideVariants}
      >
        {title && (
          <h2 className="slide-title-hero">
            {title} {highlightTitle && <span>{highlightTitle}</span>}
          </h2>
        )}

        {subtitle && <p className="slide-subtitle">{subtitle}</p>}

        <div className="slide-body">{children}</div>
      </motion.div>
    </section>
  );
};

export default PageWrapper;
