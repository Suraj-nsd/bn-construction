import { FaBuilding, FaDraftingCompass, FaHardHat, FaPaintRoller, FaHome, FaThLarge, FaTools } from 'react-icons/fa'
import { useLang } from '../i18n.jsx'

export default function Services() {
  const { lang } = useLang()
  const services = [
    { title: lang === 'en' ? 'Consulting' : 'कंसल्टिंग', description: lang === 'en' ? 'Site visit, budget planning, and roadmap.' : 'साइट विज़िट, बजट प्लानिंग और रोडमैप।', icon: FaDraftingCompass },
    { title: lang === 'en' ? 'Residential Construction' : 'रेसिडेंशियल कंस्ट्रक्शन', description: lang === 'en' ? 'Complete home construction with quality control.' : 'घर का पूरा निर्माण और क्वालिटी कंट्रोल।', icon: FaHome },
    { title: lang === 'en' ? 'Commercial Projects' : 'कमर्शियल प्रोजेक्ट्स', description: lang === 'en' ? 'Shops, offices, and commercial builds.' : 'शॉप, ऑफिस और कमर्शियल निर्माण।', icon: FaBuilding },
    { title: lang === 'en' ? 'Architecture & Planning' : 'आर्किटेक्चर और प्लानिंग', description: lang === 'en' ? 'Layout, elevation, and structural planning.' : 'लेआउट, एलिवेशन और स्ट्रक्चर प्लानिंग।', icon: FaTools },
    { title: lang === 'en' ? 'Interior Design' : 'इंटीरियर डिजाइन', description: lang === 'en' ? 'Functional, modern interiors with clean finishing.' : 'मॉडर्न इंटीरियर और साफ फिनिशिंग।', icon: FaPaintRoller },
    { title: lang === 'en' ? 'Painting Services' : 'पेंटिंग सर्विस', description: lang === 'en' ? 'Premium paint finish for interior and exterior.' : 'इंटीरियर और एक्सटीरियर के लिए प्रीमियम पेंट।', icon: FaPaintRoller },
    { title: lang === 'en' ? 'Structure & Shuttering' : 'स्ट्रक्चर और सटरिंग', description: lang === 'en' ? 'Accurate shuttering and strong RCC work.' : 'सटीक सटरिंग और मजबूत RCC काम।', icon: FaHardHat },
    { title: lang === 'en' ? 'Tiles & Stone Work' : 'टाइल्स और स्टोन वर्क', description: lang === 'en' ? 'Tiles fitting and stone finishing work.' : 'टाइल फिटिंग और स्टोन फिनिशिंग।', icon: FaThLarge }
  ]

  return (
    <div className="space-y-8 md:space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-700 to-amber-500 text-white rounded-lg p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{lang === 'en' ? 'Our Services' : 'हमारी सेवाएं'}</h1>
        <p className="text-base md:text-lg text-white/90">{lang === 'en' ? 'Complete construction solutions under one roof' : 'कंस्ट्रक्शन की सभी सेवाएं एक ही जगह'}</p>
      </section>

      {/* Services Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div 
                key={idx} 
                className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition hover:-translate-y-1 border-t-4 border-red-600"
              >
                <div className="text-4xl md:text-5xl mb-3 text-red-600"><Icon /></div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Detailed Info */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{lang === 'en' ? 'Service Details' : 'सेवा विवरण'}</h2>
        
        <div className="space-y-4 md:space-y-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-lg md:text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-400 to-red-600 text-white p-6 md:p-12 rounded-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{lang === 'en' ? 'Start Your Project Today' : 'आज ही प्रोजेक्ट शुरू करें'}</h2>
        <p className="text-sm md:text-base mb-6">{lang === 'en' ? 'Contact us for a free consultation' : 'फ्री कंसल्टेशन के लिए संपर्क करें'}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+919956914748" className="bg-white text-red-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition text-sm md:text-base">
            {lang === 'en' ? 'Call: +91 9956914748' : 'कॉल करें: +91 9956914748'}
          </a>
          <a href="/contact" className="bg-amber-300 text-gray-900 px-6 py-3 rounded font-semibold hover:bg-amber-200 transition text-sm md:text-base">
            {lang === 'en' ? 'Contact Form' : 'कॉन्टैक्ट फॉर्म'}
          </a>
        </div>
      </section>
    </div>
  )
}

