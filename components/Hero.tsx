'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "İstanbul'un En İyi",
    titleHighlight: 'Rhinoplasty Ameliyatı',
    description: "Burun estetiği konusunda uzman doktorlarımız ile doğal ve estetik sonuçlar. İstanbul'da rhinoplasty ameliyatı için Paris Health Clinic'i tercih edin.",
    image: '/images/hero-slide-1.jpg',
    ctaText: 'Ücretsiz Danışmanlık Al',
    ctaLink: 'https://wa.me/905444066234',
  },
  {
    id: 2,
    title: "İstanbul'un En İyi",
    titleHighlight: 'Yüz Endolifti',
    description: 'Minimal invaziv yüz endolifti tekniği ile genç ve doğal görünüm. İz bırakmadan yüz germe işlemi. Deneyimli ekibimizle yüzünüzde yenilik.',
    image: '/images/hero-slide-2.jpg',
    ctaText: 'Detaylı Bilgi Al',
    ctaLink: 'https://wa.me/905444066234',
  },
  {
    id: 3,
    title: "İstanbul'un En İyi",
    titleHighlight: 'Gıdı Endolifti',
    description: 'Çene ve boyun bölgesinde sarkmayı önleyen gıdı endolifti. Minimal kesi ile maksimum sonuç. Profesyonel yaklaşım, kalıcı çözüm.',
    image: '/images/hero-slide-3.jpg',
    ctaText: 'Ücretsiz Muayene',
    ctaLink: 'https://wa.me/905444066234',
  },
  {
    id: 4,
    title: 'Farkı',
    titleHighlight: 'Hissedin',
    description: 'Paris Health Clinic olarak, dünya standartlarında estetik ve sağlık turizmi hizmetleri sunuyoruz. Uzman ekibimiz ve modern teknolojimizle yanınızdayız.',
    image: '/images/hero-slide-4.jpg',
    ctaText: 'Daha Fazla Bilgi Al',
    ctaLink: 'https://wa.me/905444066234',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[90vh] lg:h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => {
          if (index !== currentSlide) return null;

          return (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 lg:px-8">
                  <div className="max-w-3xl">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="space-y-4 sm:space-y-6 md:space-y-8"
                    >
                      <div className="overflow-hidden">
                        <motion.h1 
                          initial={{ opacity: 0, x: -100, y: 50 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          exit={{ opacity: 0, x: 100, y: -50 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-white leading-[1.1] mb-2 md:mb-3"
                        >
                          <motion.span 
                            className="block"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                          >
                            {slide.title}
                          </motion.span>
                        </motion.h1>
                      </div>
                      <div className="overflow-hidden">
                        <motion.h1
                          initial={{ opacity: 0, x: -100, y: 50 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          exit={{ opacity: 0, x: 100, y: -50 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 0.4,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-[1.1]"
                        >
                          <motion.span 
                            className="block text-purple-clinic"
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.7, 
                              delay: 0.5,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                          >
                            {slide.titleHighlight}
                          </motion.span>
                        </motion.h1>
                      </div>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.6,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-white/95 leading-[1.7] max-w-2xl mb-6 md:mb-8"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.8,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        <a
                          href={slide.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 sm:space-x-3 bg-purple-clinic text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-full shadow-2xl hover:shadow-purple-clinic/50 hover:scale-105 transition-all font-semibold text-sm sm:text-base md:text-lg lg:text-xl group"
                        >
                          <span>{slide.ctaText}</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 lg:p-4 rounded-full transition-all hover:scale-110"
        aria-label="Önceki slide"
      >
        <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 lg:p-4 rounded-full transition-all hover:scale-110"
        aria-label="Sonraki slide"
      >
        <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300${
              index === currentSlide
                ? 'w-12 h-3 bg-purple-clinic rounded-full'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Animated Progress Bar (disabled when autoplay off) */}
      {isAutoPlay && (
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="h-1.5 bg-gradient-to-r from-transparent via-white/10 to-transparent backdrop-blur-sm">
            <motion.div
              key={currentSlide}
              className="h-full relative overflow-hidden"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-clinic via-purple-500 to-purple-clinic" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute right-0 top-0 h-full w-1 bg-white shadow-lg shadow-purple-clinic/50"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(139, 92, 246, 0)',
                    '0 0 20px rgba(139, 92, 246, 0.8)',
                    '0 0 10px rgba(139, 92, 246, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
