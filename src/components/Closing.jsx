import React, { useState } from 'react';
import { Reveal, Icons } from './shared';
import { config } from '../config';
import './Closing.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Closing() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(config.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-glow" aria-hidden="true" />

      <div className="container">
        <Reveal>
          <div className="card contact-main-card">
            <div className="contact-header">
              <span className="label">Initiate Contact</span>
              <h2 className="display-lg">
                Have Something Interesting <span className="gradient-text">to Build?</span>
              </h2>
              <p className="body-large contact-subtext">
                Whether you are exploring opportunities in AI systems, high-throughput backend engineering,
                RAG pipelines, or want to discuss machine intelligence architectures — my inbox is always open.
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="contact-actions">
              <a
                href={`mailto:${config.email}`}
                className="btn btn-primary"
                id="contact-email-btn"
              >
                <Icons.Mail style={{ width: 17, height: 17 }} />
                <span>Email Me Directly</span>
              </a>

              <button
                onClick={copyEmail}
                className="btn btn-secondary"
                id="copy-email-btn"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Icons.Check style={{ width: 16, height: 16, color: 'var(--mint)' }} />
                    <span style={{ color: 'var(--mint)' }}>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Icons.Copy style={{ width: 16, height: 16 }} />
                    <span>Copy: {config.email}</span>
                  </>
                )}
              </button>

              <a
                href={config.resumeUrl}
                download="Akshat_Gupta_Resume.pdf"
                className="btn btn-secondary"
                id="contact-resume-btn"
              >
                <Icons.Download style={{ width: 16, height: 16 }} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Contact Information & Channels Grid */}
            <div className="contact-details-grid">
              <div className="contact-item">
                <span className="contact-item-label">Direct Email</span>
                <a href={`mailto:${config.email}`} className="contact-item-val link-hover">
                  {config.email}
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-item-label">Phone</span>
                <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="contact-item-val link-hover">
                  {config.phone}
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-item-label">Current Location</span>
                <span className="contact-item-val">{config.location}</span>
              </div>

              <div className="contact-item">
                <span className="contact-item-label">Professional Profiles</span>
                <div className="contact-social-pills">
                  <a
                    href={config.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                    aria-label="LinkedIn Profile"
                  >
                    <Icons.Linkedin style={{ width: 14, height: 14 }} />
                    LinkedIn
                  </a>
                  <a
                    href={config.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                    aria-label="GitHub Profile"
                  >
                    <Icons.Github style={{ width: 14, height: 14 }} />
                    GitHub
                  </a>
                  <a
                    href={config.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                    aria-label="LeetCode Profile"
                  >
                    <Icons.Code style={{ width: 14, height: 14 }} />
                    LeetCode
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="footer" role="contentinfo">
          <div className="footer-left">
            <span className="footer-name">Akshat Gupta</span>
            <span className="footer-dot">·</span>
            <span className="footer-tagline">AI Systems &amp; Software Engineering</span>
          </div>

          <div className="footer-right">
            <span className="footer-copy">© {CURRENT_YEAR} · All verified claims</span>
            <button onClick={scrollToTop} className="back-to-top" aria-label="Scroll back to top">
              <span>Top</span>
              <Icons.ArrowDown style={{ width: 14, height: 14, transform: 'rotate(180deg)' }} />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
