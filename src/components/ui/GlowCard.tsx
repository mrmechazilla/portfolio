'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(0, 212, 255, 0.15)',
  onClick,
}: GlowCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 0 40px ${glowColor}`,
        borderColor: glowColor,
      }}
      transition={{ duration: 0.2 }}
      className={`
        rounded-xl border p-6
        bg-(--color-bg-surface)
        backdrop-blur-sm
        cursor-default
        ${className}
      `}
      style={{ borderColor: 'var(--color-border)' }}
    >
      {children}
    </motion.div>
  );
}