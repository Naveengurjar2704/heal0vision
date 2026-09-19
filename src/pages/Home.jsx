import Hero from "../components/home/Hero";
import ServiceMarquee from "../components/home/ServiceMarquee";
import ProceduresOverview from "../components/home/ProceduresOverview";
import JourneySection from "../components/home/JourneySection";
import CompareSection from "../components/home/CompareSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import FaqSection from "../components/home/FaqSection";
import CtaBanner from "../components/home/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceMarquee />
      <ProceduresOverview />
      <JourneySection />
      <CompareSection />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
