export default function RefundPage({ lang, onBack }) {
  return (
    <div className="docs-page">
      <div className="docs-page-hero">
        <div className="docs-page-hero-inner">
          <div className="docs-back-row">
            <button className="docs-back-btn" onClick={onBack}>
              ← {lang === 'uk' ? 'На головну' : 'Back'}
            </button>
          </div>
          <div className="section-kicker" style={{ marginBottom: 14 }}>
            <span className="section-kicker-line" style={{ background: '#DAA50B' }}></span>
            <span style={{ color: '#DAA50B' }}>{lang === 'uk' ? 'Правові документи' : 'Legal documents'}</span>
          </div>
          <h1 className="docs-page-title">
            {lang === 'uk' ? 'Повернення коштів' : 'Refund Policy'}
          </h1>
          <p className="docs-page-sub">
            {lang === 'uk'
              ? 'Умови та порядок повернення благодійних пожертв Благодійного фонду «Миколаїв Нескорений».'
              : 'Terms and procedure for the return of charitable donations to the Mykolaiv Invictus Charity Fund.'}
          </p>
        </div>
      </div>

      <div className="docs-page-body">
        <div className="oferta-doc">

          <h2 className="oferta-main-title">
            {lang === 'uk' ? 'ПОЛІТИКА ПОВЕРНЕННЯ КОШТІВ' : 'REFUND POLICY'}
          </h2>

          <div className="oferta-section">
            <h3 className="oferta-section-title">
              {lang === 'uk' ? '1. Загальні положення' : '1. General provisions'}
            </h3>
            <p>
              {lang === 'uk'
                ? 'БЛАГОДІЙНА ОРГАНІЗАЦІЯ «БЛАГОДІЙНИЙ ФОНД «МИКОЛАЇВ НЕСКОРЕНИЙ» (ЄДРПОУ 44761877) є неприбутковою організацією, яка здійснює збір благодійних пожертв відповідно до Закону України «Про благодійну діяльність та благодійні організації».'
                : 'The CHARITABLE ORGANIZATION "MYKOLAIV INVICTUS CHARITY FUND" (EDRPOU 44761877) is a non-profit organization that collects charitable donations in accordance with the Law of Ukraine "On Charitable Activities and Charitable Organizations".'}
            </p>
            <p>
              {lang === 'uk'
                ? 'Здійснення пожертви на користь фонду є добровільним та безоплатним. Передаючи кошти, Благодійник підтверджує свою згоду з умовами Публічного договору (оферти) та цієї Політики.'
                : 'Making a donation to the fund is voluntary and free of charge. By transferring funds, the Donor confirms their agreement with the terms of the Public Agreement (Offer) and this Policy.'}
            </p>
          </div>

          <div className="oferta-section">
            <h3 className="oferta-section-title">
              {lang === 'uk' ? '2. Повернення пожертви' : '2. Donation refunds'}
            </h3>
            <p>
              {lang === 'uk'
                ? 'Відповідно до Закону України «Про благодійну діяльність та благодійні організації» та умов Публічного договору (оферти), благодійна пожертва, здійснена на користь фонду, поверненню не підлягає, крім випадків, прямо передбачених чинним законодавством України.'
                : 'In accordance with the Law of Ukraine "On Charitable Activities" and the terms of the Public Offer Agreement, a charitable donation made to the fund is non-refundable, except in cases expressly provided for by applicable Ukrainian law.'}
            </p>
            <p>
              {lang === 'uk'
                ? 'Повернення коштів можливе виключно у таких випадках:'
                : 'A refund is only possible in the following cases:'}
            </p>
            <ul className="oferta-ul">
              <li>
                {lang === 'uk'
                  ? 'технічна помилка платіжної системи або банку, внаслідок якої кошти були списані двічі або в некоректній сумі;'
                  : 'a technical error by the payment system or bank that resulted in funds being debited twice or in an incorrect amount;'}
              </li>
              <li>
                {lang === 'uk'
                  ? 'несанкціонований платіж (шахрайство), підтверджений банком-емітентом карти;'
                  : 'an unauthorized payment (fraud) confirmed by the card-issuing bank;'}
              </li>
              <li>
                {lang === 'uk'
                  ? 'інші випадки, прямо передбачені чинним законодавством України.'
                  : 'other cases expressly provided for by applicable Ukrainian law.'}
              </li>
            </ul>
          </div>

          <div className="oferta-section">
            <h3 className="oferta-section-title">
              {lang === 'uk' ? '3. Порядок звернення' : '3. How to apply'}
            </h3>
            <p>
              {lang === 'uk'
                ? 'Для ініціювання повернення коштів необхідно звернутися до фонду протягом 30 (тридцяти) календарних днів з дати здійснення платежу. Звернення надсилається на електронну адресу:'
                : 'To initiate a refund, you must contact the fund within 30 (thirty) calendar days from the date of payment. The request is sent to:'}
            </p>
            <div className="refund-contact-block">
              <a href="mailto:mykolaivnezkorenu@gmail.com" className="refund-email">mykolaivnezkorenu@gmail.com</a>
            </div>
            <p>
              {lang === 'uk' ? 'У зверненні обов\'язково вкажіть:' : 'Your request must include:'}
            </p>
            <ul className="oferta-ul">
              <li>{lang === 'uk' ? 'ПІБ платника;' : 'full name of the payer;'}</li>
              <li>{lang === 'uk' ? 'дату та суму платежу;' : 'date and amount of payment;'}</li>
              <li>{lang === 'uk' ? 'підтвердження платежу (скріншот або номер транзакції);' : 'payment confirmation (screenshot or transaction number);'}</li>
              <li>{lang === 'uk' ? 'причину звернення.' : 'reason for the request.'}</li>
            </ul>
          </div>

          <div className="oferta-section">
            <h3 className="oferta-section-title">
              {lang === 'uk' ? '4. Строки розгляду' : '4. Processing time'}
            </h3>
            <p>
              {lang === 'uk'
                ? 'Фонд розглядає звернення про повернення коштів протягом 10 (десяти) робочих днів з дня отримання повного пакету документів та інформації. У разі прийняття рішення про повернення, кошти зараховуються на реквізити, вказані Благодійником, протягом 5 (п\'яти) банківських днів.'
                : 'The fund reviews refund requests within 10 (ten) business days of receiving a complete set of documents and information. If a refund decision is made, funds are credited to the details provided by the Donor within 5 (five) banking days.'}
            </p>
          </div>

          <div className="oferta-section">
            <h3 className="oferta-section-title">
              {lang === 'uk' ? '5. Нецільове використання залишків' : '5. Unused balance'}
            </h3>
            <p>
              {lang === 'uk'
                ? 'У випадку нереалізації конкретних проєктів (зборів) або за наявності залишків коштів після їх реалізації, такі суми не підлягають поверненню і направляються Фондом на загальну статутну діяльність відповідно до умов Публічного договору (оферти).'
                : 'In the event that specific projects (fundraisers) are not realized, or if funds remain after their implementation, such amounts are non-refundable and are directed by the Fund to general statutory activities in accordance with the Public Offer Agreement.'}
            </p>
          </div>

          <div className="oferta-section">
            <h3 className="oferta-section-title">
              {lang === 'uk' ? '6. Контактна інформація' : '6. Contact information'}
            </h3>
            <div className="oferta-requisites">
              <p><strong>{lang === 'uk' ? 'БЛАГОДІЙНА ОРГАНІЗАЦІЯ «БЛАГОДІЙНИЙ ФОНД «МИКОЛАЇВ НЕСКОРЕНИЙ»' : 'CHARITABLE ORGANIZATION "MYKOLAIV INVICTUS CHARITY FUND"'}</strong></p>
              <p>{lang === 'uk' ? 'Адреса:' : 'Address:'} {lang === 'uk' ? 'Україна, 56501, Миколаївська обл., м. Вознесенськ, вул. Соборності, 23/27' : '56501, Mykolaiv region, Voznesensk, 23/27 Sobornosti St., Ukraine'}</p>
              <p>{lang === 'uk' ? 'Телефон:' : 'Phone:'} <a href="tel:+380993670651" style={{ color: '#084785' }}>+38 099 367 06 51</a></p>
              <p>Email: <a href="mailto:mykolaivnezkorenu@gmail.com" style={{ color: '#084785' }}>mykolaivnezkorenu@gmail.com</a></p>
              <p>{lang === 'uk' ? 'Код ЄДРПОУ:' : 'EDRPOU:'} <strong>44761877</strong></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
