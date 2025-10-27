import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import PopularProcedures from "@/components/PopularProcedures";
import Testimonials from "@/components/Testimonials";
import VideoSection from "@/components/VideoSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <PopularProcedures />
      <Testimonials />
      <VideoSection />
      <CTA />
      <Footer />
    </main>
  );
}
