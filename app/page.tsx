import ContactFormSection from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuoteHeroSection from "@/components/QuoteHeroSection";
import ReadyToTransform from "@/components/ReadyToTransform";
import WhatWeDoSection from "@/components/WhatWeDoSection";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen">
      <Header />

      <main className="flex flex-col row-start-2 items-center sm:items-start w-full">
        <HeroSection />
        <ReadyToTransform />
        <QuoteHeroSection />
        <WhatWeDoSection />
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
}
