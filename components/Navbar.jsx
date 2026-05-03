const linkClass =
  "text-white transition-colors duration-300 hover:text-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-red-600/30 bg-black shadow-md shadow-black/40">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className={`text-xl font-extrabold tracking-tight ${linkClass}`}
        >
          Bin &amp; Gone
        </a>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-semibold sm:gap-x-6 sm:text-base">
          <a href="#home" className={linkClass}>
            Home
          </a>
          <a href="#how-it-works" className={linkClass}>
            How
          </a>
          <a href="#reviews" className={linkClass}>
            Reviews
          </a>
          <a href="#book-now" className={linkClass}>
            Quote
          </a>
          <a
            href="#book-now"
            className="inline-flex min-h-[44px] items-center rounded-lg bg-red-600 px-4 py-2 text-white shadow-md shadow-red-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:text-white hover:shadow-red-700/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
