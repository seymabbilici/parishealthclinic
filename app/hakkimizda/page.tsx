'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import { Award, Shield, Users, Clock, Target, Heart, Check, Building2, Trophy, Star } from "lucide-react";

export default function Hakkimizda() {
  const values = [
    { icon: Target, title: 'Hedefimiz', desc: 'Mükemmel sonuçlar ve hasta memnuniyeti' },
    { icon: Shield, title: 'Güvenlik', desc: 'En yüksek güvenlik standartları' },
    { icon: Heart, title: 'Hasta Odaklı', desc: 'Her hastaya özel yaklaşım' },
    { icon: Award, title: 'Kalite', desc: 'Uluslararası kalite sertifikaları' },
  ];

  const features = [
    'Avrupa ve Amerika\'da eğitim almış uzman doktorlar',
    'Modern teknolojiler ve gelişmiş donanım',
    'Uluslararası akreditasyonlu hastane',
    'Kapsamlı ameliyat öncesi ve sonrası bakım',
    '24/7 hasta danışmanlığı ve destek',
    'Şeffaf ve güvenilir fiyatlandırma',
  ];

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Paris Health Clinic, 20 yılı aşkın deneyimiyle dünya standartlarında 
              sağlık turizmi ve estetik hizmetleri sunan bir merkezdir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bizim <span className="text-purple-clinic">Hikayemiz</span>
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  2004 yılında Paris&apos;te kurulan Paris Health Clinic, sağlık turizmi alanında 
                  öncü bir kuruluş olarak faaliyetlerine başlamıştır. Amacımız, insanların 
                  hayalindeki estetik görünüme güvenli ve kaliteli yollarla ulaşmalarını sağlamaktır.
                </p>
                <p>
                  Modern teknolojiler, uzman ekibimiz ve hastanemizin uluslararası standartlardaki 
                  donanımı sayesinde her yıl binlerce mutlu müşteriye hizmet vermekteyiz.
                </p>
                <p>
                  Misyonumuz, tüm hastalarımıza en yüksek kalitede sağlık hizmeti sunmak ve 
                  iyileşme süreçlerini en konforlu şekilde geçirmelerini sağlamaktır.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
                alt="Paris Health Clinic"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-purple-clinic mb-2">20+</div>
              <div className="text-gray-600 font-semibold">Yıl Deneyim</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-purple-clinic mb-2">5,000+</div>
              <div className="text-gray-600 font-semibold">Mutlu Müşteri</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-purple-clinic mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Uzman Doktor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="bg-purple-clinic/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-purple-clinic" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Her hastaya güvenli, kaliteli ve kişiselleştirilmiş estetik çözümler sunarak, 
                onların güzellik ve özgüven yolculuklarına profesyonel destek sağlamak.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Dünya çapında güvenilir ve erişilebilir estetik cerrahi hizmetlerinin 
                lider sağlayıcısı olmak. İnovasyon ve mükemmellik ile sektörde öncü olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Uzman <span className="text-purple-clinic">Ekibimiz</span>
            </h2>
            <p className="text-lg text-gray-600">Deneyimli ve uluslararası sertifikalı doktorlarımız</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                      <Building2 className="w-4 h-4 text-purple-clinic" />
                      <span className="text-xs">{doctor.education}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-3xl p-12 shadow-lg max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-clinic/10 rounded-full p-6">
                <Trophy className="w-16 h-16 text-purple-clinic" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-purple-clinic">50+</span> Uzman Doktor
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Ekibimiz, her biri kendi alanında uzmanlaşmış deneyimli doktorlardan oluşmaktadır. 
              Tüm doktorlarımız uluslararası sertifikalara sahip ve sürekli eğitim almaktadır.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-clinic mb-2">European</div>
                <p className="text-gray-600 font-semibold">Board Certified</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-clinic mb-2">American</div>
                <p className="text-gray-600 font-semibold">Board Certified</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-clinic mb-2">Continuing</div>
                <p className="text-gray-600 font-semibold">Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Info */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop"
                alt="Hastane"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Modern <span className="text-purple-clinic">Hastanemiz</span>
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  Hastanemiz, 30,000 metrekarelik modern bir tesistir. 15 operasyon salonu, 
                  yoğun bakım ünitesi, radyoloji ve görüntüleme merkezi ile kapsamlı hizmet sunuyoruz.
                </p>
                <p>
                  Tüm tesislerimiz uluslararası standartlara uygun olarak tasarlanmış ve 
                  JCI akreditasyonuna sahiptir. Hasta güvenliği ve konforu her şeyin üstündedir.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <Building2 className="w-12 h-12 text-purple-clinic mx-auto mb-4" />
                  <div className="text-3xl font-bold text-purple-clinic mb-2">15</div>
                  <div className="text-gray-600">Operasyon Salonu</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center">
                  <Shield className="w-12 h-12 text-purple-clinic mx-auto mb-4" />
                  <div className="text-3xl font-bold text-purple-clinic mb-2">JCI</div>
                  <div className="text-gray-600">Akredite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600">Size sunduğumuz prensipler</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                  <div className="bg-purple-clinic/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-purple-clinic" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Neden Paris Health Clinic?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="bg-purple-clinic/10 rounded-full p-1 mt-1">
                      <Check className="w-5 h-5 text-purple-clinic" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}
