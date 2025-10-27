'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Check } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
}

export default function ServiceHero({ title, subtitle, description, image, benefits }: ServiceHeroProps) {
  return (
    <section className="pt-32 pb-16 lg:pb-20 relative overflow-hidden bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-purple-clinic font-semibold mb-2 block">{subtitle}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-green-whatsapp rounded-full p-1 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/905444066234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-whatsapp text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Ücretsiz Danışmanlık</span>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

