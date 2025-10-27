'use client';

import { motion } from 'framer-motion';
import { Video, User, Building2, Car, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: MessageCircle,
    title: 'Online Konsültasyon',
    description: 'Online konsültasyon hizmetiyle uzman doktorlarımızla kolayca iletişim kurun, ihtiyaçlarınıza özel çözümleri zahmetsizce keşfedin.',
    color: 'bg-blue-100 text-blue-600',
    whatsapp: true,
  },
  {
    icon: User,
    title: 'Kişiye Özel Hasta Danışmanı',
    description: 'Paris Health Clinic, kişiye özel hasta danışmanlığı hizmetiyle her adımda yanınızdayız. Size özel çözümler ve kesintisiz destek için bizi tercih edin.',
    color: 'bg-purple-100 text-purple-clinic',
  },
  {
    icon: Building2,
    title: 'Tam Donanımlı Hastaneler',
    description: 'Paris Health Clinic, tam donanımlı modern hastaneleriyle güvenli ve konforlu bir tedavi süreci sunar. Sağlığınız ve rahatınız için en iyisini seçin.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Car,
    title: 'VIP Konaklama ve Transfer',
    description: 'Paris Health Clinic, VIP konaklama ve transfer hizmetleriyle konforunuzu en üst düzeye taşır. Her detayda özel hissetmeniz için buradayız.',
    color: 'bg-orange-100 text-orange-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Sunduğumuz Ayrıcalıklı Hizmetler
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                {service.whatsapp && (
                  <a
                    href="https://wa.me/905444066234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-whatsapp text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Hemen Danışın</span>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
