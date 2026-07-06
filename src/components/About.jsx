export default function About({ t }) {
  return (
    <section id="about">
      <div className="about-inner">
        <div>
          <div className="section-kicker"><span className="section-kicker-line"></span><span>{t.aboutKicker}</span></div>
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="about-p">{t.aboutP1}</p>
          <p className="about-p">{t.aboutP2}</p>
          <div className="mission-block">
            <div className="mission-label">{t.missionLabel}</div>
            <p className="mission-text">{t.missionText}</p>
          </div>
        </div>
        <div className="about-img-wrap">
          <div className="about-corner-tl"></div>
          <img className="about-img" src="/assets/zsu-handover.webp" alt="Передача допомоги військовим" />
          <div className="about-corner-br"></div>
        </div>
      </div>
    </section>
  )
}
