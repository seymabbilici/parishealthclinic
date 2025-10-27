'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Award, Briefcase, GraduationCap, MessageCircle } from 'lucide-react';

export default function Doktorlarimiz() {
  const doctors = [
    {
      name: 'Dr. Jean Martin',
      specialty: 'Burun ve Yüz Estetiği',
      experience: '25+ yıl',
      education: 'Paris Üniversitesi Tıp Fakültesi',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80',
    },
    {
      name: 'Dr. Marie Dubois',
      specialty: 'Göğüs Estetiği',
      experience: '20+ yıl',
      education: 'Sorbonne Üniversitesi',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80',
    },
    {
      name: 'Dr. Pierre Laurent',
      specialty: 'Vücut Estetiği',
      experience: '18+ yıl',
      education: 'Lyon Üniversitesi',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&q=80',
    },
    {
      name: 'Dr. Sophie Richard',
      specialty: 'Saç Ekimi ve Diş Estetiği',
      experience: '15+ yıl',
      education: 'Strasbourg Üniversitesi',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&q=80',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Uzman <span className="text-purple-clinic">Doktorlarımız</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Deneyimli ve uluslararası sertifikalı doktorlarımız ile yanınızdayız
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-purple-clinic font-semibold mb-4">{doctor.specialty}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-purple-clinic" />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-purple-clinic" />
                      <span className="text-xs">{doctor.education}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-lg">
              <Award className="w-16 h-16 text-purple-clinic mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-purple-clinic">50+</span> Uzman Doktor
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Ekibimiz, her biri kendi alanında uzmanlaşmış deneyimli doktorlardan oluşmaktadır. 
                Tüm doktorlarımız uluslararası sertifikalara sahip ve sürekli eğitim almaktadır.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-clinic">European</div>
                  <p className="text-gray-600 font-semibold">Board Certified</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-clinic">American</div>
                  <p className="text-gray-600 font-semibold">Board Certified</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-clinic">Continuing</div>
                  <p className="text-gray-600 font-semibold">Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Uzman Doktorlarımızla Tanışın
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Ücretsiz danışmanlık için doktorlarımızdan biriyle iletişime geçin
              </p>
              <a
                href="https://wa.me/905444066234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-purple-clinic px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp ile İletişime Geçin</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

