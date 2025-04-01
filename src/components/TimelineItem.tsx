import {CorruptionStatus} from "@/components/CorruptionStatus";

type TimelineItemProps = {
  title: string;
  description: string;
  date: string;
  involved: string[];
  status: CorruptionStatus;
  source: string;
}

const statusStyles: Record<TimelineItemProps["status"], string> = {
  [CorruptionStatus.Ongoing]: "bg-accent text-black",
  [CorruptionStatus.Investigated]: "bg-green-600 text-white",
  [CorruptionStatus.Ignored]: "bg-red-600 text-white"
};

const dotColors: Record<TimelineItemProps["status"], string> = {
  [CorruptionStatus.Ongoing]: "bg-accent",
  [CorruptionStatus.Investigated]: "bg-green-600",
  [CorruptionStatus.Ignored]: "bg-red-600"
};


const TimelineItem = ({
                        title,
                        description,
                        date,
                        involved,
                        status,
                        source
                      }: TimelineItemProps) => (
  <div className="relative pl-8 pb-10 border-l-2 border-gray-300">

    {/* Dot */}
    <div className={`absolute left-[-6px] top-1 w-3 h-3 rounded-full ${dotColors[status]}`}></div>

    {/* Status badge */}
    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-2 ${statusStyles[status]}`}>
      {status}
    </span>

    {/* Content */}
    <p className="text-sm text-slate mb-1">{new Date(date).toLocaleDateString()}</p>
    <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
    <p className="text-sm text-slate mb-1">{description}</p>
    <p className="text-sm text-slate mb-1">🧑‍🤝‍🧑 {involved.join(", ")}</p>
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-blue-600 underline hover:text-blue-800"
    >
      🔗 Source
    </a>
  </div>
);

export type {TimelineItemProps}
export {TimelineItem}
