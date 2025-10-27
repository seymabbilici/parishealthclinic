'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const procedures = [
  {
    id: 1,
    title: 'Yüz ve Boyun Germe',
    description: 'Yüz ve boyun germe operasyonları, yaşlanma belirtilerini azaltarak genç ve taze bir görünüm kazanmanıza yardımcı olur. Kendinizi yenileyin, ışıltınızı geri kazanın.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&q=80',
    category: 'Yüz Estetiği',
    price: 'From €3,500',
    href: '/yuz-estetigi/face-lift',
  },
  {
    id: 2,
    title: 'Göğüs Estetiği',
    description: 'Göğüs estetiği, size en uygun şekil ve boyutu belirleyerek doğal ve dengeli bir görünüm elde etmenizi sağlar. Güzelliğinizi yeniden tanımlayın.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80',
    category: 'Vücut Estetiği',
    price: 'From €4,500',
    href: '/gogus-estetigi/gogus-buyutme',
  },
  {
    id: 3,
    title: 'Burun Estetiği',
    description: 'Burun estetiği, yüzünüzle uyumlu, doğal ve estetik bir görünüme kavuşmanızı sağlar. Hem sağlık hem de görünüm açısından istediğiniz sonuçlara ulaşın.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80',
    category: 'Yüz Estetiği',
    price: 'From €3,000',
    href: '/yuz-estetigi/rhinoplasty',
  },
];

export default function PopularProcedures() {
  return (
    <section id="procedures" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            En Sık Yapılan İşlemler
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <motion.a
              key={procedure.id}
              href={procedure.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group block"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={procedure.image}
                  alt={procedure.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-clinic text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {procedure.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{procedure.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{procedure.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-purple-clinic">{procedure.price}</span>
                  <div className="flex items-center space-x-2 text-purple-clinic font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Detaylar</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-3 bg-purple-clinic text-white px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
            onClick={() => window.location.href = '/#services'}
          >
            <span className="font-semibold text-lg">Tüm İşlemleri Gör</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
