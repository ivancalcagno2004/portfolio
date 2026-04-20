import React, { useState } from 'react';
// Iconos genéricos de interfaz
import { Mail, ExternalLink, Code2, Database, Layout, ArrowUpRight } from 'lucide-react';
// Iconos de marcas registradas
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from './assets/logo_ivan.jpg';

const skillData = [
  {
    icon: <Layout color="var(--accent)" size={26} />,
    title: 'Frontend & Mobile',
    tags: ['React', 'Angular', '.NET MAUI', 'Tailwind', 'Bootstrap'],
  },
  {
    icon: <Code2 color="var(--blue)" size={26} />,
    title: 'Backend & Arquitectura',
    tags: ['.NET 10', 'C#', 'Laravel', 'PHP', 'Java', 'Microservicios', 'MVC', 'MVVM'],
  },
  {
    icon: <Database color="rgba(243, 160, 16, 0.71)" size={26} />,
    title: 'Datos & Infraestructura',
    tags: ['SQL Server', 'MySQL', 'EF Core', 'SQLite', 'Azure', 'Docker', 'PostgreSQL'],
  },
];

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return(
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap"
      rel="stylesheet"
    />
    <link href='App.css'/>

    <div className="pf">

      {/* ── Nav ── */}
      <nav className="pf-nav">
          <a href="#" className="pf-logo">
            <img className="logo-img" src={logo} alt="Logo de Ivan" />
          </a>

          <button
            className={`pf-nav-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Abrir menú"
          >
            <span className="pf-nav-toggle-bar" />
            <span className="pf-nav-toggle-bar" />
            <span className="pf-nav-toggle-bar" />
          </button>

          <ul className={`pf-links${menuOpen ? ' open' : ''}`}>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Stack</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
            <li>
              <a href="https://mailto:ivancalcagno@gmail.com" target="_blank" rel="noopener noreferrer" className="cta" onClick={() => setMenuOpen(false)}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>

      {/* ── Hero ── */}
      <header className="pf-hero">
        <div className="pf-hero-grid" />
        <div className="pf-hero-content">
          <div className="pf-badge">
            <span className="pf-badge-dot" />
            Disponible para nuevas oportunidades
          </div>
          <h1 className="pf-h1">
            Full Stack<br />
            <span className="pf-h1-accent">Developer</span>
          </h1>
          <p className="pf-lead">
            Soy estudiante avanzado de <strong>TUDAI en la UNICEN</strong>. Diseño soluciones escalables
            desde la arquitectura de base de datos hasta interfaces interactivas de alto rendimiento.
          </p>
          <div className="pf-actions">
            <a href="https://mailto:ivancalcagno@gmail.com/" target="_blank" rel="noopener noreferrer" className="pf-btn-primary">
              <Mail size={16} /> Escribime
            </a>
            <a href="#projects" className="pf-btn-ghost">
              Ver proyectos <ArrowUpRight size={16} />
            </a>
            <div className="pf-socials">
              <a href="https://github.com/ivancalcagno2004" target="_blank" rel="noopener noreferrer" className="pf-social">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/icalcagno" target="_blank" rel="noopener noreferrer" className="pf-social">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <hr className="pf-divider" />

      {/* ── Skills ── */}
      <section id="skills" className="pf-section-surface">
        <div className="pf-section-inner">
          <p className="pf-label">Ecosistema Tecnológico</p>
          <h2 className="pf-h2">Mi Stack <span className="pf-h2-dim">Técnico</span></h2>
          <div className="pf-skills-grid">
            {skillData.map(({ icon, title, tags }) => (
              <div key={title} className="pf-skill-card">
                <div className="pf-skill-icon">{icon}</div>
                <h3 className="pf-skill-title">{title}</h3>
                <div className="pf-skill-tags">
                  {tags.map(tag => (
                    <span key={tag} className="pf-skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="pf-divider" />

      {/* ── Projects ── */}
      <section id="projects" className="pf-section">
        <p className="pf-label">Proyectos Destacados</p>
        <h2 className="pf-h2">Lo que <span className="pf-h2-dim">Desarrollé</span></h2>
        <div className="pf-projects-grid">

          {/* TandilBank */}
          <div className="pf-project-card">
            <div className="pf-project-visual pf-vis-bank">
              <div className="pf-vis-ring" style={{ width: 200, height: 200, border: '1px solid rgba(180,242,99,0.15)', top: -60, left: -60 }} />
              <div className="pf-vis-ring" style={{ width: 110, height: 110, border: '1px solid rgba(79,142,247,0.15)', bottom: -30, right: 40 }} />

              <div className="pf-bank-mockup">
                <div className="pf-bank-balance">
                  <div className="pf-bank-balance-label" />
                  <div className="pf-bank-balance-amount" />
                </div>

                <div className="pf-bank-actions">
                  <div className="pf-bank-action-btn pf-bank-action-btn--primary" />
                  <div className="pf-bank-action-btn" />
                  <div className="pf-bank-action-btn" />
                </div>

                {[{ w: '70%', income: false }, { w: '50%', income: true }, { w: '85%', income: false }].map((txn, i) => (
                  <div key={i} className="pf-bank-txn">
                    <div className="pf-bank-txn-avatar" />
                    <div className="pf-bank-txn-info">
                      <div className="pf-bank-txn-name" style={{ width: txn.w }} />
                      <div className="pf-bank-txn-sub" />
                    </div>
                    <div className={`pf-bank-txn-amount${txn.income ? ' pf-bank-txn-amount--income' : ''}`} />
                  </div>
                ))}
              </div>

              <span className="pf-vis-num">01</span>
            </div>
            <div className="pf-project-body">
              <div className="pf-project-header">
                <div>
                  <div className="pf-project-type">App Financiera Multiplataforma</div>
                  <h3 className="pf-project-name">TandilBank</h3>
                </div>
                <a href="https://github.com/ivancalcagno2004/Home-Banking" target="_blank" rel="noopener noreferrer" className="pf-ext"><ExternalLink size={20} /></a>
              </div>
              <p className="pf-project-desc">
                App multiplataforma bajo patrón MVVM. Persistencia híbrida con Entity Framework Core — SQLite local y Azure SQL en producción. Integración de IA asincrónica para soporte al usuario.
              </p>
              <div className="pf-project-tags">
                {['.NET 10 MAUI', 'C#', 'MVVM', 'EF Core', 'Azure'].map(t => (
                  <span key={t} className="pf-project-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* POS */}
          <div className="pf-project-card">
            <div className="pf-project-visual pf-vis-pos">
              <div className="pf-vis-ring" style={{ width: 190, height: 190, border: '1px solid rgba(245,158,11,0.2)', top: -55, right: -55 }} />
              <div className="pf-pos-mockup">
                <div className="pf-pos-tabs">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="pf-pos-tab"
                      style={{ background: i === 0 ? 'rgba(245,158,11,0.18)' : 'rgba(255,255,255,0.04)', border: `1px solid ${i === 0 ? 'rgba(245,158,11,0.25)' : 'rgba(255,255,255,0.06)'}` }}
                    />
                  ))}
                </div>
                <div className="pf-pos-grid">
                  {Array.from({ length: 9 }).map((_, i) => <div key={i} className="pf-pos-cell" />)}
                </div>
              </div>
              <span className="pf-vis-num">02</span>
            </div>
            <div className="pf-project-body">
              <div className="pf-project-header">
                <div>
                  <div className="pf-project-type" style={{ color: '#f59e0b' }}>Sistema de Gestión</div>
                  <h3 className="pf-project-name">POS Gastronómico</h3>
                </div>
                <a href="https://github.com/ivancalcagno2004/Proyecto-Restaurante" target="_blank" rel="noopener noreferrer" className="pf-ext"><ExternalLink size={20} /></a>
              </div>
              <p className="pf-project-desc">
                Sistema POS con arquitectura MVC. Interfaz de gestión de salón con Drag &amp; Drop para reubicar mesas dinámicamente, con actualización de estados en tiempo real.
              </p>
              <div className="pf-project-tags">
                {['Laravel', 'PHP', 'JS', 'MVC', 'MySQL'].map(t => (
                  <span key={t} className="pf-project-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pf-footer">
        <span className="pf-footer-brand">ivan<strong className='pf-logo-dot'>.</strong></span>
        <span>Diseñado y desarrollado con React &amp; Tailwind CSS</span>
        <div className="pf-footer-socials">
          <a href="https://github.com/ivancalcagno2004" target="_blank" rel="noopener noreferrer" className="pf-social">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/icalcagno" target="_blank" rel="noopener noreferrer" className="pf-social">
            <FaLinkedin size={18} />
          </a>
          <a href="https://mailto:ivancalcagno@gmail.com" target="_blank" rel="noopener noreferrer" className="pf-social">
            <Mail size={18} />
          </a>
        </div>
      </footer>

    </div>
  </>
)};

export default Portfolio;