"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Star,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const IMG = {
  hero: "/hero.jpg",
  alphard: "/alphard.png",
  innova: "/innova.jpg",
  hiace: "/hiace.jpeg",
  interior: "/interior.jpg",
  driver: "/driver.jpg",
  bali: "/padang.jpg",
  airport: "/airport.jpg",
  citynight: "/citynight.jpg",
  corporate: "/corporate.jpg",
};

const PACKAGES = [
  {
    name: "Paket 1",
    class: "6 jam",
    seats: "2-4",
    img: IMG.alphard,
    price: "8.500.000",
    features: ["Transportasi VIP"],
    tag: "BESTSELLER",
  },
  {
    name: "Wisata",
    class: "4 Hari 3 Malam",
    seats: "2-6",
    img: IMG.innova,
    price: "4.200.000",
    features: ["Transportasi AC"],
    tag: "POPULER",
  },
  {
    name: "Eksplorasi Sumatera",
    class: "7 Hari 6 Malam",
    seats: "4-10",
    img: IMG.hiace,
    price: "12.800.000",
    features: [
      "Resort & Homestay",
      "Expert Guide",
      "Transportasi Minibus",
      "Full Board",
    ],
    tag: "ADVENTURE",
  },
];

const SERVICES = [
  {
    no: "01",
    title: "Paket Travel Sumatera Barat",
    sub: "Eksplorasi Pulau Dewata",
    img: IMG.bali,
    desc: "lorem ipsum",
  },
  {
    no: "02",
    title: "Wisata Alam",
    sub: "Petualangan Tak Terlupakan",
    img: IMG.airport,
    desc: "lorem ipsum",
  },
  {
    no: "03",
    title: "Wisata Budaya",
    sub: "Warisan Nusantara",
    img: IMG.corporate,
    desc: "lorem ipsum",
  },
];

const STATS = [
  { val: "150", unit: "+", label: "Destinasi" },
  { val: "12", unit: " Thn", label: "Pengalaman" },
  { val: "25K", unit: "+", label: "Ulasan" },
  { val: "98", unit: "%", label: "Kepuasan" },
];

const TESTIMONIALS = [
  {
    name: "Budi Santoso",
    role: "Travel Blogger",
    city: "Jakarta",
    rating: 5,
    text: "Paket wisata Bali dari NusaTravel luar biasa! Pemandu lokalnya sangat berpengetahuan, hotelnya nyaman, dan itinerary-nya sempurna. Sangat merekomendasikan!",
  },
  {
    name: "Ratna Dewi",
    role: "Family Traveler",
    city: "Bali",
    rating: 5,
    text: "Liburan keluarga ke Jawa Tengah sangat berkesan. Anak-anak senang, semua terorganisir dengan rapi. Pasti akan booking lagi untuk destinasi lain.",
  },
  {
    name: "Hendra Kusuma",
    role: "Adventure Seeker",
    city: "Surabaya",
    rating: 5,
    text: "Eksplorasi Sumatera 7 hari adalah petualangan terbaik saya. Pemandunya expert, rute-nya off the beaten path, pengalaman yang tak terlupakan!",
  },
];

