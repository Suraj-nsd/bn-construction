import { useState } from 'react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaCheckCircle,
} from 'react-icons/fa';
import { useLang } from '../i18n.jsx';

export default function Contact() {
  const { t, lang } = useLang();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const buildMessage = () => {
    const lines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Subject: ${formData.subject}`,
      `Message: ${formData.message}`,
    ];
    return lines.join('\n');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = buildMessage();
    const whatsappUrl = `https://wa.me/919956914748?text=${encodeURIComponent(text)}`;
    const mailtoUrl = `mailto:bnconstruction2025@gmail.com?subject=${encodeURIComponent(formData.subject || 'New Inquiry')}&body=${encodeURIComponent(text)}`;

    setSubmitted(true);

    // Prefer WhatsApp (best conversion). Fallback to email if popup blocked.
    const opened = window.open(whatsappUrl, '_blank');
    if (!opened) {
      window.location.href = mailtoUrl;
    }

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactCards = [
    {
      title: t('labels.callUs'),
      value: '9956914748',
      href: 'tel:+919956914748',
      accent: 'border-red-600',
      icon: FaPhoneAlt
    },
    {
      title: t('labels.callUs'),
      value: '7985889608',
      href: 'tel:+917985889608',
      accent: 'border-amber-500',
      icon: FaPhoneAlt
    },
    {
      title: t('labels.whatsapp'),
      value: '9956914748',
      href: 'https://wa.me/919956914748',
      accent: 'border-red-600',
      icon: FaWhatsapp
    },
    {
      title: t('labels.email'),
      value: 'bnconstruction2025@gmail.com',
      href: 'mailto:bnconstruction2025@gmail.com',
      accent: 'border-amber-500',
      icon: FaEnvelope
    },
  ];

  return (
    <div className="w-full space-y-10 md:space-y-14">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-red-900 to-amber-600 py-12 md:py-16">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="relative container mx-auto px-4 md:px-8 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">{t('nav.contact')}</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">{t('contact.title')}</h1>
          <p className="mt-3 text-lg text-white/90 max-w-2xl">
            {t('contact.subtitle')}
          </p>
          <p className="mt-4 text-sm text-amber-100/90 flex items-center gap-2">
            <FaClock />
            {t('contact.responseNote')}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+919956914748"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2 font-semibold text-red-700 shadow transition hover:bg-amber-50"
            >
              <FaPhoneAlt />
              {t('cta.call')}
            </a>
            <a
              href="https://wa.me/919956914748"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-5 py-2 font-semibold text-white transition hover:bg-white hover:text-red-700"
            >
              <FaWhatsapp />
              {t('cta.whatsapp')}
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8">
        {/* Success Message */}
        {submitted && (
          <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {lang === 'en' ? 'Thank you! Opening WhatsApp to send your message.' : '???????! ???? ????? ????? ?? ??? WhatsApp ??? ??? ???'}
          </div>
        )}

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <a
                key={index}
                href={card.href}
                className={`bg-white p-6 rounded-2xl shadow-sm border-l-4 ${card.accent} transition hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-red-700">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                    <p className="text-gray-700">{card.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-red-600 mb-2">{t('sections.address')}</h3>
              <p className="text-gray-700">
                {t('home.addressText')}
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Patna%20Chauraha%20Ravi%20Complex%20Barhalganj%20Gorakhpur"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 font-semibold text-red-900 transition hover:bg-amber-300"
              >
                <FaMapMarkerAlt />
                {t('labels.getDirections')}
              </a>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-amber-600 mb-2">{t('contact.servicesTitle')}</h3>
              <p className="text-gray-700">{t('contact.servicesText')}</p>
              <p className="text-gray-700 mt-2">{t('contact.servicesSub')}</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-red-600 mb-2">{t('contact.hoursTitle')}</h3>
              <p className="text-gray-700">Monday - Saturday: 9 AM - 7 PM</p>
              <p className="text-gray-700">Sunday: By Appointment</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{t('contact.messageTitle')}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('contact.formNote')}
                  </p>
                </div>
                <span className="hidden md:inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-700">
                  <FaCheckCircle />
                  WhatsApp Preferred
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.name')}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.email')}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contact.phone')}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                      {t('contact.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.subject')}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.message')}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition duration-300"
                >
                  {t('contact.send')}
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-4 md:p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{t('contact.mapTitle')}</h3>
                  <p className="text-sm text-gray-600">{t('contact.mapSubtitle')}</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <iframe
                  title="BN Construction Map"
                  src="https://www.google.com/maps?q=Patna%20Chauraha%20Ravi%20Complex%20Barhalganj%20Gorakhpur&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quick Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-red-600 text-2xl">
              <FaPhoneAlt />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('labels.callUs')}</h3>
            <p className="text-gray-700">9956914748</p>
            <p className="text-gray-700">7985889608</p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-amber-600 text-2xl">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('labels.email')}</h3>
            <p className="text-gray-700">bnconstruction2025@gmail.com</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-red-600 text-2xl">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('sections.address')}</h3>
            <p className="text-gray-700">
              Patna Chauraha, Barhalganj, Gorakhpur (273402)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}