type PromiseStatus = "Kept" | "Broken" | "In Progress" | "Unknown";

type PromiseCardProps = {
  title: string;
  category: string;
  year: number;
  status: PromiseStatus;
  source: string;
}

const statusStyles: Record<PromiseStatus, string> = {
  Kept: "bg-green-600 text-white",
  Broken: "bg-red-600 text-white",
  "In Progress": "bg-accent text-black",
  Unknown: "bg-slate text-white",
};

const PromiseCard = ({
                       title,
                       category,
                       year,
                       status,
                       source,
                     }: PromiseCardProps) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-2 ${statusStyles[status]}`}>
        {status}
      </span>
    <h2 className="text-lg font-semibold text-charcoal mb-1">{title}</h2>
    <p className="text-sm text-slate mb-1">🏷 {category}</p>
    <p className="text-sm text-slate mb-2">📅 {year}</p>
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

export {PromiseCard}