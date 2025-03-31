import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Explore the Facts
      </h2>
      <p className="text-slate mb-6 max-w-xl mx-auto">
        Browse government promises and track scandals that shaped Jamaica&apos;s future
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-[#005f36] transition"
          href={"/promises"}
        >
          View Promises
        </Link>
        <Link
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition"
          href={"/corruption"}
        >
          View Corruption
        </Link>
      </div>
    </section>
  );
}

export {CallToActionSection}