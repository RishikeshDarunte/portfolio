import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { personal } from "../data";

// ════════════════════════════════════════════════════════
//  HOW TO ACTIVATE THE CONTACT FORM  (3 min, free)
//
//  1. Go to https://www.emailjs.com → create free account
//  2. Email Services → Add New Service → Gmail
//     → connect your Gmail → copy Service ID below
//  3. Email Templates → Create New Template
//     Add these in the template body:
//       Name:    {{from_name}}
//       Email:   {{from_email}}
//       Message: {{message}}
//     Set "To Email": rishidarunte55@gmail.com
//     Save → copy Template ID below
//  4. Account → General → copy Public Key below
//  5. Save this file → form sends real emails ✓
// ════════════════════════════════════════════════════════
const EMAILJS_SERVICE_ID = "service_r441xng";
const EMAILJS_TEMPLATE_ID = "template_vjheh02";
const EMAILJS_PUBLIC_KEY = "403roD8y2tfbGWbsg";
// ════════════════════════════════════════════════════════

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inp = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 9,
    padding: "11px 14px",
    fontSize: 14,
    color: "#fff",
    outline: "none",
    fontFamily: "Inter, sans-serif",
    transition: "border-color 0.2s, background 0.2s",
  };
  const onF = (e) => {
    e.target.style.borderColor = "rgba(34,211,200,0.5)";
    e.target.style.background = "rgba(34,211,200,0.03)";
  };
  const onB = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.08)";
    e.target.style.background = "rgba(255,255,255,0.04)";
  };

  return (
    <section id="contact" className="sec above">
      <div className="wrap">
        {/* Large faded heading */}
        <motion.h2
          className="sec-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Contact
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 48,
            alignItems: "start",
            maxWidth: 960,
            margin: "0 auto",
          }}
          className="md:grid-cols-2 grid-cols-1"
        >
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "Space Grotesk",
                  fontWeight: 700,
                  fontSize: 26,
                  color: "#fff",
                  letterSpacing: "-0.8px",
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                Let's build something great.
              </h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.8 }}>
                Open to full-time roles, collaborations, and interesting
                conversations. I respond within 24 hours.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  Icon: FiMail,
                  label: "Email",
                  val: personal.email,
                  href: `mailto:${personal.email}`,
                },
                {
                  Icon: FiPhone,
                  label: "Phone",
                  val: personal.phone,
                  href: `tel:${personal.phone}`,
                },
                {
                  Icon: FiMapPin,
                  label: "Location",
                  val: personal.location,
                  href: null,
                },
              ].map(({ Icon, label, val, href }) => (
                <div
                  key={label}
                  style={{ display: "flex", gap: 12, alignItems: "center" }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: "rgba(34,211,200,0.08)",
                      border: "1px solid rgba(34,211,200,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={15} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "#334155",
                        marginBottom: 2,
                      }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontSize: 13,
                          color: "#94a3b8",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = "var(--accent)")
                        }
                        onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
                      >
                        {val}
                      </a>
                    ) : (
                      <div style={{ fontSize: 13, color: "#94a3b8" }}>
                        {val}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              {[
                { Icon: FiGithub, href: personal.github },
                { Icon: FiLinkedin, href: personal.linkedin },
                { Icon: SiLeetcode, href: personal.leetcode },
                { Icon: FiMail, href: `mailto:${personal.email}` },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: 38,
                    height: 38,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 9,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#475569",
                    textDecoration: "none",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.borderColor = "rgba(34,211,200,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#475569";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card"
              style={{
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {/* Accent top bar */}
              <div
                style={{
                  height: 2,
                  borderRadius: 2,
                  marginBottom: 6,
                  background:
                    "linear-gradient(90deg,var(--accent),var(--accent2),transparent)",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#334155",
                      marginBottom: 6,
                    }}
                  >
                    Name
                  </label>
                  <input
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    style={inp}
                    onFocus={onF}
                    onBlur={onB}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#334155",
                      marginBottom: 6,
                    }}
                  >
                    Email
                  </label>
                  <input
                    name="from_email"
                    type="email"
                    value={form.from_email}
                    onChange={handleChange}
                    required
                    placeholder="john@co.com"
                    style={inp}
                    onFocus={onF}
                    onBlur={onB}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#334155",
                    marginBottom: 6,
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi Rishikesh, I'd love to connect about..."
                  style={{ ...inp, resize: "none" }}
                  onFocus={onF}
                  onBlur={onB}
                />
              </div>

              {status === "success" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    padding: "10px 14px",
                    borderRadius: 8,
                    color: "#86efac",
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <FiCheck size={14} /> Message sent! I'll get back to you
                  within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    padding: "10px 14px",
                    borderRadius: 8,
                    color: "#fca5a5",
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)",
                  }}
                >
                  <FiAlertCircle size={14} />
                  Failed. Email me at{" "}
                  <a
                    href={`mailto:${personal.email}`}
                    style={{ color: "var(--accent)", marginLeft: 4 }}
                  >
                    {personal.email}
                  </a>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={
                  status === "idle" || status === "error"
                    ? {
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(34,211,200,0.3)",
                      }
                    : {}
                }
                whileTap={
                  status === "idle" || status === "error" ? { scale: 0.97 } : {}
                }
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 9,
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  background:
                    status === "success"
                      ? "rgba(34,197,94,0.15)"
                      : "linear-gradient(135deg,rgba(34,211,200,0.9),rgba(59,130,246,0.9))",
                  color: status === "success" ? "#86efac" : "#000",
                  cursor:
                    status === "loading" || status === "success"
                      ? "not-allowed"
                      : "pointer",
                  opacity: status === "loading" ? 0.7 : 1,
                  transition: "all 0.2s",
                }}
              >
                {status === "loading" && (
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      border: "2px solid rgba(0,0,0,0.25)",
                      borderTopColor: "#000",
                      borderRadius: "50%",
                      display: "inline-block",
                      animation: "spin14 0.7s linear infinite",
                    }}
                  />
                )}
                {status === "success" && (
                  <>
                    <FiCheck size={14} /> Sent!
                  </>
                )}
                {status === "error" && (
                  <>
                    <FiSend size={14} /> Try again
                  </>
                )}
                {status === "idle" && (
                  <>
                    <FiSend size={14} /> Send Message
                  </>
                )}
                {status === "loading" && "Sending..."}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
