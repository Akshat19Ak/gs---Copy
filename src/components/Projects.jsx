import React, { useState } from 'react';
import { Reveal, Icons } from './shared';
import { config } from '../config';
import './Projects.css';

const CATEGORIES = ['All', 'AI & RAG', 'Agentic AI', 'Machine Learning', 'Industry / ML'];

export default function Projects() {
  const { projects } = config;
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedArchitecture, setExpandedArchitecture] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="section-header">
            <span className="label">Engineering Portfolio & Systems</span>
            <h2 className="display-lg">
              Featured Builds &amp; <span className="gradient-text">Working Systems.</span>
            </h2>
            <p className="body-text">
              Real-world systems engineered across RAG pipelines, autonomous multi-agent reasoning,
              FastAPI microservices, and deep learning forecasting.
            </p>
          </div>
        </Reveal>

        {/* Filter Pills */}
        <Reveal delay={1}>
          <div className="project-filters" role="tablist" aria-label="Project category filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Interactive Architecture Highlight for Research Lens */}
        <Reveal delay={1}>
          <div className="card architecture-spotlight">
            <div className="arch-header">
              <div className="arch-meta">
                <span className="label">Flagship System Architecture</span>
                <h3 className="arch-title">Research Lens: Hybrid RAG Pipeline</h3>
              </div>
              <button
                className="btn btn-secondary arch-toggle-btn"
                onClick={() => setExpandedArchitecture(!expandedArchitecture)}
                aria-expanded={expandedArchitecture}
              >
                <Icons.Sliders style={{ width: 15, height: 15 }} />
                {expandedArchitecture ? 'Hide Pipeline Diagram' : 'Inspect System Architecture'}
              </button>
            </div>

            {expandedArchitecture && (
              <div className="arch-diagram animate-fade-in">
                <div className="arch-flow-grid">
                  <div className="arch-stage">
                    <div className="arch-stage-num">01</div>
                    <h4 className="arch-stage-title">Ingestion & Chunking</h4>
                    <p className="arch-stage-text">
                      PDF/URL extraction via PyPDF2. Recursive text chunking with overlap to preserve academic context.
                    </p>
                    <div className="arch-tags">
                      <span className="tag">PyPDF2</span>
                      <span className="tag">Chunking</span>
                    </div>
                  </div>

                  <div className="arch-arrow" aria-hidden="true">→</div>

                  <div className="arch-stage highlighted">
                    <div className="arch-stage-num">02</div>
                    <h4 className="arch-stage-title">Hybrid Retrieval</h4>
                    <p className="arch-stage-text">
                      Dual retrieval: Dense embeddings (FAISS vector store) + Sparse keyword search (BM25). Pinecone compatible.
                    </p>
                    <div className="arch-tags">
                      <span className="tag tag-mint">FAISS Dense</span>
                      <span className="tag tag-mint">BM25 Sparse</span>
                    </div>
                  </div>

                  <div className="arch-arrow" aria-hidden="true">→</div>

                  <div className="arch-stage">
                    <div className="arch-stage-num">03</div>
                    <h4 className="arch-stage-title">RRF &amp; Reranking</h4>
                    <p className="arch-stage-text">
                      Reciprocal Rank Fusion merges dense/sparse hits. Cross-Encoder reranker scores semantic relevance.
                    </p>
                    <div className="arch-tags">
                      <span className="tag">RRF Score</span>
                      <span className="tag">Cross-Encoder</span>
                    </div>
                  </div>

                  <div className="arch-arrow" aria-hidden="true">→</div>

                  <div className="arch-stage">
                    <div className="arch-stage-num">04</div>
                    <h4 className="arch-stage-title">Synthesis &amp; Metrics</h4>
                    <p className="arch-stage-text">
                      Groq Llama 3.3 generation evaluated with real-time Faithfulness and Answer Relevance to prevent hallucination.
                    </p>
                    <div className="arch-tags">
                      <span className="tag tag-blue">Groq Llama 3.3</span>
                      <span className="tag tag-blue">Hallucination Guard</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj, idx) => (
            <Reveal key={proj.id} delay={Math.min(idx + 1, 5)}>
              <article className="project-card card">
                <div className="project-top">
                  <div className="project-category-badge">{proj.category}</div>
                  <div className="project-links">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link"
                        title="View GitHub Repository"
                        aria-label={`${proj.title} GitHub repository`}
                      >
                        <Icons.Github style={{ width: 16, height: 16 }} />
                        <span>Code</span>
                      </a>
                    )}
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link live-link"
                        title="Open Live Application"
                        aria-label={`${proj.title} live demo`}
                      >
                        <Icons.ExternalLink style={{ width: 14, height: 14 }} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-content">
                  <span className="project-number">0{idx + 1}</span>
                  <h3 className="project-title">{proj.title}</h3>
                  <h4 className="project-subtitle">{proj.subtitle}</h4>
                  <p className="project-desc">{proj.description}</p>
                </div>

                {proj.highlights && (
                  <div className="project-highlights">
                    <span className="highlights-title">Key Engineering Highlights:</span>
                    <ul className="highlights-list">
                      {proj.highlights.map((hl, i) => (
                        <li key={i} className="highlight-item">
                          <span className="highlight-bullet">▸</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project-tech-bar">
                  {proj.tech.map(t => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
