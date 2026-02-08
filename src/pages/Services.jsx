import {
  FaCheckCircle,
  FaDraftingCompass,
  FaHardHat,
  FaPaintRoller,
  FaHome,
  FaThLarge,
  FaTools,
  FaBuilding,
} from 'react-icons/fa'
import { useLang } from '../i18n.jsx'

export default function Services() {
  const { lang, translations } = useLang()
  const data = translations[lang].services

  const services = [
    { title: lang === 'en' ? 'Consulting' : '?????????', description: lang === 'en' ? 'Site visit, budget planning, and roadmap.' : '???? ??????, ??? ???????? ?? ???????', icon: FaDraftingCompass },
    { title: lang === 'en' ? 'Residential Construction' : '??????????? ???????????', description: lang === 'en' ? 'Complete home construction with quality control.' : '?? ?? ???? ??????? ?? ???????? ????????', icon: FaHome },
    { title: lang === 'en' ? 'Commercial Projects' : '???????? ???????????', description: lang === 'en' ? 'Shops, offices, and commercial builds.' : '???, ???? ?? ???????? ????????', icon: FaBuilding },
    { title: lang === 'en' ? 'Architecture & Planning' : '??????????? ?? ????????', description: lang === 'en' ? 'Layout, elevation, and structural planning.' : '?????, ??????? ?? ????????? ?????????', icon: FaTools },
    { title: lang === 'en' ? 'Interior Design' : '???????? ??????', description: lang === 'en' ? 'Functional, modern interiors with clean finishing.' : '?????? ???????? ?? ??? ?????????', icon: FaPaintRoller },
    { title: lang === 'en' ? 'Painting Services' : '??????? ??????', description: lang === 'en' ? 'Premium paint finish for interior and exterior.' : '???????? ?? ?????????? ?? ??? ???????? ?????', icon: FaPaintRoller },
    { title: lang === 'en' ? 'Structure & Shuttering' : '????????? ?? ??????', description: lang === 'en' ? 'Accurate shuttering and strong RCC work.' : '???? ?????? ?? ????? RCC ????', icon: FaHardHat },
    { title: lang === 'en' ? 'Tiles & Stone Work' : '?????? ?? ????? ????', description: lang === 'en' ? 'Tiles fitting and stone finishing work.' : '???? ?????? ?? ????? ?????????', icon: FaThLarge }
  ]

  return (
    <div className="space-y-10 md:space-y-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-red-900 to-amber-600 p-8 md:p-12 text-white">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">{lang === 'en' ? 'Services' : '??????'}</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold">{lang === 'en' ? 'Complete Construction Solutions' : '??????? ??????????? ?????????'}</h1>
          <p className="mt-3 text-lg text-white/85 max-w-2xl">
            {lang === 'en'
              ? 'Design, construction, interiors, and finishing — delivered with clear timelines and quality checks.'
              : '???????, ???????????, ???????? ?? ???????? — ?????? ???????? ?? ???????? ??? ?? ????'}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-700 text-xl transition group-hover:bg-red-100">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Packages */}
      <section className="rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-amber-50 p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{data.packagesTitle}</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{data.packagesSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.packages.map((pkg) => (
            <div key={pkg.title} className="rounded-2xl bg-white p-6 shadow-sm border border-white/60">
              <h3 className="text-lg font-bold text-gray-900">{pkg.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{pkg.desc}</p>
              <div className="mt-4 space-y-2">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="text-amber-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promise */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{data.promiseTitle}</h2>
        </div>
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-3">
          {data.promiseItems.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-700">
                <FaCheckCircle />
              </span>
              <p className="text-sm font-semibold text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-amber-400 to-red-600 text-white p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{lang === 'en' ? 'Start Your Project Today' : '?? ?? ????????? ???? ????'}</h2>
        <p className="text-sm md:text-base mb-6">{lang === 'en' ? 'Contact us for a free consultation' : '???? ????????? ?? ??? ?????? ????'}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+919956914748" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-sm md:text-base">
            {lang === 'en' ? 'Call: +91 9956914748' : '??? ????: +91 9956914748'}
          </a>
          <a href="/contact" className="bg-amber-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-200 transition text-sm md:text-base">
            {lang === 'en' ? 'Contact Form' : '????????? ?????'}
          </a>
        </div>
      </section>
    </div>
  )
}