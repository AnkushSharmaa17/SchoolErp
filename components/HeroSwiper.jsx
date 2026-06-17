"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const DURATION = 4500;

const slides = [
  {
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=85&fit=crop",
    label: "Smart Admissions",
    caption: "Digital applications to approvals — in minutes",
    color: "#7C6EFA",
    light: "#EAE8FF",
  },
  {
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=85&fit=crop",
    label: "Live Attendance",
    caption: "Every student, every class, tracked instantly",
    color: "#06B6D4",
    light: "#CFFAFE",
  },
  {
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=85&fit=crop",
    label: "Fee Automation",
    caption: "Collections, reminders and reports on autopilot",
    color: "#10B981",
    light: "#D1FAE5",
  },
  {
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=85&fit=crop",
    label: "Instant Results",
    caption: "Publish report cards parents actually open",
    color: "#F59E0B",
    light: "#FEF3C7",
  },
];

// const stats = [
//   { end: 500, suffix: "+", label: "Schools" },
//   { end: 1.2, suffix: "M+", label: "Students", decimal: true },
//   { end: 99.9, suffix: "%", label: "Uptime", decimal: true },
//   { end: 40, suffix: "+", label: "Modules" },
// ];

function useCountUp(target, decimal, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const duration = 1600;
    const raf = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(decimal ? Math.round(target * ease * 10) / 10 : Math.round(target * ease));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, decimal]);
  return val;
}

// function StatItem({ stat, active, delay }) {
//   const val = useCountUp(stat.end, stat.decimal, active);
//   return (
//     <div style={{
//       opacity: active ? 1 : 0,
//       transform: active ? "translateY(0)" : "translateY(16px)",
//       transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
//     }}>
//       <div style={{
//         fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
//         fontWeight: 900,
//         fontFamily: "'Sora', system-ui, sans-serif",
//         color: "#fff",
//         lineHeight: 1,
//         letterSpacing: "-0.02em",
//       }}>
//         {stat.decimal ? val.toFixed(1) : val}{stat.suffix}
//       </div>
//       <div style={{
//         fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.45)",
//         fontFamily: "system-ui", marginTop: 4, letterSpacing: 1,
//         textTransform: "uppercase",
//       }}>
//         {stat.label}
//       </div>
//     </div>
//   );
// }

