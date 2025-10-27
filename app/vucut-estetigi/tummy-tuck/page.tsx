import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTAButton from "@/components/CTAButton";

export default function TummyTuck() {
  const benefits = [
    'Düz ve sıkı karın',
    'Hamilelik izlerini giderme',
    'Güçlendirilmiş karın kasları',
    'Kalıcı sonuçlar',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Muayene',
      description: 'Karın bölgeniz, cilt elastikiyeti ve genel sağlık durumunuz değerlendirilir.',
    },
    {
      step: '2',
      title: 'Abdominoplasty Planı',
      description: 'Tam abdominoplasty veya mini tummy tuck en uygun seçenek belirlenir.',
    },
    {
      step: '3',
      title: 'Karın Germe',
      description: 'Uzman cerrahlar ile sıkı ve düz karın görünümü elde edilir.',
    },
    {
      step: '4',
      title: 'Şekillendirme',
      description: 'Bel çizgisi güçlendirilir ve iyileşme sürecinde kontroller yapılır.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <ServiceHero
        title="Tummy Tuck (Karın Germe)"
        subtitle="Düz ve Sıkı Karın"
        description="Hamilelik, kilo kaybı veya yaşlanma nedeniyle oluşan karın sarkması ve cilt fazlalığını gidermek için tummy tuck operasyonu."
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop"
        benefits={benefits}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-12 text-center text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Fiyatlar</h3>
            <div className="text-5xl font-bold mb-2">From €4,000</div>
            <p className="text-white/90 text-lg">Kişiye özel fiyatlandırma için danışmanlık</p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Process title="Tummy Tuck Süreci" steps={processSteps} />

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

