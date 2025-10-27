'use client';

import { Shield, Award, Users, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Uzman Ekip',
      description: '20+ yıl deneyimli, uluslararası sertifikalı doktorlar',
    },
    {
      icon: Shield,
      title: 'Güvenli Operasyon',
      description: 'Uluslararası standartlarda, tam donanımlı hastane',
    },
    {
      icon: Users,
      title: '5,000+ Mutlu Müşteri',
      description: 'Başarıyla tamamlanmış operasyon geçmişi',
    },
    {
      icon: Clock,
      title: 'Hızlı İyileşme',
      description: 'Kontrollü ve komplikasyonsuz iyileşme süreci',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Neden <span className="text-purple-clinic">Paris Health Clinic?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Size en iyi hizmeti sunmak için sürekli kendimizi geliştiriyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-purple-clinic/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-purple-clinic" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

