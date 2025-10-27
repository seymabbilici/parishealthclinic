'use client';

import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, MessageCircle, Music2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-clinic">PARIS</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Paris Health Clinic olarak, dünya standartlarında sağlık turizmi 
              ve estetik hizmetleri sunuyoruz. Güvenilir, kaliteli ve sonuç odaklı.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/parisclinictr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-clinic transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/parisclinictr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-clinic transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@parisclinictr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-clinic transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@parishealthclinic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-clinic transition-colors">
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#procedures" className="text-gray-400 hover:text-white transition-colors">
                  İşlemler
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-white transition-colors">
                  Müşteri Yorumları
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Hizmetler</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Yüz Estetiği
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Göğüs Estetiği
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Vücut Estetiği
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Saç Ekimi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Diş Estetiği
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-clinic mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Nisbetiye Mah. Gazi Güçnar Sok.<br />
                  Uygur İş Merkezi No:4 D:2<br />
                  Beşiktaş / İstanbul
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-clinic" />
                <a href="tel:+905444066234" className="text-gray-400 hover:text-white transition-colors">
                  0 544 406 62 34
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-clinic" />
                <a href="mailto:information@parishealthclinic.com" className="text-gray-400 hover:text-white transition-colors">
                  information@parishealthclinic.com
                </a>
              </li>
            </ul>

            <a
              href="https://wa.me/905444066234"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center space-x-2 bg-green-whatsapp text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp ile İletişim</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Paris Health Clinic. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Kullanım Koşulları
            </a>
            <a href="#" className="hover:text-white transition-colors">
              KVKK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

