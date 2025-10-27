import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTAButton from "@/components/CTAButton";

export default function YuzEstetigi() {
  const benefits = [
    'Doğal ve simetrik sonuçlar',
    'Kısa iyileşme süresi',
    'Uzman cerrahlar',
    'Güvenli operasyon',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Ücretsiz Danışmanlık',
      description: 'WhatsApp veya telefon üzerinden uzman doktorlarımızla ücretsiz danışmanlık alın. Sorunuz ve beklentileriniz değerlendirilir.',
    },
    {
      step: '2',
      title: 'Detaylı Tetkik',
      description: 'Yüzünüze özel en uygun yöntemi belirlemek için detaylı muayene ve tetkikler yapılır.',
    },
    {
      step: '3',
      title: 'Ameliyat Günü',
      description: 'Modern teknoloji ve uzman ekibimizle güvenli operasyon gerçekleştirilir.',
    },
    {
      step: '4',
      title: 'İyileşme ve Takip',
      description: 'Ameliyat sonrası konforlu bir iyileşme süreci ve düzenli takip ile en iyi sonuçlara ulaşılır.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <ServiceHero
        title="Yüz Estetiği"
        subtitle="Profesyonel Estetik Çözümler"
        description="Yüz estetiği işlemlerimiz ile daha genç, canlı ve özgüvenli bir görünüme kavuşun. Rhinoplasty, blepharoplasty, face lift ve daha fazlası için uzman ekibimizle tanışın."
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop"
        benefits={benefits}
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Yüz Estetiği <span className="text-purple-clinic">Hizmetlerimiz</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Rhinoplasty (Burun Estetiği)', desc: 'Doğal ve simetrik burun şekli', price: 'From €3,000', href: '/yuz-estetigi/rhinoplasty' },
              { title: 'Face Lift', desc: 'Genç ve canlı görünüm için', price: 'From €3,500', href: '/yuz-estetigi/face-lift' },
              { title: 'Blepharoplasty', desc: 'Genç göz çevresi', price: 'From €2,500', href: '/yuz-estetigi/blepharoplasty' },
              { title: 'Lip Fillers', desc: 'Dolgun ve şekilli dudaklar', price: 'From €500', href: '/yuz-estetigi' },
              { title: 'Cheek Fillers', desc: 'Belirgin elmacık kemikleri', price: 'From €800', href: '/yuz-estetigi' },
              { title: 'Chin Augmentation', desc: 'Dengeli profil görünümü', price: 'From €2,000', href: '/yuz-estetigi' },
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
        title="Nasıl Çalışıyoruz?"
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

