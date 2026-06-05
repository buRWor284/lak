import { useState, useEffect } from 'react'

/* ─── data ─────────────────────────────────────────────── */

const SKILLS = [
  { name: "Content Editing", value: 4 },
  { name: "Content Management Systems", value: 3 },
  { name: "Onsite SEO", value: 3 },
  { name: "Tech SEO", value: 3 },
  { name: "AI Prompt Engineering", value: 3 },
  { name: "Communication", value: 4 },
  { name: "Team Collaboration", value: 4 },
]

const EXPERIENCE = [
  {
    period: "Jan 2025 — Present",
    role: "Content Editor",
    company: "Faisal Khan LLC",
    blurb: "Global fintech consultancy helping banks, fintechs, and crypto ventures navigate licensing and compliance worldwide.",
    bullets: [
      "Edit content for clarity, accuracy and brand alignment",
      "Collaborate with writers, marketers and stakeholders",
      "Support SEO-friendly publishing workflows",
    ],
    tag: "Current",
  },
  {
    period: "2019",
    role: "Founder",
    company: "Iconic Delights",
    blurb: "E-commerce venture specializing in cosmetics and beauty products.",
    bullets: [
      "Managed end-to-end e-commerce operations",
      "International product sourcing from China",
      "Ran Facebook marketing campaigns",
      "Order fulfillment and customer support",
    ],
    tag: "Founder",
  },
  {
    period: "2013",
    role: "HR Officer",
    company: "Afzal Motors Pvt. Ltd.",
    blurb: "Exclusive distributor of Daewoo, JAC and KING LONG commercial vehicles in Pakistan.",
    bullets: [
      "Managed employee documentation and records",
      "Coordinated internal communications",
    ],
    tag: "HR",
  },
]

const TOOLS = [
  { name: "WordPress", initials: "WP", note: "CMS" },
  { name: "Rank Math", initials: "RM", note: "SEO" },
  { name: "ChatGPT", initials: "GP", note: "AI" },
  { name: "Gemini", initials: "GE", note: "AI" },
  { name: "Photoshop", initials: "Ps", note: "Visual" },
  { name: "CorelDRAW", initials: "CD", note: "Visual" },
]

const CERTS = [
  { year: "2024 — 2025", org: "UNICEF", title: "CorelDRAW & Photoshop Training", kind: "Graphic Design" },
  { year: "2019", org: "DigiSkills", title: "Graphic Design", kind: "Training Program" },
  { year: "2019", org: "DigiSkills", title: "Freelancing", kind: "Training Program" },
]

const UPCOMING_CERTS = [
  { org: "Ahrefs", title: "SEO Certification" },
  { org: "Semrush", title: "SEO Toolkit" },
  { org: "HubSpot", title: "Content Marketing" },
  { org: "HubSpot", title: "SEO Certification" },
]

const INSIGHTS = [
  {
    title: "SEO Has Evolved. Have You?",
    desc: "The 4 forces reshaping search visibility in the age of AI — GEO, AEO, AIO, and SXO.",
    tags: ["2026 Trends", "AI Search"],
    href: "/infographics/seo-has-evolved.html",
  },
  {
    title: "Content + Context = Rankings",
    desc: "Why both content and context are non-negotiable for SEO success in the age of AI.",
    tags: ["SEO Fundamentals", "On-Page SEO"],
    href: "/infographics/content-context-rankings.html",
  },
  {
    title: "SEO vs AEO vs GEO",
    desc: "Know the difference — search visibility in 2026 spans traditional rankings, AI overviews, and generative citations.",
    tags: ["Digital Visibility", "2026"],
    href: "/infographics/seo-vs-geo-vs-aeo.html",
  },
]

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "tools", label: "Tools" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Credentials" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
]

/* ─── components ───────────────────────────────────────── */

function LuxeNav({ active }) {
  return (
    <nav className="nav">
      <a href="#top" className="nav-mark">
        Lubna Ali <em>Khan</em>
      </a>
      <ul className="nav-links">
        {NAV.map((n) => (
          <li key={n.id}>
            <a href={`#${n.id}`} className={active === n.id ? "is-active" : ""}>
              {n.label}
            </a>
          </li>
        ))}
      </ul>
      <a className="nav-cta" href="#contact">
        Get in touch <span aria-hidden="true">→</span>
      </a>
    </nav>
  )
}

