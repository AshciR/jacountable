import {CorruptionStatus} from "@/components/CorruptionStatus";

type CorruptionCardProps = {
  title: string;
  description: string;
  date: string;
  involved: string[];
  status: CorruptionStatus;
  source: string;
}

const statusColors: Record<CorruptionCardProps["status"], string> = {
  [CorruptionStatus.Ongoing]: "bg-accent text-black",
  [CorruptionStatus.Investigated]: "bg-green-600 text-white",
  [CorruptionStatus.Ignored]: "bg-red-600 text-white"
};

const CorruptionCard = ({
                          title,
                          description,
                          date,
                          involved,
                          status,
                          source
                        }: CorruptionCardProps) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-2 ${statusColors[status]}`}>
        {status}
      </span>
    <h2 className="text-lg font-semibold text-charcoal mb-1">{title}</h2>
    <p className="text-sm text-slate mb-2">{description}</p>
    <p className="text-sm text-slate mb-1">📅 {new Date(date).toLocaleDateString()}</p>
    <p className="text-sm text-slate mb-2">🧑‍🤝‍🧑 Involved: {involved.join(", ")}</p>
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm underline hover:text-blue-800"
    >
      🔗 Source
    </a>
  </div>
);

export {CorruptionCard}
export type {CorruptionCardProps}
