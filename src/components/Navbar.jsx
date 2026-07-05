import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const LINKS = ['Home', 'Projects', 'About', 'Contact'];
const MAP   = { Home: 'home', Projects: 'projects', About: 'about', Contact: 'contact' };

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [open, setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      const ids = Object.values(MAP);
      const hit = [...ids].reverse().find(id => {
        const el = document.getElementById(id);
        return el && window.scrollY >= el.offsetTop - 160;
      });
      if (hit) setActive(LINKS.find(l => MAP[l] === hit) || 'Home');
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = label => {
    const id = MAP[label];
    if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(label);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="above"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '16px 0', display: 'flex', justifyContent: 'center' }}
    >
      {/* Pill nav — exactly like reference screenshots */}
      <div className="nav-pill hidden md:flex items-center gap-1 px-4 py-2"
        style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.4)' }}>
        {LINKS.map(link => (
          <motion.button key={link} onClick={() => go(link)}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px 22px', borderRadius: 999,
              fontSize: 14, fontWeight: 500, fontFamily: 'Inter',
              transition: 'color 0.2s, background 0.2s',
              color: active === link ? '#3b82f6' : 'rgba(255,255,255,0.7)',
              background: active === link ? 'rgba(59,130,246,0.08)' : 'transparent',
            }}>
            {link}
          </motion.button>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between w-full px-6">
        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 18, color: '#fff' }}>RD.</span>
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            className="md:hidden above"
            style={{ position: 'absolute', top: 64, left: 16, right: 16, background: 'rgba(8,13,18,0.97)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: 12, backdropFilter: 'blur(20px)' }}>
            {LINKS.map(l => (
              <button key={l} onClick={() => go(l)}
                style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 16px', borderRadius: 9, border: 'none', cursor: 'pointer', fontSize: 14, fontFamily: 'Inter', background: active === l ? 'rgba(59,130,246,0.1)' : 'transparent', color: active === l ? '#3b82f6' : '#94a3b8', marginBottom: 4 }}>
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
