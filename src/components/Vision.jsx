import React, { useState } from 'react';
import { Reveal, Icons } from './shared';
import './Vision.css';

const LAB_EXPERIMENTS = [
  {
    cmd: 'cat system_architecture_rule_1.md',
    title: 'De-mystifying Machine Intelligence',
    output:
      'Never treat a model as a black box. Understanding tensor operations, gradient flow, vector distance metrics (Cosine vs L2), and tokenization boundaries is non-negotiable for low-latency inference.',
    badge: 'Core Rule',
  },
  {
    cmd: 'curl -X POST /api/v1/hybrid-search',
    title: 'Why Hybrid RAG Outperforms Pure Dense Search',
    output:
      'Dense vector search captures semantic similarities, but stumbles on exact part numbers, citations, or acronyms. BM25 keyword frequency recovers exact nomenclature. Merging both via Reciprocal Rank Fusion yields optimal recall.',
    badge: 'Information Retrieval',
  },
  {
    cmd: 'docker-compose up --build production',
    title: 'Notebooks vs Production Microservices',
    output:
      'A model running in an isolated Jupyter notebook is only an experiment. A production system requires containerization, health checks, Pydantic validation, CORS protection, connection pooling, and resilient retry logic.',
    badge: 'Systems Engineering',
  },
];

export default function Vision() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="vision" className="section vision-section">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="section-header">
            <span className="label">Beyond the Builds · Engineering Manifesto</span>
            <h2 className="display-lg">
              Who I Want To Be &amp; <span className="gradient-text">How I Build.</span>
            </h2>
            <p className="body-text">
              I aspire to be a software engineer who builds at the frontier where robust backend
              systems and machine intelligence converge.
            </p>
          </div>
        </Reveal>

        {/* 3 Vision Pillars */}
        <div className="vision-pillars-grid">
          <Reveal delay={1}>
            <div className="card vision-pillar-card">
              <div className="pillar-top">
                <span className="pillar-num">01</span>
                <span className="label">Systems &amp; Architecture</span>
              </div>
              <h3 className="pillar-title">The AI Systems Engineer</h3>
              <p className="pillar-desc">
                Not just querying third-party APIs or running isolated scripts, but architecting the
                low-latency, resilient software pipelines and microservices that make machine intelligence
                reliable in production.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="card vision-pillar-card">
              <div className="pillar-top">
                <span className="pillar-num">02</span>
                <span className="label">Analytical Thinking</span>
              </div>
              <h3 className="pillar-title">First-Principles Problem Solver</h3>
              <p className="pillar-desc">
                Grounding technical decisions in fundamental truths: algorithmic complexity (O-notation),
                clean relational and vector data modeling, fault tolerance, and verifiable user utility over fleeting hype.
              </p>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="card vision-pillar-card">
              <div className="pillar-top">
                <span className="pillar-num">03</span>
                <span className="label">Dedication to Quality</span>
              </div>
              <h3 className="pillar-title">The Lifelong Craftsman</h3>
              <p className="pillar-desc">
                Continuously raising the bar on code quality, learning from senior engineers,
                contributing to technical societies, and building software that stands the test of production scrutiny.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Interactive Engineering Terminal Lab */}
        <Reveal delay={2}>
          <div className="card terminal-card">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <div className="terminal-title">
                <Icons.Terminal style={{ width: 14, height: 14, display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                akshat@engineering-lab: ~/manifesto
              </div>
              <span className="terminal-status">bash — 80x24</span>
            </div>

            <div className="terminal-body">
              <div className="terminal-tabs">
                {LAB_EXPERIMENTS.map((exp, i) => (
                  <button
                    key={i}
                    className={`terminal-tab-btn ${activeExp === i ? 'active' : ''}`}
                    onClick={() => setActiveExp(i)}
                  >
                    <span>{exp.badge}</span>
                  </button>
                ))}
              </div>

              <div className="terminal-console">
                <div className="terminal-line prompt-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">{LAB_EXPERIMENTS[activeExp].cmd}</span>
                </div>
                <div className="terminal-output-block animate-fade-in">
                  <h4 className="terminal-output-title"># {LAB_EXPERIMENTS[activeExp].title}</h4>
                  <p className="terminal-output-body">{LAB_EXPERIMENTS[activeExp].output}</p>
                </div>
                <div className="terminal-line cursor-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-cursor" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
