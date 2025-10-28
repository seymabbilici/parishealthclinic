'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Check, Shield, Clock, Award, User, ChevronDown, ChevronUp, MapPin, Mail, Phone } from 'lucide-react';

export default function Rhinoplasty() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Burun estetiği fiyatları ne kadar?',
      a: 'Burun estetiği fiyatlarımız €3,000&apos;dan başlamaktadır ve işleminize göre değişiklik gösterebilir. Detaylı fiyat teklifi için bizimle iletişime geçin.',
    },
    {
      q: 'İstanbul&apos;da burun estetiği güvenli mi?',
      a: 'Evet, kesinlikle. Uluslararası sertifikalı doktorlarla ve dünya standartlarında modern tesislerde çalışıyoruz.',
    },
    {
      q: 'Burun estetiği sonrası iyileşme ne kadar sürer?',
      a: 'İlk şişlikler 7-14 gün içinde azalır. Final sonuçlar 6-12 ay içinde netleşir. Ekibimiz kapsamlı bir bakım sağlar.',
    },
    {
      q: 'Burun estetiği nefes problemlerimi çözer mi?',
      a: 'Evet, burun estetiği hem görünümünüzü iyileştirir hem de nefes problemlerinizi çözer. Doktorlarımız fonksiyonel ve estetik açıları değerlendirir.',
    },
    {
      q: 'Ameliyattan sonra İstanbul&apos;da kalmam gerekiyor mu?',
      a: 'İlk iyileşme ve takip için 7-10 gün İstanbul&apos;da kalmanızı öneriyoruz. Ekibimiz konaklama ayarlamalarında yardımcı olur.',
    },
    {
      q: 'Sonuçlar kalıcı mı?',
      a: 'Evet, burun estetiği sonuçları kalıcıdır. Yeni burnunuz hayat boyu sizinle olacak.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Burun Estetiği <span className="text-purple-clinic">İstanbul</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  İstanbul&apos;da dünya standartlarında burun estetiği deneyimi. Uzman doktorlarımız, 
                  doğal sonuçlar ve uygun fiyatlar. Hayalinizdeki burun Paris Health Clinic&apos;te sizi bekliyor.
                </p>
                <a
                  href="https://wa.me/905444066234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-green-whatsapp text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="hidden sm:inline">Ücretsiz WhatsApp Danışmanlığı</span>
                  <span className="sm:hidden">Ücretsiz Danışmanlık</span>
                </a>
              </div>

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=800&h=600&fit=crop&q=80"
                  alt="Burun Estetiği İstanbul - Profesyonel burun ameliyatı"
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              {[
                { icon: Check, title: 'Doğal Sonuçlar', desc: 'Uzman cerrahlar' },
                { icon: Shield, title: 'Güvenli Operasyon', desc: 'Sertifikalı tesis' },
                { icon: Clock, title: 'Hızlı İyileşme', desc: 'Minimal süre' },
                { icon: Award, title: '20+ Yıl', desc: 'Kanıtlanmış deneyim' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-4 md:p-6 shadow-lg text-center">
                    <div className="bg-purple-clinic/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-purple-clinic" />
                    </div>
                    <h3 className="font-bold text-sm md:text-base text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-purple-clinic font-semibold mb-2">Ücretsiz Danışmanlık</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                <span className="text-purple-clinic">Burun Estetiği Fiyat 2025</span> Teklifi Alın
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Bizimle iletişime geçin ve İstanbul burun estetiği için kişiselleştirilmiş fiyat teklifi alın
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* WhatsApp Card */}
              <div className="bg-gradient-to-br from-green-whatsapp to-green-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-white/20 rounded-full p-4">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">WhatsApp</h3>
                    <p className="text-white/90">Anında danışmanlık</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/905444066234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-green-whatsapp py-4 rounded-xl font-bold text-center hover:bg-gray-100 transition-colors"
                >
                  Hemen Mesaj At
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-gradient-to-br from-purple-clinic to-purple-700 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-white/20 rounded-full p-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Bizi Arayın</h3>
                    <p className="text-white/90">Uzmanlarla konuşun</p>
                  </div>
                </div>
                <a
                  href="tel:+905444066234"
                  className="block bg-white text-purple-clinic py-4 rounded-xl font-bold text-center hover:bg-gray-100 transition-colors"
                >
                  0 544 406 62 34
                </a>
              </div>
            </div>

            {/* Quick Form */}
            <div className="bg-gray-50 rounded-3xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Daha Fazla Bilgi İsteyin
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız *"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-posta *"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Telefon *"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Ülke *"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                    required
                  />
                </div>
                <textarea
                  placeholder="Mesajınız (Opsiyonel)"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-purple-clinic text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
                >
                  Teklif Alın
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-purple-clinic font-semibold mb-2">Diğer İşlemler</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              En İyi Versiyonunuz Olun
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { title: 'Burun Estetiği', img: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=400&fit=crop&q=80' },
              { title: 'Liposuction', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80' },
              { title: 'Karın Germe', img: 'https://images.unsplash.com/photo-1571019614286-e5b8a7c3e23e?w=400&h=400&fit=crop&q=80' },
              { title: 'Popo Şekillendirme', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80' },
              { title: 'Göğüs Büyütme', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80' },
              { title: 'Göğüs Estetiği', img: 'https://images.unsplash.com/photo-1571019614286-e5b8a7c3e23e?w=400&h=400&fit=crop&q=80' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                <div className="relative h-32 md:h-48 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="font-bold text-xs md:text-sm text-gray-900 text-center">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-purple-clinic font-semibold mb-2">Avrupa Sertifikalı</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Türkiye&apos;nin En Deneyimli Doktorları
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80"
                    alt="Dr. Jean Martin - Burun Estetiği Uzmanı"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Jean Martin</h3>
                  <p className="text-purple-clinic font-semibold mb-4">Estetik Cerrahi Uzmanı</p>
                  <p className="text-gray-600 text-sm md:text-base">
                    20+ yıl deneyimli uzman doktorumuz binlerce başarılı burun estetiği ameliyatı gerçekleştirmiştir.
                    Her hasta için doğal ve güzel sonuçlar sağlamaktadır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Burun Estetiği İstanbul */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-clinic mb-6">
                Burun Estetiği İstanbul - En İyi Rhinoplasty
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  Türkiye&apos;de <strong>burun estetiği (rhinoplasty)</strong> yaptırmak mı istiyorsunuz? 
                  Paris Health Clinic İstanbul, uzman doktorları ve uygun burun estetiği fiyatlarıyla 
                  dünya standartlarında burun ameliyatı hizmeti sunuyor. Klinik, modern tesislerimiz 
                  ve on yıllarca deneyimle estetik cerrahi alanında öncü konumda.
                </p>
                <p>
                  <strong>İstanbul burun estetiği</strong> mükemmel cerrah uzmanlığı, son teknoloji 
                  hastaneler ve rekabetçi fiyatlandırma nedeniyle giderek popüler hale geliyor. 
                  Hastalarımız doğal, simetrik burun şekilleri için bize güveniyor.
                </p>
              </div>
            </div>

            {/* Burun Estetiği Fiyat 2025 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-purple-clinic mb-6">
                Burun Estetiği Fiyat 2025 - Uygun Fiyatlı Burun Ameliyatı
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  <strong>Burun estetiği fiyat 2025</strong> işleminizin karmaşıklığına bağlı olarak 
                  €3,000&apos;dan başlamaktadır. Avrupa ülkelerinden farklı olarak, Türkiye&apos;de aynı 
                  yüksek kaliteli sonuçları çok daha uygun fiyatlarla elde edebilirsiniz.
                </p>
                <div className="bg-purple-50 rounded-2xl p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Burun Estetiği Fiyatına Dahil Olanlar:</h3>
                  <ul className="space-y-2">
                    {['Ameliyat öncesi konsültasyon', 'Cerrahi işlem', 'Hastane kalışı', 'Ameliyat sonrası bakım', 'Takip randevuları'].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-purple-clinic flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Neden Türkiye&apos;de Burun Estetiği?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Uluslararası sertifikalı uzman cerrahlar',
                  'Modern, son teknoloji tesisler',
                  'Uygun burun estetiği fiyatları',
                  'Doğal görünümlü sonuçlar',
                  'Minimum iyileşme süresi',
                  'Kapsamlı ameliyat sonrası bakım',
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-gray-600">Türkiye&apos;de burun estetiği hakkında yaygın sorular</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-bold text-gray-900 text-lg pr-4">{faq.q}</h3>
                    {openFAQ === idx ? (
                      <ChevronUp className="w-6 h-6 text-purple-clinic flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-purple-clinic flex-shrink-0" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Hayalinizdeki Burna Bugün Kavuşun!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              İstanbul&apos;da uzman cerrahlarla profesyonel burun estetiği. En iyi fiyatlar, doğal sonuçlar.
              Ücretsiz danışmanlık mevcut!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905444066234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-green-whatsapp text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-green-600 transition-colors shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp ile Başlat</span>
              </a>
              <a
                href="tel:+905444066234"
                className="inline-flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/30 transition-colors"
              >
                <span>0 544 406 62 34</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
