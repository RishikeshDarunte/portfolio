import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../data';

const LINKS = [
  { label: 'Home',     id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'About',    id: 'about' },
  { label: 'Contact',  id: 'contact' },
];

export default function Footer() {
  const go = id => {
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="above" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 18, color: '#fff' }}>
          RD<span style={{ color: 'var(--accent)' }}>.</span>
        </div>

        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {LINKS.map(l => (
            <button key={l.id} onClick={() => go(l.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 14px', fontSize: 13, color: '#475569', fontFamily: 'Inter', borderRadius: 6, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#475569'}>
              {l.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          {[
            { Icon: FiGithub,   href: personal.github },
            { Icon: FiLinkedin, href: personal.linkedin },
            { Icon: FiMail,     href: `mailto:${personal.email}` },
          ].map(({ Icon, href }, i) => (
            <motion.a key={i} href={href}
              target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              whileHover={{ scale: 1.12, y: -2 }} whileTap={{ scale: 0.9 }}
              style={{
                width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                color: '#475569', textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(34,211,200,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#475569'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}>
              <Icon size={14} />
            </motion.a>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '16px auto 0', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <span style={{ fontSize: 12, color: '#1e293b' }}>© {new Date().getFullYear()} Rishikesh Darunte</span>
        <span style={{ fontSize: 12, color: '#1e293b' }}>React · Vite · Framer Motion</span>
      </div>
    </footer>
  );
}
