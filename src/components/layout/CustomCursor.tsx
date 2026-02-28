'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // Only show cursor after mount and only when not a touch device (avoids hydration mismatch)
  const [isPointerFine, setIsPointerFine] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  useEffect(() => {
    setIsPointerFine(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', move);

    const targets = document.querySelectorAll('a, button, [data-hover]');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [isPointerFine, mouseX, mouseY, isVisible]);

  if (!isPointerFine) return null;

  return (
    <>
      {/* outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width:  isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          borderColor: 'var(--color-accent-cyan)',
          opacity: isVisible ? (isHovering ? 0.8 : 0.4) : 0,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
      />
      {/* inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width:  6,
          height: 6,
          background: 'var(--color-accent-cyan)',
          opacity: isVisible ? 1 : 0,
          boxShadow: '0 0 10px rgba(0,212,255,0.8)',
        }}
      />
    </>
  );
}