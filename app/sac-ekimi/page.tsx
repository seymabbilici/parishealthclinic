import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTAButton from "@/components/CTAButton";

export default function SacEkimi() {
  const benefits = [
    'Doğal sonuçlar',
    'Minimal invasif teknik',
    'Hızlı iyileşme',
    'Kalıcı çözüm',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Saç Analizi',
      description: 'Saç dökülme tipiniz ve yeterli donör alanınız kontrol edilir.',
    },
    {
      step: '2',
      title: 'Teknik Seçimi',
      description: 'FUE veya DHI gibi en uygun ekim tekniği belirlenir.',
    },
    {
      step: '3',
      title: 'Saç Ekimi',
      description: 'Deneyimli ekip tarafından kök nakli gerçekleştirilir.',
    },
    {
      step: '4',
      title: 'Bakım ve Takip',
      description: 'Saçların çıkması ve şekillenmesi için düzenli takip sağlanır.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <ServiceHero
        title="Saç Ekimi"
        subtitle="Profesyonel Estetik Çözümler"
        description="FUE ve DHI teknikleri ile doğal görünümlü kalıcı saç çözümleri. Uzman ekip ve modern teknoloji ile saçlarınıza yeniden kavuşun."
        image="https://images.unsplash.com/photo-1522338242-f51e0ff1f7c5?w=1200&h=800&fit=crop"
        benefits={benefits}
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Saç Ekimi <span className="text-purple-clinic">Hizmetlerimiz</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'FUE Saç Ekimi', desc: 'Kök nakli ile doğal sonuç', price: 'From €2,500', href: '/sac-ekimi/fue' },
              { title: 'DHI Saç Ekimi', desc: 'Direkt implant tekniği', price: 'From €3,000', href: '/sac-ekimi' },
              { title: 'Sakal Ekimi', desc: 'Gür ve doğal sakal', price: 'From €2,000', href: '/sac-ekimi' },
              { title: 'Kaş Ekimi', desc: 'Şekilli ve doğal kaşlar', price: 'From €1,500', href: '/sac-ekimi' },
            ].map((service, idx) => (
              <a key={idx} href={service.href} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all block">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <div className="text-2xl font-bold text-purple-clinic">{service.price}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      
      <Process 
        title="Saç Ekimi Süreci"
        steps={processSteps}
      />

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

