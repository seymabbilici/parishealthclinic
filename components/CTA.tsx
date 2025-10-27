'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-purple-clinic to-purple-700 rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hayalinizdeki Dokunuşlara<br />Ulaşmak İster misiniz?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Paris Health Clinic ile güvenli, kaliteli ve sonuç odaklı estetik çözümler 
                için bugün bize ulaşın. İlk danışmanlığınız ücretsiz!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="https://wa.me/905444066234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-whatsapp text-white px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all font-semibold text-lg hover:bg-green-600 group"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Hemen Randevu Al</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              
              <a
                href="tel:+905444066234"
                className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all font-semibold text-lg hover:bg-white/30"
              >
                <span>0 544 406 62 34</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

