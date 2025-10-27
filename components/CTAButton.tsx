'use client';

import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTAButton() {
  return (
    <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-12 shadow-2xl text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Hayalinizdeki Görünüme Hemen Ulaşın!
      </h3>
      <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
        Paris Health Clinic ile güvenli ve kaliteli estetik çözümlere bugün başlayın. 
        İlk danışmanlığınız tamamen ücretsiz.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/905444066234"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-3 bg-green-whatsapp text-white px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all font-semibold text-lg hover:bg-green-600 group"
        >
          <MessageCircle className="w-6 h-6" />
          <span>WhatsApp ile Hemen Randevu</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </a>
        <a
          href="tel:+905444066234"
          className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl shadow-xl hover:bg-white/30 transition-all font-semibold text-lg"
        >
          <span>+33 6 12 34 56 78</span>
        </a>
      </div>
    </div>
  );
}

