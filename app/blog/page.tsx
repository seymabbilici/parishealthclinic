'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      slug: 'liposuction-iyilesme-sureci',
      title: 'Liposuction Sonrası İyileşme',
      excerpt: 'Liposuction (yağ aldırma) sonrası iyileşme süreciniz ve bilmeniz gereken her şey.',
      date: '08 Ekim 2024',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&q=80',
      category: 'Vücut Estetiği',
    },
    {
      slug: 'mommy-makeover-ameliyati',
      title: 'Mommy Makeover Ameliyatı: Doğum Sonrası Yeniden Kendinize Kavuşun',
      excerpt: 'Doğum sonrası vücut şeklinizi geri kazanmak için Mommy Makeover ameliyatı hakkında bilgiler.',
      date: '23 Eylül 2024',
      image: 'https://images.unsplash.com/photo-1571019614286-e5b8a7c3e23e?w=800&h=500&fit=crop&q=80',
      category: 'Vücut Estetiği',
    },
    {
      slug: 'yuz-germe-ameliyati',
      title: 'Yüz Germe Ameliyatı: Süreç, İyileşme ve Fiyatlar',
      excerpt: 'Yüz germe ameliyatı ile daha genç ve canlı bir görünüme kavuşmak için bilmeniz gerekenler.',
      date: '19 Ağustos 2024',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop&q=80',
      category: 'Yüz Estetiği',
    },
    {
      slug: 'burun-estetigi-iyilesme',
      title: 'Burun Estetiği Sonrası İyileşme Süreci',
      excerpt: 'Rhinoplasty sonrasında sizi bekleyen süreç ve dikkat etmeniz gerekenler.',
      date: '15 Mart 2024',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop&q=80',
      category: 'Burun Estetiği',
    },
    {
      slug: 'gogus-estetigi-surec',
      title: 'Göğüs Estetiği Ameliyatı Rehberi',
      excerpt: 'Göğüs büyütme, küçültme ve dikleştirme ameliyatları hakkında detaylı bilgi.',
      date: '12 Mart 2024',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&q=80',
      category: 'Göğüs Estetiği',
    },
    {
      slug: 'sac-ekimi-teknikleri',
      title: 'FUE vs DHI Saç Ekimi Teknikleri',
      excerpt: 'Saç ekimi teknikleri arasındaki farklar ve hangisinin size uygun olduğu.',
      date: '5 Mart 2024',
      image: 'https://images.unsplash.com/photo-1522338242-f51e0ff1f7c5?w=800&h=500&fit=crop&q=80',
      category: 'Saç Ekimi',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Estetik cerrahi, burun estetiği ve daha fazlası hakkında güncel makaleler
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-purple-clinic text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-xs text-purple-clinic font-semibold">{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-purple-clinic font-semibold hover:text-purple-700 group-hover:translate-x-2 transition-transform"
                  >
                    <span>Oku</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Haber Bültenimize Abone Olun
            </h2>
            <p className="text-gray-600 mb-8">
              Estetik cerrahi hakkında en güncel bilgileri ve makaleleri almak için e-posta listemize katılın
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-clinic focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-purple-clinic text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-700 transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

