'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Share2, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function LiposuctionIyilesme() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-purple-clinic mb-8 hover:text-purple-700">
            <ArrowLeft className="w-5 h-5" />
            <span>Blog&apos;a Dön</span>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span>Vücut Estetiği</span>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>08 Ekim 2024</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Liposuction Sonrası İyileşme Süreci
            </h1>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop&q=80"
                alt="Liposuction Sonrası İyileşme"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            <div className="mb-12 bg-purple-50 rounded-3xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Liposuction (yağ aldırma) sonrası iyileşme süreci genellikle kişiye, alınan yağ miktarına 
                ve uygulanan bölgeye göre değişir. Ancak genel olarak şu şekilde ilerler;
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">1. İlk Günler (0–7 gün)</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Şişlik, morarma ve ağrı normaldir.</strong> Bu dönemde alınan yağ miktarına 
                göre farklı derecelerde şişlik ve morarma görülür. Ameliyat sonrası ilk 24-48 saatte 
                en fazla ağrı hissedilir, ancak bu ağrı genellikle tolere edilebilir seviyededir.
              </p>
              <p>
                <strong>Doktorun önerdiği korse (kompresyon giysisi) sürekli takılır</strong> — bu, 
                ödemi azaltır ve vücut şeklini korur. Korsenin düzenli takılması hem şişliğin azalmasına 
                yardımcı olur hem de ameliyat sonucunun korunmasını sağlar.
              </p>
              <p>
                <strong>Hafif yürüyüş önerilir</strong>; kan dolaşımını artırır, pıhtı riskini azaltır. 
                Uzun süre yatmak yerine kısa yürüyüşler yapmanız önemlidir.
              </p>
              <p>
                <strong>Ağrı genellikle parasetamol veya doktorun verdiği ilaçlarla kontrol altına alınabilir.</strong> 
                Ağır ağrı kesicilere gerek duymadan çoğu hasta bu süreci rahatça atlatır.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Erken Dönem (1–3 hafta)</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Şişlik azalmaya başlar ama tamamen geçmez.</strong> İlk haftadan sonra belirgin 
                bir rahatlama hissedersiniz. Morluklar da yavaş yavaş sararmaya başlar.
              </p>
              <p>
                <strong>Korse genellikle en az 3 hafta boyunca, günde 24 saat takılır.</strong> Bu süreç 
                sonucun kalitesi için kritiktir. Korsenin düzenli takılması vücut şeklinizin korunmasını sağlar.
              </p>
              <p>
                <strong>Bu dönemde ağır egzersiz ve sauna/hamam yasaktır.</strong> Terleme ve ağır 
                aktiviteler şişliklerin artmasına neden olabilir.
              </p>
              <p>
                <strong>Vücut şekli yavaş yavaş ortaya çıkmaya başlar.</strong> Her geçen gün daha 
                iyi sonuçlar göreceksiniz.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Orta Dönem (1–2 ay)</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Morluklar genellikle tamamen kaybolur.</strong> Cilt rengi normale döner ve 
                daha doğal görünür.
              </p>
              <p>
                <strong>Şişlik belirgin şekilde azalır, nihai sonucun %70-80&apos;i görünür hale gelir.</strong> 
                Artık vücut şeklindeki değişiklikleri net bir şekilde görmeye başlarsınız.
              </p>
              <p>
                <strong>Doktor onayıyla hafif sporlar başlanabilir.</strong> Yüzme, yürüyüş gibi 
                hafif aktiviteler önerilir.
              </p>
              <p>
                <strong>Korse kullanımı genelde 6. haftaya kadar devam eder.</strong> Bu süreçten sonra 
                sporcuyorsanız korseyi sadece spor sırasında takabilirsiniz.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Sonuç Dönemi (3–6 ay)</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Cilt sıkılaşması tamamlanır.</strong> Cildiniz elastikiyet kazanır ve daha 
                sıkı bir görünüme kavuşur.
              </p>
              <p>
                <strong>Tüm şişlikler geçer, nihai sonuç ortaya çıkar.</strong> Artık tam sonucunuzu 
                görebilirsiniz. Bu dönemde fotoğraf çekimi yapmak için ideal zamandır.
              </p>
              <p>
                <strong>Sonuç kalıcıdır ama kilo alımı tekrar yağ birikmesine neden olabilir.</strong> 
                Sağlıklı yaşam tarzı ile sonuçları koruyabilirsiniz.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dikkat Edilmesi Gerekenler</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Bol su içmek ve tuzdan uzak durmak ödemi azaltır.</strong> Su tüketimi şişliklerin 
                daha hızlı geçmesine yardımcı olur.
              </p>
              <p>
                <strong>Enfeksiyon riskine karşı, pansumanlar ve dikiş bakımı doktor talimatına göre yapılmalıdır.</strong> 
                Hijyen kurallarına uymanız çok önemlidir.
              </p>
              <p>
                <strong>Masaj (lenf drenajı) doktor uygun görürse ödemin daha hızlı geçmesine yardımcı olur.</strong> 
                Uzman bir masöz yardımıyla lenf drenajı yaptırabilirsiniz.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-12 text-white mt-16">
              <h3 className="text-2xl font-bold mb-4">Liposuction Hakkında Daha Fazla Bilgi İstiyorsunuz?</h3>
              <p className="text-white/90 mb-6">
                Ücretsiz danışmanlık için bizimle iletişime geçin
              </p>
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