function LuxeHero() {
  return (
    <header className="hero" id="top">
      <div className="hero-eyebrow">
        <span className="avail-dot" />
        <span>Remote content editor — US-based company</span>
      </div>

      <h1 className="hero-name">
        <span className="line line-1">Lubna</span>
        <span className="line line-2">Ali <em>Khan</em></span>
      </h1>

      <div className="hero-divider" />

      <div className="hero-bottom">
        <p className="hero-tagline">
          Digital Content &amp;<br />Onsite SEO Professional
        </p>
        <div className="hero-credits">
          <div className="credit">
            <span className="credit-num">US</span>
            <span className="credit-label">Remote editor for an American fintech consultancy</span>
          </div>
          <div className="credit">
            <span className="credit-num">A — Z</span>
            <span className="credit-label">Editing, CMS, SEO, AI workflows</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <svg width="14" height="28" viewBox="0 0 14 28" fill="none">
          <path d="M7 2 V24 M2 19 L7 26 L12 19" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </header>
  )
}

function LuxeSectionHead({ idx, kicker, children }) {
  return (
    <div className="sec-head">
      <div className="sec-eyebrow">
        <span className="sec-idx">{idx}</span>
        <span className="sec-line" />
        <span className="sec-kicker">{kicker}</span>
      </div>
      <h2 className="sec-title">{children}</h2>
    </div>
  )
}

