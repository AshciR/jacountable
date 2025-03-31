import promises from "@/data/promises.json";
import {PromiseCard} from "@/components/PromiseCard";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

const PromisesPage = () => (
  <main className="flex flex-col bg-[#F9FAFB] text-charcoal min-h-screen">
    <Header/>
    <div className="flex-grow px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Promises Tracker</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {promises.map((item) => (
          <PromiseCard
            key={item.id}
            title={item.title}
            category={item.category}
            year={item.year}
            status={item.status}
            source={item.source}
          />
        ))}
      </div>
    </div>
    <Footer/>
  </main>
);

export default PromisesPage