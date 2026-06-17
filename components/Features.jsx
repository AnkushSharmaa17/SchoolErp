"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 0,
    tag: "Admissions & Enrollment",
    headline: "Effortless Student\nAdmissions Online",
    sub: "Digitize the entire admissions pipeline — from applications to fee collection — in one unified dashboard.",
    cta: "Start Free Trial",
    ctaSecondary: "Watch Demo",
    accent: "#6C63FF",
    accentLight: "#EAE8FF",
    wallpaper: "admission",
    appScreen: {
      title: "New Admission",
      items: [
        { label: "Rohan Sharma", status: "Approved", color: "#22c55e" },
        { label: "Priya Mehta", status: "Pending", color: "#f59e0b" },
        { label: "Arjun Singh", status: "Review", color: "#6C63FF" },
      ],
    },
  },
  {
    id: 1,
    tag: "Attendance Management",
    headline: "Smart Attendance\nTracked Instantly",
    sub: "Biometric, RFID, or manual — mark attendance across all classes in seconds and auto-notify parents.",
    cta: "Explore Features",
    ctaSecondary: "See Pricing",
    accent: "#0EA5E9",
    accentLight: "#E0F4FE",
    wallpaper: "attendance",
    appScreen: {
      title: "Today's Attendance",
      items: [
        { label: "Class 10-A  · 38/40", status: "95%", color: "#22c55e" },
        { label: "Class 9-B  · 34/40", status: "85%", color: "#0EA5E9" },
        { label: "Class 8-C  · 29/40", status: "72%", color: "#f59e0b" },
      ],
    },
  },
  {
    id: 2,
    tag: "Fee & Finance",
    headline: "Collect Fees\nWithout the Chaos",
    sub: "Online payments, automated reminders, and real-time reports — your finance team will thank you.",
    cta: "Get Started",
    ctaSecondary: "View Plans",
    accent: "#10B981",
    accentLight: "#D1FAE5",
    wallpaper: "fees",
    appScreen: {
      title: "Fee Collection",
      items: [
        { label: "April Dues  · ₹2,40,000", status: "Paid", color: "#10B981" },
        { label: "Overdue  · ₹18,500", status: "Alert", color: "#ef4444" },
        { label: "This Week  · ₹56,000", status: "+12%", color: "#10B981" },
      ],
    },
  },
  {
    id: 3,
    tag: "Exam & Results",
    headline: "Publish Results\nIn One Click",
    sub: "Create exam schedules, auto-grade, generate report cards, and share results with parents instantly.",
    cta: "Try for Free",
    ctaSecondary: "Learn More",
    accent: "#F59E0B",
    accentLight: "#FEF3C7",
    wallpaper: "exams",
    appScreen: {
      title: "Exam Results",
      items: [
        { label: "Maths  · Avg 82%", status: "A", color: "#F59E0B" },
        { label: "Science  · Avg 76%", status: "B+", color: "#6C63FF" },
        { label: "English  · Avg 88%", status: "A+", color: "#10B981" },
      ],
    },
  },
];

