import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";

export default function Hikayemiz() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hikayemiz
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Yıllarca süren tutku ve özveri ile kurduğumuz Paris Health Clinic'in hikayesi
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Başlangıç</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                2004 yılında Paris&apos;te küçük bir klinik olarak başladığımız yolculuğumuzda, 
                amacımız her zaman müşterilerimize en yüksek kalitede sağlık hizmeti sunmaktı. 
                İlk yıllarımızda sadece birkaç uzman doktor ve küçük bir ekip ile çalışırken, 
                sunduğumuz kaliteli hizmet sayesinde kısa sürede güvenilir bir marka haline geldik.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Büyüme</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Yıllar içinde teknolojik altyapımızı güçlendirdik ve ekibimizi genişlettik. 
                Uluslararası hastalara hizmet vermeye başladık ve sağlık turizminde öncü bir 
                konuma geldik. Bugün, 50+ uzman doktor ve 200+ sağlık çalışanı ile dünya 
                standartlarında hizmet sunmaktayız.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Vizyonumuz</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Paris Health Clinic olarak vizyonumuz, her hastanın hayatında olumlu bir fark 
                yaratmak ve onlara güven, özgüven ve mutluluk sağlamaktır. Modern teknolojiler, 
                uzman ekip ve hasta odaklı yaklaşımımızla, estetik ve sağlık hizmetlerinde 
                sektörün lideri olmaya devam ediyoruz.
              </p>
            </div>
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

