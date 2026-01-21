/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { MessageCircle, Check, Shield, Clock, Award, ChevronDown, Phone, ArrowRight } from 'lucide-react';

export default function FaceLiftContent() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const tableOfContents = [
    { id: 'overview', title: 'Face Lift Istanbul, Yüz Germe İstanbul' },
    { id: 'why-istanbul', title: 'Neden İstanbul\'da Face Lift?' },
    { id: 'what-is', title: 'Face Lift Nedir?' },
    { id: 'benefits', title: 'Face Lift Avantajları' },
    { id: 'selecting', title: 'Doğru Kliniği ve Cerrahı Seçmek' },
    { id: 'preparation', title: 'Face Lift Öncesi Hazırlık' },
    { id: 'recovery', title: 'Face Lift Sonrası İyileşme Süreci' },
    { id: 'duration', title: 'Face Lift Sonuçları Ne Kadar Sürer?' },
    { id: 'risks', title: 'Face Lift Riski Var mı?' },
    { id: 'price', title: 'İstanbul\'da Face Lift Fiyatları' },
    { id: 'faq', title: 'Sıkça Sorulan Sorular' },
  ];

  const faqs = [
    {
      q: 'Face lift sonuçları ne kadar sürer?',
      a: 'Face lift sonuçlarının süresi kişisel yaşam tarzı, yaşlanma faktörleri ve çevresel koşullara göre değişiklik gösterir. Deneyimli bir cerrah seçmek ve ameliyat sonrası bakım önerilerine uymak, face lift etkilerinizin süresini önemli ölçüde artırır. İyi yapılan bir face lift ameliyatı 10-15 yıl kadar kalıcı sonuçlar verebilir. Paris Health Clinic\'te deneyimli cerrahlarımız, uzun süreli sonuçlar için en iyi teknikleri kullanmaktadır.',
    },
    {
      q: 'Face lift ameliyatının riskleri nelerdir?',
      a: 'Face lift ameliyatları genellikle güvenlidir, ancak olası riskler arasında anestezi komplikasyonları, enfeksiyonlar ve beklentilerle uyuşmayan sonuçlar yer alabilir. İstanbul\'da saygın bir klinik ve nitelikli cerrah seçmek bu riskleri önemli ölçüde azaltır. Paris Health Clinic olarak, JCI akrediteli hastanelerimiz ve uluslararası sertifikalı doktorlarımızla güvenli bir tedavi süreci sunuyoruz. Komplikasyon oranımız uluslararası standartların altındadır.',
    },
    {
      q: 'İstanbul\'da face lift fiyatı ne kadar?',
      a: 'İstanbul\'da face lift fiyatları işlemin karmaşıklığına ve kliniğin prestijine bağlı olarak değişiklik gösterir, ancak birçok Batı ülkesine göre önemli ölçüde daha ekonomiktir. Paris Health Clinic\'te face lift fiyatları €3,500\'dan başlamaktadır. Detaylı fiyat teklifi için ücretsiz konsültasyon randevusu alabilirsiniz. All-inclusive paketlerimizde konaklama, transfer ve tüm bakım hizmetleri dahildir.',
    },
    {
      q: 'Face lift ameliyatı ne kadar sürer?',
      a: 'Face lift ameliyatı genellikle 3-5 saat arasında sürer. İşlemin karmaşıklığına, yapılan ek işlemlere (boyun germe, göz kapağı estetiği vb.) göre süre değişebilir. Basit face lift işlemleri daha kısa, kapsamlı işlemler daha uzun sürebilir. Ameliyat genel anestezi altında gerçekleştirilir.',
    },
    {
      q: 'Face lift sonrası iyileşme süreci nasıldır?',
      a: 'Face lift sonrası iyileşme genellikle 2-3 hafta içinde normal aktivitelere dönüşü içerir. İlk 1-2 hafta içinde şişlik ve morluklar azalır. Ameliyat sonrası bakım talimatlarına sıkı sıkıya uymak ideal iyileşme için çok önemlidir. Bu, dikkatli yara bakımı, yorucu aktivitelerden kaçınma ve tüm takip randevularına katılmayı içerir. İstanbul\'un huzurlu ortamı ve örnek sağlık tesisleri ideal bir iyileşme arka planı sağlar.',
    },
    {
      q: 'Face lift ile birlikte hangi işlemler yapılabilir?',
      a: 'Face lift ile birlikte göz kapağı estetiği (blepharoplasty), boyun germe, burun estetiği, çene estetiği, dolgu uygulamaları ve cilt yenileme işlemleri yapılabilir. Kombine işlemler tek bir operasyonda tüm yüz estetiği ihtiyaçlarınızı karşılamanıza olanak tanır. Paris Health Clinic\'te deneyimli ekibimiz, size en uygun kombinasyonu belirlemek için detaylı bir değerlendirme yapar.',
    },
    {
      q: 'Face lift için ideal yaş nedir?',
      a: 'Face lift için ideal yaş genellikle 40-70 yaş arasıdır. Ancak cilt durumu, genetik faktörler ve kişisel tercihlere göre bu yaş aralığı değişebilir. Önemli olan cildin durumu ve hastanın genel sağlık durumudur. Bazı kişilerde 30\'lu yaşların sonunda, bazılarında ise 70\'li yaşlarda face lift yapılabilir. Doktorunuz size en uygun zamanı belirleyecektir.',
    },
    {
      q: 'Face lift ameliyatı sonrası iz kalır mı?',
      a: 'Face lift ameliyatında kesiler genellikle saç çizgisinin içine ve kulak arkasına gizlenir. Modern tekniklerle yapılan face lift ameliyatlarında izler minimal olup, zamanla belirsizleşir. Deneyimli cerrah ve doğru teknik kullanımı ile izler neredeyse görünmez hale gelir. Paris Health Clinic\'te kullandığımız minimal kesi teknikleri ile maksimum sonuç elde ediyoruz.',
    },
    {
      q: 'Face lift ameliyatı sonrası ne zaman çalışabilirim?',
      a: 'Face lift ameliyatı sonrası genellikle 2-3 hafta içinde ofis işlerine dönebilirsiniz. Fiziksel aktivite gerektiren işler için 4-6 hafta beklemek gerekebilir. İyileşme süreci kişiden kişiye değişir. Doktorunuz size özel iyileşme planı sunacaktır. İlk hafta istirahat önemlidir.',
    },
    {
      q: 'Face lift için en uygun mevsim hangisidir?',
      a: 'Face lift için özel bir mevsim yoktur, ancak güneşten kaçınmayı kolaylaştırdığı için sonbahar ve kış ayları tercih edilebilir. Ameliyat sonrası ilk 3-6 ay güneşe maruz kalmaktan kaçınmak çok önemlidir. İstanbul\'un ılıman iklimi, her mevsimde iyileşme için uygundur.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Face Lift Istanbul<br />
                  <span className="text-purple-clinic">Yüz Germe İstanbul</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  İstanbul'da dünya standartlarında yüz germe ameliyatı deneyimi. Uzman doktorlarımız, 
                  doğal sonuçlar ve uygun fiyatlar. Paris Health Clinic ile genç ve canlı görünüme kavuşun.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/905444066234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 bg-green-whatsapp text-white px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
                  >
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Ücretsiz WhatsApp Danışmanlığı</span>
                  </a>
                  <a
                    href="tel:+905444066234"
                    className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-purple-clinic text-white px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base">0544 406 62 34</span>
                  </a>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/procedure-face-lift.jpg"
                  alt="Face Lift Istanbul - Yüz Germe İstanbul"
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
              {[
                { icon: Check, title: 'Doğal Sonuçlar', desc: 'Uzman cerrahlar' },
                { icon: Shield, title: 'Güvenli Operasyon', desc: 'Sertifikalı tesis' },
                { icon: Clock, title: 'Hızlı İyileşme', desc: '2-3 hafta' },
                { icon: Award, title: '10-15 Yıl', desc: 'Kalıcı sonuçlar' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-4 md:p-6 shadow-lg text-center">
                    <div className="bg-purple-clinic/10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-purple-clinic" />
                    </div>
                    <h3 className="font-bold text-sm md:text-base text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">İçindekiler</h2>
            <div className="flex flex-wrap gap-2">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="px-4 py-2 bg-purple-50 text-purple-clinic rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Face Lift Istanbul Overview */}
            <div id="overview" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Face Lift Istanbul, Yüz Germe İstanbul
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>Face Lift Istanbul</strong> (Yüz Germe İstanbul), yüz ve boyun bölgelerindeki 
                  yaşlanma belirtilerini azaltmak ve daha genç bir görünüm elde etmek için tercih edilen 
                  en etkili estetik cerrahi işlemlerinden biridir.
                </p>
                <p>
                  İstanbul, dünya standartlarında estetik cerrahi hizmetleri sunan önde gelen şehirlerden 
                  biridir. Paris Health Clinic olarak, uluslararası sertifikalı doktorlarımız, modern 
                  teknolojimiz ve uygun fiyatlarımızla yüz germe ameliyatı hizmeti sunuyoruz.
                </p>
                <p>
                  Face lift ameliyatı (rhytidectomy), yüz ve boyun bölgelerinizi canlandırarak fazla 
                  deriyi ortadan kaldırır, kasları sıkılaştırır ve dokuları yeniden konumlandırarak 
                  gençleştirilmiş ve uyumlu bir görünüm elde edilmesini sağlar.
                </p>
              </div>
            </div>

            {/* Why Istanbul */}
            <div id="why-istanbul" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Neden İstanbul'da Face Lift?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Estetik işlemler için önde gelen uluslararası merkezlerden biri olarak İstanbul, 
                  dünya çapında hastaları gelişmiş tıbbi altyapısı, üst düzey cerrahları ve ekonomik 
                  hizmetleri ile kendine çekiyor. İstanbul'da face lift ameliyatları sadece yüksek 
                  kalitede değil, aynı zamanda Batı'da benzer işlemlere göre daha uygun fiyatlıdır.
                </p>
                <div className="bg-purple-50 rounded-2xl p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">İstanbul'da Face Lift Avantajları:</h3>
                  <ul className="space-y-2">
                    {[
                      'Uluslararası sertifikalı deneyimli cerrahlar',
                      'Modern, son teknoloji tıbbi tesisler',
                      'Rekabetçi fiyatlar',
                      '5 yıldızlı otel konaklama seçenekleri',
                      'VIP transfer hizmetleri',
                      'Kapsamlı ameliyat sonrası bakım',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-purple-clinic flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* What is Face Lift */}
            <div id="what-is" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Face Lift Nedir?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>Face lift</strong> (yüz germe) veya <strong>rhytidectomy</strong>, yüz ve 
                  boyun bölgelerindeki yaşlanma belirtilerini azaltmak için yapılan estetik cerrahi 
                  işlemidir. Bu ameliyat, fazla deriyi ortadan kaldırır, kasları sıkılaştırır ve 
                  dokuları yeniden konumlandırarak gençleştirilmiş ve uyumlu bir görünüm elde edilmesini sağlar.
                </p>
                <p>
                  Face lift ameliyatı, sarkma, kırışıklık ve deri gevşekliği gibi yaşlanma belirtilerini 
                  etkili bir şekilde azaltır. Modern tekniklerle yapılan face lift ameliyatları minimal 
                  kesilerle maksimum sonuç sağlar.
                </p>
                <p>
                  Paris Health Clinic'te, her hasta için en uygun face lift tekniğini belirliyoruz. 
                  Açık face lift, minimal face lift ve deep plane face lift gibi farklı teknikleri, 
                  hastanın ihtiyacına göre kullanıyoruz.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div id="benefits" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Face Lift Avantajları
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  İstanbul'da face lift yaptırmayı seçmek, sadece fiziksel görünümünüzü iyileştirmekle 
                  kalmaz, aynı zamanda özgüveninizi de artırır. Avantajlar şunları içerir:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {[
                    { title: 'İyileştirilmiş Yüz Özellikleri', desc: 'Daha genç ve canlı bir görünüm' },
                    { title: 'Kırışıklık ve Sarkma Azaltma', desc: 'Yaşlanma belirtilerini minimize etme' },
                    { title: 'Artırılmış Özgüven', desc: 'Kendinizi daha iyi hissetme' },
                    { title: 'Kalıcı ve Dikkat Çekici Sonuçlar', desc: '10-15 yıl süren sonuçlar' },
                  ].map((benefit, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                      <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selecting Clinic */}
            <div id="selecting" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Doğru Kliniği ve Cerrahı Seçmek
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Face lift başarınızın büyük ölçüde saygın bir klinik ve deneyimli bir cerrah seçimine 
                  bağlı olduğunu belirtmek gerekir. İstanbul, en son face lift teknolojileriyle donatılmış 
                  modern kliniklerin geniş bir yelpazesine sahiptir. Cerrahın niteliklerini, hasta 
                  yorumlarını ve öncesi-sonrası fotoğrafları değerlendirerek bilinçli bir karar vermek 
                  çok önemlidir.
                </p>
                <p>
                  Paris Health Clinic olarak, uluslararası sertifikalı doktorlarımız, JCI akrediteli 
                  hastanelerimiz ve modern teknolojimizle güvenli bir tedavi süreci sunuyoruz. Tüm 
                  cerrahlarımız binlerce başarılı face lift ameliyatı gerçekleştirmiş deneyimli 
                  profesyonellerdir.
                </p>
                <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-8 text-white shadow-2xl mt-6">
                  <h3 className="text-2xl font-bold mb-4">Paris Health Clinic'te Face Lift Avantajları:</h3>
                  <ul className="space-y-2">
                    {[
                      '20+ yıl deneyimli uzman cerrahlar',
                      'JCI akrediteli modern hastaneler',
                      'Son teknoloji tıbbi ekipmanlar',
                      'Kişiselleştirilmiş tedavi planları',
                      'Kapsamlı ameliyat sonrası bakım',
                      '7/24 destek hattı',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Preparation */}
            <div id="preparation" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Face Lift Öncesi Hazırlık
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Yeterli hazırlık, face lift başarınızın anahtarıdır. Bu, detaylı konsültasyonlar, 
                  kapsamlı tıbbi değerlendirmeler ve ilaçlarınızda gerekli ayarlamaları içerir. 
                  İyileşme sürecinin farkında olmak ve sonuç beklentileriniz konusunda gerçekçi 
                  olmak da kritiktir.
                </p>
                <div className="bg-purple-50 rounded-2xl p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Ameliyat Öncesi Hazırlık Adımları:</h3>
                  <ul className="space-y-2">
                    {[
                      'Detaylı konsültasyon ve yüz analizi',
                      'Tıbbi geçmiş değerlendirmesi',
                      'İlaç düzenlemeleri (kan sulandırıcılar vb.)',
                      'Sigara ve alkol bırakma (2 hafta önce)',
                      'Ameliyat öncesi fotoğraf çekimi',
                      'Kan testleri ve EKG',
                      'Anestezi değerlendirmesi',
                      'Ameliyat günü için talimatlar',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-purple-clinic flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Recovery */}
            <div id="recovery" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Face Lift Sonrası İyileşme Süreci
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  İyileşme genellikle normal aktivitelere dönüş için iki ila üç hafta sürer. Cerrahınızın 
                  ameliyat sonrası bakım talimatlarına sıkı sıkıya uymak ideal iyileşme için çok önemlidir. 
                  Bu, dikkatli yara bakımı, yorucu aktivitelerden kaçınma ve tüm takip randevularına 
                  katılmayı içerir.
                </p>
                <p>
                  İstanbul'un huzurlu ortamı ve örnek sağlık tesisleri ideal bir iyileşme arka planı sağlar. 
                  Paris Health Clinic olarak, tüm hastalarımıza konforlu konaklama ve VIP transfer 
                  hizmetleri sunuyoruz.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">İyileşme Süreci İpuçları:</h3>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      'İlk 48 saat buz kompresi uygulayın',
                      'Yüksek yastıkla uyuyun',
                      'Yüz hareketlerinden kaçının',
                      'Güneşten kaçının (3-6 ay)',
                      'Doktorunuzun önerdiği kremleri kullanın',
                      'Düzenli kontrollere katılın',
                      'Sağlıklı beslenin ve bol su için',
                      'Sigara ve alkolden kaçının',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Duration */}
            <div id="duration" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Face Lift Sonuçları Ne Kadar Sürer?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Face lift sonuçlarının dayanıklılığı kişisel yaşam tarzı, yaşlanma faktörleri ve 
                  çevresel koşullara göre değişiklik gösterebilir. Deneyimli bir cerrah seçmek ve 
                  ameliyat sonrası bakım önerilerine uymak, face lift etkilerinizin süresini önemli 
                  ölçüde artırır.
                </p>
                <p>
                  İyi yapılan bir face lift ameliyatı genellikle <strong>10-15 yıl</strong> kadar 
                  kalıcı sonuçlar verebilir. Ancak bu süre kişiden kişiye değişebilir. Yaşlanma süreci 
                  devam edeceği için, belirli bir noktada ek işlemler gerekebilir.
                </p>
                <p>
                  Paris Health Clinic'te, uzun süreli sonuçlar için en iyi teknikleri kullanıyoruz. 
                  Deep plane face lift gibi modern teknikler, daha kalıcı sonuçlar sağlar.
                </p>
              </div>
            </div>

            {/* Risks */}
            <div id="risks" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Face Lift Riski Var mı?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Face lift ameliyatları genellikle güvenlidir, ancak her cerrahi işlemde olduğu gibi 
                  olası riskler bulunur. Bu riskler arasında anestezi komplikasyonları, enfeksiyonlar, 
                  kanama, sinir hasarı ve beklentilerle uyuşmayan sonuçlar yer alabilir.
                </p>
                <p>
                  İstanbul'da saygın bir klinik ve nitelikli cerrah seçmek bu riskleri önemli ölçüde 
                  azaltır. Paris Health Clinic olarak, JCI akrediteli hastanelerimiz ve uluslararası 
                  sertifikalı doktorlarımızla güvenli bir tedavi süreci sunuyoruz. Komplikasyon oranımız 
                  uluslararası standartların altındadır.
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Önemli Not:</h3>
                  <p className="text-gray-700">
                    Tüm cerrahi işlemlerde risk vardır. Face lift kararı vermeden önce, deneyimli bir 
                    cerrahla detaylı bir konsültasyon yapmanız ve tüm riskleri anlamanız önemlidir. 
                    Paris Health Clinic, her hasta için kapsamlı bir risk değerlendirmesi yapar.
                  </p>
                </div>
              </div>
            </div>

            {/* Price */}
            <div id="price" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                İstanbul'da Face Lift Fiyatları
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  İstanbul'da face lift fiyatları, işlemin karmaşıklığına ve kliniğin prestijine bağlı 
                  olarak değişiklik gösterir, ancak birçok Batı ülkesine göre önemli ölçüde daha ekonomiktir. 
                  Paris Health Clinic'te face lift fiyatları <strong>€3,500'dan başlamaktadır</strong>.
                </p>
                <p>
                  Fiyatlar, yapılacak işlemin kapsamına (basit face lift, kapsamlı face lift, deep plane 
                  face lift vb.), ek işlemlere (boyun germe, göz kapağı estetiği vb.) ve konaklama 
                  süresine göre değişebilir.
                </p>
                <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-8 text-white shadow-2xl mt-6">
                  <h3 className="text-2xl font-bold mb-4">Face Lift Fiyatına Dahil Olanlar:</h3>
                  <ul className="space-y-2">
                    {[
                      'Ameliyat öncesi detaylı konsültasyon',
                      'Cerrahi işlem (seçilen teknik)',
                      'Hastane kalışı (1-2 gece)',
                      'Ameliyat sonrası bakım ve takip',
                      'Tüm kontroller ve randevular',
                      '7/24 destek hattı',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6">
                  <p className="text-gray-700">
                    <strong>Önemli:</strong> Fiyatlar sadece tahminidir. Kesin fiyat teklifi için ücretsiz 
                    konsültasyon randevusu almanız gerekmektedir. Her hasta için kişiselleştirilmiş fiyat 
                    teklifi sunuyoruz. All-inclusive paketlerimizde konaklama, transfer ve tüm bakım 
                    hizmetleri dahildir.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-gray-600">İstanbul'da face lift hakkında yaygın sorular</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all hover:shadow-lg"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-bold text-gray-900 text-lg pr-4">{faq.q}</h3>
                    {openFAQ === idx ? (
                      <ChevronDown className="w-6 h-6 text-purple-clinic flex-shrink-0 rotate-180 transition-transform" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-purple-clinic flex-shrink-0 transition-transform" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-clinic to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Genç ve Canlı Görünüme Bugün Kavuşun!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              İstanbul'da uzman cerrahlarla profesyonel face lift. En iyi fiyatlar, doğal sonuçlar.
              Ücretsiz danışmanlık mevcut!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/905444066234"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-green-whatsapp text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg hover:bg-green-600 transition-colors shadow-xl w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base">WhatsApp ile Başlat</span>
              </a>
              <a
                href="tel:+905444066234"
                className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-white/20 backdrop-blur-sm text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/30 transition-colors w-full sm:w-auto whitespace-nowrap"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base">0544 406 62 34</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
