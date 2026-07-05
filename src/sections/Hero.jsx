import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personal } from '../data';

const c = { hidden:{}, show:{ transition:{ staggerChildren:0.1, delayChildren:0.3 } } };
const it = { hidden:{ opacity:0, y:22 }, show:{ opacity:1, y:0, transition:{ duration:0.7, ease:[0.22,1,0.36,1] } } };

export default function Hero() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });

  return (
    <section id="home" className="above"
      style={{ minHeight:'100vh', display:'flex', alignItems:'center', padding:'100px 32px 60px' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', width:'100%' }}>
        <motion.div variants={c} initial="hidden" animate="show"
          style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:48, flexWrap:'wrap' }}>

          {/* LEFT */}
          <div style={{ flex:'1 1 380px' }}>
            <motion.h1 variants={it}
              style={{ fontFamily:'Space Grotesk', fontWeight:700, letterSpacing:'-2px', lineHeight:1.05, marginBottom:16,
                fontSize:'clamp(44px,6.5vw,80px)', color:'#fff' }}>
              Hi, I'm<br/>
              <span style={{ color:'#3b82f6' }}>{personal.name}</span>
            </motion.h1>

            <motion.p variants={it}
              style={{ fontSize:'clamp(16px,2vw,20px)', color:'#94a3b8', fontWeight:400, marginBottom:18 }}>
              {personal.subtitle}
            </motion.p>

            <motion.p variants={it}
              style={{ fontSize:15, color:'#64748b', lineHeight:1.85, maxWidth:520, marginBottom:36 }}>
              {personal.summary}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={it} style={{ display:'flex', flexWrap:'wrap', gap:12, marginBottom:36 }}>
              <motion.a href="/Rishikesh_Darunte_CV.pdf" download="Rishikesh_Darunte_CV.pdf"
                whileHover={{ scale:1.05, boxShadow:'0 0 20px rgba(255,255,255,0.1)' }} whileTap={{ scale:0.96 }}
                className="btn-outline-cv">
                <FiDownload size={14}/> View CV
              </motion.a>
              <motion.button onClick={() => go('contact')}
                whileHover={{ scale:1.05 }} whileTap={{ scale:0.96 }}
                className="btn-accent">
                Get in touch
              </motion.button>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={it} style={{ display:'flex', gap:14, alignItems:'center' }}>
              {[
                { href: personal.github,   Icon: FiGithub,   label:'GitHub' },
                { href: personal.linkedin, Icon: FiLinkedin, label:'LinkedIn' },
                { href: personal.leetcode, Icon: SiLeetcode, label:'LeetCode' },
              ].map(({ href, Icon, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale:1.2, y:-3 }} whileTap={{ scale:0.9 }}
                  style={{ display:'flex', alignItems:'center', justifyContent:'center', width:38, height:38,
                    borderRadius:9, border:'1px solid rgba(255,255,255,0.1)',
                    color:'#64748b', textDecoration:'none', transition:'color 0.2s, border-color 0.2s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.borderColor='rgba(34,211,200,0.35)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.color='#64748b'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; }}>
                  <Icon size={17}/>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — square photo exactly like reference */}
          <motion.div variants={it} style={{ flexShrink:0, position:'relative' }}>
            {/* Subtle outer glow */}
            <div style={{ position:'absolute', inset:-24, borderRadius:24, pointerEvents:'none',
              background:'radial-gradient(circle,rgba(59,130,246,0.12),transparent 70%)', filter:'blur(20px)' }} />

            {/* Square card with rounded corners — reference style */}
            <div style={{ position:'relative', width:'clamp(260px,26vw,340px)', height:'clamp(260px,26vw,340px)',
              borderRadius:18, overflow:'hidden',
              border:'1px solid rgba(255,255,255,0.1)',
              boxShadow:'0 0 0 1px rgba(255,255,255,0.04), 0 24px 80px rgba(0,0,0,0.6)' }}>
              <img src="/profile.jpg" alt="Rishikesh Darunte"
                style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }}/>
              {/* "OPEN TO WORK" badge bottom-right — exact reference */}
              <div style={{ position:'absolute', bottom:14, right:14,
                display:'inline-flex', alignItems:'center', gap:6,
                padding:'5px 12px', borderRadius:999,
                background:'rgba(0,0,0,0.8)', backdropFilter:'blur(12px)',
                border:'1px solid rgba(34,211,200,0.4)', fontSize:11, fontWeight:700,
                color:'#22d3c8', letterSpacing:'0.06em', textTransform:'uppercase' }}>
                <span style={{ width:7, height:7, borderRadius:'50%', background:'#22d3c8',
                  boxShadow:'0 0 10px rgba(34,211,200,0.9)', animation:'pulse-glow 2s ease-in-out infinite' }}/>
                OPEN TO WORK
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
