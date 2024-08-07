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
import { OrbitingCirclesDemo } from "@/components/magicui-blocks/OrbitingCirclesDemo";
import ServiceBlock from "@/components/sections/service-block";
import { AppleCardsCarouselDemo } from "@/components/aceternity/AppleCardsCarouselDemo";
import { BlurFadeTextDemo } from "@/components/magicui-blocks/BlureFadeTextDemo";
import { GoogleGeminiEffectDemo } from "@/components/aceternity/GoogleGeminiEffectDemo";
import { GlareCardDemo } from "@/components/aceternity/GlareCardDemo";
import HeroVideo from "@/components/sections/hero-video";
import JoinUsVideoSection from "@/components/sections/Join-us-video";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="">
      <div id="home">
        <HeroVideo />
      </div>
      <Services />

      <GoogleGeminiEffectDemo />
      <div className=" dark:bg-slate-400">
        <AppleCardsCarouselDemo />
      </div>
      {/* <Hero />*/}
      {/* <OrbitingCirclesDemo /> */}
      <div className="bg-slate-700 py-16">
        <GlareCardDemo />
      </div>

      <About />
      <Cta />
      <JoinUsVideoSection />
      {/* <Features /> */}
      <Services />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
