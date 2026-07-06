export default function Contacts({ t }) {
  return (
    <section id="contacts">
      <div className="contacts-inner">
        <div>
          <div className="section-kicker"><span className="section-kicker-line"></span><span>{t.contactsKicker}</span></div>
          <h2 className="contacts-title">{t.contactsTitle}</h2>
          <div className="contact-rows">
            <div className="contact-row">
              <span className="contact-label">{t.addrLabel}</span>
              <span className="contact-val">{t.addr}</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">{t.phoneLabel}</span>
              <a href="tel:+380993670651" className="contact-link">+38 099 367 06 51</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">E-mail</span>
              <a href="mailto:mykolaivneskoreni@gmail.com" className="contact-link">mykolaivneskoreni@gmail.com</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">{t.edrpouLabel}</span>
              <span className="contact-val">44761877</span>
            </div>
            <div className="contact-row">
              <span className="contact-label">{t.headLabel}</span>
              <span className="contact-val">{t.head}</span>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <img className="contact-card-logo" src="/assets/logo-circle-white.webp" alt="Миколаїв Нескорений" />
          <h3 className="contact-card-title">{t.cardTitle}</h3>
          <p className="contact-card-sub">{t.cardSub}</p>
          <div className="contact-card-note"><span>{t.heroNote}</span></div>
        </div>
      </div>
    </section>
  )
}
