'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Elif Yılmaz',
    rating: 5,
    text: 'Harika bir deneyim yaşadım. Doktorlar profesyonel, hastane çok temiz ve personel çok yardımsever. Sonuçlar hayalimin de ötesinde oldu. Kesinlikle tavsiye ederim!',
    image: 'https://images.unsplash.com/photo-1494790108375-be9c29b29330?w=200&h=200&fit=crop',
    location: 'İstanbul, Türkiye',
    procedure: 'Rhinoplasty',
  },
  {
    id: 2,
    name: 'Sophie Martin',
    rating: 5,
    text: 'Paris Health Clinic ile yaptığım göğüs estetiği operasyonumdan çok memnun kaldım. Hem kendimi daha özgüvenli hissediyorum hem de sonuçlar çok doğal görünüyor. Ekip çok profesyonel ve destekleyiciydi.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    location: 'Paris, Fransa',
    procedure: 'Breast Aesthetics',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    rating: 5,
    text: 'Face lift operasyonum için burayı seçtim ve çok doğru bir karar vermişim. Dr. ile görüşmemde bile hissettiğim güven operasyon sonrası da devam etti. Hem Fransız hem İngilizce konuşabilmeleri çok iyi oldu.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    location: 'London, UK',
    procedure: 'Face Lift',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Müşterilerimiz <span className="text-purple-clinic">Ne Diyor?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Binlerce mutlu müşterimizden gelen gerçek yorumlar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <div className="mb-4">
                <Quote className="w-8 h-8 text-purple-clinic/20 mb-2" />
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-purple-clinic font-semibold mt-1">
                    {testimonial.procedure}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TrustPilot or similar badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-whatsapp to-green-600 text-white px-8 py-4 rounded-full shadow-lg">
            <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
            <span className="font-semibold">4.9/5 Ortalama Değerlendirme</span>
            <span className="text-sm opacity-90">(500+ yorum)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

