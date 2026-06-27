import { DATA } from '../data'

export default function Directions({ lang, t }) {
  return (
    <section id="directions">
      <div className="dir-inner">
        <div className="section-header-center">
          <div className="section-kicker-center">
            <span className="section-kicker-line"></span>
            <span>{t.dirKicker}</span>
            <span className="section-kicker-line"></span>
          </div>
          <h2 className="section-title">{t.dirTitle}</h2>
          <p className="section-sub">{t.dirSub}</p>
        </div>
        <div className="dir-grid">
          {DATA.directions[lang].map((d, i) => (
            <div className="dir-card" key={i}>
              <div className="dir-no"><span>{d.no}</span></div>
              <div>
                <h3 className="dir-card-title">{d.title}</h3>
                <p className="dir-card-text">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
