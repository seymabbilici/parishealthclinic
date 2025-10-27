import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

export default function Ekibimiz() {
  const team = [
    {
      name: 'Dr. Jean Martin',
      role: 'Baş Cerrah - Yüz Estetiği',
      experience: '25 yıl deneyim',
      education: 'Paris Üniversitesi Tıp Fakültesi',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Marie Dubois',
      role: 'Cerrah - Göğüs Estetiği',
      experience: '20 yıl deneyim',
      education: 'Sorbonne Üniversitesi',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Pierre Laurent',
      role: 'Cerrah - Vücut Estetiği',
      experience: '18 yıl deneyim',
      education: 'Lyon Üniversitesi',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. Sophie Richard',
      role: 'Diş Hekimi - Diş Estetiği',
      experience: '15 yıl deneyim',
      education: 'Strasbourg Üniversitesi',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Uzman Ekibimiz
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Deneyimli ve uluslararası sertifikalı doktorlarımız ile yanınızdayız
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-clinic font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
                  <p className="text-gray-500 text-sm">{member.education}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-purple-clinic">50+</span> Uzman Doktor
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Ekibimiz, her biri kendi alanında uzmanlaşmış deneyimli doktorlardan oluşmaktadır. 
              Tüm doktorlarımız uluslararası sertifikalara sahip ve sürekli eğitim almaktadır.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <CTAButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}

