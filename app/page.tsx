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
import ServiceBlock from "@/components/sections/service-block";
import { AppleCardsCarouselDemo } from "@/components/aceternity/AppleCardsCarouselDemo";
import { BlurFadeTextDemo } from "@/components/magicui-blocks/BlureFadeTextDemo";
import { GoogleGeminiEffectDemo } from "@/components/aceternity/GoogleGeminiEffectDemo";
import { GlareCardDemo } from "@/components/aceternity/GlareCardDemo";
import HeroVideo from "@/components/sections/hero-video";
import JoinUsVideoSection from "@/components/sections/Join-us-video";

export default function Home() {
  return (
    <main className="">
      <div id="home">
        <HeroVideo />
      </div>
      <GoogleGeminiEffectDemo />
      {/* <Hero />
      <div className=" dark:bg-slate-400">
      
      <AppleCardsCarouselDemo />
      </div> */}
      {/* <OrbitingCirclesDemo /> */}
      <div className="bg-slate-700 py-16">
        <GlareCardDemo />
      </div>

      <About />
      <Cta />
      <JoinUsVideoSection />
      <HowItWorks />
      <Features />
      {/* <Services /> */}
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
