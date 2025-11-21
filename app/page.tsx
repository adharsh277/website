import AboutInfoCreonStats from "@/components/AboutInfo";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuoteHeroSection from "@/components/QuoteHeroSection";
import ReadyToTransform from "@/components/ReadyToTransform";
import WhatWeDo from "@/components/WhatWeDoSection";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen">
      <Header />
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full">
        <HeroSection />
        <AboutInfoCreonStats />
        <ReadyToTransform />
        <QuoteHeroSection />
        <WhatWeDo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
