import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTAButton from "@/components/CTAButton";

export default function GogusEstetigi() {
  const benefits = [
    'Doğal ve kalıcı sonuçlar',
    'Kişiye özel implant seçimi',
    'Minimal iz bırakan teknik',
    'Deneyimli cerrahi ekip',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Detaylı Konsültasyon',
      description: 'Hedefleriniz ve beklentileriniz doğrultusunda en uygun boyut ve şekil belirlenir.',
    },
    {
      step: '2',
      title: 'Teknoloji Seçimi',
      description: 'En modern ve güvenli teknolojilerle doğal sonuçlara ulaşılır.',
    },
    {
      step: '3',
      title: 'Ameliyat',
      description: 'Uzman cerrahlarımız tarafından güvenli ve hassas operasyon gerçekleştirilir.',
    },
    {
      step: '4',
      title: 'İyileşme Dönemi',
      description: 'Konforlu iyileşme ve düzenli kontroller ile ideal sonuçlara ulaşılır.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <ServiceHero
        title="Göğüs Estetiği"
        subtitle="Profesyonel Estetik Çözümler"
        description="Göğüs büyütme, küçültme, dikleştirme ve yeniden şekillendirme operasyonları ile hayalinizdeki vücut ölçülerine ulaşın."
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop"
        benefits={benefits}
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Göğüs Estetiği <span className="text-purple-clinic">Hizmetlerimiz</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Göğüs Büyütme', desc: 'Doğal ve estetik görünüm', price: 'From €4,500', href: '/gogus-estetigi/gogus-buyutme' },
              { title: 'Göğüs Küçültme', desc: 'Rahatlama ve estetik', price: 'From €5,000', href: '/gogus-estetigi' },
              { title: 'Göğüs Dikleştirme', desc: 'Genç ve sıkı görünüm', price: 'From €4,000', href: '/gogus-estetigi' },
              { title: 'Göğüs Düzeltme', desc: 'Asimetri düzeltme', price: 'From €4,500', href: '/gogus-estetigi' },
              { title: 'Areola Operasyonu', desc: 'Boyut ve şekil düzenleme', price: 'From €2,500', href: '/gogus-estetigi' },
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
        title="Operasyon Süreci"
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

