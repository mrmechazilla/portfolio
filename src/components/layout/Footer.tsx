'use client';

import { personalInfo, socialLinks } from '@/lib/data';
import { Mail } from 'lucide-react';

const size = 18;

const iconMap: Record<string, React.ReactNode> = {
  github: (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  linkedin: (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  mail: <Mail size={size} />,
};

export default function Footer() {
  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row
                      items-center justify-between gap-6">

        {/* Left — name + credit */}
        <div>
          <p
            className="text-sm font-mono"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Designed & built by{' '}
            <span style={{ color: 'var(--color-accent-cyan)' }}>
              {personalInfo.name}
            </span>
          </p>
          <p
            className="text-xs mt-1"
            style={{ color: 'var(--color-text-muted)' }}
            suppressHydrationWarning
          >
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>

        {/* Right — social links */}
        <div className="flex items-center gap-4">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-2 rounded-lg border transition-all duration-200
                         hover:scale-110 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]"
              style={{
                color: 'var(--color-text-muted)',
                borderColor: 'var(--color-border)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = 'var(--color-accent-cyan)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent-cyan)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
              }}
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}