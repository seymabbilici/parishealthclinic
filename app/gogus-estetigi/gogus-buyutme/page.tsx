import type { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreastAugmentationContent from "@/components/BreastAugmentationContent";

export const metadata: Metadata = {
  title: "Breast Augmentation Istanbul | Göğüs Büyütme İstanbul | Paris Health Clinic",
  description: "Breast Augmentation Istanbul - İstanbul'da dünya standartlarında göğüs büyütme ameliyatı. Uzman doktorlar, doğal sonuçlar, uygun fiyatlar. Göğüs büyütme fiyatları €4,500'dan başlıyor. Paris Health Clinic ile hayalinizdeki görünüme kavuşun.",
  keywords: [
    "breast augmentation istanbul",
    "göğüs büyütme istanbul",
    "breast augmentation turkey",
    "göğüs büyütme fiyat",
    "breast augmentation price turkey",
    "göğüs büyütme ameliyatı istanbul",
    "breast implants istanbul",
    "göğüs büyütme doktor",
    "paris health clinic breast augmentation",
    "mammoplasty istanbul"
  ],
  openGraph: {
    title: "Breast Augmentation Istanbul | Göğüs Büyütme İstanbul | Paris Health Clinic",
    description: "İstanbul'da dünya standartlarında göğüs büyütme ameliyatı. Uzman doktorlar, doğal sonuçlar, uygun fiyatlar.",
    type: "website",
    locale: "tr_TR",
  },
  alternates: {
    canonical: "https://parishealthclinic.com/gogus-estetigi/gogus-buyutme",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function GogusBuyutme() {
  return (
    <main className="min-h-screen">
      <Header />
      <BreastAugmentationContent />
      <Footer />
    </main>
  );
}
