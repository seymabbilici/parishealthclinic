import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTAButton from "@/components/CTAButton";

export default function FUE() {
  const benefits = [
    'Doğal sonuçlar',
    'Kalıcı çözüm',
    'Hızlı iyileşme',
    'Görünmez iz',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Saç Analizi',
      description: 'Saç dökülme tipiniz, donör alan durumu ve greft sayısı belirlenir.',
    },
    {
      step: '2',
      title: 'FUE Planı',
      description: 'Folikül ekstraksiyon ve implantasyon planı oluşturulur.',
    },
    {
      step: '3',
      title: 'Saç Ekimi',
      description: 'Tek tek foliküller alınır ve implante edilir.',
    },
    {
      step: '4',
      title: 'Büyüme Takibi',
      description: 'Saç çıkışı ve büyümesi düzenli olarak takip edilir.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <ServiceHero
        title="FUE Saç Ekimi"
        subtitle="Doğal ve Kalıcı Saç"
        description="Follicular Unit Extraction (FUE) tekniği ile saç köklerinizi tek tek alıp ekleyerek doğal görünümlü kalıcı saçlara sahip olun."
        image="https://images.unsplash.com/photo-1522338242-f51e0ff1f7c5?w=1200&h=800&fit=crop"
        benefits={benefits}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Fiyatlar</h3>
            <div className="text-5xl font-bold mb-2">From €2,500</div>
            <p className="text-white/90 text-lg">Greft sayısına göre değişmektedir</p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Process title="FUE Saç Ekimi Süreci" steps={processSteps} />

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

