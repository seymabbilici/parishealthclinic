import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTAButton from "@/components/CTAButton";

export default function DisEstetigi() {
  const benefits = [
    'Parlak beyaz gülüş',
    'Estetik ve doğal',
    'Minimal invaziv',
    'Uzun süreli sonuçlar',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Muayene',
      description: 'Ağız ve diş sağlığınız detaylı şekilde incelenir.',
    },
    {
      step: '2',
      title: 'Tedavi Planı',
      description: 'Hedeflerinize uygun kişisel bir tedavi planı oluşturulur.',
    },
    {
      step: '3',
      title: 'Uygulama',
      description: 'Modern teknikler ile estetik diş tedavileri uygulanır.',
    },
    {
      step: '4',
      title: 'Bakım',
      description: 'Parlayan gülüşünüzü korumak için özel bakım planı verilir.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <ServiceHero
        title="Diş Estetiği"
        subtitle="Profesyonel Estetik Çözümler"
        description="Hollywood smile, laminates, veneers ve diş beyazlatma ile mükemmel gülüşünüze kavuşun."
        image="https://images.unsplash.com/photo-1609840114031-3d9814818eeb?w=1200&h=800&fit=crop"
        benefits={benefits}
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Diş Estetiği <span className="text-purple-clinic">Hizmetlerimiz</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Hollywood Smile', desc: 'Parlayan mükemmel gülüş', price: 'From €3,500', href: '/dis-estetigi/hollywood-smile' },
              { title: 'Laminate Veneers', desc: 'İncel veneer kaplamaları', price: 'From €400/teeth', href: '/dis-estetigi' },
              { title: 'Zirconium Crowns', desc: 'Estetik ve dayanıklı', price: 'From €500/teeth', href: '/dis-estetigi' },
              { title: 'Teeth Whitening', desc: 'Profesyonel beyazlatma', price: 'From €300', href: '/dis-estetigi' },
              { title: 'Gum Contouring', desc: 'Diş eti şekillendirme', price: 'From €800', href: '/dis-estetigi' },
              { title: 'Smile Design', desc: 'Kişisel gülüş tasarımı', price: 'From €2,000', href: '/dis-estetigi' },
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
        title="Diş Estetiği Süreci"
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

