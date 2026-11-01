import React from 'react';
import { Reveal, Icons } from './shared';
import { config } from '../config';
import './Story.css';

export default function Story() {
  const { education, about } = config;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="section-header">
            <span className="label">Engineering Philosophy & Background</span>
            <h2 className="display-lg">
              Curious by Nature. <span className="gradient-text">Engineer by Practice.</span>
            </h2>
            <p className="body-text">
              A computer science student obsessed with understanding systems from first principles —
              not just importing libraries to make code work, but engineering why and how it performs.
            </p>
          </div>
        </Reveal>

        {/* Narrative & Quick Facts Grid */}
        <div className="about-grid">
          {/* Main Story Narrative */}
          <Reveal delay={1} className="about-narrative-card card">
            <div className="about-card-badge">The Mindset</div>
            <h3 className="display-sm about-card-heading">
              From Mathematical Foundations to Production AI Systems
            </h3>
            <p className="body-text">
              {about.summary}
            </p>
            <p className="body-text">
              {about.details}
            </p>
            <div className="about-quote">
              <span className="about-quote-mark">“</span>
              <p>{about.philosophy}</p>
            </div>
          </Reveal>

          {/* Quick Metrics / Academic Pillars */}
          <div className="about-sidebar">
            <Reveal delay={2} className="card about-stat-card">
              <div className="about-stat-icon">
                <Icons.GraduationCap style={{ width: 22, height: 22, color: 'var(--violet-light)' }} />
              </div>
              <div className="about-stat-info">
                <span className="label">University & Degree</span>
                <h4 className="about-stat-title">{education.university}</h4>
                <p className="about-stat-sub">{education.degree}</p>
                <div className="about-cgpa-pill">
                  <span className="cgpa-num">8.82</span> / 10.0 CGPA · Expected May 2027
                </div>
              </div>
            </Reveal>

            <Reveal delay={3} className="card about-stat-card">
              <div className="about-stat-icon">
                <Icons.Code style={{ width: 22, height: 22, color: 'var(--mint)' }} />
              </div>
              <div className="about-stat-info">
                <span className="label">Algorithmic Problem Solving</span>
                <h4 className="about-stat-title">170+ LeetCode Solved</h4>
                <p className="about-stat-sub">
                  Focused on optimal time and space complexity in Python, dynamic programming, trees, and graphs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={4} className="card about-stat-card">
              <div className="about-stat-icon">
                <Icons.Briefcase style={{ width: 22, height: 22, color: 'var(--blue)' }} />
              </div>
              <div className="about-stat-info">
                <span className="label">Industry Experience</span>
                <h4 className="about-stat-title">SAIL Bhilai Steel Plant</h4>
                <p className="about-stat-sub">
                  Software Development Intern: ML forecasting with Facebook Prophet & plant dashboard.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Core CS Foundations / Coursework Bar */}
        <Reveal delay={2}>
          <div className="coursework-card card">
            <div className="coursework-header">
              <Icons.Cpu style={{ width: 18, height: 18, color: 'var(--violet-light)' }} />
              <span className="label">Rigorous Academic Coursework</span>
            </div>
            <div className="coursework-tags">
              {education.coursework.map((course) => (
                <span key={course} className="tag">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
