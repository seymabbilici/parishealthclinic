'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function YuzGerme() {
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
              <span>Yüz Estetiği</span>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>19 Ağustos 2024</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Yüz Germe Ameliyatı: Süreç, İyileşme ve Fiyatlar
            </h1>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&q=80"
                alt="Yüz Germe"
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
              Yüz germe ameliyatı (face lift), yaşlanma belirtilerini azaltmak ve daha genç, 
              sıkı bir cilt görünümü elde etmek için yapılan estetik cerrahi işlemidir.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Yüz Germe Ameliyatı Nasıl Yapılır?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Yüz germe ameliyatı, genellikle lokal anestezi altında yapılır. Cildinizde küçük kesiler 
                açılarak gevşemiş kaslar ve dokular gerginleştirilir.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">İyileşme Süresi</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                İlk 2 hafta: Şişlik ve morluk maksimum seviyededir. Sosyal aktivitelerden uzak durmalısınız.
              </p>
              <p>
                2-4 hafta: Şişlikler azalır, daha doğal bir görünüm kazanırsınız.
              </p>
              <p>
                1-3 ay: Tam sonuçları görmeye başlarsınız.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fiyatlar</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Yüz germe fiyatı:</strong> €3,500 - €5,000 arasında değişmektedir. 
                Detaylı fiyat bilgisi için danışmanlık alın.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-12 text-white mt-16">
              <h3 className="text-2xl font-bold mb-4">Ücretsiz Danışmanlık</h3>
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

