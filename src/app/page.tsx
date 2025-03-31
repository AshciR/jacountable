import {Hero} from "@/components/Hero";
import {StatsSection} from "@/components/StatsSection";
import {CallToActionSection} from "@/components/CallToActionSection";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";

export default function Home() {
  return (
      <main className="flex flex-col bg-[#F9FAFB] text-charcoal min-h-screen">
        <Header/>
        <div className="flex-grow">
          <Hero/>
          <StatsSection/>
          <CallToActionSection/>
          <Footer/>
        </div>
      </main>
  );
}
