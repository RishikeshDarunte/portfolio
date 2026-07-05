import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiAward, FiMapPin, FiGithub, FiExternalLink } from 'react-icons/fi';
import { journey, certifications } from '../data';

const ICON = { work: FiBriefcase, education: FiBook, award: FiAward };
const ICON_COLOR = { work: '#3b82f6', education: '#3b82f6', award: '#f59e0b' };

export default function Journey() {
  return (
    <section className="sec above" style={{ background:'rgba(0,0,0,0.15)' }}>
      <div className="wrap">
        {/* Heading */}
        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.6 }}
          style={{ marginBottom:64 }}>
          <h2 style={{ fontFamily:'Space Grotesk', fontWeight:700, fontSize:'clamp(32px,4.5vw,52px)', color:'#fff', letterSpacing:'-1.5px', marginBottom:10 }}>
            Journey Through Time
          </h2>
          <p style={{ fontSize:15, color:'#475569' }}>A chronicle of my professional evolution and key milestones.</p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position:'relative', paddingLeft:32 }}>
          {/* Vertical line */}
          <div className="tl-line" />

          <div style={{ display:'flex', flexDirection:'column', gap:48 }}>
            {journey.map((item, idx) => {
              const Icon = ICON[item.type];
              const iconColor = ICON_COLOR[item.type];
              return (
                <motion.div key={idx}
                  initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true, margin:'-60px' }}
                  transition={{ duration:0.6, delay:idx*0.1, ease:[0.22,1,0.36,1] }}
                  style={{ display:'grid', gridTemplateColumns:'200px 1fr', gap:32, alignItems:'start' }}
                  className="md:grid-cols-2 grid-cols-1">

                  {/* Period + dot */}
                  <div style={{ display:'flex', alignItems:'center', gap:16, paddingTop:18 }}>
                    <div className="tl-dot" style={{ marginLeft:-38 }} />
                    <span style={{ fontFamily:'Space Grotesk', fontWeight:600, fontSize:15, color:'#fff' }}>
                      {item.period}
                    </span>
                  </div>

                  {/* Card */}
                  <motion.div className="glass-card"
                    whileHover={{ y:-3, borderColor:'rgba(59,130,246,0.3)' }}
                    style={{ padding:'24px 28px' }}>
                    <div style={{ display:'flex', alignItems:'flex-start', gap:14, marginBottom:14 }}>
                      <div style={{ width:38, height:38, borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                        background:`${iconColor}18`, border:`1px solid ${iconColor}30` }}>
                        <Icon size={16} style={{ color: iconColor }} />
                      </div>
                      <div>
                        <h3 style={{ fontFamily:'Space Grotesk', fontWeight:700, fontSize:17, color:'#fff', lineHeight:1.3, marginBottom:4 }}>
                          {item.title}
                        </h3>
                        {item.org && (
                          <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
                            <span style={{ fontSize:13, color:'#3b82f6', fontWeight:600 }}>{item.org.split('·')[0]}</span>
                            {item.org.includes('·') && <span style={{ color:'#334155' }}>·</span>}
                            {item.org.includes('·') && (
                              <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:12, color:'#475569' }}>
                                <FiMapPin size={11}/>{item.org.split('·')[1]}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {item.desc && (
                      <p style={{ fontSize:14, color:'#64748b', lineHeight:1.75, marginBottom: item.tech || item.badge || item.github ? 14 : 0 }}>
                        {item.desc}
                      </p>
                    )}

                    {/* Award items */}
                    {item.items && (
                      <ul style={{ display:'flex', flexDirection:'column', gap:10 }}>
                        {item.items.map((it, i) => {
                          const cert = certifications.find(c => c.name.startsWith(it.name.split('—')[0].trim()));
                          return (
                            <li key={i} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                              <span style={{ width:7, height:7, borderRadius:'50%', background:'var(--accent)', marginTop:6, flexShrink:0 }}/>
                              <div>
                                <div style={{ fontSize:14, color:'#94a3b8', fontWeight:500 }}>{it.name}</div>
                                <div style={{ fontSize:12, color:'#475569', marginBottom:4 }}>{it.org}</div>
                                {cert && (
                                  <a href={cert.link} target="_blank" rel="noopener noreferrer"
                                    style={{ fontSize:12, color:'var(--accent)', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:4,
                                      transition:'opacity 0.2s' }}
                                    onMouseEnter={e=>e.currentTarget.style.opacity='0.7'}
                                    onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
                                    View Certificate <FiExternalLink size={11}/>
                                  </a>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {item.badge && (
                      <span style={{ display:'inline-block', marginTop:10, padding:'3px 12px', borderRadius:999, fontSize:12, fontWeight:600,
                        background:'rgba(34,211,200,0.1)', border:'1px solid rgba(34,211,200,0.25)', color:'var(--accent)' }}>
                        {item.badge}
                      </span>
                    )}

                    {item.tech && (
                      <div style={{ display:'flex', flexWrap:'wrap', gap:7, marginTop:12 }}>
                        {item.tech.map(t => (
                          <span key={t} style={{ fontSize:11, padding:'3px 10px', borderRadius:6, fontWeight:600,
                            background:'rgba(59,130,246,0.08)', border:'1px solid rgba(59,130,246,0.2)', color:'#60a5fa' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {item.github && (
                      <a href={item.github} target="_blank" rel="noopener noreferrer"
                        style={{ display:'inline-flex', alignItems:'center', gap:5, marginTop:12,
                          fontSize:12, color:'#475569', textDecoration:'none', transition:'color 0.2s' }}
                        onMouseEnter={e=>e.currentTarget.style.color='#fff'}
                        onMouseLeave={e=>e.currentTarget.style.color='#475569'}>
                        <FiGithub size={13}/> View on GitHub
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
