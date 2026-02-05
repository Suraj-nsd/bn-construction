import { useLang } from '../i18n.jsx'

export default function LanguageToggle() {
  const { lang, setLang } = useLang()

  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
      className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600 hover:border-red-400 hover:text-red-600 transition"
      aria-label="Toggle language"
    >
      {lang === 'en' ? 'हिंदी' : 'English'}
    </button>
  )
}

