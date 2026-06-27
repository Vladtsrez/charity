import { DATA } from '../data'

export default function Registry({ lang, t }) {
  return (
    <section id="registry">
      <div className="registry-inner">
        <div className="registry-header">
          <div className="section-kicker"><span className="section-kicker-line"></span><span>{t.regKicker}</span></div>
          <h2 className="section-title">{t.regTitle}</h2>
          <p className="section-sub">{t.regSub}</p>
        </div>
        <div className="registry-grid">
          {DATA.registry.map((r, i) => (
            <div className="registry-card" key={i}>
              <div className="registry-card-left">
                <div className="registry-unit">{r.u}</div>
                <div className="registry-place">{lang === 'uk' ? r.pu : r.pe}</div>
              </div>
              <div className="registry-card-right">
                <p className="registry-items">{lang === 'uk' ? r.iu : r.ie}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="registry-more">{t.regMore}</p>
      </div>
    </section>
  )
}