// Floating card stack
function SlideStack({ current, fading, slides }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 360 }}>
      {slides.map((s, i) => {
        const offset = (i - current + slides.length) % slides.length;
        // stack: 0=front, 1=mid, 2=back, 3=hidden
        const configs = [
          { z: 4, tx: 0, ty: 0, scale: 1, opacity: fading ? 0 : 1, rotate: -1 },
          { z: 3, tx: 28, ty: -18, scale: 0.92, opacity: 0.7, rotate: 2 },
          { z: 2, tx: 48, ty: -34, scale: 0.84, opacity: 0.4, rotate: 4 },
          { z: 1, tx: 60, ty: -44, scale: 0.76, opacity: 0, rotate: 6 },
        ];
        const cfg = configs[offset] || configs[3];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 24,
              overflow: "hidden",
              zIndex: cfg.z,
              transform: `translate(${cfg.tx}px, ${cfg.ty}px) scale(${cfg.scale}) rotate(${cfg.rotate}deg)`,
              opacity: cfg.opacity,
              transition: "all 0.65s cubic-bezier(0.22,1,0.36,1)",
              transformOrigin: "bottom left",
              boxShadow: offset === 0
                ? "0 32px 80px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3)"
                : "0 8px 24px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={s.img}
              alt={s.label}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                display: "block",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
            {/* Overlay gradient */}
            <div style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(160deg, transparent 40%, ${s.color}cc 100%)`,
            }} />
            {/* Label chip */}
            {offset === 0 && (
              <div style={{
                position: "absolute", top: 20, left: 20,
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 100,
                padding: "6px 16px",
                display: "flex", alignItems: "center", gap: 8,
                opacity: fading ? 0 : 1,
                transition: "opacity 0.4s ease",
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: s.color, flexShrink: 0,
                }} />
                <span style={{
                  fontSize: 12, fontWeight: 700, color: "#fff",
                  fontFamily: "system-ui", letterSpacing: 0.3,
                }}>
                  {s.label}
                </span>
              </div>
            )}
            {/* Bottom caption */}
            {offset === 0 && (
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "60px 22px 22px",
                background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(6px)" : "translateY(0)",
                transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
              }}>
                <p style={{
                  margin: 0, fontSize: 15, fontWeight: 600,
                  color: "#fff", fontFamily: "'Sora', system-ui, sans-serif",
                  lineHeight: 1.4,
                }}>
                  {s.caption}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  const goTo = useCallback((idx) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
      setProgress(0);
      startRef.current = null;
    }, 380);
  }, []);

  const advance = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  // Progress ticker
  useEffect(() => {
    startRef.current = null;
    setProgress(0);
    cancelAnimationFrame(rafRef.current);
    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min(((ts - startRef.current) / DURATION) * 100, 100);
      setProgress(p);
      if (p < 100) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [current]);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(advance, DURATION);
    return () => clearInterval(t);
  }, [advance]);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const slide = slides[current];

  return (
    <section style={{
      minHeight: "100vh",
      background: "#0a0a14",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "80px 0 60px",
      
    }}>

      {/* Ambient glows */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          width: "50vw", height: "50vw",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${slide.color}22 0%, transparent 65%)`,
          top: "-15vw", right: "-10vw",
          transition: "background 0.8s ease",
        }} />
        <div style={{
          position: "absolute",
          width: "35vw", height: "35vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, #7C6EFA14 0%, transparent 65%)",
          bottom: "-8vw", left: "-5vw",
        }} />
        {/* Subtle noise grain via SVG */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06 }}>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        {/* Dot grid */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 1 }}>
          <defs>
            <pattern id="dots" width="36" height="36" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.2" fill="rgba(255,255,255,0.07)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {/* Thin horizontal line accents */}
        <div style={{
          position: "absolute", top: "30%", left: 0, right: 0,
          height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.04) 70%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute", top: "65%", left: 0, right: 0,
          height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent 100%)",
        }} />
      </div>

      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 1200, margin: "0 auto",
        padding: "0 40px", width: "100%",
      }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "48px 64px",
          justifyContent: "space-between",
        }}>

          {/* ── LEFT ── */}
          <div style={{ flex: "1 1 440px", maxWidth: 560 }}>

            {/* Eyebrow */}
            {/* <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              marginBottom: 28,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 100, padding: "5px 14px 5px 8px",
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px #22c55e",
                  display: "inline-block",
                }} />
                <span style={{
                  fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.75)",
                  fontFamily: "system-ui", letterSpacing: 0.4,
                }}>
                  Live in 500+ schools · India
                </span>
              </div>
            </div> */}

            {/* Headline */}
            <h1 style={{
              margin: "0 0 6px",
              fontFamily: "'Sora', 'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#fff",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(22px)",
              transition: "opacity 0.6s ease 0.08s, transform 0.6s ease 0.08s",
            }}>
              One Platform.
            </h1>
            <h1 style={{
              margin: "0 0 24px",
              fontFamily: "'Sora', 'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              background: `linear-gradient(120deg, ${slide.color} 0%, #fff 100%)`,
              backgroundClip: "text",
              transition: "background 0.6s ease",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(22px)",
              transition2: "opacity 0.6s ease 0.14s, transform 0.6s ease 0.14s",
              color:"black",
              
            }}>
              Every School.
            </h1>

            <p style={{
              margin: "0 0 36px",
              fontSize: "clamp(1rem, 1.5vw, 1.6rem)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              maxWidth: 460,
              fontFamily: "system-ui",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}>
              SchoolERP digitizes admissions, attendance, fees, exams and parent
              communication — so your staff stops pushing paper and starts making
              a difference.
            </p>

            {/* CTAs */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 56,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.6s ease 0.27s, transform 0.6s ease 0.27s",
            }}>
              <button
                style={{
                  background: slide.color,
                  color: "#fff", border: "none",
                  borderRadius: 14, padding: "15px 34px",
                  fontSize: 15, fontWeight: 700,
                  fontFamily: "system-ui", cursor: "pointer",
                  boxShadow: `0 8px 32px ${slide.color}55`,
                  transition: "background 0.5s, box-shadow 0.5s, transform 0.15s",
                  letterSpacing: 0.2,
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px) scale(1.02)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
              >
                Start Free Trial →
              </button>
              <button
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 14, padding: "15px 28px",
                  fontSize: 15, fontWeight: 600,
                  fontFamily: "system-ui", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 10,
                  backdropFilter: "blur(8px)",
                  transition: "background 0.2s, transform 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.10)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{
                  width: 30, height: 30, borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13,
                }}>▶</span>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            {/* <div style={{
              display: "flex", flexWrap: "wrap",
              gap: "20px 40px",
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}>
              {stats.map((s, i) => (
                <StatItem key={i} stat={s} active={visible} delay={0.35 + i * 0.07} />
              ))}
            </div> */}
          </div>

          {/* ── RIGHT: Stacked card slider ── */}
          <div style={{
            flex: "1 1 380px", maxWidth: 460,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(32px)",
            transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
          }}>
            {/* Cards area with perspective */}
            <div style={{
              position: "relative",
              height: 380,
              perspective: "1000px",
              paddingRight: 60,
            }}>
              <SlideStack current={current} fading={fading} slides={slides} />
            </div>

            {/* Controls row */}
            <div style={{
              display: "flex", alignItems: "center",
              gap: 14, marginTop: 24,
              paddingRight: 60,
            }}>
              {/* Dots with progress */}
              <div style={{ display: "flex", gap: 8, flex: 1 }}>
                {slides.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    style={{
                      flex: i === current ? 2 : 1,
                      height: 4, borderRadius: 4,
                      background: i === current ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.12)",
                      border: "none", cursor: "pointer", padding: 0,
                      position: "relative", overflow: "hidden",
                      transition: "flex 0.4s ease",
                    }}
                  >
                    {i === current && (
                      <div style={{
                        position: "absolute", inset: 0,
                        background: slide.color,
                        width: `${progress}%`,
                        transition: "width 0.1s linear, background 0.5s ease",
                        borderRadius: 4,
                      }} />
                    )}
                  </button>
                ))}
              </div>
              {/* Nav arrows */}
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { dir: "prev", icon: "←" },
                  { dir: "next", icon: "→" },
                ].map(({ dir, icon }) => (
                  <button
                    key={dir}
                    onClick={() => dir === "next" ? advance() : goTo((current - 1 + slides.length) % slides.length)}
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: 16, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background 0.2s, transform 0.15s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; e.currentTarget.style.transform = "scale(1.1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "scale(1)"; }}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Active slide accent label */}
            <div style={{
              marginTop: 18, paddingRight: 60,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <div style={{
                width: 32, height: 3, borderRadius: 2,
                background: slide.color,
                transition: "background 0.5s ease",
              }} />
              <span style={{
                fontSize: 13, fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                fontFamily: "system-ui",
                transition: "color 0.4s ease",
              }}>
                {slide.label}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}