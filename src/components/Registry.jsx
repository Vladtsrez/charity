import { useState, useEffect, useRef } from 'react'
import { DATA } from '../data'

const PLACES_UK = ['Миколаївський','Херсонський','Запорізький','Донецький','Харківський','Сумський','Херсонський','Запорізький']
const PLACES_EN = ['Mykolaiv','Kherson','Zaporizhzhia','Donetsk','Kharkiv','Sumy','Kherson','Zaporizhzhia']

function ShufflingPlace({ lang }) {
  const places = lang === 'uk' ? PLACES_UK : PLACES_EN
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * places.length))
  const [fade, setFade] = useState(true)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % places.length)
        setFade(true)
      }, 300)
    }, 2200)
    return () => clearInterval(timerRef.current)
  }, [places.length])

  return (
    <span style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.3s ease', display: 'inline-block' }}>
      {places[idx]}
    </span>
  )
}

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
          {DATA.registry.map((r, i) => {
            const place = lang === 'uk' ? r.pu : r.pe
            return (
              <div className="registry-card" key={i}>
                <div className="registry-card-left">
                  <div className="registry-unit">{r.u}</div>
                  <div className="registry-place">
                    {place === '—' ? <ShufflingPlace lang={lang} /> : place}
                  </div>
                </div>
                <div className="registry-card-right">
                  <p className="registry-items">{lang === 'uk' ? r.iu : r.ie}</p>
                </div>
              </div>
            )
          })}
        </div>
        <p className="registry-more">{t.regMore}</p>
      </div>
    </section>
  )
}
