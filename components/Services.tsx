'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Building2, Car, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: MessageCircle,
    title: 'Online Konsültasyon',
    description: 'Uzman doktorlarımızla online konsültasyon hizmeti. İhtiyaçlarınıza özel çözümler ve detaylı bilgilendirme.',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    image: '/images/service-online-consultation.jpg',
    features: ['Video görüşme', 'Detaylı bilgilendirme', 'Ücretsiz ön görüşme'],
  },
  {
    icon: ShieldCheck,
    title: 'Güvenilir Tedavi Süreci',
    description: 'Uluslararası sertifikalı doktorlar, JCI akrediteli hastaneler ve şeffaf süreç yönetimi. Her adımda güvenle ilerleyin.',
    color: 'bg-purple-50 text-purple-clinic border-purple-200',
    image: '/images/service-trustworthy-treatment.jpg',
    features: ['Ön görüşme ve planlama', 'Ameliyat öncesi hazırlık', '7/24 destek'],
  },
  {
    icon: Building2,
    title: '5 Yıldızlı Otel Konaklama',
    description: 'Merkezi konumlarda, lüks otellerde konforlu konaklama. İyileşme süreciniz için en uygun ortam.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    image: '/images/service-hotel-accommodation.jpg',
    features: ['İstanbul merkez lokasyon', 'Hastane yakınlığı', 'Özel bakım desteği'],
  },
  {
    icon: Car,
    title: 'VIP Transfer Hizmetleri',
    description: 'Havaalanı karşılama, otel-hastane transferleri ve tüm ulaşım ihtiyaçlarınız için profesyonel VIP araç filosu.',
    color: 'bg-amber-50 text-amber-600 border-amber-200',
    image: '/images/service-vip-transfer.jpg',
    features: ['Havaalanı karşılama', 'Güvenli transfer', '7/24 ulaşım desteği'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-clinic mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ayrıcalıklı <span className="text-purple-clinic">Hizmetlerimiz</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tedavi sürecinizin her aşamasında yanınızdayız
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className={`absolute top-4 left-4 ${service.color} px-4 py-2 rounded-xl flex items-center gap-2 border`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">{service.description}</p>
                  {service.features && (
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-purple-clinic mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