function LuxeAbout() {
  return (
    <section className="about" id="about">
      <LuxeSectionHead idx="01" kicker="About">
        A content professional who treats every page as <em>an asset.</em>
      </LuxeSectionHead>
      <div className="about-grid">
        <div>
          <p className="lede">
            Content professional specializing in SEO-driven editing, digital media workflows and content marketing strategy.
          </p>
        </div>
        <div className="about-body">
          <p>
            I spend my days optimizing content for search visibility, managing CMS platforms and pairing AI tooling with editorial judgement so the work ships faster without losing voice.
          </p>
          <p>
            My background spans editorial, e-commerce ownership and operations — which means I understand how a paragraph, a product page and a publishing calendar all earn their keep.
          </p>
          <ul className="about-facts">
            <li><span>Based</span><strong>Peshawar, Pakistan</strong></li>
            <li><span>Focus</span><strong>Editorial · SEO · AI workflows</strong></li>
            <li><span>Open to</span><strong>Full-time, contract, retainer</strong></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function LuxeSkills() {
  return (
    <section className="skills" id="skills">
      <LuxeSectionHead idx="02" kicker="Skills">
        Where I <em>lean in.</em>
      </LuxeSectionHead>
      <ul className="skill-list">
        {SKILLS.map((s, i) => (
          <li key={s.name} className="skill-row">
            <span className="skill-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="skill-name">{s.name}</span>
            <span className="skill-track" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className={"pip" + (n <= s.value ? " on" : "")} />
              ))}
            </span>
            <span className="skill-val">{s.value} / 5</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function LuxeExperience() {
  const [open, setOpen] = useState(0)
  return (
    <section className="experience" id="experience">
      <LuxeSectionHead idx="03" kicker="Experience">
        Three chapters. Same <em>throughline.</em>
      </LuxeSectionHead>
      <ol className="xp-list">
        {EXPERIENCE.map((x, i) => {
          const isOpen = open === i
          return (
            <li
              key={i}
              className={"xp-item" + (isOpen ? " is-open" : "")}
            >
              <button
                className="xp-toggle"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="xp-period">{x.period}</span>
                <span className="xp-meta">
                  <span className="xp-role">{x.role}</span>
                  <span className="xp-co">{x.company}</span>
                </span>
                <span className="xp-tag">{x.tag}</span>
                <span className="xp-chev" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4.5 7 L9 11.5 L13.5 7" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </span>
              </button>
              <div className="xp-body">
                <p className="xp-blurb">{x.blurb}</p>
                <ul className="xp-bullets">
                  {x.bullets.map((b, j) => (
                    <li key={j}><span className="b-dash" /><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

function LuxeTools() {
  return (
    <section className="tools" id="tools">
      <LuxeSectionHead idx="04" kicker="Stack">
        What I <em>reach for.</em>
      </LuxeSectionHead>
      <div className="tool-grid">
        {TOOLS.map((t) => (
          <div className="tool" key={t.name}>
            <span className="tool-init" aria-hidden="true">{t.initials}</span>
            <span className="tool-name">{t.name}</span>
            <span className="tool-note">{t.note}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function LuxeEducation() {
  return (
    <section className="education" id="education">
      <LuxeSectionHead idx="05" kicker="Education">
        Where it <em>started.</em>
      </LuxeSectionHead>
      <div className="edu-card">
        <div className="edu-mark">
          <span>CECOS</span>
          <span>UNIVERSITY</span>
        </div>
        <div>
          <p className="edu-degree">BBA <span>(Hons)</span></p>
          <p className="edu-school">Cecos University</p>
          <p className="edu-foot">Bachelor of Business Administration — coursework spanning marketing, management and communications, the foundations I carry into every brief.</p>
        </div>
      </div>
    </section>
  )
}

function LuxeCertifications() {
  return (
    <section className="certs" id="certifications">
      <LuxeSectionHead idx="06" kicker="Credentials">
        Trained, certified, <em>kept current.</em>
      </LuxeSectionHead>
      <ul className="cert-list">
        {CERTS.map((c, i) => (
          <li className="cert" key={i}>
            <div className="cert-top">
              <span className="cert-org">{c.org}</span>
              <span className="cert-year">{c.year}</span>
            </div>
            <p className="cert-title">{c.title}</p>
            <p className="cert-kind">{c.kind}</p>
          </li>
        ))}
      </ul>
      <p className="upcoming-label">Coming Soon</p>
      <ul className="cert-list cert-list-upcoming">
        {UPCOMING_CERTS.map((c, i) => (
          <li className="cert cert-upcoming" key={i}>
            <div className="cert-top">
              <span className="cert-org">{c.org}</span>
              <span className="cert-year" style={{ color: 'var(--mist)' }}>Upcoming</span>
            </div>
            <p className="cert-title">{c.title}</p>
            <p className="cert-kind">Free Certification</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function LuxeInsights() {
  return (
    <section className="insights-sec" id="insights">
      <LuxeSectionHead idx="07" kicker="Insights">
        Thinking out <em>loud.</em>
      </LuxeSectionHead>
      <div className="insights-grid">
        {INSIGHTS.map((item, i) => (
          <a key={i} className="insight-card" href={item.href} target="_blank" rel="noopener noreferrer">
            <div className="insight-card-top">
              <div className="insight-card-tags">
                {item.tags.map((t, j) => (
                  <span key={j} className="insight-card-tag">{t}</span>
                ))}
              </div>
              <span className="insight-card-num">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="insight-card-title">{item.title}</h3>
            <p className="insight-card-desc">{item.desc}</p>
            <span className="insight-card-link">View infographic <span aria-hidden="true">→</span></span>
          </a>
        ))}
      </div>
    </section>
  )
}

function LuxeContact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <p className="contact-kicker">08 — Let&apos;s work together</p>
        <h2 className="contact-h">
          Need content that<br /><em>actually</em> converts?
        </h2>
        <p className="contact-sub">
          Content editing &nbsp;·&nbsp; SEO optimization &nbsp;·&nbsp; Publishing workflows &nbsp;·&nbsp; AI-assisted writing &nbsp;·&nbsp; Digital strategy
        </p>
        <a className="contact-cta" href="mailto:lubnairfan98@gmail.com">
          <span>Start a conversation</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9 H15 M10 4 L15 9 L10 14" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </a>
        <div className="contact-foot">
          <span>Reach out</span>
          <a href="mailto:lubnairfan98@gmail.com">lubnairfan98@gmail.com</a>
          <span className="dotmid">·</span>
          <a href="https://linkedin.com/in/lubnaalikhan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

function LuxeFooter() {
  return (
    <footer className="foot">
      <div className="foot-row">
        <span className="foot-mark">Lubna Ali Khan</span>
        <span>© MMXXVI</span>
        <span>Peshawar — Pakistan</span>
      </div>
    </footer>
  )
}

/* ─── app ──────────────────────────────────────────────── */

export default function App() {
  const [active, setActive] = useState("about")

  useEffect(() => {
    const ids = NAV.map((n) => n.id)
    const handler = () => {
      const y = window.scrollY + window.innerHeight * 0.35
      let cur = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) cur = id
      }
      setActive(cur)
    }
    window.addEventListener("scroll", handler, { passive: true })
    handler()
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <>
      <LuxeNav active={active} />
      <main>
        <LuxeHero />
        <LuxeAbout />
        <LuxeSkills />
        <LuxeExperience />
        <LuxeTools />
        <LuxeEducation />
        <LuxeCertifications />
        <LuxeInsights />
        <LuxeContact />
      </main>
      <LuxeFooter />
    </>
  )
}
