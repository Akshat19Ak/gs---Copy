import React, { useState } from 'react';
import { Reveal, Icons } from './shared';
import { config } from '../config';
import './Skills.css';

export default function Skills() {
  const { skills } = config;
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="section-header">
            <span className="label">Technical Capabilities</span>
            <h2 className="display-lg">
              Engineering <span className="gradient-text">Arsenal &amp; Stack.</span>
            </h2>
            <p className="body-text">
              Organized by actual hands-on project implementation — from low-level systems programming
              and algorithmic foundations to high-throughput REST APIs and autonomous agentic workflows.
            </p>
          </div>
        </Reveal>

        {/* Skills Categories Grid */}
        <div className="skills-grid">
          {skills.categories.map((cat, idx) => {
            const Icon = Icons[cat.icon] || Icons.Cpu;
            const isSelected = selectedCategory === cat.name;

            return (
              <Reveal key={cat.name} delay={Math.min(idx + 1, 6)}>
                <div
                  className={`skill-card card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory(isSelected ? null : cat.name)}
                >
                  <div className="skill-card-top">
                    <div className="skill-icon-wrap">
                      <Icon style={{ width: 20, height: 20 }} />
                    </div>
                    <span className="skill-count">{cat.items.length} tools</span>
                  </div>

                  <h3 className="skill-card-title">{cat.name}</h3>

                  <div className="skill-chips-wrap">
                    {cat.items.map((item) => (
                      <span key={item} className="skill-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* LeetCode & Problem Solving Banner */}
        <Reveal delay={2}>
          <div className="skills-highlight-banner card">
            <div className="skills-banner-content">
              <div className="skills-banner-badge">
                <Icons.Code style={{ width: 16, height: 16, color: 'var(--mint)' }} />
                <span>DSA Mastery</span>
              </div>
              <h3 className="skills-banner-title">
                170+ LeetCode Problems Solved with Algorithmic Discipline
              </h3>
              <p className="skills-banner-text">
                Committed to writing optimal code. Core areas include Graph Traversals (BFS/DFS),
                Dynamic Programming, Trees, Heap Queues, and Sliding Window algorithms implemented primarily in Python and C++.
              </p>
            </div>
            <a
              href={config.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary skills-banner-btn"
            >
              <span>Visit LeetCode</span>
              <Icons.ExternalLink style={{ width: 14, height: 14 }} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
