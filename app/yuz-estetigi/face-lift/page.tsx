import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTAButton from "@/components/CTAButton";

export default function FaceLift() {
  const benefits = [
    'Genç ve canlı görünüm',
    'Minimal izli modern teknik',
    'Yüz şeklinizi koruma',
    'Doğal sonuçlar',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Yüz Analizi',
      description: 'Yüz şekliniz ve beklentileriniz değerlendirilir. En uygun lift tekniği belirlenir.',
    },
    {
      step: '2',
      title: 'Ameliyat Planı',
      description: 'Kişiye özel ameliyat planı oluşturulur ve detaylar paylaşılır.',
    },
    {
      step: '3',
      title: 'Face Lift Operasyonu',
      description: 'Uzman cerrahlarımız ile modern teknikler kullanılarak operasyon gerçekleştirilir.',
    },
    {
      step: '4',
      title: 'İyileşme',
      description: 'Kontrollü iyileşme süreci ve düzenli takip ile genç görünüme ulaşın.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <ServiceHero
        title="Face Lift (Yüz Germe)"
        subtitle="Genç ve Canlı Görünüm"
        description="Yüz germe operasyonu ile yaşlanma belirtilerini azaltın ve daha genç, sıkı bir cilt görünümüne kavuşun."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop"
        benefits={benefits}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop"
                alt="Face Lift"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Yüz Germe Hakkında
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Face lift operasyonu, yüz ve boyun bölgesindeki gevşek cildi sıkılaştırarak 
                  daha genç bir görünüm sağlar.
                </p>
                <p>
                  Modern tekniklerle minimum kesi ile maksimum sonuç elde edilir. Operasyon 
                  3-4 saat sürer ve sonuçlar 10-15 yıl kalıcıdır.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Fiyatlar</h3>
            <div className="text-5xl font-bold mb-2">From €3,500</div>
            <p className="text-white/90 text-lg">Kişiye özel fiyatlandırma için danışmanlık</p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Process title="Face Lift Süreci" steps={processSteps} />

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

