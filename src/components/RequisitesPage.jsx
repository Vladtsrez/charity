import { useState } from 'react'

const IBAN = 'UA903005280000026003000027015'

const UAH_FIELDS_UK = [
  { label: 'Одержувач',      value: 'БЛАГОДІЙНА ОРГАНІЗАЦІЯ "БЛАГОДІЙНИЙ ФОНД "МИКОЛАЇВ НЕСКОРЕНИЙ"' },
  { label: 'Код одержувача', value: '44761877' },
  { label: 'Банк одержувача',value: 'АТ «ОТП БАНК» в м. Київ' },
  { label: 'МФО',            value: '300528' },
  { label: 'Рахунок №',      value: IBAN, copy: true },
]

const UAH_FIELDS_EN = [
  { label: 'Beneficiary',       value: 'CHARITABLE ORGANIZATION "CHARITABLE FUND MYKOLAIV INVICTUS"' },
  { label: 'EDRPOU',            value: '44761877' },
  { label: "Beneficiary's bank",value: 'OTP BANK JSC, Kyiv' },
  { label: 'MFO',               value: '300528' },
  { label: 'Account №',         value: IBAN, copy: true },
]

const FX_FIELDS = [
  { label: 'Beneficiary',        value: 'CO "MI"' },
  { label: 'Account #',          value: IBAN, copy: true },
  { label: "Beneficiary's bank", value: 'OTP BANK JSC' },
  { label: 'SWIFT code',         value: 'OTPVUAUK', copy: true },
]

const CURRENCIES = [
  { code: '840', letter: 'USD', name_uk: 'Долар США',           name_en: 'US Dollar' },
  { code: '978', letter: 'EUR', name_uk: 'Євро',                name_en: 'Euro' },
  { code: '392', letter: 'JPY', name_uk: 'Єна',                 name_en: 'Japanese Yen' },
  { code: '985', letter: 'PLN', name_uk: 'Злотий',              name_en: 'Polish Zloty' },
  { code: '124', letter: 'CAD', name_uk: 'Канадський долар',    name_en: 'Canadian Dollar' },
  { code: '826', letter: 'GBP', name_uk: 'Фунт стерлінгів',    name_en: 'Pound Sterling' },
  { code: '203', letter: 'CZK', name_uk: 'Чеська крона',        name_en: 'Czech Koruna' },
  { code: '752', letter: 'SEK', name_uk: 'Шведська крона',      name_en: 'Swedish Krona' },
  { code: '756', letter: 'CHF', name_uk: 'Швейцарський франк',  name_en: 'Swiss Franc' },
  { code: '348', letter: 'HUF', name_uk: 'Форинт',              name_en: 'Hungarian Forint' },
  { code: '156', letter: 'CNY', name_uk: 'Юань Женьміньбі',     name_en: 'Chinese Yuan' },
]

function CopyBtn({ value, lang }) {
  const [copied, setCopied] = useState(false)
  function handle() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button className="req-copy-btn req-copy-btn-sm" onClick={handle}>
      {copied ? '✓' : lang === 'uk' ? 'Копіювати' : 'Copy'}
    </button>
  )
}

function FieldRow({ label, value, copy, lang }) {
  return (
    <div className="req-field-row">
      <span className="req-field-key">{label}</span>
      <span className="req-field-value">{value}</span>
      {copy && <CopyBtn value={value} lang={lang} />}
    </div>
  )
}

