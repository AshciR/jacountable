import {Hero} from "@/components/Hero";
import {StatsSection} from "@/components/StatsSection";
import {CallToActionSection} from "@/components/CallToActionSection";
import {Footer} from "@/components/Footer";

export default function Home() {
  return (
      <main className="flex flex-col bg-[#F9FAFB] text-charcoal min-h-screen">
        <Hero/>
        <StatsSection/>
        <CallToActionSection/>
        <Footer/>
      </main>
  );
}
