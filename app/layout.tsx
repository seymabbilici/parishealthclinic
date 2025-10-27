import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "Paris Health Clinic - Sağlık Turizmi ve Estetik Merkezi",
  description: "Paris Health Clinic ile hayalinizdeki estetik görünüme ulaşın. Güvenilir ve kaliteli sağlık turizmi hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}

