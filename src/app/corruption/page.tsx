import data from "@/data/corruption.json";
import {Header} from "@/components/Header";
import {CorruptionCard} from "@/components/CorruptionCard";
import {Footer} from "@/components/Footer";

const CorruptionPage = () => (
  <main className="bg-[#F9FAFB] text-charcoal min-h-screen flex flex-col">
    <Header/>
    <div className="flex-grow px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Corruption Timeline</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <CorruptionCard
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            involved={item.involved}
            status={item.status}
            source={item.source}
          />
        ))}
      </div>
    </div>
    <Footer/>
  </main>
);

export default CorruptionPage
