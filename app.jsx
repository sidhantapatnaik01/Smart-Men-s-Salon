
import React from 'react';
import { createRoot } from 'react-dom/client';

// ── useTweaks ───────────────────────────────────────────────────────────────
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
function TweaksPanel({ title = 'Tweaks', children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(clampToViewport) : null;
    if (ro) { ro.observe(document.documentElement); return () => ro.disconnect(); }
    window.addEventListener('resize', clampToViewport);
    return () => window.removeEventListener('resize', clampToViewport);
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
  };

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;
  return (
    <div ref={dragRef} className="twk-panel" style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
      <div className="twk-hd" onMouseDown={onDragStart}>
        <b>{title}</b>
        <button className="twk-x" aria-label="Close tweaks" onMouseDown={(e) => e.stopPropagation()} onClick={dismiss}>✕</button>
      </div>
      <div className="twk-body">{children}</div>
    </div>
  );
}

function TweakSection({ label, children }) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  );
}

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={!!value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}

function TweakText({ label, value, placeholder, onChange }) {
  return (
    <TweakRow label={label}>
      <input className="twk-field" type="text" value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)} />
    </TweakRow>
  );
}

function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

const __TwkCheck = ({ light }) => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
          stroke={light ? 'rgba(0,0,0,.78)' : '#fff'} />
  </svg>
);

function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return (
      <div className="twk-row twk-row-h">
        <div className="twk-lbl"><span>{label}</span></div>
        <input type="color" className="twk-swatch" value={value}
               onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  }
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return (
    <TweakRow label={label}>
      <div className="twk-chips" role="radiogroup">
        {options.map((o, i) => {
          const colors = Array.isArray(o) ? o : [o];
          const [hero, ...rest] = colors;
          const sup = rest.slice(0, 4);
          const on = key(o) === cur;
          return (
            <button key={i} type="button" className="twk-chip" role="radio"
                    aria-checked={on} data-on={on ? '1' : '0'}
                    aria-label={colors.join(', ')} title={colors.join(' · ')}
                    style={{ background: hero }}
                    onClick={() => onChange(o)}>
              {sup.length > 0 && (
                <span>
                  {sup.map((c, j) => <i key={j} style={{ background: c }} />)}
                </span>
              )}
              {on && <__TwkCheck light={__twkIsLight(hero)} />}
            </button>
          );
        })}
      </div>
    </TweakRow>
  );
}



/* SMART Men's Salon — App */
const { useState, useEffect, useMemo, useRef, useCallback } = React;

const TWEAK_DEFAULTS = {
  "primaryColor": "#2563EB",
  "headlineLine1": "LOOK SHARP.",
  "headlineLine2": "FEEL DIFFERENT.",
  "heroSub": "Know what you're getting before you walk in. Browse services, pick your slot, and confirm on WhatsApp — no calls, no waiting.",
  "phone": "+91 94378 50989",
  "whatsappNumber": "919437850989",
  "address": "Pathan Street",
  "city": "Nabarangpur, Odisha 764059 · India",
  "hours": "07:00 — 21:00 (Thu till 13:00)",
  "showTicker": true,
  "showGallery": true
};

/* ============== Rotating Words ============== */
const HERO_WORDS = ["DIFFERENT.", "CONFIDENT.", "SHARP.", "FRESH.", "READY."];

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState("in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnim("out");
      setTimeout(() => {
        setIndex(i => (i + 1) % HERO_WORDS.length);
        setAnim("in");
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const word = HERO_WORDS[index];
  const cls = anim === "in" ? "rot-word rot-in" : "rot-word rot-out";

  return <em className={cls} key={index + anim}>{word}</em>;
}

function useInView(opts = {}) {
  const { threshold = 0.15, once = true } = opts;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); if (once) io.disconnect(); }
      else if (!once) setVisible(false);
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);
  return [ref, visible];
}

