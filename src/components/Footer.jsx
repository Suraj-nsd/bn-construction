import { Link } from 'react-router-dom'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-gray-300 mt-12 md:mt-16">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3">BN Construction</h3>
            <p className="text-gray-400 text-xs md:text-sm">Civil Contractor</p>
            <p className="text-gray-400 text-xs md:text-sm mb-2">Er. Bijendra Nishad</p>
            <p className="text-gray-400 text-xs md:text-sm">Building Construction & Design</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li><Link to="/home" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <li className="text-gray-400">Residential Construction</li>
              <li className="text-gray-400">Commercial Projects</li>
              <li className="text-gray-400">Interior & Painting</li>
              <li className="text-gray-400">Tiles & Stone Work</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-3">Contact</h4>
            <div className="space-y-3 text-xs md:text-sm">
              <p className="flex items-start gap-2 text-gray-400">
                <FaMapMarkerAlt className="mt-0.5" />
                Patna Chauraha, Barhalganj, Gorakhpur (273402)
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <FaEnvelope />
                <a href="mailto:bnconstruction2025@gmail.com" className="hover:text-white transition break-all">bnconstruction2025@gmail.com</a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <FaPhoneAlt />
                <a href="tel:+919956914748" className="hover:text-white transition">+91 9956914748</a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <FaPhoneAlt />
                <a href="tel:+917985889608" className="hover:text-white transition">+91 7985889608</a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <FaWhatsapp />
                <a href="https://wa.me/919956914748" className="hover:text-white transition">WhatsApp</a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm">
            <p className="text-gray-400 text-center sm:text-left">
              &copy; {currentYear} BN Construction. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="tel:+919956914748" className="text-gray-400 hover:text-white transition text-xs md:text-sm">Call</a>
              <a href="mailto:bnconstruction2025@gmail.com" className="text-gray-400 hover:text-white transition text-xs md:text-sm">Email</a>
              <a href="https://wa.me/919956914748" className="text-gray-400 hover:text-white transition text-xs md:text-sm">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
