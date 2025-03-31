import Link from "next/link";

const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <Link
        href="/"
        className="text-2xl font-bold"
      >
            <span className="text-primary">
          J
        </span>
        <span className="text-accent">
          A
        </span>
        <span>
          ccountable
        </span>
      </Link>

      <nav className="space-x-4">
        <Link
          href="/"
          className="text-slate hover:text-primary transition"
        >
          Home
        </Link>
        <Link
          href="/promises"
          className="text-slate hover:text-primary transition"
        >
          Promises
        </Link>
        <Link
          href="/corruption"
          className="text-slate hover:text-primary transition"
        >
          Corruption
        </Link>
      </nav>
    </div>
  </header>
);
export {Header}
