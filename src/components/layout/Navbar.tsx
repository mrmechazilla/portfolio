'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/lib/data';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10, 14, 23, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--color-border)'
          : '1px solid transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo / initials */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center
                       text-sm font-bold font-mono border transition-all duration-300
                       group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
            style={{
              background: 'rgba(0,212,255,0.08)',
              borderColor: 'var(--color-accent-cyan)',
              color: 'var(--color-accent-cyan)',
            }}
          >
            {personalInfo.initials}
          </div>
          <span
            className="text-sm font-semibold hidden sm:block"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {personalInfo.name.split(' ')[0]}
          </span>
        </motion.button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <button
                onClick={() => handleNav(link.href)}
                className="relative text-sm font-medium transition-colors duration-200 group"
                style={{
                  color: active === link.href
                    ? 'var(--color-accent-cyan)'
                    : 'var(--color-text-muted)',
                }}
              >
                <span className="font-mono text-xs mr-1"
                  style={{ color: 'var(--color-accent-cyan)' }}>
                  0{i + 1}.
                </span>
                {link.label}
                {/* underline on hover */}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300
                             group-hover:w-full"
                  style={{ background: 'var(--color-accent-cyan)' }}
                />
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Resume button */}
        <motion.a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px rgba(0,212,255,0.3)',
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg
                     text-sm font-mono font-medium border transition-all duration-200"
          style={{
            color: 'var(--color-accent-cyan)',
            borderColor: 'var(--color-accent-cyan)',
            background: 'rgba(0,212,255,0.05)',
          }}
        >
          Resume ↗
        </motion.a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              animate={{
                rotate: menuOpen
                  ? i === 0 ? 45  : i === 2 ? -45 : 0
                  : 0,
                y:      menuOpen
                  ? i === 0 ? 8   : i === 2 ? -8  : 0
                  : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
              className="block w-6 h-px"
              style={{ background: 'var(--color-text-primary)' }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(10,14,23,0.95)',
              borderBottom: '1px solid var(--color-border)',
            }}
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0  }}
                  transition={{ delay: i * 0.07 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left py-3 text-sm font-medium
                               border-b transition-colors duration-200"
                    style={{
                      color: 'var(--color-text-muted)',
                      borderColor: 'var(--color-border)',
                    }}
                  >
                    <span className="font-mono text-xs mr-2"
                      style={{ color: 'var(--color-accent-cyan)' }}>
                      0{i + 1}.
                    </span>
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <li className="pt-3">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 rounded-lg text-sm font-mono border"
                  style={{
                    color: 'var(--color-accent-cyan)',
                    borderColor: 'var(--color-accent-cyan)',
                    background: 'rgba(0,212,255,0.05)',
                  }}
                >
                  Resume ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
