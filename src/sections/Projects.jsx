import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects, certifications } from '../data';

function ProjectCard({ proj, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="proj-card"
    >
      {/* Image / gradient preview area */}
      <div style={{
        height: 180,
        background: proj.gradient,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Animated shimmer overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg,rgba(255,255,255,0.03) 0%,transparent 60%)',
        }} />
        {/* Label badge */}
        <div style={{
          position: 'absolute', top: 12, left: 12,
          padding: '4px 10px', borderRadius: 999,
          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.12)',
          fontSize: 11, fontWeight: 600, color: 'var(--accent)',
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>{proj.label}</div>
        {/* GitHub icon top-right */}
        <motion.a href={proj.github} target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
          style={{
            position: 'absolute', top: 12, right: 12,
            width: 32, height: 32, borderRadius: 8,
            background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
          <FiGithub size={14} />
        </motion.a>
        {/* Big faint project title as background text */}
        <div style={{
          fontFamily: 'Space Grotesk', fontWeight: 700,
          fontSize: 'clamp(22px,3vw,36px)',
          color: 'rgba(255,255,255,0.08)',
          textAlign: 'center', padding: '0 20px',
          userSelect: 'none', letterSpacing: '-1px',
        }}>{proj.title}</div>
      </div>

      {/* Card body */}
      <div style={{ padding: '20px 22px 22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <h3 style={{
            fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 17,
            color: '#fff', lineHeight: 1.3, flex: 1, paddingRight: 12,
          }}>{proj.title}</h3>
          <span style={{ fontSize: 12, color: '#334155', flexShrink: 0 }}>{proj.year}</span>
        </div>

        <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.75, marginBottom: 16 }}>{proj.desc}</p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {proj.tech.map(t => (
            <span key={t} style={{
              fontSize: 11, padding: '3px 10px', borderRadius: 999, fontWeight: 500,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#64748b',
            }}>{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 8 }}>
          <motion.a href={proj.github} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '7px 14px', borderRadius: 8,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8', fontSize: 12, fontWeight: 600,
              textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
            <FiGithub size={13} /> View Source
          </motion.a>
          {proj.live && (
            <motion.a href={proj.live} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '7px 14px', borderRadius: 8,
                background: 'rgba(34,211,200,0.1)', border: '1px solid rgba(34,211,200,0.25)',
                color: 'var(--accent)', fontSize: 12, fontWeight: 600,
                textDecoration: 'none',
              }}>
              <FiExternalLink size={13} /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="sec above" style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="wrap">
        {/* Large faded heading */}
        <motion.h2 className="sec-title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          Projects
        </motion.h2>

        {/* Project grid — 3 columns like reference screenshot 9 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 20, marginBottom: 72 }}>
          {projects.map((proj, i) => <ProjectCard key={proj.id} proj={proj} idx={i} />)}
        </div>

        {/* Certifications */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Space Grotesk', fontWeight: 700,
            fontSize: 'clamp(24px,3vw,36px)', color: '#fff',
            letterSpacing: '-1px', marginBottom: 28,
          }}>
          Certifications
        </motion.h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 14 }}>
          {certifications.map((cert, i) => (
            <motion.div key={cert.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.09 }}
              whileHover={{ y: -4, borderColor: 'rgba(34,211,200,0.3)' }}
              className="glass-card"
              style={{ padding: '20px 22px', transition: 'all 0.25s' }}>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 4, lineHeight: 1.4 }}>{cert.name}</div>
              <div style={{ fontSize: 12, color: '#475569', marginBottom: 12 }}>
                {cert.org}{cert.badge && <span style={{ color: '#64748b', marginLeft: 5 }}>· {cert.badge}</span>}
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: 12, fontWeight: 600, color: 'var(--accent)',
                  textDecoration: 'none', transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                View certificate <FiExternalLink size={11} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