function Reveal({ children, className = "", style, delay = 0, variant = "" }) {
  const [ref, visible] = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`reveal ${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}

/* ============== Icons ============== */
const Icon = {
  WhatsApp: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 .9-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
      <path d="M20.5 3.5C18.3 1.2 15.3 0 12.1 0 5.5 0 .2 5.4.2 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.4-8.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9-.1 5.4-4.5 9.8-9.8 9.8z"/>
    </svg>
  ),
  Phone: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
  ),
  Arrow: ({ size = 16, rotate = 0 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transform: `rotate(${rotate}deg)`}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  ),
  Plus: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  Check: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  Pin: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Clock: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  Star: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  Sparkle: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"/></svg>
  ),
  Razor: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4l6 6-9 9H5v-6z"/><path d="M11 7l6 6"/></svg>
  ),
  Scissors: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
  ),
  Drop: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5s7 8 7 12a7 7 0 0 1-14 0c0-4 7-12 7-12z"/></svg>
  ),
  Shield: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  Heart: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
  ),
  Bolt: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  Crown: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18h18M3 7l4 5 5-7 5 7 4-5v11H3z"/></svg>
  ),
  Instagram: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
  ),
  Google: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4c-.2 1.3-1 2.4-2 3.1v2.6h3.3c1.9-1.7 3-4.3 3-7.5z"/><path d="M12 22c2.7 0 5-1 6.7-2.4l-3.3-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3v2.6C4.7 19.9 8.1 22 12 22z"/><path d="M6.4 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.5H3C2.4 8.9 2 10.4 2 12s.4 3.1 1 4.5l3.4-2.6z"/><path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9C16.9 3 14.7 2 12 2 8.1 2 4.7 4.1 3 7.5l3.4 2.6c.8-2.4 3-4.2 5.6-4.2z"/></svg>
  ),
  Map: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
  ),
};

/* ============== Photo Placeholder ============== */
function Photo({ tone = "default", label, glyph = null, style, src, eager }) {
  if (src) {
    return <img src={src} alt={label || ""} className="photo" style={{ objectFit: "cover", width: "100%", height: "100%", ...style }} loading={eager ? "eager" : "lazy"} decoding="async" />;
  }
  const cls = "photo " + (tone !== "default" ? tone : "");
  return (
    <div className={cls} style={style}>
      {glyph && <div className="glyph">{glyph}</div>}
      {label && <span className="label">{label}</span>}
    </div>
  );
}

/* ============== Top Nav ============== */
function TopNav() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const links = ['services', 'gallery', 'book', 'visit'];
  const close = () => setMenuOpen(false);

  return (
    <nav className={"topnav " + (menuOpen ? "is-menu-open" : "")}>
      <div className="container row">
        <a href="#" onClick={scrollToTop} className="logo-mark" style={{textDecoration:'none'}}>
          <img src="logo.webp" alt="SMART Men's Salon" className="logo-img" style={{ height: '60px' }} />
        </a>
        <div className="links">
          {links.map(l => (
            <a key={l} href={`#${l}`}>{l[0].toUpperCase() + l.slice(1)}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a href="#book" className="btn btn-dark btn-sm" style={{height: 40, color: '#fff'}} onClick={close}>
            <Icon.WhatsApp size={14} /> Book Now
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
        {links.map(l => (
          <a key={l} href={`#${l}`} onClick={close}>{l[0].toUpperCase() + l.slice(1)}</a>
        ))}
      </div>
    </nav>
  );
}

