
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WorkSection from './components/WorkSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`site ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <Header isDark={isDark} setIsDark={setIsDark} />

      <main id="inicio">
        <Hero />
        <WorkSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
