import { motion } from 'motion/react';
import React from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInSection({ children, className = "", delay = 0 }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