export default function RequisitesPage({ lang, onBack, setPage }) {
  const uahFields = lang === 'uk' ? UAH_FIELDS_UK : UAH_FIELDS_EN

  return (
    <div className="docs-page">
      <div className="docs-page-hero">
        <div className="docs-page-hero-inner">
          <div className="docs-back-row">
            <button className="docs-back-btn" onClick={onBack}>
              ← {lang === 'uk' ? 'На головну' : 'Back'}
            </button>
            <button className="req-oferta-btn" onClick={() => setPage('oferta')}>
              {lang === 'uk' ? 'Договір оферти →' : 'Public Offer Agreement →'}
            </button>
          </div>
          <div className="section-kicker" style={{ marginBottom: 14 }}>
            <span className="section-kicker-line" style={{ background: '#DAA50B' }}></span>
            <span style={{ color: '#DAA50B' }}>{lang === 'uk' ? 'Підтримати фонд' : 'Support the fund'}</span>
          </div>
          <h1 className="docs-page-title">{lang === 'uk' ? 'Реквізити фонду' : 'Fund banking details'}</h1>
          <p className="docs-page-sub">
            {lang === 'uk'
              ? 'Офіційні банківські реквізити Благодійного фонду «Миколаїв Нескорений» для переказів у національній та іноземній валюті.'
              : 'Official banking details of the Mykolaiv Invictus Charity Fund for transfers in national and foreign currencies.'}
          </p>
        </div>
      </div>

      <div className="docs-page-body">
        <div className="req-page-grid">

          {/* UAH */}
          <div className="req-card">
            <div className="req-card-header req-card-header-blue">
              <span className="req-card-flag">🇺🇦</span>
              <div>
                <div className="req-card-title">{lang === 'uk' ? 'Національна валюта' : 'National currency'}</div>
                <div className="req-card-sub">{lang === 'uk' ? 'Переказ у гривнях (UAH)' : 'Transfer in hryvnias (UAH)'}</div>
              </div>
            </div>
            <div className="req-card-body">
              {uahFields.map((f, i) => <FieldRow key={i} {...f} lang={lang} />)}
            </div>
          </div>

          {/* Foreign currency */}
          <div className="req-card">
            <div className="req-card-header req-card-header-gold">
              <span className="req-card-flag">🌍</span>
              <div>
                <div className="req-card-title">{lang === 'uk' ? 'Іноземна валюта' : 'Foreign currency'}</div>
                <div className="req-card-sub">{lang === 'uk' ? 'Міжнародний переказ (SWIFT)' : 'International transfer (SWIFT)'}</div>
              </div>
            </div>
            <div className="req-card-body">
              {FX_FIELDS.map((f, i) => <FieldRow key={i} {...f} lang={lang} />)}
            </div>
          </div>

        </div>

        {/* Oferta acceptance note */}
        <div className="req-oferta-note">
          <p>
            {lang === 'uk'
              ? 'Здійснюючи переказ на рахунок фонду, ви підтверджуєте, що ознайомились та погоджуєтесь з умовами '
              : 'By making a transfer to the fund\'s account, you confirm that you have read and agree to the '}
            <button className="req-oferta-link" onClick={() => setPage('oferta')}>
              {lang === 'uk' ? 'Публічного договору (оферти)' : 'Public Agreement (Offer)'}
            </button>
            {lang === 'uk' ? ' про надання благодійної пожертви.' : ' on making a charitable donation.'}
          </p>
        </div>

        {/* Currency table */}
        <div className="req-currencies">
          <h3 className="req-currencies-title">
            {lang === 'uk' ? 'Іноземні валюти, у яких можна здійснювати платежі' : 'Foreign currencies accepted for payment'}
          </h3>
          <div className="req-table-wrap">
            <table className="req-table">
              <thead>
                <tr>
                  <th>{lang === 'uk' ? 'Код цифровий' : 'Numeric code'}</th>
                  <th>{lang === 'uk' ? 'Код літерний' : 'Letter code'}</th>
                  <th>{lang === 'uk' ? 'Назва валюти' : 'Currency name'}</th>
                </tr>
              </thead>
              <tbody>
                {CURRENCIES.map((c) => (
                  <tr key={c.code}>
                    <td>{c.code}</td>
                    <td><strong>{c.letter}</strong></td>
                    <td>{lang === 'uk' ? c.name_uk : c.name_en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
