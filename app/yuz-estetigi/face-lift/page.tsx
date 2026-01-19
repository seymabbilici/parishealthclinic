import type { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaceLiftContent from "@/components/FaceLiftContent";

export const metadata: Metadata = {
  title: "Face Lift Istanbul | Yüz Germe İstanbul | Paris Health Clinic",
  description: "Face Lift Istanbul - İstanbul'da dünya standartlarında yüz germe ameliyatı. Uzman doktorlar, doğal sonuçlar, uygun fiyatlar. Yüz germe fiyatları €3,500'dan başlıyor. Paris Health Clinic ile genç ve canlı görünüme kavuşun.",
  keywords: [
    "face lift istanbul",
    "yüz germe istanbul",
    "facelift turkey",
    "yüz germe fiyat",
    "face lift price turkey",
    "yüz germe ameliyatı istanbul",
    "rhytidectomy istanbul",
    "yüz germe doktor",
    "paris health clinic face lift",
    "facelift surgery istanbul"
  ],
  openGraph: {
    title: "Face Lift Istanbul | Yüz Germe İstanbul | Paris Health Clinic",
    description: "İstanbul'da dünya standartlarında yüz germe ameliyatı. Uzman doktorlar, doğal sonuçlar, uygun fiyatlar.",
    type: "website",
    locale: "tr_TR",
  },
  alternates: {
    canonical: "https://parishealthclinic.com/yuz-estetigi/face-lift",
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

export default function FaceLift() {
  return (
    <main className="min-h-screen">
      <Header />
      <FaceLiftContent />
      <Footer />
    </main>
  );
}
