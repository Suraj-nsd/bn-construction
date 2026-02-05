import { useLang } from '../i18n.jsx'

export default function Projects() {
  const { lang } = useLang()
  const projects = [
    {
      id: 1,
      title: lang === 'en' ? 'Modern Family Home' : 'मॉडर्न फैमिली होम',
      category: lang === 'en' ? 'Residential' : 'रेसिडेंशियल',
      description: lang === 'en' ? 'Complete construction with elevation, interiors, and finishing.' : 'एलिवेशन, इंटीरियर और फिनिशिंग सहित पूरा निर्माण।',
      image: '/projects/home-1.jpg'
    },
    {
      id: 2,
      title: lang === 'en' ? 'Commercial Build' : 'कमर्शियल बिल्ड',
      category: lang === 'en' ? 'Commercial' : 'कमर्शियल',
      description: lang === 'en' ? 'Shops and offices with strong RCC and clean layout.' : 'मजबूत RCC और क्लीन लेआउट के साथ शॉप/ऑफिस।',
      image: '/projects/commercial-1.jpg'
    },
    {
      id: 3,
      title: lang === 'en' ? 'Interior Upgrade' : 'इंटीरियर अपग्रेड',
      category: lang === 'en' ? 'Interior' : 'इंटीरियर',
      description: lang === 'en' ? 'Modern interiors with lighting, paint, and detailing.' : 'लाइटिंग, पेंट और डिटेलिंग के साथ मॉडर्न इंटीरियर।',
      image: '/projects/interior-1.jpg'
    },
    {
      id: 4,
      title: lang === 'en' ? 'Tiles & Stone Work' : 'टाइल्स और स्टोन वर्क',
      category: lang === 'en' ? 'Finishing' : 'फिनिशिंग',
      description: lang === 'en' ? 'Durable flooring and stone finishing with premium look.' : 'मजबूत फ्लोरिंग और प्रीमियम स्टोन फिनिशिंग।',
      image: '/projects/tiles-1.jpg'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-700 to-amber-500 text-white rounded-lg p-6 md:p-12">
        <h1 className="text-4xl font-bold mb-4">{lang === 'en' ? 'Our Projects' : 'हमारे प्रोजेक्ट्स'}</h1>
        <p className="text-lg text-white/90">{lang === 'en' ? 'Residential, commercial, interiors, and finishing work' : 'रेसिडेंशियल, कमर्शियल, इंटीरियर और फिनिशिंग काम'}</p>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-44 md:h-48">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <span className="bg-red-100 text-red-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-400 to-red-600 text-white p-6 md:p-12 rounded-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{lang === 'en' ? 'Ready to Start Your Project?' : 'प्रोजेक्ट शुरू करें?'}</h2>
        <p className="text-base md:text-lg mb-6">{lang === 'en' ? 'Let us help you build something amazing' : 'हम आपके प्रोजेक्ट को बेहतरीन बनाएंगे'}</p>
        <a href="tel:+919956914748" className="inline-block bg-white text-red-600 px-6 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-gray-100 transition text-sm md:text-base">
          {lang === 'en' ? 'Call Now' : 'कॉल करें'}
        </a>
      </section>
    </div>
  )
}

