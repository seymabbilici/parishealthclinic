import type { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RhinoplastyContent from "@/components/RhinoplastyContent";

export const metadata: Metadata = {
  title: "Rhinoplasty Turkey | Burun Estetiği İstanbul | Paris Health Clinic",
  description: "Rhinoplasty Turkey - İstanbul'da dünya standartlarında burun estetiği. Uzman doktorlar, doğal sonuçlar, uygun fiyatlar. Burun estetiği fiyatları €3,000'dan başlıyor. Paris Health Clinic ile hayalinizdeki buruna kavuşun.",
  keywords: [
    "rhinoplasty turkey",
    "burun estetiği istanbul",
    "nose job turkey",
    "burun estetiği fiyat",
    "rhinoplasty price turkey",
    "burun ameliyatı istanbul",
    "aesthetic nose surgery turkey",
    "rhinoplasty istanbul",
    "burun estetiği doktor",
    "paris health clinic rhinoplasty"
  ],
  openGraph: {
    title: "Rhinoplasty Turkey | Burun Estetiği İstanbul | Paris Health Clinic",
    description: "İstanbul'da dünya standartlarında burun estetiği. Uzman doktorlar, doğal sonuçlar, uygun fiyatlar.",
    type: "website",
    locale: "tr_TR",
  },
  alternates: {
    canonical: "https://parishealthclinic.com/yuz-estetigi/rhinoplasty",
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

export default function Rhinoplasty() {
  return (
    <main className="min-h-screen">
      <Header />
      <RhinoplastyContent />
      <Footer />
    </main>
  );
}
