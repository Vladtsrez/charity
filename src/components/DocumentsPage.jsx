import { useState, useEffect } from 'react'
import { GRAT_DOCS, REQ_DOCS, LEGAL_DOCS } from '../docsData'

const TYPE_LABEL_UK = { Подяка: 'Подяка від підрозділу', Запит: 'Офіційний запит', Акт: 'Акт', Лист: 'Лист до фонду' }
const TYPE_LABEL_EN = { Подяка: 'Gratitude from a unit', Запит: 'Official request', Акт: 'Act', Лист: 'Letter to the fund' }
const TYPE_COLOR    = { Подяка: 'gold', Запит: 'blue', Акт: 'green', Лист: 'blue' }

const TABS_UK = ['Подяки', 'Запити та листи', 'Документи фонду']
const TABS_EN = ['Gratitude', 'Requests & letters', 'Fund documents']

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

const LEGAL_ITEMS_UK = [
  { title: 'Статут фонду', desc: 'Установчий документ Благодійної організації «Благодійний фонд «Миколаїв Нескорений»', pdf: '/docs/legal/statut.pdf' },
  { title: 'Витяг з Єдиного реєстру', desc: 'Витяг з Єдиного державного реєстру юридичних осіб, фізичних осіб-підприємців та громадських формувань', pdf: '/docs/legal/register.pdf' },
  { title: 'Рішення про неприбутковий статус', desc: 'Рішення про включення організації до Реєстру неприбуткових установ та організацій', pdf: '/docs/legal/nonprofit.pdf' },
  { title: 'Свідоцтво про реєстрацію', desc: 'Свідоцтво про державну реєстрацію благодійної організації', pdf: '/docs/legal/certificate.pdf' },
]

const LEGAL_ITEMS_EN = [
  { title: 'Fund Charter', desc: 'Founding document of the Charitable Organization "Mykolaiv Invictus Charity Fund"', pdf: '/docs/legal/statut.pdf' },
  { title: 'Unified Register Extract', desc: 'Extract from the Unified State Register of Legal Entities, Individual Entrepreneurs and Public Organizations', pdf: '/docs/legal/register.pdf' },
  { title: 'Non-Profit Status Decision', desc: 'Decision on inclusion in the Register of Non-Profit Institutions and Organizations', pdf: '/docs/legal/nonprofit.pdf' },
  { title: 'Registration Certificate', desc: 'Certificate of state registration of the charitable organization', pdf: '/docs/legal/certificate.pdf' },
]

function LegalDocsTab({ lang }) {
  const items = lang === 'uk' ? LEGAL_ITEMS_UK : LEGAL_ITEMS_EN
  const hasFiles = LEGAL_DOCS.length > 0

  if (!hasFiles) {
    return (
      <div className="legal-docs-grid">
        {items.map((item, i) => (
          <div key={i} className="legal-doc-card legal-doc-card-pending">
            <div className="legal-doc-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <div className="legal-doc-info">
              <div className="legal-doc-title">{item.title}</div>
              <div className="legal-doc-desc">{item.desc}</div>
            </div>
            <span className="legal-doc-status">
              {lang === 'uk' ? 'Готується' : 'Coming soon'}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="legal-docs-grid">
      {LEGAL_DOCS.map((doc, i) => (
        <a key={i} className="legal-doc-card" href={doc.pdf} target="_blank" rel="noopener noreferrer">
          <div className="legal-doc-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div className="legal-doc-info">
            <div className="legal-doc-title">{lang === 'uk' ? doc.title_uk : doc.title_en}</div>
            <div className="legal-doc-desc">{lang === 'uk' ? doc.date_uk : doc.date_en}</div>
          </div>
          <span className="legal-doc-dl">PDF ↓</span>
        </a>
      ))}
    </div>
  )
}

export default function DocumentsPage({ lang, t, onBack }) {
  const [tab, setTab] = useState(0)
  const [active, setActive] = useState(null)
  const tabs = lang === 'uk' ? TABS_UK : TABS_EN
  const docs = tab === 0 ? GRAT_DOCS : tab === 1 ? REQ_DOCS : null

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
          {tabs.map((label, i) => {
            const count = i === 0 ? GRAT_DOCS.length : i === 1 ? REQ_DOCS.length : LEGAL_DOCS.length
            return (
              <button
                key={i}
                className={`docs-tab-btn${tab === i ? ' active' : ''}`}
                onClick={() => setTab(i)}
              >
                {label}
                <span className="docs-tab-count">{count}</span>
              </button>
            )
          })}
        </div>

        {tab === 2 ? (
          <LegalDocsTab lang={lang} />
        ) : (
          <div className="dgallery-grid">
            {docs.map((doc, i) => (
              <DocCard key={i} doc={doc} lang={lang} onClick={() => setActive(doc)} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
