import {
  FaClipboardCheck,
  FaDraftingCompass,
  FaHardHat,
  FaHandshake,
  FaMapMarkedAlt,
  FaPaintRoller,
  FaShieldAlt,
  FaStar,
  FaTools,
} from 'react-icons/fa'
import { useLang } from '../i18n.jsx'

export default function About() {
  const { t, lang, translations } = useLang()
  const data = translations[lang].about

  const highlightIcons = [
    FaDraftingCompass,
    FaHardHat,
    FaPaintRoller,
    FaTools,
    FaHandshake,
    FaStar,
  ]
  const pillarIcons = [FaShieldAlt, FaClipboardCheck, FaHardHat, FaHandshake]

  return (
    <div className="space-y-10 md:space-y-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-red-900 to-amber-600 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">{t('nav.about')}</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">{t('about.title')}</h1>
            <p className="mt-3 text-lg text-white/85">{t('about.subtitle')}</p>
            <p className="mt-5 text-sm text-white/80 max-w-xl">{data.introBody}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919956914748"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-red-700 transition hover:bg-amber-50"
              >
                {t('cta.call')}
              </a>
              <a
                href="https://wa.me/919956914748"
                className="inline-flex items-center justify-center rounded-lg border border-white/70 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-red-700"
              >
                {t('cta.whatsapp')}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {data.stats.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{data.pillarsTitle}</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{data.pillarsSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.pillars.map((item, idx) => {
            const Icon = pillarIcons[idx] || FaShieldAlt
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-red-50/40 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-700 text-xl">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Highlights */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('about.workTitle')}</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{data.introTitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.highlights.map((item, idx) => {
            const Icon = highlightIcons[idx] || FaDraftingCompass
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 text-xl">
                  <Icon />
                </div>
                <h4 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Capabilities */}
      <section className="rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{data.capabilitiesTitle}</h2>
            <p className="mt-3 text-gray-600 max-w-xl">{data.introBody}</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {data.capabilities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white bg-white/80 p-4 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-700">
                  <FaMapMarkedAlt />
                </span>
                <p className="text-sm font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-red-700 to-amber-500 p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{data.ctaTitle}</h2>
        <p className="text-sm md:text-base mb-6 text-white/90">{data.ctaSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+919956914748"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition text-sm md:text-base"
          >
            {t('cta.call')}
          </a>
          <a
            href="https://wa.me/919956914748"
            className="bg-amber-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-200 transition text-sm md:text-base"
          >
            {t('cta.whatsapp')}
          </a>
        </div>
      </section>
    </div>
  )
}