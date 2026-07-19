function VisaLogo() {
  return (
    <svg className="pay-logo" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Visa">
      <rect width="60" height="38" rx="4" fill="#1A1F71"/>
      <text x="50%" y="26" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial,sans-serif" fontWeight="900" fontStyle="italic" fontSize="18" letterSpacing="1">VISA</text>
    </svg>
  )
}

function MastercardLogo() {
  return (
    <svg className="pay-logo" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mastercard">
      <rect width="60" height="38" rx="4" fill="#252525"/>
      <circle cx="22" cy="19" r="11" fill="#EB001B"/>
      <circle cx="38" cy="19" r="11" fill="#F79E1B"/>
      <path d="M30 10.4A11 11 0 0 1 38 19a11 11 0 0 1-8 8.6A11 11 0 0 1 22 19a11 11 0 0 1 8-8.6z" fill="#FF5F00"/>
    </svg>
  )
}

function ProstirLogo() {
  return (
    <svg className="pay-logo" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Prostir">
      <rect width="60" height="38" rx="4" fill="#005BBB"/>
      <text x="50%" y="16" textAnchor="middle" fill="#FFD700" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="8" letterSpacing=".5">ПРОСТІР</text>
      <text x="50%" y="28" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="7" letterSpacing=".5">PROSTIR</text>
    </svg>
  )
}

export default function Footer({ t, setPage }) {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-top-inner">
          <div className="footer-brand">
            <img src="/assets/logo-circle-white.webp" alt="" />
            <div>
              <div className="footer-name">{t.footerName}</div>
              <div className="footer-edrpou">ЄДРПОУ 44761877</div>
            </div>
          </div>

          <div className="footer-legal-links">
            <button className="footer-legal-btn" onClick={() => setPage('oferta')}>
              {t.footerOferta || 'Публічна оферта'}
            </button>
            <span className="footer-sep">·</span>
            <button className="footer-legal-btn" onClick={() => setPage('refund')}>
              {t.footerRefund || 'Повернення коштів'}
            </button>
          </div>

          <div className="footer-pay-logos">
            <VisaLogo />
            <MastercardLogo />
            <ProstirLogo />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-rights">{t.footerRights}</span>
        </div>
      </div>
    </footer>
  )
}
