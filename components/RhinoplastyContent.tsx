/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { MessageCircle, Check, Shield, Clock, Award, ChevronDown, Phone, ArrowRight, Stethoscope, Heart, Star } from 'lucide-react';

export default function RhinoplastyContent() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');

  const tableOfContents = [
    { id: 'overview', title: 'Rhinoplasty Turkey, Burun Estetiği Türkiye' },
    { id: 'how-performed', title: 'Burun Estetiği Ameliyatı Nasıl Yapılır?' },
    { id: 'who-applied', title: 'Burun Estetiği Kimlere Uygulanır?' },
    { id: 'when-performed', title: 'Burun Estetiği Hangi Durumlarda Yapılır?' },
    { id: 'types', title: 'Burun Estetiği Ameliyatı Türleri' },
    { id: 'price', title: 'Türkiye\'de Burun Estetiği Fiyatları' },
    { id: 'before-surgery', title: 'Burun Estetiği Öncesi Bilinmesi Gerekenler' },
    { id: 'after-surgery', title: 'Burun Estetiği Sonrası Süreç' },
    { id: 'recovery', title: 'Burun Estetiği İyileşme Süreci' },
    { id: 'age-limit', title: 'Burun Estetiği Yaş Sınırı' },
    { id: 'combined', title: 'Burun Estetiği ile Birlikte Yapılan Ameliyatlar' },
    { id: 'faq', title: 'Sıkça Sorulan Sorular' },
  ];

  const faqs = [
    {
      q: 'Türkiye\'de burun estetiği fiyatları ne kadar?',
      a: 'Türkiye\'de burun estetiği fiyatları işlemin karmaşıklığına, doktorun deneyimine ve kliniğin konumuna göre değişiklik gösterir. Paris Health Clinic\'te burun estetiği fiyatları €3,000\'dan başlamaktadır. İlk operasyon, revizyon, etnik rhinoplasty gibi faktörler fiyatı etkiler. Detaylı fiyat teklifi için ücretsiz konsültasyon randevusu alabilirsiniz.',
    },
    {
      q: 'Türkiye\'de burun estetiği güvenli mi?',
      a: 'Evet, kesinlikle. Türkiye, dünya standartlarında estetik cerrahi hizmetleri sunan önde gelen ülkelerden biridir. Paris Health Clinic olarak uluslararası sertifikalı doktorlarımız, JCI akrediteli hastanelerimiz ve modern teknolojimizle güvenli bir tedavi süreci sunuyoruz. Türkiye, dünya çapında estetik cerrahi alanında ilk 5 ülke arasında yer almaktadır.',
    },
    {
      q: 'Burun estetiği sonrası iyileşme ne kadar sürer?',
      a: 'İlk şişlikler 7-14 gün içinde azalır. Burun alçısı genellikle 7-10 gün sonra çıkarılır. İlk 2 hafta içinde günlük aktivitelere dönebilirsiniz. Final sonuçlar 6-12 ay içinde netleşir. Ekibimiz kapsamlı bir bakım ve takip programı sağlar.',
    },
    {
      q: 'Burun estetiği nefes problemlerimi çözer mi?',
      a: 'Evet, burun estetiği hem görünümünüzü iyileştirir hem de nefes problemlerinizi çözer. Doktorlarımız fonksiyonel ve estetik açıları birlikte değerlendirir. Septum deviasyonu, konka hipertrofisi gibi nefes problemleri burun estetiği sırasında düzeltilir.',
    },
    {
      q: 'Ameliyattan sonra İstanbul\'da kalmam gerekiyor mu?',
      a: 'İlk iyileşme ve takip için 7-10 gün İstanbul\'da kalmanızı öneriyoruz. Bu süre içinde alçı çıkarılır, ilk kontroller yapılır ve gerekli bakımlar sağlanır. Ekibimiz konaklama ayarlamalarında yardımcı olur. 5 yıldızlı otellerde konforlu konaklama seçenekleri sunuyoruz.',
    },
    {
      q: 'Burun estetiği sonuçları kalıcı mı?',
      a: 'Evet, burun estetiği sonuçları kalıcıdır. Yeni burnunuz hayat boyu sizinle olacak. Ancak yaşlanma süreci ve yaralanmalar gibi faktörler uzun vadede burnun şeklini etkileyebilir. Doğru teknik ve deneyimli cerrah ile yapılan operasyonlar genellikle ömür boyu kalıcı sonuçlar verir.',
    },
    {
      q: 'Burun estetiği ameliyatı ne kadar sürer?',
      a: 'Burun estetiği ameliyatı genellikle 1.5-3 saat arasında sürer. İşlemin karmaşıklığına, açık veya kapalı teknik kullanımına göre süre değişebilir. Basit işlemler daha kısa, revizyon veya karmaşık işlemler daha uzun sürebilir.',
    },
    {
      q: 'Burun estetiği ameliyatında tampon kullanılıyor mu?',
      a: 'Modern burun estetiği tekniklerinde genellikle tampon kullanılmaz. Bunun yerine silikon splintler kullanılır ki bunlar nefes almayı kolaylaştırır. Ancak bazı durumlarda doktorunuz tampon kullanmayı tercih edebilir. Bu durumda tamponlar genellikle 2-3 gün sonra çıkarılır.',
    },
    {
      q: 'Burun estetiği için en uygun mevsim hangisi?',
      a: 'Burun estetiği için özel bir mevsim yoktur, yılın her zamanı yapılabilir. Ancak yaz aylarında güneşten korunma, yüzme ve güneş gözlüğü kullanımı konusunda daha dikkatli olunması gerekir. İlk 6 ay güneş gözlüğü kullanımından kaçınılmalıdır.',
    },
    {
      q: 'Burun estetiği ile birlikte hangi işlemler yapılabilir?',
      a: 'Burun estetiği ile birlikte çene estetiği, göz kapağı estetiği (blepharoplasty), yüz germe, dolgu uygulamaları gibi işlemler yapılabilir. Ayrıca septum deviasyonu, sinüzit, konka problemleri gibi fonksiyonel sorunlar da aynı anda düzeltilebilir.',
    },
    {
      q: 'Burun estetiği yaş sınırı var mı?',
      a: 'Burun estetiği için yaş sınırı vardır. Kadınlarda kemik gelişimi 17 yaşında, erkeklerde 18 yaşında tamamlanır. Bu yaşlardan önce sadece nefes problemleri gibi sağlık sorunları varsa operasyon yapılabilir. Sağlıklı bireyler için minimum yaş kadınlarda 17, erkeklerde 18\'dir.',
    },
    {
      q: 'Türkiye\'de burun estetiği uçak bileti dahil mi?',
      a: 'Paris Health Clinic olarak all-inclusive paketlerimizde havaalanı karşılama, VIP transfer, 5 yıldızlı otel konaklama, ameliyat ve tüm bakım hizmetleri dahildir. Uçak biletleri genellikle pakete dahil değildir, ancak size en uygun uçuş seçeneklerini bulmanızda yardımcı oluyoruz.',
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
                  Rhinoplasty Turkey<br />
                  <span className="text-purple-clinic">Burun Estetiği İstanbul</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  İstanbul'da dünya standartlarında burun estetiği deneyimi. Uzman doktorlarımız, 
                  doğal sonuçlar ve uygun fiyatlar. Paris Health Clinic ile hayalinizdeki buruna kavuşun.
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
                  src="/images/procedure-rhinoplasty.jpg"
                  alt="Rhinoplasty Turkey - Burun Estetiği İstanbul"
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
                { icon: Clock, title: 'Hızlı İyileşme', desc: 'Minimal süre' },
                { icon: Award, title: '20+ Yıl', desc: 'Kanıtlanmış deneyim' },
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
            
            {/* Rhinoplasty Turkey Overview */}
            <div id="overview" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Rhinoplasty Turkey, Burun Estetiği Türkiye
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>Rhinoplasty Turkey</strong> (Burun Estetiği Türkiye), günümüzde estetik cerrahi operasyonları arasında en çok tercih edilen işlemlerden biridir. Bu operasyonun amacı, kişinin yüzüyle uyumlu, kendisinin de beğendiği bir burun yapısına sahip olmasını sağlamaktır.
                </p>
                <p>
                  Burun estetiği operasyonu yaptıracak kişi, ameliyat öncesinde doktoruyla birlikte istediği burun yapısını belirlemelidir. Ayrıca nefes fonksiyonunun sorunsuz ve ideal olmasını sağlayan operasyonlar olarak da tanımlanabilir.
                </p>
                <p>
                  <strong>Burun estetiği ameliyatı</strong> hem estetik hem de fonksiyonel ihtiyaçlarınızı karşılamak için yapılabilir. Burun estetiği Türkiye operasyonu sırasında, burnunuz yüzünüze en uygun şekle getirilirken, deviasyon ve konka hipertrofisi gibi nefes fonksiyonunuzu olumsuz etkileyen durumlar da ortadan kaldırılabilir.
                </p>
                <p>
                  Burun estetiği ameliyatı yaptıracak kişilerin çoğunda, solunum yolunu kapatan intranazal problemler sıklıkla görülmektedir. Uzman doktorlarımız olarak, estetik operasyon ihtiyacınızı karşılıyor ve doğal görünümlü, fonksiyonlarını sorunsuz yerine getiren güzel bir buruna sahip olmanızı sağlıyoruz.
                </p>
              </div>
            </div>

            {/* How is Rhinoplasty Performed */}
            <div id="how-performed" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Burun Estetiği Ameliyatı Nasıl Yapılır?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>Rhinoplasty Turkey</strong> operasyonları genellikle genel anestezi altında gerçekleştirilir. Sadece burun ucunda küçük işlemler yapılacaksa lokal anestezi yeterli olabilir.
                </p>
                <p>
                  Bize ulaşan hastalarımızın çoğu, estetik işlemlerimizin nasıl yapıldığını merak ediyor. Sürece göre değişiklik gösterse de, burun estetiği ameliyatları genellikle genel anestezi altında gerçekleştirilir.
                </p>
                <p>
                  Paris Health Clinic olarak, her hasta için en uygun anestezi yöntemini belirliyor ve güvenli bir operasyon süreci sağlıyoruz. Modern ameliyathane tesislerimiz ve deneyimli anestezi ekibimizle, komplikasyon riskini minimuma indiriyoruz.
                </p>
              </div>
            </div>

            {/* Who is Rhinoplasty Applied to */}
            <div id="who-applied" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Burun Estetiği Kimlere Uygulanır?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Burun estetiği operasyonları, sağlık durumu uygun olan herkese uygulanabilir. Özellikle burnunun görünümünden memnun olmayan kişiler bu operasyonları tercih eder.
                </p>
                <p>
                  Yüzle uyumlu olmayan uzun veya büyük burun, kemerli burun, eğri burun, büyük burun delikleri problemi veya yüze göre asimetrik burun gibi birçok nedenle <strong>rhinoplasty İstanbul</strong> yaptırabilirsiniz.
                </p>
                <p>
                  Sorununuzun sonucu olarak, size en uygun operasyonları öneriyor ve sağlıklı, güzel bir buruna sahip olmanızı sağlıyoruz. Belirtildiği gibi, ameliyatı engelleyecek sağlık problemi olmayan herkes estetik cerrahi yaptırabilir.
                </p>
              </div>
            </div>

            {/* When Should Rhinoplasty Be Performed */}
            <div id="when-performed" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Burun Estetiği Hangi Durumlarda Yapılır?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Burun estetiği ameliyatları, bireyin görünümünü olumlu yönde değiştirirken, aynı zamanda sağlık problemlerinin giderilmesine de yardımcı olur. Burnunuzun görünümünden memnun değilseniz, estetik cerrahi yaptırabilirsiniz.
                </p>
                <p>
                  Şiddetli intranazal veya ekstranazal deviasyonu olan bazı kişilerde, estetik şikayet olmasa bile solunum yolunu açmak için tam bir burun düzeltmesi, yani burun estetiği gerekebilir.
                </p>
                <p>
                  Paris Health Clinic olarak, hem estetik hem de fonksiyonel ihtiyaçlarınızı değerlendiriyor ve size en uygun tedavi planını sunuyoruz.
                </p>
              </div>
            </div>

            {/* Rhinoplasty Surgery Types */}
            <div id="types" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Burun Estetiği Ameliyatı Türleri
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Burun estetiği operasyonları 2 ana teknikle uygulanır: <strong>açık</strong> ve <strong>kapalı</strong> teknik. Doktorlarımız, hastanın ihtiyaçlarına ve beklentilerine göre her iki tekniği de kullanmaktadır. Ancak mümkün olduğunca koruyucu burun estetiği tekniklerini tercih etmeye çalışıyoruz.
                </p>
                <p>
                  <strong>Kapalı burun estetiği</strong>nde, burun delikleri arasındaki bölümde kesi yoktur, tüm kesiler burun içinde yapılır ve ameliyat burun içinden gerçekleştirilir. Kapalı burun estetiğinde burun yapılarının daha iyi korunduğunu düşünüyoruz.
                </p>
                <p>
                  <strong>Açık burun estetiği</strong>nde, burun delikleri arasında kesi vardır, bu kesi burun içinde yapılan kesilerle birleştirilir ve burun derisi burun kemiği kıkırdak septum üzerinden kaldırılır. Bu kesiler ameliyat sonunda dikişlerle kapatılır.
                </p>
                <div className="bg-purple-50 rounded-2xl p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Hangi Teknik Daha İyi?</h3>
                  <p className="text-gray-700">
                    Her iki teknik de başarılı sonuçlar verir. Doktorunuz, burnunuzun yapısına ve ihtiyaçlarınıza göre en uygun tekniği belirleyecektir. Paris Health Clinic'te deneyimli cerrahlarımız, her hasta için en iyi sonucu verecek tekniği seçer.
                  </p>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div id="price" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Türkiye'de Burun Estetiği Fiyatları
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Türkiye'de burun estetiği (rhinoplasty) fiyatı, cerrahın deneyimi, kliniğin itibarı, işlemin karmaşıklığı ve kliniğin konumu gibi birçok değişkene bağlı olarak önemli ölçüde değişiklik gösterebilir.
                </p>
                <p>
                  <strong>Paris Health Clinic'te burun estetiği fiyatları €3,000'dan başlamaktadır.</strong> İlk operasyon, revizyon, etnik rhinoplasty gibi faktörler fiyatı etkiler. Ortalama fiyat aralığı €3,000 - €5,000 arasındadır.
                </p>
                <div className="bg-gradient-to-r from-purple-clinic to-purple-700 rounded-3xl p-8 text-white shadow-2xl mt-6">
                  <h3 className="text-2xl font-bold mb-4">Burun Estetiği Fiyatına Dahil Olanlar:</h3>
                  <ul className="space-y-2">
                    {[
                      'Ameliyat öncesi detaylı konsültasyon',
                      'Cerrahi işlem (açık veya kapalı teknik)',
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
                    <strong>Önemli:</strong> Fiyatlar sadece tahminidir. Kesin fiyat teklifi için ücretsiz konsültasyon randevusu almanız gerekmektedir. Her hasta için kişiselleştirilmiş fiyat teklifi sunuyoruz.
                  </p>
                </div>
              </div>
            </div>

            {/* Before Surgery */}
            <div id="before-surgery" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Burun Estetiği Öncesi Bilinmesi Gerekenler
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Estetik cerrahi yaptırmadan önce bilmeniz gereken bazı konular vardır. Hastalıklarınızı, şikayetlerinizi, kullandığınız ilaçları ve herhangi bir alerjiniz olup olmadığını bildirmeniz önemlidir.
                </p>
                <div className="bg-purple-50 rounded-2xl p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Ameliyat Öncesi Hazırlık:</h3>
                  <ul className="space-y-2">
                    {[
                      'Kan sulandırıcı ilaçlar ve yiyecekler ameliyattan 1 hafta önce kesilmelidir',
                      'Sigara ameliyattan 2 hafta önce, alkol 1 hafta önce bırakılmalıdır',
                      'Doktorunuzun onayıyla adet döneminde ameliyat olabilirsiniz',
                      'Ameliyat günü size bildirilen açlık süresine uygun olarak hastaneye gelmelisiniz (genellikle 6-8 saat)',
                      'Ameliyat öncesi gece ılık duş alınması önerilir',
                      'Metal takılar ve oje çıkarılmalıdır',
                      'Erkekler için tıraştan kaçınılmalıdır',
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

            {/* After Surgery */}
            <div id="after-surgery" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Burun Estetiği Sonrası Süreç
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Burun estetiği sonrası hastalarda şiddetli ağrı olmaz. Burun estetiği ameliyatı sonrası hissedilen tek şey hafif yanma ve basınçtır. Gerektiğinde alınan ağrı kesiciler genellikle yeterlidir. Bunların dışında büyük ağrılar olmadığını rahatlıkla söyleyebiliriz.
                </p>
                <p>
                  <strong>Burun estetiği sonrası ne zaman taburcu olunur?</strong> Burun estetiği ameliyatı sonrası genellikle 1 gece hastanede kalınır. Ertesi gün kontroller yapıldıktan sonra taburcu edilirsiniz.
                </p>
              </div>
            </div>

            {/* Recovery Process */}
            <div id="recovery" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Burun Estetiği İyileşme Süreci
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Burun estetiği sonrası iyileşme sürecini sorunsuz ve hızlı bir şekilde tamamlamak için dikkat edilmesi gereken faktörler vardır. Uzman ekibimiz, burun estetiği sonrası dikkat edilmesi gerekenleri size detaylı olarak açıklar.
                </p>
                <div className="bg-purple-50 rounded-2xl p-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-4">İyileşme Süreci İpuçları:</h3>
                  <ul className="space-y-3">
                    {[
                      'Genellikle 3-4 gün sonra günlük aktivitelerinize dönebilirsiniz',
                      'İkinci günden itibaren burun alçısı veya bantları ıslatmadan ılık duş alabilirsiniz',
                      'İkinci haftadan itibaren hafif egzersizler yapabilir ve yürüyüşe başlayabilirsiniz',
                      'Fiziksel aktivite gerektiren sporlar burun kanamasına neden olabileceğinden, 1. aydan sonra yapılması uygundur',
                      'Ödemden kaçınmak için sauna, hamam, solaryum, güneş banyosu, buhar banyosu, deniz ve havuz için 1 ay ara verilmelidir',
                      'Güneş yanığından kaçınmak için en az 2 ay güneşten uzak durmalı veya şapka takmalısınız',
                      'İlk 48 saat 2 yastıkla başınız yukarıda uyuyun',
                      'İlk 48 saat gözlerinize buz kompresi uygulayın',
                      'Bol su için',
                      'Ameliyattan sonra 2 hafta burnunuzu sümkürmeyin',
                      'Hapşırırken ağzınızı açık tutun',
                      'İki hafta ağır kaldırmayın',
                      'İlk iki hafta araba kullanmayın',
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

            {/* Age Limit */}
            <div id="age-limit" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Burun Estetiği Yaş Sınırı
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Burun estetiği için dikkat edilmesi gereken konu vücut ve kemik gelişimidir. Kadınlarda bu gelişim daha hızlı tamamlandığı için yaş sınırı 17, erkeklerde ise 18'dir.
                </p>
                <p>
                  Bu yaşlarda kadın ve erkeklere estetik cerrahi yapılabilir. Nefes alma ile ilgili sorun yaratan bir sağlık problemi varsa, daha erken yaşlarda da ameliyat yapılabilir. Kliniklerimizde bu detaylar çerçevesinde <strong>burun estetiği</strong> operasyonlarını gerçekleştiriyoruz.
                </p>
              </div>
            </div>

            {/* Combined Surgeries */}
            <div id="combined" className="scroll-mt-24">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Burun Estetiği ile Birlikte Yapılan Ameliyatlar
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Burun estetiği ameliyatı sırasında, sağlığınızı olumsuz etkileyen septum deviasyonu, konka bulloza ve sinüs tıkanıklığı gibi diğer problemleri ortadan kaldırmak için ek işlemler yapılabilir.
                </p>
                <p>
                  Burunun orta kısmındaki kemik-kıkırdak sapması olan ve burun tıkanıklığının sık görülen nedenlerinden biri olan septum deviasyonu, solunum yollarını tıkayan intranazal yapının büyümesine neden olan öncelikle konka bulloza olan konka problemleri de burun estetiği ameliyatları sırasında düzeltilir.
                </p>
                <p>
                  Ayrıca, kronik sinüzit veya uzun süreli alerjilerle bağlantılı olarak gelişen sinüzitte, burun ve sinüslerdeki polipler, Endovision adı verilen lens kamera sistemleriyle Endoskopik Sinüs Cerrahisi (ESS) operasyonları da yapılır.
                </p>
                <p>
                  Tüm bu problemlerle birlikte, burun estetiği operasyonlarına ek olarak kombine yüz estetiği işlemleri de yapılabilir. Çene dolgusu, protez yardımıyla çene büyütme ameliyatı, göz kapağı estetiği ameliyatı ve gerekli yüz bölgelerinde dolgu uygulamaları, burun estetiği ameliyatları sırasında sıkça yaptığımız ek işlemlerdir.
                </p>
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
              <p className="text-gray-600">Türkiye'de burun estetiği hakkında yaygın sorular</p>
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
              Hayalinizdeki Burna Bugün Kavuşun!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              İstanbul'da uzman cerrahlarla profesyonel burun estetiği. En iyi fiyatlar, doğal sonuçlar.
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
