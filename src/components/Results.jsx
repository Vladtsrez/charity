import { DATA } from '../data'

function ResultRows({ items }) {
  return items.map((row, i) => (
    <div className="result-row" key={i}>
      <span className="result-row-arrow">›</span>
      {row}
    </div>
  ))
}

export default function Results({ lang, t }) {
  return (
    <section id="results">
      <div className="results-trident"></div>
      <div className="results-inner">
        <div className="results-header">
          <div className="section-kicker-gold">
            <span className="section-kicker-line"></span>
            <span>{t.resultsKicker}</span>
          </div>
          <h2 className="section-title-white">{t.resultsTitle}</h2>
          <p className="results-sub-text">{t.resultsSub}</p>
        </div>
        <div className="results-cols">
          <div>
            <h3 className="result-col-title">{t.grpTransport}</h3>
            <ResultRows items={DATA.deliverTransport[lang]} />
          </div>
          <div>
            <h3 className="result-col-title">{t.grpEquip}</h3>
            <ResultRows items={DATA.deliverEquip[lang]} />
          </div>
          <div>
            <h3 className="result-col-title">{t.grpHuman}</h3>
            <ResultRows items={DATA.deliverHuman[lang]} />
          </div>
        </div>
        <div className="fronts-row">
          <span className="fronts-label">{t.frontsTitle}</span>
          <div>
            {DATA.fronts[lang].map((f, i) => (
              <span className="front-badge" key={i}>
                <span className="front-dot"></span>
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
