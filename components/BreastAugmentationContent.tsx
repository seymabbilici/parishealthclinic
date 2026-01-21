/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { MessageCircle, Check, Shield, Clock, Award, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BreastAugmentationContent() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const tableOfContents = [
    { id: 'overview', title: 'Breast Augmentation Istanbul, Göğüs Büyütme İstanbul' },
    { id: 'planning', title: 'Göğüs Büyütme Planlaması' },
    { id: 'shape', title: 'Silikon Göğüs İmplantı Şekli' },
    { id: 'incision', title: 'Göğüs Büyütme İçin Erişim Kesileri' },
    { id: 'position', title: 'Göğüs İmplantlarının Pozisyonu' },
    { id: 'style', title: 'Göğüs İmplantı Stili, Doku, Profil ve Boyutlandırma' },
    { id: 'procedure', title: 'Göğüs Büyütme Ameliyatı' },
    { id: 'recovery', title: 'Göğüs Büyütme Sonrası İyileşme' },
    { id: 'exercise', title: 'Göğüs Büyütme Sonrası Egzersiz' },
    { id: 'aftercare', title: 'Göğüs Büyütme Sonrası Bakım' },
    { id: 'price', title: 'İstanbul\'da Göğüs Büyütme Fiyatları' },
    { id: 'faq', title: 'Sıkça Sorulan Sorular' },
  ];

  const faqs = [
    {
      q: 'Göğüs büyütme ameliyatı ne kadar sürer?',
      a: 'Göğüs büyütme ameliyatı genellikle 1.5-2 saat arasında sürer. İşlemin karmaşıklığına, ek işlemlere (göğüs dikleştirme, asimetri düzeltme vb.) göre süre değişebilir. Ameliyat genel anestezi altında, tam akrediteli hastanelerde gerçekleştirilir.',
    },
    {
      q: 'Göğüs büyütme sonrası ne zaman işe dönebilirim?',
      a: 'Hafif fiziksel aktivite gerektiren işler için 4-5 gün sonra, normal ofis işleri için 7 gün sonra işe dönebilirsiniz. Daha ağır fiziksel aktivite gerektiren işler için 2-3 hafta beklemek gerekebilir. Doktorunuz size özel iyileşme planı sunacaktır.',
    },
    {
      q: 'Göğüs büyütme sonrası egzersiz yapabilir miyim?',
      a: 'Hafif kardiyovasküler egzersizler (darbesiz) 5-7 gün sonra yapılabilir. Daha yoğun fiziksel aktiviteler 3 hafta sonra başlanabilir. Pektoral kas kasılması gerektirmeyen güç antrenmanları (alt vücut, core, biceps/triceps, kollar 45 derecenin altında) 7 gün sonra yapılabilir. Modifiye pektoral egzersizler 4-6 hafta sonra, tam kısıtlamasız antrenmanlar 12 hafta sonra başlanabilir.',
    },
    {
      q: 'Göğüs implantları ne kadar süre dayanır?',
      a: 'Modern göğüs implantları genellikle 10-20 yıl veya daha uzun süre dayanabilir. Ancak implantların ömrü kişiden kişiye değişir ve yaşlanma, kilo değişiklikleri, hamilelik gibi faktörler etkileyebilir. Düzenli kontroller önemlidir.',
    },
    {
      q: 'Göğüs büyütme sonrası emzirebilir miyim?',
      a: 'Evet, göğüs büyütme ameliyatı genellikle emzirme yeteneğini etkilemez. İmplantlar genellikle göğüs bezlerinin altına veya kas altına yerleştirilir, bu da süt üretimini etkilemez. Ancak bazı teknikler ve kişisel faktörler etkileyebilir. Doktorunuzla bu konuyu detaylı konuşmanız önemlidir.',
    },
    {
      q: 'Göğüs büyütme ameliyatı ağrılı mı?',
      a: 'Göğüs büyütme ameliyatı sonrası hafif ila orta derecede ağrı ve rahatsızlık olabilir. İlk 24-48 saat içinde ağrı kesicilerle kontrol altına alınır. Genellikle 3-5 gün içinde ağrı önemli ölçüde azalır. Doktorunuz size uygun ağrı yönetimi planı sunacaktır.',
    },
    {
      q: 'Göğüs büyütme sonrası iz kalır mı?',
      a: 'Göğüs büyütme ameliyatında kesiler genellikle göğüs altı kıvrımında, areola çevresinde veya koltuk altında yapılır. Modern tekniklerle yapılan ameliyatlarda izler minimal olup, zamanla belirsizleşir. Deneyimli cerrah ve doğru teknik kullanımı ile izler neredeyse görünmez hale gelir.',
    },
    {
      q: 'Göğüs büyütme için en uygun yaş nedir?',
      a: 'Göğüs büyütme için genellikle 18 yaş ve üzeri önerilir. Ancak ideal yaş, göğüs gelişiminin tamamlanması ve kişinin fiziksel olgunluğuna bağlıdır. Hamilelik planları varsa, bu konuyu doktorunuzla konuşmanız önerilir.',
    },
    {
      q: 'Göğüs büyütme sonrası ne zaman normal sütyen giyebilirim?',
      a: 'İlk 3 hafta ameliyat sonrası özel sütyen giyilir. 1 hafta sonra standart spor sütyeni giyilebilir. Normal sütyenler ve mayo yaklaşık 2 hafta sonra giyilebilir. Doktorunuz size özel talimatlar verecektir.',
    },
    {
      q: 'Göğüs büyütme sonuçları ne kadar sürer?',
      a: 'Göğüs büyütme sonuçları genellikle kalıcıdır. Ancak yaşlanma, kilo değişiklikleri, hamilelik ve emzirme gibi faktörler göğüs şeklini etkileyebilir. İyi yapılan bir göğüs büyütme ameliyatı 10-20 yıl veya daha uzun süre sonuçlarını korur.',
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
                  Breast Augmentation Istanbul<br />
                  <span className="text-purple-clinic">Göğüs Büyütme İstanbul</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  İstanbul'da dünya standartlarında göğüs büyütme ameliyatı deneyimi. Uzman doktorlarımız, 
                  doğal sonuçlar ve uygun fiyatlar. Paris Health Clinic ile hayalinizdeki görünüme kavuşun.
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
                  src="/images/procedure-breast-aesthetics.jpg"
                  alt="Breast Augmentation Istanbul - Göğüs Büyütme İstanbul"
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
                { icon: Clock, title: 'Hızlı İyileşme', desc: '7 gün içinde' },
                { icon: Award, title: 'Kalıcı Sonuçlar', desc: '10-20 yıl' },
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
            
            {/* Breast Augmentation Overview */}
            <div id="overview" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Breast Augmentation Istanbul, Göğüs Büyütme İstanbul
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Her göğüs büyütme ameliyatı, hasta ve ameliyatı gerçekleştiren cerrah gibi benzersizdir. 
                  Paris Health Clinic olarak, göğüs büyütme ameliyatında <strong>"güzellik denge"</strong> 
                  prensibine inanıyoruz; bu nedenle estetik sonucun kalitesi her zaman göğüs implant hacminin 
                  miktarından önce gelir. Muhteşem, doğal ve orantılı bir sonuç elde etmek her zaman nihai hedefimizdir.
                </p>
                <p>
                  Göğüs implantları, geniş bir göğüs boyutu ve şekli endişesi yelpazesinin tedavisi için uygundur. 
                  Göğüslerin yetersiz gelişimi, göğüs büyütme için yaygın bir endikasyondur. Hamilelik ve emzirme 
                  sonrası göğüs sarkması (doğum sonrası glandüler hipomasti), bariatrik cerrahi veya önemli kilo 
                  kaybından sonra, veya sadece kademeli involüsyon nedeniyle göğüs büyütme ile önemli ölçüde 
                  iyileştirilebilir.
                </p>
                <p>
                  Belirli göğüs asimetrileri ve konjenital deformiteler de göğüs büyütme teknikleri ile düzeltilebilir. 
                  Teknik yaklaşım titizlikle uyarlanmalı ve kişiselleştirilmelidir. Bu, implantın şekli, hacmi ve 
                  çıkıntısının titizlikle belirlenmesini içerir.
                </p>
                <p>
                  Seçtiğiniz plastik cerrah, göğüs büyütme cerrahınız olarak son derece önemlidir. Göğüs büyütme 
                  ameliyatı, doğal ve orantılı güzellik anlayışının yanı sıra cerrahi beceri ve teknik gerektirir.
                </p>
                <p>
                  İstanbul'daki Paris Health Clinic ofisimizdeki ilk konsültasyondan, ameliyat öncesi aşamaya ve 
                  iyileşme ve takibinizin tamamı boyunca, Dr. Unal ve ekibinin sizi karşıladığı ve baktığı titizlik, 
                  detaylara dikkat ve sıcaklığı deneyimleyeceksiniz. İlk ziyaret, doktorumuzun arzularınızı anlaması, 
                  fiziksel gereksinimleri incelemesi ve değerlendirmesi, size en uygun prosedür(ler) veya alternatif 
                  tedaviler hakkında sizi kapsamlı bir şekilde bilgilendirmesi ve sorularınızı yanıtlaması için bir 
                  fırsattır.
                </p>
              </div>
            </div>

            {/* Planning */}
            <div id="planning" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Göğüs Büyütme Planlaması
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Göğüs büyütme planlama aşamasında dikkate alınması gereken dört temel bileşen vardır:
                </p>
                <div className="bg-purple-50 rounded-2xl p-6 mt-6">
                  <ul className="space-y-3">
                    {[
                      'Şekil: Silikon göğüs implantlarının şekli',
                      'Erişim Kesiği: Göğüs implantlarının yerleştirildiği kesi',
                      'Pozisyon: Göğüs kasına göre implantların cep yerleşimi',
                      'Stil: Göğüs implantlarının profili, dokusu ve boyutu',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-purple-clinic flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p>
                  Bu seçimler, göğüs ve göğüs duvarı anatomisine, istediğiniz sonuca ve belirli kişisel tercihlere 
                  bağlıdır. İstanbul Göğüs Büyütme Cerrahı, Paris Health Clinic doktorlarımız, bu faktörlerin her 
                  birini sizinle dikkatle değerlendirecek ve hedeflerinize ulaşmak için kişiselleştirilmiş en iyi 
                  göğüs büyütme tedavi planını tasarlayacaktır.
                </p>
              </div>
            </div>

            {/* Shape */}
            <div id="shape" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Silikon Göğüs İmplantı Şekli: Anatomik veya Yuvarlak
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Estetik göğüs büyütme için mevcut iki ana göğüs implant şekli anatomik ve yuvarlaktır. İlk 
                  konsültasyonunuzda, size en uygun implant şekli doktorunuzla tartışılacaktır. İmplant şekli 
                  seçimi, mevcut göğüs hacminize, göğüs ve göğüs duvarı şeklinize ve toplam vücut boyutu ve 
                  şeklinize bağlıdır.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3">Yuvarlak İmplantlar</h3>
                    <p className="text-gray-600 text-sm">
                      Daha dolgun üst göğüs görünümü sağlar. Her açıdan simetrik görünüm. Daha yüksek projeksiyon.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3">Anatomik İmplantlar</h3>
                    <p className="text-gray-600 text-sm">
                      Daha doğal, damla şeklinde görünüm. Alt kısımda daha fazla hacim. Daha doğal siluet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Incision */}
            <div id="incision" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Göğüs Büyütme İçin Erişim Kesileri
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Göğüs büyütme, göğüsün alt kıvrımında (inframammary kıvrım kesisi), areolanın en alt sınırı 
                  boyunca (periareolar kesi) veya koltuk altı içinde (transaksiller kesi) kesiler kullanılarak 
                  gerçekleştirilebilir. Kesi seçimi, areolar boyutu, göğüs şekli, göğüs glandüler yoğunluğu, 
                  inframammary kıvrım tanımı, boyut hedefleri, implant seçimi ve kişisel tercihlere bağlıdır. 
                  Doktorunuz size en iyi göğüs büyütme kesi seçenekleri hakkında tavsiyede bulunacaktır.
                </p>
                <p>
                  Kesi uzunluğunu minimize etmek ve silikon jel implantları minimal veya "dokunmasız" teknikle 
                  nazikçe yerleştirmek için, Keller Funnel tek tip olarak kullanılır. Keller Funnel, düşük 
                  sürtünmeli yüzeye sahip bir implant yerleştirme cihazıdır ve daha küçük kesilerden silikon 
                  göğüs implantlarının yerleştirilmesini sağlar.
                </p>
                <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-8 text-white shadow-2xl mt-6">
                  <h3 className="text-2xl font-bold mb-4">Kesi Seçenekleri:</h3>
                  <ul className="space-y-2">
                    {[
                      'Göğüs altı kıvrım (Inframammary) - En yaygın, minimal iz',
                      'Areola çevresi (Periareolar) - Areola kenarında gizli',
                      'Koltuk altı (Transaxillary) - Göğüste iz yok',
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

            {/* Position */}
            <div id="position" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Göğüs İmplantlarının Pozisyonu
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Göğüs implantları kasın altına (submuscular augmentation) veya kasın üstüne, ancak kasın 
                  fasyasının altına (subfascial augmentation) yerleştirilebilir.
                </p>
                <div className="bg-purple-50 rounded-2xl p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Submuscular (Kas Altı) Yerleştirme Avantajları:</h3>
                  <ul className="space-y-2">
                    {[
                      'İnce hastalarda göğüs implantlarının artırılmış kapsamını sağlar',
                      'İnce hastalarda üst göğüs kutbunu yumuşatır, köprücük kemiğinden meme ucuna daha sorunsuz, doğal geçiş sağlar',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-purple-clinic flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4">
                  <strong>"Dual plane"</strong> büyütme, kasın implantın üst kutbunu maksimum kapsamasına ve 
                  alt göğüs bezinin doğrudan düzleştirilmesine izin veren bir submuscular büyütme şeklidir; bu 
                  manevra, alt kutupta küçük yumuşak doku fazlalığı veya göğüsün hafif sarkması (ptosis) olduğunda 
                  kullanılır.
                </p>
                <div className="bg-blue-50 rounded-2xl p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Subfascial (Fasya Altı) Yerleştirme Avantajları:</h3>
                  <ul className="space-y-2">
                    {[
                      'Pektoral kasa zarar verilmez',
                      'Profesyonel sporcular veya düzenli egzersiz yapanlar için önemli olabilir',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4">
                  Paris Health Clinic doktorlarımız, implant cep düzlemini hastanın ihtiyaçlarına göre seçer.
                </p>
              </div>
            </div>

            {/* Style */}
            <div id="style" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Göğüs İmplantı Stili, Doku, Profil ve Boyutlandırma
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Göğüs implantları, geniş bir şekil, profil, kabuk dokusu ve boyut yelpazesinde mevcuttur. 
                  Yuvarlak implantlar veya anatomik implantlar kullanılabilir. Göğüs implantlarının kabukları 
                  pürüzsüz veya dokulu olabilir.
                </p>
                <p>
                  İmplant profili, belirli bir taban boyutu için bir implantın çıkıntısını ifade eder. Seçimler, 
                  düşük veya orta çıkıntı (daha az hacim ve ön konveksite), orta aralık veya orta artı çıkıntı 
                  (ara hacim ve konveksite) ve yüksek profil (maksimum hacim ve konveksite) olmak üzere üç profilden 
                  yapılır.
                </p>
                <p>
                  Doğru göğüs implant boyutunu seçmek, ilk konsültasyonunuzla başlayan bir süreçtir. Paris Health 
                  Clinic doktorlarımız, her bireyin göğüs büyütme ameliyatı hakkındaki arzularının nüanslarını 
                  öğrenmek konusunda çok dikkatlidir. Hastanın arzularını karşılamak için dikkatli anatomik ölçümler 
                  ve başlangıç boyut "aralığını" belirlemek için dikkatli doku değerlendirmesi gereklidir. Son olarak, 
                  doktorlarımız ameliyat sırasında silikon jel implant ölçekleyicileri kullanarak boyut seçimini 
                  doğrular.
                </p>
              </div>
            </div>

            {/* Procedure */}
            <div id="procedure" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Göğüs Büyütme Ameliyatı
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Paris Health Clinic doktorları, ameliyatlarını İstanbul'daki tam akrediteli hastanelerde 
                  gerçekleştirir. Göğüs büyütme, ayakta tedavi prosedürü olarak gerçekleştirilir veya diğer 
                  ameliyatlarla birleştirilirse bir gece kalış gerektirebilir.
                </p>
                <p>
                  Ameliyat öncesi işaretlemeden sonra, prosedür, sertifikalı bir anestezi uzmanı tarafından 
                  uygulanan genel anestezi altında gerçekleştirilir. Prosedür süresi yaklaşık <strong>1.5-2 saat</strong>tir.
                </p>
                <div className="bg-purple-50 rounded-2xl p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Ameliyat Süreci:</h3>
                  <ul className="space-y-2">
                    {[
                      'Ameliyat öncesi detaylı konsültasyon ve planlama',
                      'Ameliyat öncesi işaretleme',
                      'Genel anestezi altında ameliyat',
                      '1.5-2 saat süren prosedür',
                      'Ayakta tedavi veya 1 gece hastane kalışı',
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
                Göğüs Büyütme Sonrası İyileşme
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Tam akrediteli hastanenin iyileşme odasında, lisanslı kayıtlı hemşiremizle iyileşeceksiniz ve 
                  ameliyatın tamamlanmasından yaklaşık 1-2 saat sonra tamamen uyanık ve rahat olduğunuzda bir arkadaş 
                  veya akraba ile eve taburcu edileceksiniz. Kombinasyon prosedürü ise, bir gece kalış gerekebilir.
                </p>
                <p>
                  Paris Health Clinic doktorlarımız, yedi gün sonra işe veya okula dönmeyi önerir, ancak daha az 
                  fiziksel aktivite gerektiren mesleklerle, bazıları ameliyat sonrası 4-5 gün kadar erken dönebilir.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">İyileşme Süreci:</h3>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      'İlk üç hafta ofis tarafından sağlanan ameliyat sonrası sütyen giyilir',
                      '1 hafta sonra sütyen standart spor sütyeni ile değiştirilebilir',
                      'Normal sütyenler ve mayo yaklaşık 2 hafta sonra giyilebilir',
                      'Göğüsler ilk yedi gün sert ve şiş görünebilir, genellikle 14 günde azalır',
                      'Şekil ve boyut 12 hafta içinde final pozisyonuna yerleşir',
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

            {/* Exercise */}
            <div id="exercise" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Göğüs Büyütme Sonrası Egzersiz Yapabilir miyim?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Hafif egzersiz (darbesiz kardiyo) beş ila yedi gün sonra devam edebilir ve daha yoğun fiziksel 
                  aktivite göğüs büyütme ameliyatınızdan üç hafta sonra başlayabilir.
                </p>
                <p>
                  Pektoral kas kasılması gerektirmeyen güç antrenmanı (alt vücut, core ve biceps/triceps tonlama, 
                  kollar 45 derecenin altında tutulur) yedi gün sonra devam edebilir. Modifiye pektoral egzersizler 
                  4-6 hafta sonra devam edebilir ve tam kısıtlamasız antrenman 12 hafta sonra başlar.
                </p>
              </div>
            </div>

            {/* Aftercare */}
            <div id="aftercare" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Göğüs Büyütme Sonrası Ne Yapmalıyım?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Ofisimizle ilişkiniz prosedür tamamlandıktan sonra bitmez. Ameliyattan sonra, gün ve gece 
                  hizmetinizdeyiz ve size ulaşılabiliriz. Standart takip ziyaretleri bir hafta, altı hafta ve 
                  12 aydadır.
                </p>
                <p>
                  İstanbul Göğüs Büyütme Cerrahı, Paris Health Clinic doktorlarımız, göğüs sağlığı, göğüs 
                  kendi kendine muayenesi, egzersizler ve gerektiğinde göğüs görüntüleme zamanlaması hakkında 
                  bilgi sağlayacaktır.
                </p>
              </div>
            </div>

            {/* Price */}
            <div id="price" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                İstanbul'da Göğüs Büyütme Fiyatları
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  İstanbul'da göğüs büyütme fiyatları, işlemin karmaşıklığına, kullanılan implant tipine ve 
                  kliniğin prestijine bağlı olarak değişiklik gösterir. Paris Health Clinic'te göğüs büyütme 
                  fiyatları <strong>€4,500'dan başlamaktadır</strong>.
                </p>
                <p>
                  Fiyatlar, yapılacak işlemin kapsamına (basit göğüs büyütme, göğüs dikleştirme ile kombinasyon, 
                  asimetri düzeltme vb.), implant tipine (yuvarlak, anatomik, profil vb.) ve konaklama 
                  süresine göre değişebilir.
                </p>
                <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-8 text-white shadow-2xl mt-6">
                  <h3 className="text-2xl font-bold mb-4">Göğüs Büyütme Fiyatına Dahil Olanlar:</h3>
                  <ul className="space-y-2">
                    {[
                      'Ameliyat öncesi detaylı konsültasyon',
                      'Cerrahi işlem (seçilen teknik)',
                      'Göğüs implantları',
                      'Hastane kalışı (1 gece)',
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
              <p className="text-gray-600">İstanbul'da göğüs büyütme hakkında yaygın sorular</p>
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
              Hayalinizdeki Görünüme Bugün Kavuşun!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              İstanbul'da uzman cerrahlarla profesyonel göğüs büyütme. En iyi fiyatlar, doğal sonuçlar.
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
