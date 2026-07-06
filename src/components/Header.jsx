import { useState } from 'react'

export default function Header({ lang, setLang, t, page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function goHome(hash) {
    setPage('home')
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  function goPage(p) {
    setPage(p)
    setMenuOpen(false)
  }

  return (
    <header id="site-header">
      <div className="utility-bar">
        <div className="utility-inner">
          <div className="utility-left">
            <span><span className="edrpou-val">ЄДРПОУ</span> 44761877</span>
            <span className="sep">|</span>
            <a href="tel:+380993670651">+38 099 367 06 51</a>
          </div>
          <div className="lang-switcher">
            <button className={`lang-btn${lang === 'uk' ? ' active' : ''}`} onClick={() => setLang('uk')}>UA</button>
            <span>/</span>
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      </div>

      <div className="nav-row">
        <button className="site-logo" onClick={() => goHome('#top')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <img src="/assets/logo-horizontal.webp" alt="Миколаїв Нескорений" />
        </button>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          <button className="nav-link-btn" onClick={() => goHome('#about')}>{t.navAbout}</button>
          <button className="nav-link-btn" onClick={() => goHome('#directions')}>{t.navDirections}</button>
          <button className="nav-link-btn" onClick={() => goHome('#registry')}>{t.navRegistry}</button>
          <button className={`nav-link-btn${page === 'docs' ? ' nav-link-active' : ''}`} onClick={() => goPage('docs')}>{t.navGratitude}</button>
          <button className={`nav-link-btn${page === 'requisites' ? ' nav-link-active' : ''}`} onClick={() => goPage('requisites')}>{t.navRequisites}</button>
          <button className="nav-link-btn nav-cta" onClick={() => goHome('#contacts')}>{t.navContacts}</button>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-nav">
          <button className="mobile-nav-btn" onClick={() => goHome('#about')}>{t.navAbout}</button>
          <button className="mobile-nav-btn" onClick={() => goHome('#directions')}>{t.navDirections}</button>
          <button className="mobile-nav-btn" onClick={() => goHome('#registry')}>{t.navRegistry}</button>
          <button className={`mobile-nav-btn${page === 'docs' ? ' active' : ''}`} onClick={() => goPage('docs')}>{t.navGratitude}</button>
          <button className={`mobile-nav-btn${page === 'requisites' ? ' active' : ''}`} onClick={() => goPage('requisites')}>{t.navRequisites}</button>
          <button className="mobile-nav-btn mobile-nav-cta" onClick={() => goHome('#contacts')}>{t.navContacts}</button>
          <div className="mobile-nav-lang">
            <button className={`mobile-lang-btn${lang === 'uk' ? ' active' : ''}`} onClick={() => setLang('uk')}>UA</button>
            <span className="mobile-lang-sep">/</span>
            <button className={`mobile-lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      )}
    </header>
  )
}
