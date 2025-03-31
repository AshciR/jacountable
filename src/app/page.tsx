import {Hero} from "@/components/Hero";
import {StatsSection} from "@/components/StatsSection";

export default function Home() {
  return (
      <main className="bg-[#F9FAFB] text-charcoal min-h-screen">
        <Hero/>
        <StatsSection/>
      </main>
  );
}
