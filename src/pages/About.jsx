import { FaDraftingCompass, FaHardHat, FaPaintRoller, FaThLarge, FaHandshake, FaStar } from 'react-icons/fa'
import { useLang } from '../i18n.jsx'

export default function About() {
  const { t, lang } = useLang()
  const highlights = [
    { title: lang === 'en' ? 'Design & Planning' : 'डिज़ाइन और प्लानिंग', desc: lang === 'en' ? 'Home map, elevation, and smart layout planning.' : 'घर का नक्शा, एलिवेशन और स्मार्ट लेआउट प्लानिंग।', icon: FaDraftingCompass },
    { title: lang === 'en' ? 'Complete Construction' : 'सम्पूर्ण कंस्ट्रक्शन', desc: lang === 'en' ? 'From foundation to finishing with strong execution.' : 'फाउंडेशन से फिनिशिंग तक मजबूत काम।', icon: FaHardHat },
    { title: lang === 'en' ? 'Interior & Painting' : 'इंटीरियर और पेंटिंग', desc: lang === 'en' ? 'Modern interiors with premium paint finishing.' : 'मॉडर्न इंटीरियर और प्रीमियम पेंट फिनिश।', icon: FaPaintRoller },
    { title: lang === 'en' ? 'Tiles & Stone Work' : 'टाइल्स और स्टोन वर्क', desc: lang === 'en' ? 'Flooring, tile fitment, and stone finishing.' : 'फ्लोरिंग, टाइल फिटमेंट और स्टोन फिनिश।', icon: FaThLarge },
    { title: lang === 'en' ? 'Trusted Process' : 'भरोसेमंद प्रक्रिया', desc: lang === 'en' ? 'Clear communication and on-time delivery.' : 'स्पष्ट कम्युनिकेशन और समय पर डिलीवरी।', icon: FaHandshake },
    { title: lang === 'en' ? 'Quality Focus' : 'क्वालिटी फोकस', desc: lang === 'en' ? 'Materials and finishing with no compromise.' : 'मटेरियल और फिनिशिंग में कोई समझौता नहीं।', icon: FaStar },
  ]

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-700 to-amber-500 text-white rounded-lg p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('about.title')}</h1>
        <p className="text-base md:text-lg text-white/90">
          {t('about.subtitle')}
        </p>
        <p className="text-sm text-amber-100/90 mt-2">
          {t('hero.hint')}
        </p>
      </section>

      {/* Story */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('about.workTitle')}</h2>
            <p className="text-gray-700 mb-3 text-sm md:text-base leading-relaxed">
              {lang === 'en'
                ? 'BN Construction provides end-to-end building construction and design services for residential and commercial projects.'
                : 'BN Construction रेसिडेंशियल और कमर्शियल प्रोजेक्ट्स के लिए एंड-टू-एंड कंस्ट्रक्शन और डिजाइन सेवाएं देता है।'}
            </p>
            <p className="text-gray-700 mb-3 text-sm md:text-base leading-relaxed">
              {lang === 'en'
                ? 'We focus on quality, clean finishing, and on-time delivery—so your project stays on budget and on schedule.'
                : 'हम क्वालिटी, साफ फिनिशिंग और समय पर डिलीवरी पर फोकस करते हैं।'}
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {lang === 'en'
                ? 'Interior design, painting, tiles, and stone work are available as part of complete packages.'
                : 'इंटीरियर, पेंटिंग, टाइल्स और स्टोन वर्क सेवाएं भी उपलब्ध हैं।'}
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-amber-500 p-6 md:p-8 rounded-lg text-white text-center">
            <div className="text-5xl md:text-6xl mb-4">🏢</div>
            <p className="text-lg md:text-xl font-bold">{lang === 'en' ? 'Building Your Dream Home' : 'आपका ड्रीम होम'}</p>
            <p className="text-sm md:text-base mt-2">{lang === 'en' ? 'From planning to full construction' : 'प्लानिंग से पूरा कंस्ट्रक्शन'}</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{t('about.why')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="bg-gray-50 p-4 md:p-6 rounded-lg text-center hover:shadow-md transition">
                <div className="text-4xl mb-3 text-red-600">
                  <Icon />
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-red-700 to-amber-500 text-white p-6 md:p-12 rounded-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('about.cta')}</h2>
        <p className="text-sm md:text-base mb-6">{lang === 'en' ? 'Get expert consultation for your project' : 'अपने प्रोजेक्ट के लिए एक्सपर्ट सलाह लें'}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+919956914748" className="bg-white text-red-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition text-sm md:text-base">
            {t('cta.call')}
          </a>
          <a href="https://wa.me/919956914748" className="bg-amber-300 text-gray-900 px-6 py-3 rounded font-semibold hover:bg-amber-200 transition text-sm md:text-base">
            {t('cta.whatsapp')}
          </a>
        </div>
      </section>
    </div>
  )
}

