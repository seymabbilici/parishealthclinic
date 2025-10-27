'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function MommyMakeover() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-purple-clinic mb-8 hover:text-purple-700">
            <ArrowLeft className="w-5 h-5" />
            <span>Blog'a Dön</span>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span>Vücut Estetiği</span>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>23 Eylül 2024</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mommy Makeover Ameliyatı: Doğum Sonrası Yeniden Kendinize Kavuşun
            </h1>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
              <img
                src="https://images.unsplash.com/photo-1571019614286-e5b8a7c3e23e?w=1200&h=600&fit=crop&q=80"
                alt="Mommy Makeover"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hamilelik ve doğum sonrası vücutta oluşan değişiklikler birçok kadını rahatsız eder. 
              Mommy Makeover, doğum sonrası bu değişiklikleri düzeltmek için uygulanan kapsamlı 
              bir estetik cerrahi paketidir.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Mommy Makeover Nedir?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mommy Makeover, hamilelik ve emzirme döneminde oluşan fiziksel değişiklikleri 
                düzeltmek için tasarlanmış bir estetik cerrahi paketidir. Genellikle şu işlemleri içerir:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Göğüs büyütme veya dikleştirme</li>
                <li>Karın germe (tummy tuck)</li>
                <li>Liposuction (yağ alma)</li>
                <li>Vajinal gençleştirme</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Kimler İçin Uygundur?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mommy Makeover genellikle doğumdan 6 ay sonra planlanır. Emzirme tamamen bittiğinde 
                ve ideal kilonuza ulaştığınızda bu işlemi yaptırabilirsiniz.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-12 text-white mt-16">
              <h3 className="text-2xl font-bold mb-4">Uzman Destek Alın</h3>
              <a
                href="https://wa.me/905444066234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-purple-clinic px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp ile Danışın</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

