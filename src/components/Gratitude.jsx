import { DATA } from '../data'

export default function Gratitude({ t }) {
  return (
    <section id="gratitude">
      <div className="gratitude-inner">
        <div className="gratitude-header">
          <div className="section-kicker-center">
            <span className="section-kicker-line"></span>
            <span>{t.gratKicker}</span>
            <span className="section-kicker-line"></span>
          </div>
          <h2 className="section-title">{t.gratTitle}</h2>
          <p className="section-sub">{t.gratSub}</p>
        </div>
        <div className="docs-grid">
          <div className="doc-card">
            <div className="doc-badge doc-badge-blue">{t.reqLabel}</div>
            <img className="doc-img" src="/assets/doc-request.jpg" alt="Офіційний запит від військової частини" />
            <p className="doc-caption">{t.docReqCaption}</p>
          </div>
          <div className="doc-card">
            <div className="doc-badge doc-badge-gold">{t.gratLabel}</div>
            <img className="doc-img" src="/assets/doc-gratitude.jpg" alt="Подяка від військової частини" />
            <p className="doc-caption">{t.docGratCaption}</p>
          </div>
        </div>
        <div className="units-panel">
          <div className="units-stat-block">
            <div className="units-stat-num">{t.gratStat}</div>
            <div className="units-stat-label">{t.gratStatLabel}</div>
          </div>
          <div className="units-list-wrap">
            <div className="units-list-label">{t.unitsLabel}</div>
            <div className="units-badges">
              {DATA.unitCodes.map((c, i) => (
                <span className="unit-badge" key={i}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
