import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
