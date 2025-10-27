import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTAButton from "@/components/CTAButton";

export default function VucutEstetigi() {
  const benefits = [
    'Sıkı ve şekilli vücut',
    'Kalıcı sonuçlar',
    'Minimal izli teknikler',
    'Uzman ekip desteği',
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Vücut Analizi',
      description: 'Vücudunuzun özel ihtiyaçlarına göre en uygun yöntem belirlenir.',
    },
    {
      step: '2',
      title: 'Kişiye Özel Plan',
      description: 'Hedeflerinize uygun kişisel bir tedavi planı oluşturulur.',
    },
    {
      step: '3',
      title: 'Profesyonel Operasyon',
      description: 'Modern teknoloji ve uzman ekip ile güvenli operasyon gerçekleştirilir.',
    },
    {
      step: '4',
      title: 'Mükemmel Sonuç',
      description: 'Konforlu iyileşme ve takip ile hayalinizdeki vücut şekline ulaşın.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <ServiceHero
        title="Vücut Estetiği"
        subtitle="Profesyonel Estetik Çözümler"
        description="Liposuction, tummy tuck, arm lift ve vücut şekillendirme operasyonları ile ideal vücut hatlarına ulaşın."
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop"
        benefits={benefits}
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Vücut Estetiği <span className="text-purple-clinic">Hizmetlerimiz</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Liposuction', desc: 'Yağ alma ve şekillendirme', price: 'From €2,500', href: '/vucut-estetigi/liposuction' },
              { title: 'Tummy Tuck', desc: 'Karın germe ve sıkılaştırma', price: 'From €4,000', href: '/vucut-estetigi/tummy-tuck' },
              { title: 'Arm Lift', desc: 'Kol sarkması düzeltme', price: 'From €3,000', href: '/vucut-estetigi' },
              { title: 'Thigh Lift', desc: 'Bacak şekillendirme', price: 'From €3,500', href: '/vucut-estetigi' },
              { title: 'Brazilian Butt Lift', desc: 'Popo şekillendirme', price: 'From €5,000', href: '/vucut-estetigi' },
              { title: 'CoolSculpting', desc: 'Soğuk lipoliz', price: 'From €1,500', href: '/vucut-estetigi' },
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

