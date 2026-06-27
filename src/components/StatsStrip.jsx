import { DATA } from '../data'

export default function StatsStrip({ lang }) {
  return (
    <section className="stats-strip">
      <div className="stats-inner">
        {DATA.stats[lang].map((s, i) => (
          <div className="stat-cell" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-divider"></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
