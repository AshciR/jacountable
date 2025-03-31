import data from "@/data/corruption.json";
import {Header} from "@/components/Header";
import {CorruptionCard, CorruptionCardProps} from "@/components/CorruptionCard";
import {Footer} from "@/components/Footer";
import {TimelineItem, TimelineItemProps} from "@/components/TimelineItem";

const CorruptionPage = () => (
  <main className="bg-[#F9FAFB] text-charcoal min-h-screen flex flex-col">
    <Header/>
    {/*<CardView corruptionData={data}/>*/}
    <TimeLineView corruptionData={data}/>
    <Footer/>
  </main>
);

type TimeLineViewProps = {
  corruptionData: TimelineItemProps[]
}

const TimeLineView = ({corruptionData}: TimeLineViewProps) => {
  return (
    <div className="flex-grow px-4 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">Corruption Timeline</h1>

      {data
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .map((item) => (
          <TimelineItem
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
  )
}

type CardViewProps = {
  corruptionData: CorruptionCardProps[]
}

const CardView = ({corruptionData}: CardViewProps) => (
  <div className="flex-grow px-4 py-12">
    <h1 className="text-3xl font-bold text-center mb-8 text-primary">Corruption Timeline</h1>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {corruptionData.map((item) => (
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
);

export default CorruptionPage
