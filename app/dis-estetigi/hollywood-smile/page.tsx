import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTAButton from "@/components/CTAButton";

export default function HollywoodSmile() {
  const benefits = [
    'Parlayan mükemmel gülüş',
    'Doğal görünüm',
    'Kalıcı sonuçlar',
    'Estetik tasarım',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Gülüş Tasarımı',
      description: 'Yüz şeklinize ve isteklerinize göre 3D gülüş tasarımı yapılır.',
    },
    {
      step: '2',
      title: 'Diş Hazırlığı',
      description: 'Dişler minimal şekilde şekillendirilir ve ölçü alınır.',
    },
    {
      step: '3',
      title: 'Veneer/Kaplama',
      description: 'Zirconium veya porselen kaplamalar ile mükemmel gülüş elde edilir.',
    },
    {
      step: '4',
      title: 'Son Kontrol',
      description: 'Renk, şekil ve uyum kontrolü yapılır.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <ServiceHero
        title="Hollywood Smile"
        subtitle="Parlayan Mükemmel Gülüş"
        description="20 adet diş için özel tasarlanmış Hollywood Smile ile düzgün, beyaz ve estetik mükemmel gülüşünüze kavuşun."
        image="https://images.unsplash.com/photo-1609840114031-3d9814818eeb?w=1200&h=800&fit=crop"
        benefits={benefits}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-12 text-center text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Fiyatlar</h3>
            <div className="text-5xl font-bold mb-2">From €3,500</div>
            <p className="text-white/90 text-lg">20 diş için tam paket</p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Process title="Hollywood Smile Süreci" steps={processSteps} />

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

