'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2, Star } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const rafRef = useRef<number | null>(null);

  const beforeImage = '/images/before-after-rhinoplasty-before.jpg';
  const afterImage = '/images/before-after-rhinoplasty-after.jpg';

  // Optimized mouse move handler
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const target = e.currentTarget;
    const clientX = e.clientX;
    
    if (!target) return;
    
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPosition(percent);
    });
  }, [isDragging]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || e.touches.length === 0) return;
    
    const target = e.currentTarget;
    const touchX = e.touches[0].clientX;
    
    if (!target) return;
    
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = touchX - rect.left;
      const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPosition(percent);
    });
  }, [isDragging]);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto w-full max-w-[500px]">
              <div
                className="relative w-full h-[450px] lg:h-[550px] select-none rounded-3xl bg-gradient-to-br from-purple-600 to-purple-300 p-[4px] cursor-ew-resize group"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
                style={{ touchAction: 'none' }}
              >
                {/* Background gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 opacity-90 group-hover:opacity-100 transition-opacity" />
                
                {/* White inner background */}
                <div className="absolute inset-[4px] rounded-3xl bg-white" />
                
                {/* Before Image */}
                <div className="absolute inset-[4px] rounded-3xl overflow-hidden">
                  <img
                    src={beforeImage}
                    alt="Burun Estetiği - Öncesi"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  {/* Before Label */}
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    ÖNCESİ
                  </div>
                </div>

                {/* After Image */}
                <div
                  className="absolute inset-[4px] rounded-3xl overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src={afterImage}
                    alt="Burun Estetiği - Sonrası"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  {/* After Label */}
                  <div className="absolute bottom-4 right-4 bg-purple-clinic/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    SONRASI
                  </div>
                </div>

                {/* Slider Line */}
                <div
                  className="absolute top-[4px] bottom-[4px] w-1 bg-white shadow-2xl z-20"
                  style={{ 
                    left: `${sliderPosition}%`, 
                    transform: 'translateX(-50%)',
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
                    willChange: 'left'
                  }}
                >
                  {/* Slider Handle */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform border-2 border-purple-clinic"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                  >
                    <ChevronLeft className="w-5 h-5 text-purple-clinic" />
                    <ChevronRight className="w-5 h-5 text-purple-clinic -ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-block mb-5">
              <span className="px-5 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-clinic border border-purple-200">
                Burun Estetiği - Öncesi ve Sonrası
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hayalinizdeki Dokunuşlara<br />
              <span className="text-purple-clinic">Ulaşmak İster misiniz?</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Paris Health Clinic ile güvenli, kaliteli ve sonuç odaklı estetik çözümler için bugün bize ulaşın. İlk danışmanlığınız ücretsiz!
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Uluslararası sertifikalı doktorlar',
                'Modern teknoloji ve tesisler',
                'Doğal ve kalıcı sonuçlar',
                '7/24 destek hattı',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 text-left">
                  <div className="bg-purple-100 rounded-full p-1.5">
                    <CheckCircle2 className="w-5 h-5 text-purple-clinic" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center mb-10">
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center gap-3 bg-purple-clinic text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg group"
              >
                <span>Hemen Randevu Al</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/905444066234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-green-whatsapp text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all font-semibold text-lg"
              >
                <span>WhatsApp Danışmanlık</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-4">Bize Güvenen Platformlar</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-70 hover:opacity-100 transition-opacity">
                {[
                  { name: 'Google', src: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg' },
                  { name: 'RealSelf', src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/realself.svg' },
                  { name: 'Trustpilot', src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/trustpilot.svg' },
                  { name: 'WhatClinic', src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/whatclinic.svg' },
                  { name: 'ProvenExpert', src: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/provenexpert.svg' },
                ].map((logo) => (
                  <div key={logo.name} className="h-7 flex items-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-7 w-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
              
              {/* Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">4.9/5</span>
                <span className="text-gray-500 text-sm">(500+ değerlendirme)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
