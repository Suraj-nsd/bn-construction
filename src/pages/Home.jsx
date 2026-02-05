import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaBuilding,
  FaDraftingCompass,
  FaEnvelope,
  FaHome,
  FaMapMarkerAlt,
  FaPaintRoller,
  FaPhoneAlt,
  FaTools,
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
  const serviceIcons = [
    FaDraftingCompass,
    FaHome,
    FaBuilding,
    FaTools,
    FaPaintRoller,
    FaDraftingCompass,
  ];

  const services = translations[lang].services.list.map((item, index) => ({
    ...item,
    icon: serviceIcons[index] || FaTools,
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
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-red-800 to-amber-500">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-red-900/40 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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
                Er. Bijendra Nishad — Building Construction & Design.
                <span className="block text-sm text-amber-100/90 mt-2">
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

      {/* Services Section */}
      <section className="w-full bg-white py-12 md:py-16">
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
                  className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-700 text-xl">
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
      <section className="w-full bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('sections.projects')}</h2>
            <p className="text-gray-600 mt-3">{t('home.projectsSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-0 shadow-sm transition hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{project.description}</p>
                  <p className="mt-2 text-xs text-gray-500">{project.caption}</p>
                </div>
              </div>
            ))}
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
              <ul className="mt-4 space-y-3 text-gray-700">
                {t('home.highlights').map((line, idx) => (
                  <li key={idx}>• {line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-900 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl bg-gradient-to-r from-red-700 to-amber-500 p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold">{t('cta.contactNow')}</h2>
            <p className="mt-3 text-white/90">
              {lang === 'en' ? 'Call now for a free consultation and project estimate.' : 'फ्री कंसल्टेशन और प्रोजेक्ट अनुमान के लिए कॉल करें।'}
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






