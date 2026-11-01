import React, { useState, useEffect, useCallback, useRef } from 'react';
import { config } from '../config';
import { Icons } from './icons';
import { useActiveSection } from './hooks';

export { Icons };

/* ── Scroll Progress Component ─────────────────────────────── */
export function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const el = barRef.current;
      if (!el) return;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = scrollTop / (scrollHeight - clientHeight);
      el.style.transform = `scaleX(${Math.min(progress, 1)})`;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />;
}

/* ── Reveal Wrapper Component ──────────────────────────────── */
export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${Math.min(delay, 6)}` : '';
  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

/* ── Navigation Component ──────────────────────────────────── */
export function Nav({ onOpenCmd }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container nav-inner">
          <a
            href="#hero"
            className="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="nav-logo-dot" aria-hidden="true" />
            Akshat Gupta
          </a>

          <div className="nav-links">
            {config.navLinks.map((link) => {
              const targetId = link.href.slice(1);
              const isActive = active === targetId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              );
            })}
            <button className="nav-cta" onClick={onOpenCmd} aria-label="Open command palette (Ctrl+K)">
              <Icons.Search style={{ width: 13, height: 13, display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
              Quick Actions
              <span className="nav-kbd">⌘K</span>
            </button>
          </div>

          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Icons.Menu style={{ width: 22, height: 22 }} />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-menu ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <button className="nav-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation menu">
          <Icons.X style={{ width: 24, height: 24 }} />
        </button>
        {config.navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-mobile-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
          <a href={config.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
            <Icons.Github />
          </a>
          <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
            <Icons.Linkedin />
          </a>
          <a href={config.leetcode} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LeetCode">
            <Icons.Code />
          </a>
        </div>
      </div>
    </>
  );
}

/* ── Command Palette Actions & Component ───────────────────── */
const CMD_ACTIONS = [
  { label: 'Featured Projects', icon: 'Folder', action: '#projects', type: 'navigate', hint: 'AI & Systems' },
  { label: 'About & Philosophy', icon: 'User', action: '#about', type: 'navigate', hint: 'Who I am' },
  { label: 'Technical Arsenal (Skills)', icon: 'Zap', action: '#skills', type: 'navigate', hint: 'Stack & Tools' },
  { label: 'Academic & Tech Journey', icon: 'Calendar', action: '#journey', type: 'navigate', hint: 'Timeline' },
  { label: 'Work Experience (SAIL Internship)', icon: 'Briefcase', action: '#experience', type: 'navigate', hint: 'Industry' },
  { label: 'Get in Touch / Contact', icon: 'Mail', action: '#contact', type: 'navigate', hint: 'Email & Links' },
  { label: 'Download Resume (PDF)', icon: 'Download', action: config.resumeUrl, type: 'download', hint: 'Official CV' },
  { label: 'View GitHub Profile', icon: 'Github', action: config.github, type: 'link', hint: 'github.com/Akshat19Ak' },
  { label: 'Connect on LinkedIn', icon: 'Linkedin', action: config.linkedin, type: 'link', hint: 'linkedin.com/in/akshatgupta105' },
  { label: 'LeetCode Profile (170+ Solved)', icon: 'Code', action: config.leetcode, type: 'link', hint: 'DSA Problem Solving' },
  { label: 'Email Me Directly', icon: 'Mail', action: `mailto:${config.email}`, type: 'link', hint: config.email },
];

export function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const filtered = query
    ? CMD_ACTIONS.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()) || (a.hint && a.hint.toLowerCase().includes(query.toLowerCase())))
    : CMD_ACTIONS;

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setSelectedIndex(0);
  };

  const executeAction = useCallback((action) => {
    onClose();
    if (action.type === 'navigate') {
      const el = document.querySelector(action.action);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action.type === 'download') {
      const a = document.createElement('a');
      a.href = action.action;
      a.download = 'Akshat_Gupta_Resume.pdf';
      a.click();
    } else {
      window.open(action.action, '_blank', 'noopener,noreferrer');
    }
  }, [onClose]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      executeAction(filtered[selectedIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [filtered, selectedIndex, executeAction, onClose]);

  if (!isOpen) return null;

  return (
    <div className="cmd-overlay" onClick={onClose} role="dialog" aria-label="Command palette">
      <div className="cmd-palette" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-input-wrap">
          <Icons.Search />
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Type a command or jump to section…"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            aria-label="Search actions"
          />
        </div>
        <div className="cmd-results" role="listbox">
          {filtered.map((action, i) => {
            const Icon = Icons[action.icon] || Icons.Folder;
            return (
              <div
                key={action.label}
                className={`cmd-item ${i === selectedIndex ? 'selected' : ''}`}
                onClick={() => executeAction(action)}
                role="option"
                aria-selected={i === selectedIndex}
              >
                <Icon />
                <span className="cmd-item-label">{action.label}</span>
                {action.hint && <span className="cmd-item-hint">{action.hint}</span>}
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="cmd-item" style={{ opacity: 0.5, cursor: 'default' }}>
              <span className="cmd-item-label">No matching actions found</span>
            </div>
          )}
        </div>
        <div className="cmd-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