const S = {
  bg: "#0C0C0C",
  surface: "#111111",
  border: "rgba(255,255,255,0.07)",
  gold: "#C9A257",
  goldDim: "rgba(201,162,87,0.15)",
  text: "#F0EEE8",
  muted: "rgba(240,238,232,0.5)",
  dim: "rgba(240,238,232,0.28)",
};

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePackage, setActivePackage] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div
      style={{
        background: S.bg,
        color: S.text,
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* FONTS + GLOBAL */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0C0C0C; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0C0C0C; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; }
        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp .9s cubic-bezier(.16,1,.3,1) forwards; }
        .fade-up-2 { animation: fadeUp .9s cubic-bezier(.16,1,.3,1) .18s forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp .9s cubic-bezier(.16,1,.3,1) .34s forwards; opacity: 0; }
        .svc-row { transition: background .2s; cursor: pointer; }
        .svc-row:hover { background: rgba(201,162,87,0.04); }
        .svc-row:hover .svc-arrow { opacity: 1; transform: translate(2px,-2px); }
        .svc-arrow { opacity: 0; transition: opacity .2s, transform .2s; }
        .fleet-tab { transition: all .2s; }
        .fleet-tab:hover { color: #C9A257 !important; }
        .btn-gold { transition: background .2s, color .2s; }
        .btn-gold:hover { background: #d4a84a !important; }
        .btn-ghost { transition: border-color .2s, color .2s; }
        .btn-ghost:hover { border-color: #C9A257 !important; color: #C9A257 !important; }
        .nav-link { transition: color .2s; }
        .nav-link:hover { color: #C9A257 !important; }
        .footer-link { transition: color .2s; }
        .footer-link:hover { color: #C9A257 !important; }
        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .grid-2col { grid-template-columns: 1fr !important; }
          .grid-3col { grid-template-columns: 1fr !important; }
          .grid-4col { grid-template-columns: 1fr 1fr !important; }
          .hero-content { padding: 0 24px 100px !important; }
          .section-pad { padding: 56px 24px !important; }
          .section-pad-y { padding-top: 56px !important; padding-bottom: 56px !important; }
          .fleet-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
          .fleet-img { min-height: 260px !important; }
          .fleet-info { padding: 36px 28px !important; }
          .driver-grid { grid-template-columns: 1fr !important; }
          .svc-row-grid { grid-template-columns: 40px 1fr !important; }
          .svc-row-img { display: none !important; }
          .svc-row-desc { display: none !important; }
          .stat-bar { grid-template-columns: 1fr 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .nav-pad { padding: 0 20px !important; }
        }
      `}</style>

      {/* ───────────── NAVBAR ───────────── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(12,12,12,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${S.border}` : "none",
          transition: "all .4s ease",
          padding: "0 52px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="nav-pad"
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 34,
              height: 34,
              border: `1px solid ${S.gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                color: S.gold,
                fontSize: 10,
                letterSpacing: "0.18em",
                fontWeight: 600,
              }}
            >
              NT
            </span>
          </div>
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.1em",
              color: S.text,
            }}
          >
            NUSATRAVEL
          </span>
        </div>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 40 }} className="hide-mobile">
          {["Layanan", "Paket", "Tentang", "Kontak"].map((n) => (
            <a
              key={n}
              href="#"
              className="nav-link"
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: S.muted,
              }}
            >
              {n}
            </a>
          ))}
        </nav>

        <div
          style={{ display: "flex", alignItems: "center", gap: 24 }}
          className="hide-mobile"
        >
          <a
            href="tel:+6281234567890"
            className="nav-link"
            style={{
              fontSize: 12,
              color: S.muted,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 7,
            }}
          >
            <Phone size={12} /> +62 812-3456-7890
          </a>
          <button
            className="btn-gold"
            style={{
              background: S.gold,
              color: "#0C0C0C",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "11px 26px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Pesan Sekarang
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: S.text,
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

        {/* Mobile drawer */}
        {menuOpen && (
          <div
            style={{
              position: "fixed",
              top: 72,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99,
              background: S.bg,
              padding: "44px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            {["Layanan", "Paket", "Tentang", "Kontak"].map((n) => (
            <a
              key={n}
              href="#"
              className="serif"
              style={{
                fontSize: 32,
                color: S.text,
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              {n}
            </a>
          ))}
          <button
            style={{
              marginTop: 12,
              background: S.gold,
              color: "#0C0C0C",
              padding: "15px 32px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
            Pesan Sekarang
          </button>
        </div>
      )}

      {/* ───────────── HERO ───────────── */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 680,
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <img
          src={IMG.hero}
          alt="Hero car"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
          }}
        />
        {/* Layered overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(12,12,12,0.92) 35%, rgba(12,12,12,0.25) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 240,
            background: `linear-gradient(to top, ${S.bg}, transparent)`,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "0 52px 96px",
            maxWidth: 680,
          }}
          className="hero-content"
        >
          <div
            className="fade-up"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 32,
            }}
          >
            <div style={{ width: 36, height: 1, background: S.gold }} />
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: S.gold,
                fontWeight: 500,
              }}
            >
              Premium Travel Experiences · Indonesia
            </span>
          </div>

          <h1
            className="serif fade-up-2"
            style={{
              fontSize: "clamp(48px, 6.5vw, 88px)",
              fontWeight: 500,
              lineHeight: 1.05,
              marginBottom: 28,
              letterSpacing: "-0.02em",
            }}
          >
            Pesan Travel
            <br />
            <em style={{ color: S.gold, fontStyle: "italic" }}>
              Lebih Mudah,
            </em>
            <br />
            Bersama Kami.
          </h1>

          <p
            className="fade-up-3"
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "rgba(240,238,232,0.6)",
              marginBottom: 44,
              maxWidth: 400,
            }}
          >
            Penyediaan layanan jasa Travel antara kota di Sumatra Barat
          </p>

          <div
            className="fade-up-3"
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <button
              className="btn-gold"
              style={{
                background: S.gold,
                color: "#0C0C0C",
                padding: "15px 36px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              Jelajahi Destinasi <ArrowRight size={14} />
            </button>
            <button
              className="btn-ghost"
              style={{
                background: "transparent",
                color: S.text,
                padding: "15px 36px",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                border: `1px solid rgba(240,238,232,0.22)`,
                cursor: "pointer",
              }}
            >
              Lihat Paket
            </button>
          </div>
        </div>

        {/* Stats ticker */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            borderTop: `1px solid ${S.border}`,
          }}
          className="stat-bar"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "22px 0",
                textAlign: "center",
                borderRight: i < 3 ? `1px solid ${S.border}` : "none",
                background: "rgba(12,12,12,0.82)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <span
                  className="serif"
                  style={{ fontSize: 30, fontWeight: 500, color: S.gold }}
                >
                  {s.val}
                </span>
                <span style={{ fontSize: 16, color: S.gold }}>{s.unit}</span>
              </div>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: S.dim,
                  marginTop: 4,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── INTRO ───────────── */}
      <section
        style={{ borderBottom: `1px solid ${S.border}`, padding: "80px 52px" }}
        className="section-pad"
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
          className="grid-2col"
        >
          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: S.gold,
                marginBottom: 20,
              }}
            >
              Tentang NusaTravel
            </p>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(30px, 3.2vw, 48px)",
                fontWeight: 500,
                lineHeight: 1.15,
              }}
            >
              Standar Tertinggi dalam
              <br />
              Kenyamanan Perjalanan
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.9,
                color: S.muted,
                marginBottom: 24,
              }}
            >
              Lorem Ipsum
            </p>
            <a
              href="#"
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: S.gold,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Pelajari Lebih Lanjut <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ───────────── SERVICES ───────────── */}
      <section
        style={{ padding: "80px 52px", borderBottom: `1px solid ${S.border}` }}
        className="section-pad"
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 56,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: S.gold,
                  marginBottom: 16,
                }}
              >
                Layanan Kami
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(28px, 3vw, 46px)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                }}
              >
                Solusi untuk Setiap
                <br />
                Kebutuhan Perjalanan
              </h2>
            </div>
            <button
              className="btn-ghost"
              style={{
                background: "transparent",
                color: S.gold,
                border: `1px solid ${S.gold}`,
                padding: "13px 28px",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
              }}
            >
              Semua Layanan <ArrowRight size={12} />
            </button>
          </div>

          {SERVICES.map((svc, i) => (
            <div
              key={svc.no}
              className="svc-row svc-row-grid"
              style={{
                borderTop: `1px solid ${S.border}`,
                padding: "36px 0",
                display: "grid",
                gridTemplateColumns: "56px 1fr 1.1fr 96px",
                gap: 36,
                alignItems: "center",
                borderBottom:
                  i === SERVICES.length - 1 ? `1px solid ${S.border}` : "none",
              }}
            >
              <span
                style={{ fontSize: 11, color: S.gold, letterSpacing: "0.1em" }}
              >
                {svc.no}
              </span>
              <div>
                <h3
                  className="serif"
                  style={{
                    fontSize: 24,
                    fontWeight: 500,
                    marginBottom: 5,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: S.dim,
                  }}
                >
                  {svc.sub}
                </p>
              </div>
              <p
                style={{ fontSize: 13, lineHeight: 1.75, color: S.muted }}
                className="svc-row-desc"
              >
                {svc.desc}
              </p>
              <div
                style={{
                  width: 96,
                  height: 64,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
                className="svc-row-img"
              >
                <img
                  src={svc.img}
                  alt={svc.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.65) saturate(0.8)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────── FLEET ───────────── */}
      <section style={{ borderBottom: `1px solid ${S.border}` }}>
        <div
          style={{
            padding: "80px 52px 48px",
            maxWidth: 1160,
            margin: "0 auto",
          }}
          className="section-pad-y"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 48,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: S.gold,
                  marginBottom: 16,
                }}
              >
                Paket Wisata Pilihan
              </p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(28px, 3vw, 46px)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                }}
              >
                Destinasi Eksklusif,
                <br />
                Dikurasi dengan Cermat
              </h2>
            </div>
            <div style={{ display: "flex", gap: 3 }}>
              {PACKAGES.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => setActivePackage(i)}
                  className="fleet-tab"
                  style={{
                    padding: "10px 20px",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: activePackage === i ? S.gold : "transparent",
                    color: activePackage === i ? "#0C0C0C" : S.muted,
                    border: `1px solid ${activePackage === i ? S.gold : S.border}`,
                    cursor: "pointer",
                    fontWeight: activePackage === i ? 700 : 400,
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Package split panel */}
        {PACKAGES.map(
          (p, i) =>
            activePackage === i && (
              <div
                key={p.name}
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
                className="fleet-grid"
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 440,
                  }}
                  className="fleet-img"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to right, rgba(12,12,12,0.15), transparent)",
                    }}
                  />
                  <div style={{ position: "absolute", top: 24, left: 24 }}>
                    <span
                      style={{
                        background: S.gold,
                        color: "#0C0C0C",
                        fontSize: 10,
                        letterSpacing: "0.18em",
                        fontWeight: 800,
                        padding: "6px 14px",
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    padding: "56px 60px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: S.surface,
                  }}
                  className="fleet-info"
                >
                  <p
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: S.gold,
                      marginBottom: 14,
                    }}
                  >
                    {p.class} · {p.seats} Orang
                  </p>
                  <h3
                    className="serif"
                    style={{
                      fontSize: "clamp(30px, 3vw, 44px)",
                      fontWeight: 500,
                      marginBottom: 32,
                      lineHeight: 1.1,
                    }}
                  >
                    {p.name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      marginBottom: 40,
                    }}
                  >
                    {p.features.map((feat) => (
                      <div
                        key={feat}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                        }}
                      >
                        <div
                          style={{
                            width: 22,
                            height: 1,
                            background: S.gold,
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: 13, color: S.muted }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 36 }}>
                    <p
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: S.dim,
                        marginBottom: 8,
                      }}
                    >
                      Mulai Dari
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 5,
                      }}
                    >
                      <span style={{ fontSize: 12, color: S.muted }}>Rp</span>
                      <span
                        className="serif"
                        style={{
                          fontSize: 42,
                          fontWeight: 500,
                          color: S.gold,
                          lineHeight: 1,
                        }}
                      >
                        {p.price}
                      </span>
                      <span style={{ fontSize: 13, color: S.dim }}>/ paket</span>
                    </div>
                  </div>
                  <button
                    className="btn-gold"
                    style={{
                      background: S.gold,
                      color: "#0C0C0C",
                      padding: "15px 36px",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      border: "none",
                      cursor: "pointer",
                      alignSelf: "flex-start",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    Pesan Paket Ini <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ),
        )}
      </section>

      {/* ───────────── FULL BLEED ───────────── */}
      <section
        style={{ position: "relative", height: 440, overflow: "hidden" }}
      >
        <img
          src={IMG.citynight}
          alt="City"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 55%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(12,12,12,0.72)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: S.gold,
              marginBottom: 22,
            }}
          >
            Jangkauan Kami
          </p>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(30px, 4.5vw, 60px)",
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            150+ Destinasi di Seluruh Nusantara
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "rgba(240,238,232,0.55)",
              maxWidth: 460,
            }}
          >
            Dari Sabang sampai Merauke, kami hadir untuk memastikan wisata
            Anda lancar, nyaman, dan berkesan.
          </p>
        </div>
      </section>

      {/* ───────────── GUIDE ───────────── */}
      <section style={{ borderBottom: `1px solid ${S.border}` }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
          className="driver-grid"
        >
          <div
            style={{
              padding: "80px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className="section-pad"
          >
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: S.gold,
                marginBottom: 22,
              }}
            >
              Pemandu Kami
            </p>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(28px, 2.8vw, 42px)",
                fontWeight: 500,
                marginBottom: 26,
                lineHeight: 1.2,
              }}
            >
              Profesional, Berpengalaman,
              <br />
              &amp; Terpercaya
            </h2>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.9,
                color: S.muted,
                marginBottom: 38,
              }}
            >
              Setiap pemandu NusaTravel melewati proses seleksi ketat,
              pelatihan service excellence standar hospitality internasional,
              dan pemeriksaan latar belakang menyeluruh. Mereka bukan sekadar
              pemandu — mereka adalah representasi standar kami.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Verified background check & sertifikasi profesional",
                "Pelatihan etika & hospitality 40+ jam",
                "Pemantauan performa & rating berkala",
                "Asuransi perjalanan komprehensif",
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: 16 }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 1,
                      background: S.gold,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 13, color: S.muted }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{ position: "relative", overflow: "hidden", minHeight: 480 }}
          >
            <img
              src={IMG.driver}
              alt="Professional Guide"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to left, transparent 55%, rgba(12,12,12,0.5))",
              }}
            />
          </div>
        </div>
      </section>

      {/* ───────────── TESTIMONIALS ───────────── */}
      <section
        style={{
          padding: "80px 52px",
          background: S.surface,
          borderBottom: `1px solid ${S.border}`,
        }}
        className="section-pad"
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 56,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: S.gold,
                  marginBottom: 16,
                }}
              >
                Testimoni
              </p>
              <h2
                className="serif"
                style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 500 }}
              >
                Kata Mereka Tentang Kami
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill={S.gold} color={S.gold} />
              ))}
              <span style={{ fontSize: 13, color: S.dim, marginLeft: 8 }}>
                4.9 / 5.0
              </span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 1,
              border: `1px solid ${S.border}`,
            }}
            className="grid-3col"
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                style={{
                  padding: "40px 36px",
                  borderRight: i < 2 ? `1px solid ${S.border}` : "none",
                  background: S.surface,
                }}
              >
                <div style={{ display: "flex", gap: 3, marginBottom: 24 }}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={12} fill={S.gold} color={S.gold} />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: S.muted,
                    marginBottom: 28,
                    fontStyle: "italic",
                  }}
                >
                  "{t.text}"
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        marginBottom: 3,
                        color: S.text,
                      }}
                    >
                      {t.name}
                    </p>
                    <p style={{ fontSize: 11, color: S.dim }}>{t.role}</p>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 5 }}
                  >
                    <MapPin size={10} color={S.dim} />
                    <span style={{ fontSize: 11, color: S.dim }}>{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={IMG.interior}
          alt="Luxury Interior"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(12,12,12,0.85)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "100px 52px",
            textAlign: "center",
          }}
          className="section-pad"
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: S.gold,
              marginBottom: 22,
            }}
          >
            Mulai Perjalanan Anda
          </p>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(28px, 4vw, 56px)",
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: 22,
              maxWidth: 520,
              margin: "0 auto 22px",
            }}
          >
            Siap Merencanakan Wisata Impian Anda?
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "rgba(240,238,232,0.5)",
              marginBottom: 44,
              maxWidth: 400,
              margin: "0 auto 44px",
            }}
          >
Tim konsultan wisata kami siap membantu 24/7. Hubungi kami untuk konsultasi
            dan penawaran khusus.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn-gold"
              style={{
                background: S.gold,
                color: "#0C0C0C",
                padding: "16px 40px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              Hubungi via WhatsApp <ArrowRight size={14} />
            </button>
            <button
              className="btn-ghost"
              style={{
                background: "transparent",
                color: S.text,
                border: `1px solid rgba(240,238,232,0.22)`,
                padding: "16px 40px",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Minta Penawaran Grup
            </button>
          </div>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer
        style={{
          background: "#080808",
          borderTop: `1px solid ${S.border}`,
          padding: "64px 52px 40px",
        }}
        className="section-pad"
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 48,
              marginBottom: 60,
            }}
            className="footer-grid"
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 22,
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    border: `1px solid ${S.gold}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: S.gold,
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      fontWeight: 600,
                    }}
                  >
                    NT
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                  }}
                >
                  NUSATRAVEL
                </span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.85,
                  color: S.dim,
                  maxWidth: 250,
                  marginBottom: 28,
                }}
              >
                Layanan paket wisata premium yang melayani
                seluruh Indonesia sejak 2012.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 11 }}
              >
                {[
                  [Phone, "+62 812-3456-7890"],
                  [Mail, "hello@nusatravel.id"],
                  [MapPin, "Jakarta Selatan, Indonesia"],
                ].map(([Icon, txt]) => (
                  <div
                    key={txt}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Icon size={12} color={S.gold} style={{ opacity: 0.7 }} />
                    <span style={{ fontSize: 12, color: S.dim }}>{txt}</span>
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "Layanan",
                links: [
                  "Paket Wisata Bali",
                  "Wisata Alam",
                  "Wisata Budaya",
                  "Wisata Keluarga",
                  "Wisata Korporat",
                ],
              },
              {
                title: "Perusahaan",
                links: [
                  "Tentang Kami",
                  "Paket Wisata",
                  "Mitra Pemandu",
                  "Karir",
                  "Blog",
                ],
              },
              {
                title: "Legal",
                links: [
                  "Kebijakan Privasi",
                  "Syarat & Ketentuan",
                  "FAQ",
                  "Hubungi Kami",
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: S.gold,
                    marginBottom: 22,
                  }}
                >
                  {col.title}
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 13 }}
                >
                  {col.links.map((l) => (
                    <a
                      key={l}
                      href="#"
                      className="footer-link"
                      style={{
                        fontSize: 12,
                        color: S.dim,
                        textDecoration: "none",
                      }}
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: `1px solid ${S.border}`,
              paddingTop: 26,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p style={{ fontSize: 11, color: "rgba(240,238,232,0.22)" }}>
              © 2025 NusaTravel. Hak Cipta Dilindungi.
            </p>
            <p style={{ fontSize: 11, color: "rgba(240,238,232,0.18)" }}>
              Berlisensi Resmi · Terasuransi · Beroperasi Sejak 2012
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
