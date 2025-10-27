import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTAButton from "@/components/CTAButton";

export default function Liposuction() {
  const benefits = [
    'İnce bel ve kıvrımlar',
    'Kalıcı yağ alma',
    'Minimal izli teknik',
    'Hızlı iyileşme',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Vücut Analizi',
      description: 'Yağ dağılımınız ve hedefleriniz değerlendirilir. En etkili bölgeler belirlenir.',
    },
    {
      step: '2',
      title: 'Liposuction Planı',
      description: 'Kişiye özel liposuction planı oluşturulur. Genel veya lokal anestezi tercih edilir.',
    },
    {
      step: '3',
      title: 'Yağ Alma İşlemi',
      description: 'Modern teknikler ile güvenli ve etkili yağ alma işlemi gerçekleştirilir.',
    },
    {
      step: '4',
      title: 'Şekillendirme',
      description: 'Vücut şekillendirme ve iyileşme sürecinde düzenli takip yapılır.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <ServiceHero
        title="Liposuction (Yağ Alma)"
        subtitle="İnce ve Şekilli Vücut"
        description="Modern liposuction teknikleri ile vücudunuzda istenmeyen yağları kalıcı olarak uzaklaştırın ve hayalinizdeki vücut hatlarına ulaşın."
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop"
        benefits={benefits}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
                alt="Liposuction"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Liposuction Hakkında
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Liposuction, vücuttan istenmeyen yağların cerrahi yöntemle alınması işlemidir.
                </p>
                <p>
                  Bel, karın, kalça, bacak gibi bölgelerde biriken yağlar güvenli bir şekilde 
                  uzaklaştırılır. Sonuçlar kalıcıdır ve doğru bir yaşam tarzı ile korunur.
                </p>
                <p>
                  Modern VASER liposuction teknikleri ile minimum invaziv, maksimum sonuç.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Fiyatlar</h3>
            <div className="text-5xl font-bold mb-2">From €2,500</div>
            <p className="text-white/90 text-lg">Bölge ve işlem hacmine göre değişmektedir</p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Process title="Liposuction Süreci" steps={processSteps} />

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

