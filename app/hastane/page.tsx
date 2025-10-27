import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { Shield, Award, Users, Building } from 'lucide-react';

export default function Hastane() {
  const features = [
    {
      icon: Building,
      title: 'Modern Tesisler',
      description: '30,000 m² alanda son teknoloji ile donatılmış modern hastane',
    },
    {
      icon: Shield,
      title: 'Uluslararası Akreditasyon',
      description: 'JCI akreditasyonlu, dünya standartlarında güvenlik',
    },
    {
      icon: Award,
      title: 'Gelişmiş Teknoloji',
      description: 'En son teknoloji cihazlar ile en iyi sonuçlara ulaşın',
    },
    {
      icon: Users,
      title: 'Uzman Ekip',
      description: '200+ sağlık çalışanı ile 7/24 hizmet',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 lg:py-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Modern Hastanemiz
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Paris Health Clinic, dünya standartlarında bir sağlık tesisidir
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop"
                alt="Hastane"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tam Donanımlı <span className="text-purple-clinic">Tesis</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Hastanemiz, 30,000 metrekarelik modern bir tesistir. 15 operasyon salonu, 
                yoğun bakım ünitesi, radyoloji ve görüntüleme merkezi ile kapsamlı hizmet sunuyoruz.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Tüm tesislerimiz uluslararası standartlara uygun olarak tasarlanmış ve 
                JCI akreditasyonuna sahiptir. Hasta güvenliği ve konforu her şeyin üstündedir.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center">
                  <div className="bg-purple-clinic/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-purple-clinic" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

