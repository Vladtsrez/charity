import { useState, useEffect } from 'react'
import { DICT } from './data'
import Header from './components/Header'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import About from './components/About'
import Directions from './components/Directions'
import PhotoBand from './components/PhotoBand'
import Results from './components/Results'
import Registry from './components/Registry'
import Gratitude from './components/Gratitude'
import Requisites from './components/Requisites'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import DocumentsPage from './components/DocumentsPage'
import RequisitesPage from './components/RequisitesPage'
import OfertaPage from './components/OfertaPage'
import RefundPage from './components/RefundPage'

export default function App() {
  const [lang, setLang] = useState('uk')
  const [page, setPage] = useState('home')
  const t = DICT[lang]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  if (page === 'docs') {
    return (
      <>
        <Header lang={lang} setLang={setLang} t={t} page={page} setPage={setPage} />
        <DocumentsPage lang={lang} t={t} onBack={() => setPage('home')} />
        <Footer t={t} setPage={setPage} />
      </>
    )
  }

  if (page === 'requisites') {
    return (
      <>
        <Header lang={lang} setLang={setLang} t={t} page={page} setPage={setPage} />
        <RequisitesPage lang={lang} onBack={() => setPage('home')} setPage={setPage} />
        <Footer t={t} setPage={setPage} />
      </>
    )
  }

  if (page === 'oferta') {
    return (
      <>
        <Header lang={lang} setLang={setLang} t={t} page={page} setPage={setPage} />
        <OfertaPage lang={lang} onBack={() => setPage('requisites')} />
        <Footer t={t} setPage={setPage} />
      </>
    )
  }

  if (page === 'refund') {
    return (
      <>
        <Header lang={lang} setLang={setLang} t={t} page={page} setPage={setPage} />
        <RefundPage lang={lang} onBack={() => setPage('home')} />
        <Footer t={t} setPage={setPage} />
      </>
    )
  }

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} page={page} setPage={setPage} />
      <Hero t={t} />
      <StatsStrip lang={lang} />
      <About t={t} />
      <Directions lang={lang} t={t} />
      <PhotoBand />
      <Results lang={lang} t={t} />
      <Registry lang={lang} t={t} />
      <Gratitude lang={lang} t={t} setPage={setPage} />
      <Requisites lang={lang} setPage={setPage} />
      <Contacts t={t} />
      <Footer t={t} setPage={setPage} />
    </>
  )
}
