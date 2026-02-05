import { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      reviews: 'Reviews',
      contact: 'Contact Us'
    },
    hero: {
      badge: 'BN Construction',
      title: 'Build Better. Build Faster.',
      subtitle: 'Civil contractor for residential & commercial projects.',
      hint: 'Home map or complete construction — contact us today.'
    },
    cta: {
      quote: 'Get a Quote',
      whatsapp: 'WhatsApp',
      call: 'Call',
      email: 'Email Us',
      contactNow: 'Ready to Start Your Project?'
    },
    sections: {
      services: 'Our Services',
      projects: 'Recent Projects',
      address: 'Our Address',
      highlights: 'Highlights'
    },
    home: {
      servicesSubtitle: 'Complete construction solutions under one roof.',
      projectsSubtitle: 'Real work from our residential, interior, and finishing teams.',
      addressText: 'Patna Chauraha, Ravi Complex Ground Floor, Barhalganj, Gorakhpur, Uttar Pradesh (273402)',
      addressSub: 'Site visit and estimate available. Labor contracts also available.',
      highlights: [
        'Home map + complete construction',
        'Interior design + professional painting',
        'Tiles fitting + stone finishing',
        'Quality materials + on-time delivery'
      ]
    },
    services: {
      list: [
        { title: 'Consulting', desc: 'Site visit, budget planning, and a clear execution roadmap.' },
        { title: 'Residential Construction', desc: 'Complete home construction with reliable quality control.' },
        { title: 'Commercial Projects', desc: 'Shops, offices, and commercial buildings delivered on time.' },
        { title: 'Architecture & Planning', desc: 'Modern layouts, elevation design, and smart space planning.' },
        { title: 'Interior & Painting', desc: 'Professional finishing with premium paint and detailing.' },
        { title: 'Structure & Shuttering', desc: 'Strong RCC structure with accurate shuttering execution.' }
      ]
    },
    projects: {
      list: [
        {
          title: 'Modern Family House',
          description: 'Complete home construction with elevation and finishing.',
          caption: 'RCC structure + elevation work',
          tag: 'Residential'
        },
        {
          title: 'Interior & Paint',
          description: 'Interior finishing with premium paint and lighting.',
          caption: 'Wardrobe + ceiling + lighting finish',
          tag: 'Interior'
        },
        {
          title: 'Tiles & Stone Work',
          description: 'Durable flooring and elegant stone finishing.',
          caption: 'Precision tile alignment + leveling',
          tag: 'Finishing'
        },
        {
          title: 'Shop + Office Build',
          description: 'Commercial structure with strong RCC and clean layout.',
          caption: 'Scaffolding + exterior finishing',
          tag: 'Commercial'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch for home design, construction, or interior work.',
      messageTitle: 'Send a Message',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      servicesTitle: 'Services',
      servicesText: 'Home design, interiors, painting, tiles, and complete construction.',
      servicesSub: 'Site visit and labor contracts available.',
      hoursTitle: 'Hours'
    },
    about: {
      title: 'About BN Construction',
      subtitle: 'Er. Bijendra Nishad — Civil Contractor, Building Construction & Design',
      workTitle: 'Our Work',
      why: 'Why Choose Us',
      cta: 'Ready to Build?'
    },
    testimonials: {
      title: 'Client Reviews',
      subtitle: 'Quality, timing, and trusted delivery',
      cta: 'Start Your Project'
    },
    labels: {
      callUs: 'Call Us',
      whatsapp: 'WhatsApp',
      email: 'Email',
      getDirections: 'Get Directions'
    }
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'सेवाएं',
      projects: 'प्रोजेक्ट्स',
      reviews: 'रिव्यू',
      contact: 'संपर्क करें'
    },
    hero: {
      badge: 'BN Construction',
      title: 'बेहतर निर्माण. तेज़ डिलीवरी.',
      subtitle: 'रेसिडेंशियल और कमर्शियल प्रोजेक्ट्स के लिए विश्वसनीय कॉन्ट्रैक्टर.',
      hint: 'घर का नक्शा या पूरा कंस्ट्रक्शन — आज ही संपर्क करें।'
    },
    cta: {
      quote: 'कोटेशन लें',
      whatsapp: 'व्हाट्सऐप',
      call: 'कॉल करें',
      email: 'ईमेल करें',
      contactNow: 'प्रोजेक्ट शुरू करें?'
    },
    sections: {
      services: 'हमारी सेवाएं',
      projects: 'हाल के प्रोजेक्ट्स',
      address: 'हमारा पता',
      highlights: 'मुख्य बातें'
    },
    home: {
      servicesSubtitle: 'कंस्ट्रक्शन की सभी सेवाएं एक ही जगह.',
      projectsSubtitle: 'रेसिडेंशियल, इंटीरियर और फिनिशिंग का वास्तविक काम.',
      addressText: 'पटना चौराहा, रवि कॉम्प्लेक्स ग्राउंड फ्लोर, बरहलगंज, गोरखपुर, उत्तर प्रदेश (273402)',
      addressSub: 'साइट विज़िट और अनुमान उपलब्ध. लेबर कॉन्ट्रैक्ट भी।',
      highlights: [
        'घर का नक्शा + पूरा कंस्ट्रक्शन',
        'इंटीरियर डिजाइन + प्रोफेशनल पेंटिंग',
        'टाइल्स फिटिंग + स्टोन फिनिशिंग',
        'क्वालिटी मटेरियल + समय पर डिलीवरी'
      ]
    },
    services: {
      list: [
        { title: 'कंसल्टिंग', desc: 'साइट विज़िट, बजट प्लानिंग और स्पष्ट रोडमैप.' },
        { title: 'रेसिडेंशियल कंस्ट्रक्शन', desc: 'घर का पूरा निर्माण और क्वालिटी कंट्रोल.' },
        { title: 'कमर्शियल प्रोजेक्ट्स', desc: 'दुकान, ऑफिस और कमर्शियल निर्माण.' },
        { title: 'आर्किटेक्चर व प्लानिंग', desc: 'लेआउट, एलिवेशन और स्पेस प्लानिंग.' },
        { title: 'इंटीरियर और पेंटिंग', desc: 'प्रीमियम फिनिशिंग और डिटेलिंग.' },
        { title: 'स्ट्रक्चर व सटरिंग', desc: 'मजबूत RCC स्ट्रक्चर और सटीक सटरिंग.' }
      ]
    },
    projects: {
      list: [
        {
          title: 'मॉडर्न फैमिली हाउस',
          description: 'एलिवेशन और फिनिशिंग सहित पूरा निर्माण.',
          caption: 'RCC स्ट्रक्चर + एलिवेशन',
          tag: 'रेसिडेंशियल'
        },
        {
          title: 'इंटीरियर + पेंट',
          description: 'प्रीमियम पेंट और लाइटिंग फिनिश.',
          caption: 'वार्डरोब + सीलिंग + लाइटिंग',
          tag: 'इंटीरियर'
        },
        {
          title: 'टाइल्स + स्टोन',
          description: 'मजबूत फ्लोरिंग और स्टोन फिनिशिंग.',
          caption: 'सटीक टाइल अलाइनमेंट',
          tag: 'फिनिशिंग'
        },
        {
          title: 'शॉप + ऑफिस बिल्ड',
          description: 'मजबूत RCC और क्लीन लेआउट.',
          caption: 'स्कैफोल्डिंग + एक्सटीरियर फिनिश',
          tag: 'कमर्शियल'
        }
      ]
    },
    contact: {
      title: 'संपर्क करें',
      subtitle: 'होम डिजाइन, कंस्ट्रक्शन या इंटीरियर के लिए संपर्क करें।',
      messageTitle: 'संदेश भेजें',
      name: 'नाम',
      email: 'ईमेल',
      phone: 'फोन',
      subject: 'विषय',
      message: 'संदेश',
      send: 'भेजें',
      servicesTitle: 'सेवाएं',
      servicesText: 'होम डिजाइन, इंटीरियर, पेंटिंग, टाइल्स और पूरा कंस्ट्रक्शन।',
      servicesSub: 'साइट विज़िट और लेबर कॉन्ट्रैक्ट उपलब्ध।',
      hoursTitle: 'समय'
    },
    about: {
      title: 'BN Construction के बारे में',
      subtitle: 'Er. Bijendra Nishad — Civil Contractor, Building Construction & Design',
      workTitle: 'हमारा काम',
      why: 'हमें क्यों चुनें',
      cta: 'शुरू करें'
    },
    testimonials: {
      title: 'ग्राहक रिव्यू',
      subtitle: 'क्वालिटी, समय और भरोसा',
      cta: 'प्रोजेक्ट शुरू करें'
    },
    labels: {
      callUs: 'कॉल करें',
      whatsapp: 'व्हाट्सऐप',
      email: 'ईमेल',
      getDirections: 'मैप देखें'
    }
  }
}

export function LanguageProvider({ children }) {
  const stored = typeof window !== 'undefined' ? localStorage.getItem('bn_lang') : null
  const [lang, setLang] = useState(stored || 'en')

  const value = useMemo(() => ({
    lang,
    setLang: (next) => {
      setLang(next)
      if (typeof window !== 'undefined') {
        localStorage.setItem('bn_lang', next)
      }
    },
    t: (key) => {
      const keys = key.split('.')
      let current = translations[lang]
      for (const k of keys) {
        current = current?.[k]
      }
      return current ?? key
    },
    translations
  }), [lang])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLang must be used within LanguageProvider')
  }
  return ctx
}
