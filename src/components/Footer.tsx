const Footer = () => {
  return (
    // <footer className="bg-primary text-white text-center py-6 mt-16">
    <footer className="bg-white text-slate py-6 mt-16 text-center border-t border-gray-200 flex-grow">
      <p className="text-sm">
        © {new Date().getFullYear()} JaAccountable. Built with ❤️ by 🇯🇲, for 🇯🇲.
      </p>
    </footer>
  )
}

export {Footer}