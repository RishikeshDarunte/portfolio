import { motion } from 'framer-motion';
import { personal } from '../data';

export default function About() {
  return (
    <section id="about" className="sec above">
      <div className="wrap">
        {/* Large faded heading — exactly like reference */}
        <motion.h2 className="sec-title"
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7 }}>
          About Me
        </motion.h2>

        {/* Glass card with text — reference style */}
        <motion.div className="glass-card"
          initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}
          style={{ padding:'48px 52px', maxWidth:900, margin:'0 auto' }}>

          <motion.h3
            initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay:0.15 }}
            style={{ fontFamily:'Space Grotesk', fontWeight:700, fontSize:'clamp(20px,2.5vw,28px)', color:'#fff', marginBottom:24, lineHeight:1.3 }}>
            I'm a passionate developer and a curious Engineer.
          </motion.h3>

          <motion.p
            initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay:0.2 }}
            style={{ fontSize:16, color:'#94a3b8', lineHeight:1.85, marginBottom:20 }}>
            {personal.summary}
          </motion.p>

          <motion.p
            initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay:0.28 }}
            style={{ fontSize:16, color:'#94a3b8', lineHeight:1.85, marginBottom:28 }}>
            Currently deepening expertise in enterprise Java, Spring Boot, React, and advanced computing at CDAC SMVITA Mumbai — focused on building production-quality software that solves real problems.
          </motion.p>

          <motion.p
            initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ delay:0.34 }}
            style={{ fontSize:16, color:'#94a3b8', lineHeight:1.85 }}>
            {personal.summary2}
          </motion.p>
        </motion.div>

        {/* Open to roles */}
        <motion.div
          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.3 }}
          style={{ textAlign:'center', marginTop:48 }}>
          <div style={{ fontSize:12, color:'#475569', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:14 }}>
            Open to roles
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
            {['Software Engineer','Full Stack Developer','Java Developer','Backend Engineer','.NET Developer'].map((r,i) => (
              <motion.span key={r} className="tag"
                initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }} transition={{ delay:0.35 + i*0.06 }}
                whileHover={{ scale:1.06 }}>
                {r}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
