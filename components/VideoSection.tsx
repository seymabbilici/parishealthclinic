'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Hikayemizi <span className="text-purple-clinic">Dinleyin</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Paris Health Clinic hakkında daha fazla bilgi edinin
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
            {!showVideo ? (
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                onClick={() => setShowVideo(true)}
              >
                {/* Thumbnail */}
                <img
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=675&fit=crop"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                
                {/* Play Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-white rounded-full p-6 shadow-xl group-hover:shadow-2xl transition-shadow">
                    <Play className="w-16 h-16 text-purple-clinic fill-purple-clinic ml-2" />
                  </div>
                </motion.div>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Paris Health Clinic Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

