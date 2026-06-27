export default function Header({ lang, setLang, t }) {
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
        <a href="#top" className="site-logo"><img src="/assets/logo-horizontal.png" alt="Миколаїв Нескорений" /></a>
        <nav>
          <a href="#about">{t.navAbout}</a>
          <a href="#directions">{t.navDirections}</a>
          <a href="#registry">{t.navRegistry}</a>
          <a href="#gratitude">{t.navGratitude}</a>
          <a href="#contacts" className="nav-cta">{t.navContacts}</a>
        </nav>
      </div>
    </header>
  )
}
