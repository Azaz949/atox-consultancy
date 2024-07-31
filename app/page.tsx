import { About } from "@/components/About";
import { AnimatedBeamDemo } from "@/components/magicui-blocks/AnimatedBeamDemo";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { OrbitingCirclesDemo } from "@/components/magicui-blocks/OrbitingCirclesDemo";
import ServiceBlock from "@/components/blocks/service-block";
import { AppleCardsCarouselDemo } from "@/components/aceternity/AppleCardsCarouselDemo";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className=" dark:bg-slate-400">
      <AppleCardsCarouselDemo />
      </div>
      <OrbitingCirclesDemo />
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
