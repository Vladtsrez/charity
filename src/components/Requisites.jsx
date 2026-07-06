import { useState } from 'react'

const IBAN = 'UA903005280000026003000027015'

function CopyBtn({ value, lang }) {
  const [copied, setCopied] = useState(false)
  function handle() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button className="req-copy-btn" onClick={handle}>
      {copied ? (lang === 'uk' ? 'Скопійовано!' : 'Copied!') : (lang === 'uk' ? 'Копіювати' : 'Copy')}
    </button>
  )
}

export default function Requisites({ lang, setPage }) {
  return (
    <section id="requisites" className="req-strip">
      <div className="req-strip-inner">
        <div className="req-strip-left">
          <div className="section-kicker" style={{ marginBottom: 12 }}>
            <span className="section-kicker-line" style={{ background: '#DAA50B' }}></span>
            <span style={{ color: '#DAA50B' }}>{lang === 'uk' ? 'Підтримати фонд' : 'Support the fund'}</span>
          </div>
          <h2 className="req-strip-title">
            {lang === 'uk' ? 'Реквізити для донату' : 'Donation details'}
          </h2>
          <p className="req-strip-sub">
            {lang === 'uk'
              ? 'Банк: АТ «ОТП БАНК» · МФО: 300528 · ЄДРПОУ: 44761877'
              : 'Bank: OTP BANK JSC · MFO: 300528 · EDRPOU: 44761877'}
          </p>
        </div>

        <div className="req-strip-center">
          <div className="req-iban-block">
            <span className="req-iban-label">{lang === 'uk' ? 'Рахунок (IBAN)' : 'Account (IBAN)'}</span>
            <span className="req-iban-value">{IBAN}</span>
            <CopyBtn value={IBAN} lang={lang} />
          </div>
          <div className="req-swift-row">
            <span className="req-field-label">SWIFT:</span>
            <span className="req-field-val">OTPVUAUK</span>
            <span className="req-field-sep">·</span>
            <span className="req-field-label">Beneficiary:</span>
            <span className="req-field-val">CO &ldquo;MI&rdquo;</span>
          </div>
        </div>

        <div className="req-strip-right">
          <button className="req-full-btn" onClick={() => setPage('requisites')}>
            {lang === 'uk' ? 'Усі реквізити →' : 'Full details →'}
          </button>
        </div>
      </div>
    </section>
  )
}