// ---------- Phone mockup with dynamic app screen ----------
function PhoneMockup({ slide, transitioning }) {
  const { accent, accentLight, appScreen } = slide;

  return (
    <div
      className="relative select-none"
      style={{
        width: "clamp(200px, 22vw, 280px)",
        transform: "rotate(8deg)",
        filter: "drop-shadow(0 32px 48px rgba(0,0,0,0.22))",
        transition: "transform 0.6s cubic-bezier(.22,1,.36,1)",
      }}
    >
      {/* Phone shell */}
      <div
        style={{
          borderRadius: 40,
          background: "#0f0f0f",
          padding: "10px",
          position: "relative",
        }}
      >
        {/* Side buttons */}
        <div style={{
          position: "absolute", left: -4, top: 90, width: 4, height: 28,
          background: "#333", borderRadius: "4px 0 0 4px",
        }} />
        <div style={{
          position: "absolute", left: -4, top: 128, width: 4, height: 44,
          background: "#333", borderRadius: "4px 0 0 4px",
        }} />
        <div style={{
          position: "absolute", right: -4, top: 110, width: 4, height: 56,
          background: "#333", borderRadius: "0 4px 4px 0",
        }} />

        {/* Screen */}
        <div
          style={{
            borderRadius: 32,
            overflow: "hidden",
            background: accentLight,
            transition: "background 0.5s ease",
          }}
        >
          {/* Status bar */}
          <div
            style={{
              height: 36,
              background: accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 16px",
              transition: "background 0.5s ease",
            }}
          >
            <span style={{ color: "#fff", fontSize: 10, fontWeight: 700, fontFamily: "system-ui" }}>
              9:41
            </span>
            {/* Notch */}
            <div style={{
              width: 64, height: 18, background: "#0f0f0f",
              borderRadius: 12, position: "absolute", left: "50%",
              transform: "translateX(-50%)", top: 14,
            }} />
            <div style={{ display: "flex", gap: 4 }}>
              {[...Array(3)].map((_, i) => (
                <div key={i} style={{
                  width: 4 + i * 2, height: 8,
                  background: "rgba(255,255,255,0.8)",
                  borderRadius: 2,
                }} />
              ))}
            </div>
          </div>

          {/* App header */}
          <div style={{
            padding: "12px 14px 8px",
            background: accent,
            transition: "background 0.5s ease",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8,
                background: "rgba(255,255,255,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 13 }}>🏫</span>
              </div>
              <div>
                <p style={{
                  margin: 0, fontSize: 11, fontWeight: 700, color: "#fff",
                  fontFamily: "system-ui", letterSpacing: 0.3,
                }}>
                  SchoolERP
                </p>
                <p style={{
                  margin: 0, fontSize: 9, color: "rgba(255,255,255,0.75)",
                  fontFamily: "system-ui",
                }}>
                  {appScreen.title}
                </p>
              </div>
            </div>
          </div>

          {/* Content area */}
          <div style={{
            padding: "12px 10px",
            minHeight: 220,
            transition: "background 0.5s ease",
            background: accentLight,
          }}>
            {/* Search bar */}
            <div style={{
              background: "rgba(255,255,255,0.7)",
              borderRadius: 10,
              padding: "6px 10px",
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
              <span style={{ fontSize: 11, opacity: 0.5, fontFamily: "system-ui" }}>🔍</span>
              <span style={{
                fontSize: 10, color: "#666", fontFamily: "system-ui",
              }}>Search…</span>
            </div>

            {/* List items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {appScreen.items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: 12,
                    padding: "8px 10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    opacity: transitioning ? 0 : 1,
                    transform: transitioning ? "translateY(6px)" : "translateY(0)",
                    transition: `opacity 0.4s ease ${i * 0.07 + 0.15}s, transform 0.4s ease ${i * 0.07 + 0.15}s`,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: item.color,
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontSize: 10, fontWeight: 500, color: "#222",
                      fontFamily: "system-ui",
                    }}>
                      {item.label}
                    </span>
                  </div>
                  <span style={{
                    fontSize: 10, fontWeight: 700,
                    color: item.color,
                    fontFamily: "system-ui",
                    background: item.color + "18",
                    padding: "2px 7px",
                    borderRadius: 6,
                  }}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom nav */}
            <div style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 14,
              paddingTop: 10,
              borderTop: "1px solid rgba(0,0,0,0.07)",
            }}>
              {["🏠", "📊", "👥", "⚙️"].map((icon, i) => (
                <div key={i} style={{
                  width: 32, height: 32,
                  borderRadius: 10,
                  background: i === 0 ? accent + "22" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  transition: "background 0.5s ease",
                }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Main Hero Component ----------
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState("next"); // "next" | "prev"

  const goTo = useCallback((index, dir = "next") => {
    if (transitioning) return;
    setDirection(dir);
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setTransitioning(false), 80);
    }, 350);
  }, [transitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: `linear-gradient(135deg, ${slide.accentLight} 0%, #ffffff 60%)`,
        transition: "background 0.6s ease",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", width: "40vw", height: "40vw",
          borderRadius: "50%",
          background: slide.accent + "14",
          top: "-10vw", right: "-8vw",
          transition: "background 0.6s ease",
        }} />
        <div style={{
          position: "absolute", width: "24vw", height: "24vw",
          borderRadius: "50%",
          background: slide.accent + "0d",
          bottom: "2vw", left: "8vw",
          transition: "background 0.6s ease",
        }} />
        {/* Subtle dot grid */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.35 }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill={slide.accent} opacity="0.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="flex flex-row items-center justify-between gap-6 sm:gap-10">

          {/* ---- LEFT: Text ---- */}
          <div className="flex-1 max-w-xl">
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 mb-5"
              style={{
                background: slide.accent + "1a",
                border: `1px solid ${slide.accent}33`,
                borderRadius: 100,
                padding: "5px 14px",
                opacity: transitioning ? 0 : 1,
                transform: transitioning
                  ? direction === "next" ? "translateY(-10px)" : "translateY(10px)"
                  : "translateY(0)",
                transition: "opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s",
              }}
            >
              <span
                style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: slide.accent, display: "inline-block", flexShrink: 0,
                }}
              />
              <span style={{
                fontSize: 13, fontWeight: 600, color: slide.accent,
                fontFamily: "system-ui",
                letterSpacing: 0.3,
              }}>
                {slide.tag}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold leading-tight mb-4"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: "#111",
                fontFamily: "'Sora', 'Plus Jakarta Sans', system-ui, sans-serif",
                whiteSpace: "pre-line",
                opacity: transitioning ? 0 : 1,
                transform: transitioning
                  ? direction === "next" ? "translateY(-14px)" : "translateY(14px)"
                  : "translateY(0)",
                transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
              }}
            >
              {slide.headline}
            </h1>

            {/* Sub */}
            <p
              className="leading-relaxed mb-8"
              style={{
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                color: "#555",
                fontFamily: "system-ui",
                maxWidth: 460,
                opacity: transitioning ? 0 : 1,
                transform: transitioning
                  ? direction === "next" ? "translateY(-10px)" : "translateY(10px)"
                  : "translateY(0)",
                transition: "opacity 0.4s ease 0.17s, transform 0.4s ease 0.17s",
              }}
            >
              {slide.sub}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3"
              style={{
                opacity: transitioning ? 0 : 1,
                transform: transitioning
                  ? direction === "next" ? "translateY(-8px)" : "translateY(8px)"
                  : "translateY(0)",
                transition: "opacity 0.4s ease 0.22s, transform 0.4s ease 0.22s",
              }}
            >
              <button
                style={{
                  background: slide.accent,
                  color: "#fff",
                  border: "none",
                  borderRadius: 14,
                  padding: "13px 28px",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "system-ui",
                  cursor: "pointer",
                  boxShadow: `0 6px 20px ${slide.accent}44`,
                  transition: "background 0.5s ease, box-shadow 0.5s ease, transform 0.15s",
                  letterSpacing: 0.2,
                }}
                onMouseEnter={e => (e.target.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.target.style.transform = "scale(1)")}
              >
                {slide.cta}
              </button>
              <button
                style={{
                  background: "transparent",
                  color: slide.accent,
                  border: `1.5px solid ${slide.accent}55`,
                  borderRadius: 14,
                  padding: "13px 26px",
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "system-ui",
                  cursor: "pointer",
                  transition: "border-color 0.5s ease, color 0.5s ease, transform 0.15s",
                  letterSpacing: 0.2,
                }}
                onMouseEnter={e => (e.target.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.target.style.transform = "scale(1)")}
              >
                {slide.ctaSecondary}
              </button>
            </div>

            {/* Slide nav dots */}
            <div className="flex items-center gap-3 mt-10">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? "next" : "prev")}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    borderRadius: 100,
                    background: i === current ? slide.accent : slide.accent + "33",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.4s ease, background 0.4s ease",
                  }}
                />
              ))}

              {/* Arrows */}
              <div className="flex gap-2 ml-auto">
                {[
                  { fn: prev, icon: "←", label: "Previous" },
                  { fn: next, icon: "→", label: "Next" },
                ].map(({ fn, icon, label }) => (
                  <button
                    key={icon}
                    onClick={fn}
                    aria-label={label}
                    style={{
                      width: 38, height: 38,
                      borderRadius: 12,
                      background: slide.accent + "14",
                      border: `1.5px solid ${slide.accent}33`,
                      color: slide.accent,
                      fontSize: 18,
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background 0.2s, transform 0.15s",
                      lineHeight: 1,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = slide.accent + "28";
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = slide.accent + "14";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ---- RIGHT: Phone ---- */}
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              opacity: transitioning ? 0.4 : 1,
              transform: transitioning
                ? direction === "next"
                  ? "translateX(24px) rotate(10deg)"
                  : "translateX(-24px) rotate(6deg)"
                : "translateX(0) rotate(0deg)",
              transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(.22,1,.36,1)",
            }}
          >
            <PhoneMockup slide={slide} transitioning={transitioning} />
          </div>
        </div>
      </div>

      {/* Slide counter */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          right: 32,
          fontSize: 12,
          fontWeight: 600,
          color: slide.accent,
          fontFamily: "system-ui",
          opacity: 0.6,
          letterSpacing: 2,
          transition: "color 0.5s ease",
        }}
      >
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}