import { useLang } from '../i18n.jsx'

export default function Testimonials() {
  const { lang, t } = useLang()
  const testimonials = [
    {
      id: 1,
      name: lang === 'en' ? 'Client 1 (Gorakhpur)' : 'ग्राहक 1 (गोरखपुर)',
      content: lang === 'en' ? 'Quality work delivered on time. The team was professional and helpful.' : 'क्वालिटी काम समय पर हुआ। टीम प्रोफेशनल और मददगार थी।'
    },
    {
      id: 2,
      name: lang === 'en' ? 'Client 2 (Barhalganj)' : 'ग्राहक 2 (बरहलगंज)',
      content: lang === 'en' ? 'Interior and painting finish was clean and premium. Great experience.' : 'इंटीरियर और पेंटिंग फिनिशिंग बहुत साफ और प्रीमियम थी।'
    },
    {
      id: 3,
      name: lang === 'en' ? 'Client 3 (Gorakhpur)' : 'ग्राहक 3 (गोरखपुर)',
      content: lang === 'en' ? 'Tiles fitting and stone work were solid and neatly executed.' : 'टाइल्स फिटिंग और स्टोन वर्क मजबूत और साफ था।'
    }
  ]

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-700 to-amber-500 text-white rounded-lg p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('testimonials.title')}</h1>
        <p className="text-base md:text-lg text-white/90">{t('testimonials.subtitle')}</p>
      </section>

      {/* Testimonials Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-2xl mb-3">⭐ ⭐ ⭐ ⭐ ⭐</div>
              <p className="text-gray-700 mb-4 italic text-sm md:text-base">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-400 to-red-600 text-white p-6 md:p-12 rounded-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{t('testimonials.cta')}</h2>
        <p className="text-base md:text-lg mb-6">{lang === 'en' ? 'Call now for a free consultation' : 'फ्री कंसल्टेशन के लिए कॉल करें'}</p>
        <a href="tel:+919956914748" className="inline-block bg-white text-red-600 px-6 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-gray-100 transition text-sm md:text-base">
          {lang === 'en' ? 'Call Now' : 'कॉल करें'}
        </a>
      </section>
    </div>
  )
}

