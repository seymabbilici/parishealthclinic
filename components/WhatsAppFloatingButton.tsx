'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFloatingButton() {
  return (
    <motion.a
      href="https://wa.me/905444066234"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-green-whatsapp text-white p-4 rounded-full shadow-2xl hover:shadow-green-whatsapp/50 transition-all group"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 bg-green-whatsapp rounded-full animate-ping opacity-75" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Ücretsiz Danışmanlık
        <span className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1 border-4 border-transparent border-r-gray-900" />
      </span>
    </motion.a>
  );
}
