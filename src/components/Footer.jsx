export default function Footer({ t }) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/logo-circle-white.png" alt="" />
          <span className="footer-name">{t.footerName}</span>
        </div>
        <span className="footer-rights">{t.footerRights}</span>
      </div>
    </footer>
  )
}
