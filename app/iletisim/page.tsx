'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert('Teşekkürler! Mesajınız alındı. En kısa sürede size dönüş yapacağız.');
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Bize <span className="text-purple-clinic">Ulaşın</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Sorularınız, önerileriniz veya randevu talepleriniz için bizimle iletişime geçin.
              Ekibimiz 7/24 hizmetinizdedir.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <a
              href="https://wa.me/905444066234"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all text-center group"
            >
              <div className="bg-green-whatsapp/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-10 h-10 text-green-whatsapp" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">7/24 Canlı Destek</p>
              <p className="text-lg font-semibold text-purple-clinic">0 544 406 62 34</p>
            </a>

            {/* Phone */}
            <a
              href="tel:+905444066234"
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all text-center group"
            >
              <div className="bg-purple-clinic/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-10 h-10 text-purple-clinic" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Telefon</h3>
              <p className="text-gray-600 mb-4">Hızlı Yanıt</p>
              <p className="text-lg font-semibold text-purple-clinic">0 544 406 62 34</p>
            </a>

            {/* Email */}
            <a
              href="mailto:information@parishealthclinic.com"
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all text-center group"
            >
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">E-posta</h3>
              <p className="text-gray-600 mb-4">24/7 Aktif</p>
              <p className="text-sm font-semibold text-purple-clinic break-all">
                information@parishealthclinic.com
              </p>
            </a>
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız *"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Telefon *"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="E-posta *"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Ülke *"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                    required
                  />
                </div>
                <textarea
                  placeholder="Mesajınız *"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-purple-clinic text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Gönder</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-clinic/10 rounded-full p-4">
                    <MapPin className="w-6 h-6 text-purple-clinic" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Adres</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nisbetiye Mahallesi<br />
                      Gazi Güçnar Sokak<br />
                      Uygur İş Merkezi No:4 D:2<br />
                      Beşiktaş / İstanbul
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-4">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Çalışma Saatleri</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                      <p>Cumartesi: 09:00 - 13:00</p>
                      <p>Pazar: Kapalı</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Hemen Randevu Alın</h3>
                <p className="mb-6">WhatsApp üzerinden ücretsiz danışmanlık alın</p>
                <a
                  href="https://wa.me/905444066234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-purple-clinic py-3 rounded-xl font-bold text-center hover:bg-gray-100 transition-colors"
                >
                  WhatsApp ile Başlat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600 text-xl">Harita burada görünecek</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

