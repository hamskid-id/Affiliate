import GotoTop from "../components/shared/GotoTop";
import SmoothCursor from "../components/static/SmoothCursor";
import CommissionStepsSection from "../components/static/CommissionStepsSection";
import EverythingYouNeedSection from "../components/static/EverythingYouNeedSection";
import Footer from "../components/static/Footer";
import HeroSection from "../components/static/HeroSection";
import KeyFeaturesForAffiliate from "../components/static/KeyFeaturesForAffiliate";
import KeyFeaturesForMerchants from "../components/static/KeyFeaturesForMerchants";
import HeroBottom from "../components/static/LazyLoaded";
import Navigation from "../components/static/Navigation";
import { TestimonialsSection } from "../components/static/TestimonialsSection";
import WaitlistSection from "../components/static/WaitlistSection";
import WhoItsForSection from "../components/static/WhoItsForSection";
import WhyWeBuiltSection from "../components/static/WhyWeBuiltSection";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden max-w-[1440px] m-auto w-full min-h-screen relative flex flex-col items-center">
        <Navigation />
        <div className="flex flex-col  md:px-5 p-0  w-full">
          {" "}
          <div className="relative  flex flex-col md:px-6 px-0 rounded-xl bg-linear-to-b from-white to-[#FFAA8A]/40 w-full">
            <HeroSection />
            <HeroBottom />{" "}
          </div>{" "}
        </div>
        <WhyWeBuiltSection />
        <EverythingYouNeedSection />
        <WhoItsForSection />

        <KeyFeaturesForMerchants />
        <KeyFeaturesForAffiliate />
        <CommissionStepsSection />
        <TestimonialsSection />
        <WaitlistSection />
        <Footer />
      </main>
      <GotoTop />
      <SmoothCursor />
    </>
  );
}
