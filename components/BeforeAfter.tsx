'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const beforeAfterImages = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=1000&fit=crop',
    after: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=1000&fit=crop',
    title: 'Rhinoplasty (Burun Estetiği)',
    category: 'Yüz Estetiği',
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop',
    after: 'https://images.unsplash.com/photo-1571019614286-e5b8a7c3e23e?w=800&h=1000&fit=crop',
    title: 'Breast Aesthetics (Göğüs Estetiği)',
    category: 'Vücut Estetiği',
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop',
    after: 'https://images.unsplash.com/photo-1571019614286-e5b8a7c3e23e?w=800&h=1000&fit=crop',
    title: 'Face Lift (Yüz Germe)',
    category: 'Anti-Aging',
  },
];

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentImage = beforeAfterImages[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterImages.length);
    setSliderPosition(50);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
    setSliderPosition(50);
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-purple-clinic">Başarılı</span> Sonuçlarımız
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Binlerce mutlu müşterimizin önce ve sonra fotoğrafları
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Image Slider */}
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <div
              className="relative w-full h-[400px] lg:h-[600px] cursor-ew-resize"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percent = (x / rect.width) * 100;
                setSliderPosition(Math.min(Math.max(percent, 0), 100));
              }}
              style={{ touchAction: 'none' }}
            >
              {/* Before Image */}
              <div className="absolute inset-0">
                <img
                  src={currentImage.before}
                  alt={`${currentImage.title} - Öncesi`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* After Image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentImage.after}
                  alt={`${currentImage.title} - Sonrası`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-purple-clinic" />
                  <ChevronRight className="w-4 h-4 text-purple-clinic" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <div className="text-sm font-semibold">Öncesi</div>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <div className="text-sm font-semibold">Sonrası</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevImage}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 mx-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                {currentImage.title}
              </h3>
              <p className="text-purple-clinic text-center font-semibold">
                {currentImage.category}
              </p>
            </div>

            <button
              onClick={nextImage}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {beforeAfterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50);
                }}
                className={`transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-purple-clinic'
                    : 'w-2 bg-gray-300'
                } h-2 rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

