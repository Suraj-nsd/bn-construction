import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import LanguageToggle from './LanguageToggle'
import { useLang } from '../i18n.jsx'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLang()

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-red-700 to-amber-500 text-white flex items-center justify-center font-extrabold text-xl shadow">
              BN
            </div>
            <div className="leading-tight">
              <span className="text-xl md:text-2xl font-bold text-gray-900 block">BN Construction</span>
              <span className="text-xs md:text-sm text-gray-500">Civil Contractor</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
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
            <Link to="/contact" className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-5 py-2 rounded-lg hover:shadow-lg transition font-semibold duration-300">{t('nav.contact')}</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
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
