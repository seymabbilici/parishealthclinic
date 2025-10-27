'use client';

import { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                Farkı <span className="text-purple-clinic">Hissedin</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Paris Health Clinic olarak, dünya standartlarında estetik ve sağlık turizmi 
                hizmetleri sunuyoruz. Uzman ekibimiz ve modern teknolojimizle yanınızdayız.
              </p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://wa.me/905444066234"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-purple-clinic text-white px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold text-lg"
            >
              <span>Daha Fazla Bilgi Al</span>
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-clinic/20 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=1000&fit=crop"
                alt="Paris Health Clinic"
                className="w-full h-[500px] lg:h-[650px] object-cover"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                decoding="async"
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
