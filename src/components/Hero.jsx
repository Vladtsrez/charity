export default function Hero({ t }) {
  return (
    <section id="top">
      <img className="hero-bg" src="/assets/hero-fleet.jpg" alt="" />
      <div className="hero-overlay"></div>
      <div className="hero-trident"></div>
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-kicker">
            <span className="hero-kicker-line"></span>
            <span>{t.heroKicker}</span>
          </div>
          <h1 className="hero-title-1">{t.heroTitle1}</h1>
          <h1 className="hero-title-2">{t.heroTitle2}</h1>
          <p className="hero-sub">{t.heroSub}</p>
          <div className="hero-note"><span>{t.heroNote}</span></div>
          <div className="hero-chips">
            <div className="hero-chip"><span className="hero-chip-dot"></span><span>{t.heroChip1}</span></div>
            <div className="hero-chip"><span className="hero-chip-dot"></span><span>{t.heroChip2}</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
