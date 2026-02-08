import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaClipboardCheck,
  FaDraftingCompass,
  FaEnvelope,
  FaHammer,
  FaHome,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPaintRoller,
  FaPhoneAlt,
  FaRegClock,
  FaRulerCombined,
  FaShieldAlt,
  FaTools,
  FaUserCheck,
  FaWhatsapp,
} from 'react-icons/fa';
import { useLang } from '../i18n.jsx';

export default function Home() {
  const { t, lang, translations } = useLang();

  const baseUrl = import.meta.env.BASE_URL;
  const projectImages = [
    `${baseUrl}projects/home-1.jpg`,
    `${baseUrl}projects/interior-1.jpg`,
    `${baseUrl}projects/tiles-1.jpg`,
    `${baseUrl}projects/commercial-1.jpg`,
  ];
  const planImages = [
    `${baseUrl}plans/plan-1.jpg`,
  ];
  const serviceIcons = [
    FaDraftingCompass,
    FaHome,
    FaBuilding,
    FaTools,
    FaPaintRoller,
    FaDraftingCompass,
  ];
  const trustIcons = [
    FaClipboardCheck,
    FaUserCheck,
    FaShieldAlt,
    FaRegClock,
  ];
  const processIcons = [
    FaMapMarkedAlt,
    FaDraftingCompass,
    FaHammer,
    FaCheckCircle,
  ];

  const services = translations[lang].services.list.map((item, index) => ({
    ...item,
    icon: serviceIcons[index] || FaTools,
  }));

  const trustItems = translations[lang].home.trustItems.map((item, index) => ({
    ...item,
    icon: trustIcons[index] || FaShieldAlt,
  }));

  const processSteps = translations[lang].home.processSteps.map((item, index) => ({
    ...item,
    icon: processIcons[index] || FaCheckCircle,
  }));

  const contacts = [
    {
      label: t('labels.callUs'),
      value: '9956914748',
      href: 'tel:+919956914748',
      icon: FaPhoneAlt,
    },
    {
      label: t('labels.callUs'),
      value: '7985889608',
      href: 'tel:+917985889608',
      icon: FaPhoneAlt,
    },
    {
      label: t('labels.whatsapp'),
      value: '9956914748',
      href: 'https://wa.me/919956914748',
      icon: FaWhatsapp,
    },
    {
      label: t('labels.email'),
      value: 'bnconstruction2025@gmail.com',
      href: 'mailto:bnconstruction2025@gmail.com',
      icon: FaEnvelope,
    },
  ];

  const projects = translations[lang].projects.list.map((item, index) => ({
    ...item,
    image: projectImages[index],
  }));

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-red-900 to-amber-600">
        <div className="absolute inset-0">
          <div className="absolute -top-28 -right-28 h-80 w-80 rounded-full bg-amber-400/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-red-900/40 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/60 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider">
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                {t('hero.badge')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-amber-100 font-semibold">
                {t('hero.subtitle')}
              </p>
              <p className="text-base md:text-lg text-white/85 max-w-xl">
                Er. Bijendra Nishad - Building Construction & Design.
                <span className="mt-2 flex items-center gap-2 text-sm text-amber-100/90">
                  <FaCheckCircle className="text-amber-200" />
                  {t('hero.hint')}
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-semibold text-red-900 shadow-lg shadow-amber-500/30 transition hover:bg-amber-300"
                >
                  {t('cta.quote')}
                  <FaArrowRight />
                </Link>
                <a
                  href="https://wa.me/919956914748"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-red-700"
                >
                  {t('cta.whatsapp')}
                  <FaWhatsapp />
                </a>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-white/80">
                <span className="rounded-full border border-white/20 px-3 py-1">Residential</span>
                <span className="rounded-full border border-white/20 px-3 py-1">Commercial</span>
                <span className="rounded-full border border-white/20 px-3 py-1">Interior</span>
                <span className="rounded-full border border-white/20 px-3 py-1">Turnkey</span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-white/95 p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-red-700 text-white flex items-center justify-center text-2xl font-bold">
                    BN
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">Er. Bijendra Nishad</p>
                    <p className="text-sm text-gray-600">Civil Contractor</p>
                    <p className="text-sm text-gray-600">Building Construction & Design</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg bg-red-50 p-3">
                    <p className="font-semibold text-red-700">Home Design</p>
                    <p className="text-gray-600">Map + 3D Elevation</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-3">
                    <p className="font-semibold text-amber-700">Construction</p>
                    <p className="text-gray-600">Complete Turnkey</p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-3">
                    <p className="font-semibold text-red-700">Interior</p>
                    <p className="text-gray-600">Modern & Functional</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-3">
                    <p className="font-semibold text-amber-700">Finishing</p>
                    <p className="text-gray-600">Tiles & Stone Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('home.trustTitle')}</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{t('home.trustSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-red-50/40 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-700 text-xl">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('sections.services')}</h2>
            <p className="text-gray-600 mt-3">{t('home.servicesSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-700 text-xl transition group-hover:bg-red-100">
                      <Icon />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('sections.projects')}</h2>
            <p className="text-gray-600 mt-3">{t('home.projectsSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white p-0 shadow-sm transition hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <div className="relative h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800">
                    {project.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                  <p className="mt-2 text-xs text-gray-500">{project.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="w-full bg-gray-50 py-10 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('home.floorPlan.title')}</h2>
              <p className="text-gray-600 mt-2">{t('home.floorPlan.subtitle')}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-700 shadow-sm">
              <FaRulerCombined />
              {t('home.floorPlan.plot')}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {planImages.map((src, index) => (
                <div
                  key={src}
                  className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm"
                >
                  <img
                    src={src}
                    alt={`Floor plan layout ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-3">{t('home.floorPlan.roomsTitle')}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                    {translations[lang].home.floorPlan.rooms.map((room) => (
                      <li key={room} className="flex items-start gap-2">
                        <FaHome className="mt-0.5 text-amber-500" />
                        <span>{room}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-3">{t('home.floorPlan.featuresTitle')}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                    {translations[lang].home.floorPlan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <FaCheckCircle className="mt-0.5 text-red-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('home.processTitle')}</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{t('home.processSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative rounded-2xl border border-red-100 bg-white p-6 shadow-sm"
                >
                  <div className="absolute -top-4 left-6 rounded-full bg-red-700 text-white text-xs font-semibold px-3 py-1">
                    Step {index + 1}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 text-xl">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="w-full bg-gradient-to-r from-red-700 via-red-600 to-amber-500 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 rounded-lg bg-white/95 p-4 text-gray-900 shadow-sm transition hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-700 text-xl">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('sections.address')}</h2>
              <p className="text-lg text-gray-700">
                {t('home.addressText')}
              </p>
              <p className="text-gray-600">
                {t('home.addressSub')}
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Patna%20Chauraha%20Ravi%20Complex%20Barhalganj%20Gorakhpur"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 font-semibold text-red-900 transition hover:bg-amber-300"
              >
                <FaMapMarkerAlt />
                {t('labels.getDirections')}
              </a>
            </div>
            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-amber-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">{t('sections.highlights')}</h3>
              <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
                {t('home.highlights').map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('home.faqTitle')}</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{t('home.faqSubtitle')}</p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {translations[lang].home.faq.map((item, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-gray-900">
                  {item.q}
                  <span className="ml-4 text-red-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-900 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl bg-gradient-to-r from-red-700 to-amber-500 p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold">{t('cta.contactNow')}</h2>
            <p className="mt-3 text-white/90">
              {lang === 'en' ? 'Call now for a free consultation and project estimate.' : '???? ????????? ?? ????????? ?????? ?? ??? ??? ?????'}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919956914748"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-red-700 shadow-lg transition hover:bg-red-50"
              >
                <FaPhoneAlt />
                {t('cta.call')} 9956914748
              </a>
              <a
                href="mailto:bnconstruction2025@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-red-700"
              >
                <FaEnvelope />
                {t('cta.email')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}