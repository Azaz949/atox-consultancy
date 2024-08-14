import { About } from "@/components/About";
import { FeaturedInsights } from "@/components/aceternity/FeaturedInsights";
import { SAPSolutionsForIndustry } from "@/components/aceternity/SAPSolutionsForIndustry";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
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
      <SAPSolutionsForIndustry />
      <FeaturedInsights />
      <About />
      <Cta />
      <JoinUsVideoSection />
      <FAQ />
      <Footer />
      <ScrollToTop />


      {/* <Features /> */}
      {/* <Hero />*/}
      {/* <OrbitingCirclesDemo /> */}
      {/* <div className="bg-slate-700 py-16">
        <GlareCardDemo />
      </div> */}
    </main>
  );
}
