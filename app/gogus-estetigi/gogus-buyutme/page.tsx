import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTAButton from "@/components/CTAButton";

export default function GogusBuyutme() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero
        title="Göğüs Büyütme"
        subtitle="Doğal ve Estetik Görünüm"
        description="Göğüs büyütme operasyonu ile dolgun ve şekilli göğüslere sahip olun. Uzman ekibimiz ve modern teknoloji ile güvenli sonuçlar."
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop"
        benefits={['Doğal görünüm', 'Kişiye özel boyut', 'Kalıcı sonuçlar', 'Güvenli implant']}
      />
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-12 text-center text-white max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Fiyatlar</h3>
            <div className="text-5xl font-bold mb-2">From €4,500</div>
            <p className="text-white/90 text-lg">Kişiye özel fiyatlandırma için danışmanlık</p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTAButton />
        </div>
      </section>
      <Footer />
    </main>
  );
}

