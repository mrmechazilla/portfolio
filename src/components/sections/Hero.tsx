'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  github:   <Github   size={20} />,
  linkedin: <Linkedin size={20} />,
  mail:     <Mail     size={20} />,
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center
                 max-w-6xl mx-auto px-6 pt-20"
    >
      {/* background glow blob */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full
                   pointer-events-none blur-[120px] opacity-10"
        style={{ background: 'var(--color-accent-cyan)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full
                   pointer-events-none blur-[100px] opacity-10"
        style={{ background: 'var(--color-accent-purple)' }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2
                      gap-12 items-center">

        {/* LEFT — text content */}
        <div className="flex flex-col gap-6">

          {/* greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-sm"
            style={{ color: 'var(--color-accent-cyan)' }}
          >
            &gt; Hello, world. I&apos;m
          </motion.p>

          {/* name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold tracking-tight leading-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {personalInfo.name.split(' ').map((word, i) => (
              <span key={i} className="block">
                {i === 1 && (
                  <span style={{ color: 'var(--color-accent-cyan)' }}>
                    {word}{' '}
                  </span>
                )}
                {i !== 1 && word}{' '}
              </span>
            ))}
          </motion.h1>

          {/* title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-3"
          >
            <div
              className="h-px w-8"
              style={{ background: 'var(--color-accent-cyan)' }}
            />
            <p
              className="text-lg font-semibold"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {personalInfo.title}
            </p>
          </motion.div>

          {/* tagline pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-2"
          >
            {personalInfo.tagline.split(' · ').map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono border"
                style={{
                  color: 'var(--color-accent-cyan)',
                  borderColor: 'rgba(0,212,255,0.3)',
                  background: 'rgba(0,212,255,0.06)',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-base leading-relaxed max-w-lg"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="font-mono text-xs flex items-center gap-2"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <span style={{ color: 'var(--color-accent-green)' }}>◉</span>
            {personalInfo.location}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* primary — scroll to experience */}
            <motion.button
              onClick={() =>
                document.querySelector('#experience')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0,212,255,0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl
                         text-sm font-semibold transition-all duration-200"
              style={{
                background: 'var(--color-accent-cyan)',
                color: 'var(--color-bg-primary)',
              }}
            >
              View My Work
              <ArrowDown size={16} />
            </motion.button>

            {/* secondary — download resume */}
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0,212,255,0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl
                         text-sm font-semibold border transition-all duration-200"
              style={{
                color: 'var(--color-accent-cyan)',
                borderColor: 'var(--color-accent-cyan)',
                background: 'rgba(0,212,255,0.05)',
              }}
            >
              <Download size={16} />
              Resume
            </motion.a>
          </motion.div>

          {/* social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3 pt-2"
          >
            {socialLinks.map(link => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{
                  scale: 1.15,
                  color: 'var(--color-accent-cyan)',
                }}
                className="p-2 rounded-lg transition-colors duration-200"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {iconMap[link.icon]}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* outer glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30 scale-110"
              style={{ background: 'var(--color-accent-cyan)' }}
            />
            {/* rotating dashed border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-12px] rounded-full border-2 border-dashed opacity-20"
              style={{ borderColor: 'var(--color-accent-cyan)' }}
            />
            {/* photo */}
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2"
              style={{ borderColor: 'var(--color-accent-cyan)' }}
            >
              <Image
                src="/profile.png"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2
                         px-4 py-2 rounded-full border text-xs font-mono
                         whitespace-nowrap"
              style={{
                background: 'var(--color-bg-surface)',
                borderColor: 'var(--color-accent-green)',
                color: 'var(--color-accent-green)',
              }}
            >
              <span className="inline-block w-2 h-2 rounded-full mr-2
                               animate-pulse bg-current" />
              Available for opportunities
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2
                   flex flex-col items-center gap-2"
      >
        <span
          className="text-xs font-mono"
          style={{ color: 'var(--color-text-muted)' }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'var(--color-accent-cyan)' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}