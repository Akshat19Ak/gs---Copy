import React, { useEffect, useRef } from 'react';
import { config } from '../config';
import { Icons } from './shared';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const spotlightRef = useRef(null);

  // Subtle mouse-following spotlight
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(124, 58, 237, 0.06), transparent 60%)`;
      }
    };

    hero.addEventListener('mousemove', onMove, { passive: true });
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Background elements */}
      <div className="hero-spotlight" ref={spotlightRef} aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-content">
        {/* Left: Text */}
        <div className="hero-text">
          <div className="hero-label label">
            <span className="hero-status-dot" aria-hidden="true" />
            AI Engineer & Full-Stack Developer
          </div>

          <h1 className="hero-name display-hero">
            Akshat<br />
            <span className="gradient-text">Gupta</span>
          </h1>

          <p className="hero-headline body-large">
            {config.introduction}
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Explore My Work
              <Icons.ArrowDown style={{ width: 16, height: 16 }} />
            </a>
            <a href={config.resumeUrl} className="btn btn-secondary" download>
              <Icons.Download style={{ width: 16, height: 16 }} />
              Resume
            </a>
          </div>

          <div className="hero-social">
            <a href={config.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub profile">
              <Icons.Github />
            </a>
            <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn profile">
              <Icons.Linkedin />
            </a>
            <a href={`mailto:${config.email}`} className="btn-icon" aria-label="Send email">
              <Icons.Mail />
            </a>
            <a href={config.leetcode} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LeetCode profile">
              <Icons.Code />
            </a>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="hero-portrait-wrap">
          <div className="hero-portrait-frame">
            <div className="hero-portrait-glow" aria-hidden="true" />
            <img
              src={config.portrait}
              alt="Akshat Gupta — Professional portrait"
              className="hero-portrait"
              width="460"
              height="460"
              loading="eager"
              fetchPriority="high"
            />
            <div className="hero-portrait-border" aria-hidden="true" />
          </div>

          {/* Floating info cards */}
          <div className="hero-float-card hero-float-top">
            <Icons.GraduationCap style={{ width: 14, height: 14, color: 'var(--violet-light)' }} />
            <span>KIIT University</span>
            <span className="hero-float-accent">CGPA {config.education.cgpa.split('/')[0].trim()}</span>
          </div>
          <div className="hero-float-card hero-float-bottom">
            <Icons.Zap style={{ width: 14, height: 14, color: 'var(--mint)' }} />
            <span>4 Deployed Projects</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">scroll</span>
      </div>
    </section>
  );
}
