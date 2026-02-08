import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import LanguageToggle from './LanguageToggle'
import { useLang } from '../i18n.jsx'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLang()
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    const handleClick = (event) => {
      const menuEl = menuRef.current
      const buttonEl = buttonRef.current
      if (!menuEl || !buttonEl) {
        return
      }
      if (menuEl.contains(event.target) || buttonEl.contains(event.target)) {
        return
      }
      setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleClick)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleClick)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <div className="relative">
              <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-gradient-to-br from-red-700 via-red-600 to-amber-500 p-[2px] shadow-lg animate-float-slow">
                <div className="h-full w-full rounded-2xl bg-slate-950 flex items-center justify-center text-white font-extrabold text-lg md:text-xl">
                  BN
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-amber-400 shadow" />
            </div>
            <div className="leading-tight">
              <span className="text-lg md:text-xl font-extrabold text-gray-900 block font-display">BN Construction</span>
              <span className="text-xs md:text-sm text-gray-500">Civil Contractor • Gorakhpur</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            className="md:hidden text-gray-700 hover:text-red-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/home" className="text-gray-700 hover:text-red-600 transition font-medium duration-300">{t('nav.home')}</Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 transition font-medium duration-300">{t('nav.about')}</Link>
            <Link to="/services" className="text-gray-700 hover:text-red-600 transition font-medium duration-300">{t('nav.services')}</Link>
            <Link to="/projects" className="text-gray-700 hover:text-red-600 transition font-medium duration-300">{t('nav.projects')}</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-red-600 transition font-medium duration-300">{t('nav.reviews')}</Link>
            <a
              href="tel:+919956914748"
              className="hidden lg:inline-flex items-center gap-2 text-gray-700 hover:text-red-600 transition font-semibold"
            >
              <FaPhoneAlt />
              9956914748
            </a>
            <a
              href="https://wa.me/919956914748"
              className="hidden lg:inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition font-semibold"
            >
              <FaWhatsapp />
              {t('labels.whatsapp')}
            </a>
            <LanguageToggle />
            <Link to="/contact" className="relative overflow-hidden bg-gradient-to-r from-red-600 to-amber-500 text-white px-5 py-2 rounded-lg hover:shadow-lg transition font-semibold duration-300">
              <span className="relative z-10">{t('nav.contact')}</span>
              <span className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-nav"
            ref={menuRef}
            className="md:hidden mt-4 space-y-3 pb-4 animate-fade-up"
          >
            <Link to="/home" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-red-600 font-medium">{t('nav.home')}</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-red-600 font-medium">{t('nav.about')}</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-red-600 font-medium">{t('nav.services')}</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-red-600 font-medium">{t('nav.projects')}</Link>
            <Link to="/testimonials" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-red-600 font-medium">{t('nav.reviews')}</Link>
            <a href="tel:+919956914748" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-red-600 font-medium">{t('labels.callUs')} 9956914748</a>
            <a href="https://wa.me/919956914748" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-green-700 font-medium">{t('labels.whatsapp')}</a>
            <div className="pt-2">
              <LanguageToggle />
            </div>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block bg-gradient-to-r from-red-600 to-amber-500 text-white px-4 py-2 rounded-lg text-center font-semibold">{t('nav.contact')}</Link>
          </div>
        )}
      </nav>
    </header>
  )
}