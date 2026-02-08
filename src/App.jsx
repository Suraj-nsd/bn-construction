import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { LanguageProvider } from './i18n.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  )
}