/* ============== Hero ============== */
function Hero({ t }) {
  const [currentBg, setCurrentBg] = React.useState(0);
  const images = ["images/hero.webp", "images/Salon Exterior.webp"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero">
      <div className="bg">
        {images.map((src, index) => (
          <Photo 
            key={src}
            src={src} 
            eager={index === 0} 
            tone="warm" 
            label={`HERO · IMAGE ${index + 1}`} 
            style={{
              position:"absolute", 
              inset:0, 
              opacity: currentBg === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              objectPosition: src === "images/Salon Exterior.webp" ? "bottom" : (src === "images/hero.webp" ? "right center" : "center")
            }}
          />
        ))}
      </div>
      <TopNav />
      <div className="container content">
        <div className="eyebrow" style={{color:"rgba(255,255,255,.55)", marginBottom: 18}}>
          <span style={{display:"inline-flex", alignItems:"center", gap: 8}}>
            <span style={{width:6, height:6, borderRadius:99, background:"#25D366", boxShadow:"0 0 0 4px rgba(37,211,102,.18)"}}></span>
            OPEN TODAY · {t.hours}
          </span>
        </div>
        <div style={{ width: '360px', height: '144px', overflow: 'hidden', marginBottom: 16, position: 'relative' }}>
          <img src="images/logo-large.webp" alt="Smart Men's Salon" style={{ width: '360px', position: 'absolute', top: '-192px' }} />
        </div>
        <h1 className="display" style={{ marginBottom: 24 }}>
          <span className="h-line">{t.headlineLine1}</span>
          <span className="h-line">FEEL <RotatingWord /></span>
        </h1>
        <div className="ctas">
          <a href="#book" className="btn btn-wa">
            <Icon.WhatsApp size={16} /> Book on WhatsApp
          </a>
          <a href={`tel:${t.phone.replace(/\s/g,'')}`} className="btn btn-ghost-dark">
            <Icon.Phone size={15} /> Call Now
          </a>
        </div>
        <div className="meta-row">
          <span><span className="dot" style={{display:"inline-block", marginRight:8, verticalAlign:"middle"}}></span>Premium men's grooming · Nabarangpur</span>
          <span style={{opacity:.4}}>—</span>
          <span>Walk-ins welcome</span>
          <span style={{opacity:.4}}>—</span>
          <span>Durga Rao · Nabarangpur</span>
        </div>
      </div>
      {t.showTicker && <div className="ticker">
        <div className="ticker-track">
          {Array(2).fill(0).map((_, i) => (
            <React.Fragment key={i}>
              <span>HAIRCUT</span><span className="star">✦</span>
              <span>BEARD STYLING</span><span className="star">✦</span>
              <span>CLEAN UP</span><span className="star">✦</span>
              <span>FACIAL</span><span className="star">✦</span>
              <span>HAIR STRAIGHTENING</span><span className="star">✦</span>
              <span>WEDDING GROOM PACKAGE</span><span className="star">✦</span>
              <span>HAIR TREATMENT</span><span className="star">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>}
    </header>
  );
}

/* ============== Service Showcase ============== */
const SERVICES = {
  hair: {
    label: "Hair",
    blurb: "Cuts, colour-safe styling, and treatments that hold their shape long after you leave the chair.",
    items: [
      { src: "images/hair.webp", name: "Haircut", sub: "Classic, fade, taper, scissor", tone: "steel", glyph: <Icon.Scissors size={42} /> },
      { src: "images/hair-styling.webp", name: "Hair Styling", sub: "Wash, blow-dry & finish", tone: "cool", glyph: <Icon.Sparkle size={42} /> },
      { src: "images/hair-straightening.webp", name: "Hair Straightening", sub: "Smoothening & keratin", tone: "default", glyph: <Icon.Bolt size={42} /> },
      { src: "images/hair-treatment.webp", name: "Hair Treatment", sub: "Scalp & dandruff therapy", tone: "warm", glyph: <Icon.Drop size={42} /> },
    ],
  },
  beard: {
    label: "Beard",
    blurb: "Sculpted edges, smooth finishes, and shapes tailored to your face — every time.",
    items: [
      { src: "images/beard.webp", name: "Beard Trim", sub: "Maintain your shape", tone: "amber", glyph: <Icon.Razor size={42} /> },
      { src: "images/beard-shaping.webp", name: "Beard Shaping", sub: "Sculpt & line-up", tone: "warm", glyph: <Icon.Scissors size={42} /> },
      { src: "images/clean-shave.webp", name: "Clean Shave", sub: "Smooth finish", tone: "steel", glyph: <Icon.Razor size={42} /> },
    ],
  },
  skin: {
    label: "Skin",
    blurb: "Quick, no-fuss skincare for men — designed to look natural, never overdone.",
    items: [
      { src: "images/skin.webp", name: "Clean Up", sub: "Refresh & deep cleanse", tone: "cool", glyph: <Icon.Drop size={42} /> },
      { src: "images/skin.webp", name: "Skin Brightening", sub: "Even tone, healthy glow", tone: "default", glyph: <Icon.Sparkle size={42} /> },
      { src: "images/skin.webp", name: "Facial", sub: "Massage, mask, finish", tone: "warm", glyph: <Icon.Heart size={42} /> },
    ],
  },
  packages: {
    label: "Packages",
    blurb: "Full-service grooming sessions for the days that matter most.",
    items: [
      { src: "images/package.webp", name: "Groom Package", sub: "Hair · Beard · Clean Up", tone: "amber", glyph: <Icon.Crown size={42} /> },
      { src: "images/package.webp", name: "Wedding Groom Package", sub: "Full-day premium experience", tone: "warm", glyph: <Icon.Crown size={42} /> },
    ],
  },
};

function ServiceShowcase({ onBookService }) {
  const [cat, setCat] = useState("hair");
  const cats = Object.keys(SERVICES);
  const tabRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = tabRefs.current[cat];
    if (el && el.parentElement) {
      const parentRect = el.parentElement.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setIndicatorStyle({
        transform: `translateX(${r.left - parentRect.left - 6}px)`,
        width: r.width,
      });
    }
  }, [cat]);

  const data = SERVICES[cat];
  const [gridRef, gridVisible] = useInView({ threshold: 0.05 });

  return (
    <section className="section showcase" id="services">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{marginBottom: 14}}>02 — SERVICES</div>
              <h2>Pick what you need.<br/><em>See it before you walk in.</em></h2>
            </div>
            <div className="right">
              Tap a category. Imagery, services, and the booking message update instantly.
            </div>
          </div>
        </Reveal>

        <div className="cat-bar no-scrollbar">
          <div className="indicator" style={indicatorStyle}></div>
          {cats.map((k, i) => (
            <button
              key={k}
              ref={el => tabRefs.current[k] = el}
              className={"cat-tab " + (cat === k ? "is-active" : "")}
              onClick={() => setCat(k)}
            >
              {SERVICES[k].label}
              <span className="count">0{i+1}</span>
            </button>
          ))}
        </div>

        <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:16, margin:"24px 0 24px"}}>
          <p style={{margin:0, color:"var(--ink-soft)", maxWidth: 520, fontSize: 15}}>{data.blurb}</p>
          <div className="eyebrow">
            {data.items.length} SERVICES IN {data.label.toUpperCase()}
          </div>
        </div>

        <div
          ref={gridRef}
          key={cat}
          className={`tab-content-enter stagger-grid ${gridVisible ? "is-visible" : ""}`}
          style={{
            display:"grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {data.items.map((it, idx) => (
            <button
              key={it.name}
              className="service-tile"
              style={{ animationDelay: `${idx * 60}ms` }}
              onClick={() => onBookService(it.name)}
            >
              <Photo src={it.src} tone={it.tone} label={it.name.toUpperCase().replace(/\s/g,"·")} glyph={it.glyph} />
              <div className="overlay"></div>
              <span className="num">0{idx+1}</span>
              <span className="arrow"><Icon.Arrow size={16} rotate={-45}/></span>
              <div className="meta">
                <div className="name">{it.name}</div>
                <div className="sub">{it.sub}</div>
                <div style={{marginTop: 14, display:"inline-flex", alignItems:"center", gap:6, fontSize: 12, color:"#25D366", fontWeight:600}}>
                  <Icon.WhatsApp size={12}/> Add & continue
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== Moving Gallery ============== */
const GALLERY = [
  { src: "images/gallery1.webp", tone: "warm", small: "FADE / 02", caption: "Mid-fade, scissor finish" },
  { src: "images/gallery2.webp", tone: "steel", small: "BEARD / 01", caption: "Beard line-up" },
  { src: "images/gallery3.webp", tone: "amber", small: "INTERIOR", caption: "Studio chair · 03" },
  { src: "images/skin.webp", tone: "cool",  small: "FACIAL / 04", caption: "Clean up + glow" },
  { src: "images/hair-styling.webp", tone: "default", small: "WASH", caption: "Wash & blow-dry" },
  { src: "images/package.webp", tone: "warm", small: "BEFORE / AFTER", caption: "Wedding groom" },
  { src: "images/hair-styling.webp", tone: "steel", small: "DETAIL", caption: "Smooth finish" },
  { src: "images/hair-straightening.webp", tone: "amber", small: "STYLE", caption: "Side-part finish" },
  { src: "images/Salon Exterior.webp", tone: "cool",  small: "INTERIOR / 02", caption: "Mirror wall" },
  { src: "images/clean-shave.webp", tone: "default", small: "PROCESS", caption: "Clipper detail" },
];

function Gallery({ t }) {
  if (t && !t.showGallery) return null;
  return (
    <section className="section section-tight" id="gallery" style={{background:"#0A0A0B", color:"#fff"}}>
      <div className="container">
        <Reveal>
          <div className="sec-head" style={{alignItems:"flex-end"}}>
            <div>
              <div className="eyebrow" style={{color:"rgba(255,255,255,.5)", marginBottom: 14}}>03 — GALLERY</div>
              <h2 style={{color:"#fff"}}>The chair.<br/><em style={{color:"var(--blue)"}}>The work.</em></h2>
            </div>
            <div className="right" style={{color:"rgba(255,255,255,.6)"}}>
              Real cuts, real customers. Scroll, swipe, or just let it move.
            </div>
          </div>
        </Reveal>
      </div>
      <div style={{overflow:"hidden", maskImage:"linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)", WebkitMaskImage:"linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)"}}>
        <div className="gallery-track">
          {[...GALLERY, ...GALLERY].map((g, i) => (
            <div key={i} className="gallery-card">
              <Photo src={g.src} tone={g.tone} style={{position:"absolute", inset:0}}/>
              <div className="scrim"></div>
              <div className="caption">
                <small>{g.small}</small>
                {g.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== Booking ============== */
const ALL_SERVICES = [
  "Haircut", "Beard Trim", "Clean Shave", "Hair Styling",
  "Hair Straightening", "Hair Treatment", "Beard Shaping",
  "Clean Up", "Skin Brightening", "Facial",
  "Groom Package", "Wedding Groom Package",
];
const TIME_SLOTS = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM"];

function slotTo24h(slot) {
  const [hm, ampm] = slot.split(" ");
  const [h] = hm.split(":").map(Number);
  if (ampm === "AM") return h === 12 ? 0 : h;
  return h === 12 ? 12 : h + 12;
}

// Salon closes at 13:00 on Thursdays, 21:00 every other day.
function getClosingHour(isoDate) {
  return new Date(isoDate).getDay() === 4 ? 13 : 21;
}

function getSlotsForDay(isoDate) {
  const close = getClosingHour(isoDate);
  return TIME_SLOTS.filter(s => slotTo24h(s) < close);
}

function getNextDays(n = 7) {
  const days = [];
  const dowNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      iso: d.toISOString().slice(0,10),
      dom: d.getDate(),
      dow: i === 0 ? "Today" : dowNames[d.getDay()],
    });
  }
  return days;
}

function Booking({ preselectedService, onClearPreselect, t }) {
  const days = useMemo(() => getNextDays(8), []);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState([]);
  const [day, setDay] = useState(days[0].iso);
  const [time, setTime] = useState(() => getSlotsForDay(days[0].iso)[0] ?? TIME_SLOTS[0]);

  const selectDay = useCallback((iso) => {
    setDay(iso);
    const valid = getSlotsForDay(iso);
    setTime(prev => valid.includes(prev) ? prev : (valid[0] ?? TIME_SLOTS[0]));
  }, []);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (preselectedService && !services.includes(preselectedService)) {
      setServices(s => [...s, preselectedService]);
      onClearPreselect && onClearPreselect();
      const el = document.getElementById("book");
      if (el) el.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }, [preselectedService]);

  const toggleService = (s) =>
    setServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const dayLabel = useMemo(() => {
    const d = days.find(x => x.iso === day);
    if (!d) return "";
    return d.dow === "Today" ? "Today" : `${d.dow} ${d.dom}`;
  }, [day, days]);

  const message =
`Hi SMART Men's Salon,

I'd like to book a session.

Name: ${name || "—"}
Phone: ${phone || "—"}

Selected Service:
${services.length ? services.join(" + ") : "—"}

Preferred Date:
${dayLabel}

Preferred Time:
${time}

Additional Notes:
${notes || "—"}`;

  const waHref = `https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const filled = name && phone && services.length;

  return (
    <section className="section" id="book" style={{background:"var(--bg-soft)"}}>
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{marginBottom: 14}}>04 — BOOK</div>
              <h2>Three steps.<br/><em>Confirm on WhatsApp.</em></h2>
            </div>
            <div className="right">
              We'll never ask for payment online. Your slot is confirmed by our team within minutes on WhatsApp.
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} variant="from-scale">
          <div className="booking-card">
            <div style={{display: "grid", gridTemplateColumns: "1fr", gap: 28}}>
              <div>
                <StepLabel n={1} title="Who's coming in?" />
                <div className="booking-grid two">
                  <div className="field">
                    <label>Name</label>
                    <input className="input" type="text" minLength="2" placeholder="Your name" value={name} onChange={e => setName(e.target.value)}/>
                  </div>
                  <div className="field">
                    <label>Phone</label>
                    <input className="input" type="tel" pattern="[0-9]{10}" placeholder="98XXXXXXXX" value={phone} onChange={e => setPhone(e.target.value)}/>
                  </div>
                </div>
              </div>

              <div>
                <StepLabel n={2} title="What do you need?" hint={services.length ? `${services.length} selected` : "Tap to select"} />
                <div style={{display:"flex", flexWrap:"wrap", gap: 8}}>
                  {ALL_SERVICES.map(s => (
                    <button
                      key={s}
                      className={"chip " + (services.includes(s) ? "is-active" : "")}
                      onClick={() => toggleService(s)}
                      type="button"
                    >
                      <span className="dot"></span>
                      {s}
                      {services.includes(s) ? <Icon.Check size={12}/> : <Icon.Plus size={12}/>}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <StepLabel n={3} title="When works for you?" />
                <div style={{display:"flex", flexDirection:"column", gap: 16}}>
                  <div className="scroll-x no-scrollbar">
                    {days.map(d => (
                      <button
                        key={d.iso}
                        type="button"
                        className={"day-pill " + (day === d.iso ? "is-active" : "")}
                        onClick={() => selectDay(d.iso)}
                      >
                        <span className="dom">{d.dom}</span>
                        <span className="dow">{d.dow}</span>
                      </button>
                    ))}
                  </div>
                  <div className="scroll-x no-scrollbar">
                    {getSlotsForDay(day).map(ts => (
                      <button
                        key={ts}
                        type="button"
                        className={"time-pill " + (time === ts ? "is-active" : "")}
                        onClick={() => setTime(ts)}
                      >
                        {ts}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="field">
                <label>Notes (optional)</label>
                <textarea
                  className="textarea"
                  placeholder="e.g. Low fade haircut, keep beard medium length."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                />
              </div>

              <div style={{display:"grid", gridTemplateColumns: "1fr", gap: 20}}>
                <a
                  href={filled ? waHref : "#"}
                  onClick={(e) => { if (!filled) e.preventDefault(); }}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-wa"
                  style={{
                    height: 60, fontSize: 16,
                    opacity: filled ? 1 : 0.55,
                    cursor: filled ? "pointer" : "not-allowed",
                  }}
                >
                  <Icon.WhatsApp size={18}/>
                  Continue on WhatsApp
                  <Icon.Arrow size={16}/>
                </a>
                <p style={{margin:0, fontSize: 12, color:"var(--muted)", textAlign:"center"}}>
                  {filled
                    ? "Opens WhatsApp with your booking message ready to send."
                    : "Fill in name, phone, and at least one service to continue."}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StepLabel({ n, title, hint }) {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom: 16, gap: 16}}>
      <div style={{display:"flex", alignItems:"center", gap: 14}}>
        <span style={{
          width: 28, height: 28, borderRadius: 999, background: "var(--ink)", color: "#fff",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontFamily: "JetBrains Mono, monospace", fontSize: 12, fontWeight: 600,
        }}>{n}</span>
        <div style={{fontFamily:"Inter Tight, sans-serif", fontWeight:700, fontSize: 22, letterSpacing:"-0.02em"}}>
          {title}
        </div>
      </div>
      {hint && <span className="eyebrow">{hint}</span>}
    </div>
  );
}

/* ============== Trust ============== */
const TRUST = [
  { ico: <Icon.Scissors size={22}/>, title: "Skilled Grooming", sub: "Senior stylists, 5+ years on the chair." },
  { ico: <Icon.Sparkle size={22}/>, title: "Clean Environment", sub: "Sanitised tools after every customer." },
  { ico: <Icon.Heart size={22}/>, title: "Friendly Service", sub: "We listen. No upsell, no pressure." },
  { ico: <Icon.Shield size={22}/>, title: "Hygiene First", sub: "Single-use blades. Fresh towels, always." },
  { ico: <Icon.Bolt size={22}/>, title: "Modern Techniques", sub: "From skin fades to smoothening." },
  { ico: <Icon.Clock size={22}/>, title: "Quick Service", sub: "On time. In and out, sharp." },
];

function Trust() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{marginBottom: 14}}>05 — WHY SMART</div>
              <h2>The basics, <em>done right.</em></h2>
            </div>
            <div className="right">
              We keep things simple — clean chair, clean tools, real grooming. The same standard, every visit.
            </div>
          </div>
        </Reveal>
        <TrustGrid />
      </div>
    </section>
  );
}

function TrustGrid() {
  const [ref, visible] = useInView({ threshold: 0.05 });
  return (
    <div ref={ref} className={`stagger-grid ${visible ? "is-visible" : ""}`} style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 16,
    }}>
      {TRUST.map((t, i) => (
        <div className="trust-item" key={t.title}>
          <div className="ico" style={{color:"var(--blue)"}}>{t.ico}</div>
          <div>
            <div style={{fontFamily:"Inter Tight, sans-serif", fontWeight:700, fontSize: 19, letterSpacing:"-0.02em"}}>
              {t.title}
            </div>
            <div style={{color: "var(--muted)", fontSize: 14, marginTop: 6}}>{t.sub}</div>
          </div>
          <div style={{marginTop:"auto", color:"var(--muted)", fontFamily:"JetBrains Mono, monospace", fontSize: 11, letterSpacing:".1em"}}>
            0{i+1} / 06
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============== Visit ============== */
function Visit({ t }) {
  return (
    <section className="section" id="visit" style={{background:"var(--bg-soft)"}}>
      <div className="container">
        <Reveal>
          <div className="sec-head">
            <div>
              <div className="eyebrow" style={{marginBottom: 14}}>06 — VISIT US</div>
              <h2>Walk in.<br/><em>Or message first.</em></h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{display:"grid", gridTemplateColumns:"1fr", gap: 24}} className="visit-grid">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.803144638959!2d82.5467622695607!3d19.22956506515561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3ab7601520592f%3A0x2a3ffec6d1d73529!2sSmart%20Saloon!5e0!3m2!1sen!2sin!4v1778342471075!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SMART Men's Salon — Google Maps location"
              />
            </div>

            <div style={{display:"flex", flexDirection:"column", gap: 16}}>
              <InfoBlock
                icon={<Icon.Pin/>}
                label="Address"
                value={t.address}
                caption={t.city}
              />
              <InfoBlock
                icon={<Icon.Clock/>}
                label="Open Hours"
                value={t.hours}
                caption="Last booking 30 mins before close"
              />
              <InfoBlock
                icon={<Icon.Phone/>}
                label="Phone"
                value={t.phone}
                caption="Call or WhatsApp"
              />

              <div style={{display:"flex", gap: 10, flexWrap: "wrap", marginTop: 6}}>
                <a href={`https://wa.me/${t.whatsappNumber}`} target="_blank" rel="noopener" className="btn btn-wa">
                  <Icon.WhatsApp size={16}/> WhatsApp Us
                </a>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Smart+Saloon,+Pathan+Street,+Nabarangpur,+Odisha" target="_blank" rel="noopener" className="btn btn-light">
                  <Icon.Map size={15}/> Get Directions
                </a>
                <a href="https://www.instagram.com/smartmenssalon" target="_blank" rel="noopener" className="btn btn-light">
                  <Icon.Instagram size={15}/> Instagram
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=SMART+Men%27s+Salon+Nabarangpur" target="_blank" rel="noopener" className="btn btn-light">
                  <Icon.Google size={15}/> Reviews
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (min-width: 880px) {
          .visit-grid { grid-template-columns: 1.2fr 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function InfoBlock({ icon, label, value, caption }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 18,
      padding: "20px 22px",
      display: "flex", gap: 16, alignItems: "flex-start",
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 12, background: "var(--bg-soft)",
        display:"flex", alignItems:"center", justifyContent:"center", color: "var(--blue)",
        flexShrink: 0,
      }}>{icon}</div>
      <div>
        <div className="eyebrow">{label}</div>
        <div style={{fontFamily:"Inter Tight, sans-serif", fontWeight:600, fontSize: 18, marginTop: 4, letterSpacing:"-0.01em"}}>{value}</div>
        <div style={{color:"var(--muted)", fontSize: 13, marginTop: 2}}>{caption}</div>
      </div>
    </div>
  );
}

/* ============== Final CTA ============== */
function FinalCTA({ t }) {
  return (
    <section className="final-cta">
      <div className="bg">
        <Photo src="images/gallery1.webp" tone="warm" style={{position:"absolute", inset:0}}/>
      </div>
      <Reveal>
        <div className="container inner">
          <div className="eyebrow" style={{color:"rgba(255,255,255,.55)", marginBottom: 22}}>07 — VISIT US</div>
          <h2>WALK IN <em>NORMAL.</em><br/>WALK OUT <em>SHARP.</em></h2>
          <p className="sub">It takes 30 seconds to book. The transformation takes a little longer.</p>
          <div className="cta">
            <a href="#book" className="btn btn-wa" style={{height:60, padding:"0 30px", fontSize: 16}}>
              <Icon.WhatsApp size={18}/> Book on WhatsApp
              <Icon.Arrow size={16}/>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ============== Footer ============== */
function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div>
            <div className="logo-mark" style={{marginBottom: 18}}>
              <img src="logo.webp" alt="SMART Men's Salon" className="logo-img" />
            </div>
            <p style={{maxWidth: 380, color:"rgba(255,255,255,.55)", fontSize: 14, margin: 0}}>
              A modern grooming studio for men. Cuts, beards, skin and packages — booked on WhatsApp, done in the chair.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Hair</a></li>
              <li><a href="#services">Beard</a></li>
              <li><a href="#services">Skin</a></li>
              <li><a href="#services">Packages</a></li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li><a href="#visit">{t.address}, Nabarangpur</a></li>
              <li><a href="#visit">{t.hours}</a></li>
              <li><a href={`tel:${t.phone.replace(/\s/g,'')}`}>{t.phone}</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li><a href="https://www.instagram.com/smartmenssalon" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://www.google.com/maps/search/?api=1&query=SMART+Men%27s+Salon" target="_blank" rel="noopener">Google Reviews</a></li>
              <li><a href={`https://wa.me/${t.whatsappNumber}`} target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} SMART Men's Salon · smartsalon.co.in</span>
          <span>Designed for the chair</span>
        </div>
      </div>
    </footer>
  );
}

/* ============== Sticky controls ============== */
function StickyMobile({ t }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 300px (approx hero top section)
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ opacity: show ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: show ? "auto" : "none" }}>
      <a href="#book" className="fab" aria-label="Book on WhatsApp">
        <Icon.WhatsApp size={26}/>
      </a>
      <div className="mobile-cta">
        <a href={`tel:${t.phone.replace(/\s/g,'')}`} className="btn btn-dark" style={{background:"rgba(10,10,11,.85)", color:"#fff", border:"none"}}>
          <Icon.Phone size={15}/> Call
        </a>
        <a href="#book" className="btn btn-wa">
          <Icon.WhatsApp size={16}/> Book on WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ============== App ============== */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [preselectedService, setPreselectedService] = useState(null);

  useEffect(() => {
    document.documentElement.style.setProperty('--blue', t.primaryColor);
    document.documentElement.style.setProperty('--blue-700', t.primaryColor);
  }, [t.primaryColor]);

  return (
    <>
      <Hero t={t} />
      <ServiceShowcase onBookService={setPreselectedService} />
      <Gallery t={t} />
      <Booking
        t={t}
        preselectedService={preselectedService}
        onClearPreselect={() => setPreselectedService(null)}
      />
      <Trust />
      <Visit t={t} />
      <FinalCTA t={t} />
      <Footer t={t} />
      <StickyMobile t={t} />

      {new URLSearchParams(window.location.search).has('tweaks') && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && <TweaksPanel>
        <TweakSection label="Brand" />
        <TweakColor
          label="Primary color"
          value={t.primaryColor}
          options={["#2563EB", "#0A0A0B", "#C2410C", "#15803D", "#7C3AED"]}
          onChange={v => setTweak('primaryColor', v)}
        />

        <TweakSection label="Hero copy" />
        <TweakText
          label="Headline · line 1"
          value={t.headlineLine1}
          onChange={v => setTweak('headlineLine1', v)}
        />
        <TweakText
          label="Headline · line 2"
          value={t.headlineLine2}
          onChange={v => setTweak('headlineLine2', v)}
        />
        <TweakText
          label="Hero subtext"
          value={t.heroSub}
          onChange={v => setTweak('heroSub', v)}
        />

        <TweakSection label="Contact" />
        <TweakText
          label="Phone (display)"
          value={t.phone}
          onChange={v => setTweak('phone', v)}
        />
        <TweakText
          label="WhatsApp number"
          value={t.whatsappNumber}
          onChange={v => setTweak('whatsappNumber', v)}
        />
        <TweakText
          label="Address"
          value={t.address}
          onChange={v => setTweak('address', v)}
        />
        <TweakText
          label="City"
          value={t.city}
          onChange={v => setTweak('city', v)}
        />
        <TweakText
          label="Hours"
          value={t.hours}
          onChange={v => setTweak('hours', v)}
        />

        <TweakSection label="Sections" />
        <TweakToggle
          label="Hero ticker"
          value={t.showTicker}
          onChange={v => setTweak('showTicker', v)}
        />
        <TweakToggle
          label="Gallery section"
          value={t.showGallery}
          onChange={v => setTweak('showGallery', v)}
        />
      </TweaksPanel>}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);


