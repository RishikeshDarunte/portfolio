import { motion } from 'framer-motion';
import { skillGroups } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="sec above">
      <div className="wrap">
        {/* Large faded heading */}
        <motion.h2 className="sec-title"
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7 }}>
          Skills & Technologies
        </motion.h2>
        <motion.p
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }} transition={{ delay:0.15 }}
          style={{ textAlign:'center', color:'#475569', fontSize:15, marginTop:-40, marginBottom:56 }}>
          My technical toolkit for building modern applications
        </motion.p>

        {/* 4-column grid of category cards — exactly like reference screenshot 7 */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:20 }}>
          {skillGroups.map((group, gi) => (
            <motion.div key={group.category}
              initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.55, delay:gi*0.1 }}
              whileHover={{ y:-4, borderColor:`${group.color}30` }}
              className="glass-card"
              style={{ padding:'28px 24px' }}>

              {/* Category icon + title */}
              <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:24 }}>
                <div style={{ width:44, height:44, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center',
                  background:`${group.color}18`, border:`1px solid ${group.color}30`, fontSize:20 }}>
                  {group.icon}
                </div>
                <h3 style={{ fontFamily:'Space Grotesk', fontWeight:700, fontSize:16, color:'#fff', lineHeight:1.2 }}>
                  {group.category}
                </h3>
              </div>

              {/* Skill chips */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {group.skills.map((skill, si) => (
                  <motion.span key={skill}
                    initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }}
                    viewport={{ once:true }} transition={{ delay:gi*0.1 + si*0.04 }}
                    whileHover={{ scale:1.06, y:-2 }}
                    className="skill-chip">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note like reference */}
        <motion.div
          initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.4 }}
          style={{ marginTop:40, padding:'18px 28px', borderRadius:14, textAlign:'center',
            background:'linear-gradient(135deg,rgba(59,130,246,0.08),rgba(34,211,200,0.08))',
            border:'1px solid rgba(59,130,246,0.15)' }}>
          <p style={{ fontSize:14, color:'#94a3b8' }}>
            Always exploring new technologies to expand my toolkit and solve complex problems more effectively.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
