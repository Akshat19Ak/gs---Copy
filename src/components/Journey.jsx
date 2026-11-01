import React, { useState } from 'react';
import { Reveal, Icons } from './shared';
import { config } from '../config';
import './Journey.css';

export default function Journey() {
  const { journey, experience, certifications, programs, societies } = config;
  const [activeTab, setActiveTab] = useState('journey'); // 'journey' | 'experience' | 'certifications'

  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="section-header">
            <span className="label">The Progression</span>
            <h2 className="display-lg">
              Journey, Experience &amp; <span className="gradient-text">Milestones.</span>
            </h2>
            <p className="body-text">
              How curiosity transformed into craft — navigating from campus technical societies
              to cloud-scale machine learning, production API backends, and industrial software engineering.
            </p>
          </div>
        </Reveal>

        {/* Section Switcher Tabs */}
        <Reveal delay={1}>
          <div className="journey-tabs" role="tablist">
            <button
              className={`journey-tab ${activeTab === 'journey' ? 'active' : ''}`}
              onClick={() => setActiveTab('journey')}
              role="tab"
              aria-selected={activeTab === 'journey'}
            >
              <Icons.Compass style={{ width: 16, height: 16 }} />
              Chronological Path
            </button>
            <button
              className={`journey-tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
              role="tab"
              aria-selected={activeTab === 'experience'}
            >
              <Icons.Briefcase style={{ width: 16, height: 16 }} />
              Work &amp; Leadership
            </button>
            <button
              className={`journey-tab ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('certifications')}
              role="tab"
              aria-selected={activeTab === 'certifications'}
            >
              <Icons.Award style={{ width: 16, height: 16 }} />
              Certifications &amp; Programs
            </button>
          </div>
        </Reveal>

        {/* Tab 1: Chronological Journey */}
        {activeTab === 'journey' && (
          <div className="timeline-wrap animate-fade-in">
            {journey.map((step, idx) => (
              <Reveal key={step.id} delay={Math.min(idx + 1, 5)}>
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot" />
                    {idx < journey.length - 1 && <div className="timeline-line" />}
                  </div>

                  <div className="timeline-body card">
                    <div className="timeline-meta">
                      <span className="timeline-phase">{step.phase}</span>
                      <span className="timeline-date">{step.date}</span>
                    </div>

                    <h3 className="timeline-title">{step.title}</h3>
                    <p className="timeline-text">{step.summary}</p>

                    <div className="timeline-tags">
                      {step.tags.map(t => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Tab 2: Experience & Leadership */}
        {activeTab === 'experience' && (
          <div className="experience-wrap animate-fade-in">
            {/* Industry Internship */}
            <h3 className="sub-section-title">Professional Experience</h3>
            <div className="experience-cards-grid">
              {experience.map((exp) => (
                <Reveal key={exp.id}>
                  <div className="card exp-card">
                    <div className="exp-card-header">
                      <div>
                        <span className="label">{exp.company}</span>
                        <h4 className="exp-role">{exp.role}</h4>
                      </div>
                      <span className="exp-period">{exp.period}</span>
                    </div>
                    <p className="exp-desc">{exp.description}</p>
                    <ul className="exp-highlights">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>
                          <span className="exp-bullet">▸</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="exp-tags">
                      {exp.tech.map(t => (
                        <span key={t} className="tag tag-mint">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* University Society Leadership */}
            <h3 className="sub-section-title" style={{ marginTop: '3rem' }}>
              Technical Society Leadership
            </h3>
            <div className="societies-cards-grid">
              {societies.map((soc) => (
                <Reveal key={soc.name}>
                  <div className="card society-card">
                    <span className="label">{soc.role}</span>
                    <h4 className="society-title">{soc.name}</h4>
                    <span className="society-period">{soc.period}</span>
                    <p className="society-desc">{soc.highlights}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Certifications & Specialized Programs */}
        {activeTab === 'certifications' && (
          <div className="certifications-wrap animate-fade-in">
            <h3 className="sub-section-title">Programs &amp; Cloud Labs</h3>
            <div className="programs-grid">
              {programs.map((prog) => (
                <Reveal key={prog.title}>
                  <div className="card program-card">
                    <div className="program-top">
                      <Icons.Cpu style={{ width: 20, height: 20, color: 'var(--violet-light)' }} />
                      <span className="program-period">{prog.period}</span>
                    </div>
                    <h4 className="program-title">{prog.title}</h4>
                    <p className="program-desc">{prog.description}</p>
                    {prog.url && (
                      <a
                        href={prog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-verify-link"
                      >
                        <span>Verify Credential</span>
                        <Icons.ArrowUpRight style={{ width: 14, height: 14 }} />
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <h3 className="sub-section-title" style={{ marginTop: '3rem' }}>
              Verified Technical Certifications
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <Reveal key={cert.title}>
                  <div className="card cert-card">
                    <div className="cert-top">
                      <span className="cert-issuer">{cert.issuer}</span>
                      {cert.hours && <span className="cert-hours">{cert.hours} Hours</span>}
                    </div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <div className="cert-bottom">
                      <span className="cert-date">{cert.date}</span>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-verify-link"
                        >
                          <span>Certificate</span>
                          <Icons.ExternalLink style={{ width: 12, height: 12 }} />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
