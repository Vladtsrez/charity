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
import Partners from './components/Partners'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('uk')
  const t = DICT[lang]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <StatsStrip lang={lang} />
      <About t={t} />
      <Directions lang={lang} t={t} />
      <PhotoBand />
      <Results lang={lang} t={t} />
      <Registry lang={lang} t={t} />
      <Gratitude lang={lang} t={t} />
      <Partners t={t} />
      <Contacts t={t} />
      <Footer t={t} />
    </>
  )
}
