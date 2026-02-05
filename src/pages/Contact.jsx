import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
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
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-amber-500 py-12 md:py-16">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-amber-400/30 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-red-900/40 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{t('contact.title')}</h1>
          <p className="text-lg text-white/90">
            {t('contact.subtitle')}
          </p>
          <p className="mt-2 text-sm text-amber-100/90">
            {t('hero.hint')}
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

      {/* Main Container */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Success Message */}
        {submitted && (
          <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {lang === 'en' ? 'Thank you! Opening WhatsApp to send your message.' : 'धन्यवाद! आपका संदेश भेजने के लिए WhatsApp खुल रहा है।'}
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
                className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${card.accent} transition hover:-translate-y-1 hover:shadow-lg`}
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

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Side - Address */}
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-red-600">
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
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-amber-600 mb-2">{t('contact.servicesTitle')}</h3>
              <p className="text-gray-700">{t('contact.servicesText')}</p>
              <p className="text-gray-700 mt-2">{t('contact.servicesSub')}</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-red-600 mb-2">{t('contact.hoursTitle')}</h3>
              <p className="text-gray-700">Monday - Saturday: 9 AM - 7 PM</p>
              <p className="text-gray-700">Sunday: By Appointment</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.messageTitle')}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {lang === 'en'
                  ? 'Submitting will open WhatsApp with your details. If blocked, we will open your email app.'
                  : 'सबमिट करने पर आपका मैसेज WhatsApp में खुलेगा। अगर ब्लॉक हो, तो ईमेल खुलेगा।'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  />
                </div>

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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  />
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
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
