import { useState, useEffect } from 'react'
import { GRAT_DOCS, REQ_DOCS } from '../docsData'

const TYPE_LABEL_UK = { Подяка: 'Подяка від підрозділу', Запит: 'Офіційний запит', Акт: 'Акт', Лист: 'Лист до фонду' }
const TYPE_LABEL_EN = { Подяка: 'Gratitude from a unit', Запит: 'Official request', Акт: 'Act', Лист: 'Letter to the fund' }
const TYPE_COLOR    = { Подяка: 'gold', Запит: 'blue', Акт: 'green', Лист: 'blue' }

const TABS_UK = ['Подяки', 'Запити та листи']
const TABS_EN = ['Gratitude', 'Requests & letters']

function Modal({ doc, lang, onClose }) {
  const labels = lang === 'uk' ? TYPE_LABEL_UK : TYPE_LABEL_EN
  const badgeLabel = labels[doc.type] || doc.type
  const color = TYPE_COLOR[doc.type] || 'blue'
  const isImage = /\.(jpg|jpeg|png)$/i.test(doc.pdf)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="doc-modal-overlay" onClick={onClose}>
      <div className="doc-modal" onClick={e => e.stopPropagation()}>
        <div className="doc-modal-header">
          <span className={`dgallery-badge dgallery-badge-${color}`} style={{ borderRadius: 2 }}>
            {badgeLabel.toUpperCase()}
          </span>
          <div className="doc-modal-actions">
            <a
              className="doc-modal-download"
              href={doc.pdf}
              download
              title={lang === 'uk' ? 'Завантажити' : 'Download'}
            >↓</a>
            <button className="doc-modal-close" onClick={onClose}>✕</button>
          </div>
        </div>
        <div className="doc-modal-body">
          {isImage
            ? <img src={doc.pdf} alt={badgeLabel} className="doc-modal-img" />
            : <iframe src={doc.pdf} className="doc-modal-iframe" title={badgeLabel} />
          }
        </div>
      </div>
    </div>
  )
}

function DocCard({ doc, lang, onClick }) {
  const labels = lang === 'uk' ? TYPE_LABEL_UK : TYPE_LABEL_EN
  const badgeLabel = labels[doc.type] || doc.type
  const color = TYPE_COLOR[doc.type] || 'blue'
  const caption = doc.unit
    ? (lang === 'uk' ? `Від військової частини ${doc.unit}` : `From military unit ${doc.unit}`)
    : (lang === 'uk' ? 'Документ фонду' : 'Fund document')

  return (
    <button className="dgallery-card" onClick={onClick}>
      <div className={`dgallery-badge dgallery-badge-${color}`}>{badgeLabel.toUpperCase()}</div>
      <div className="dgallery-img-wrap">
        <img
          className="dgallery-img"
          src={doc.preview}
          alt={badgeLabel}
          loading="lazy"
        />
      </div>
      <p className="dgallery-caption">{caption}</p>
    </button>
  )
}

export default function DocumentsPage({ lang, t, onBack }) {
  const [tab, setTab] = useState(0)
  const [active, setActive] = useState(null)
  const tabs = lang === 'uk' ? TABS_UK : TABS_EN
  const docs = tab === 0 ? GRAT_DOCS : REQ_DOCS

  return (
    <div className="docs-page">
      {active && <Modal doc={active} lang={lang} onClose={() => setActive(null)} />}

      <div className="docs-page-hero">
        <div className="docs-page-hero-inner">
          <button className="docs-back-btn" onClick={onBack}>
            ← {lang === 'uk' ? 'На головну' : 'Back'}
          </button>
          <div className="section-kicker" style={{ marginBottom: 14 }}>
            <span className="section-kicker-line" style={{ background: '#DAA50B' }}></span>
            <span style={{ color: '#DAA50B' }}>{lang === 'uk' ? 'Документи фонду' : 'Fund documents'}</span>
          </div>
          <h1 className="docs-page-title">{lang === 'uk' ? 'Подяки та запити' : 'Gratitude & requests'}</h1>
          <p className="docs-page-sub">
            {lang === 'uk'
              ? 'Офіційні листи подяки від військових частин та запити на надання допомоги — документальне підтвердження адресної роботи фонду.'
              : 'Official gratitude letters from military units and aid requests — documentary proof of the fund\'s targeted work.'}
          </p>
        </div>
      </div>

      <div className="docs-page-body">
        <div className="docs-page-tabs">
          {tabs.map((label, i) => (
            <button
              key={i}
              className={`docs-tab-btn${tab === i ? ' active' : ''}`}
              onClick={() => setTab(i)}
            >
              {label}
              <span className="docs-tab-count">{i === 0 ? GRAT_DOCS.length : REQ_DOCS.length}</span>
            </button>
          ))}
        </div>

        <div className="dgallery-grid">
          {docs.map((doc, i) => (
            <DocCard key={i} doc={doc} lang={lang} onClick={() => setActive(doc)} />
          ))}
        </div>
      </div>
    </div>
  )
}
