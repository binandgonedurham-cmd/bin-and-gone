function Hero() {
  return (
    <div className="fade-in relative flex min-h-[85vh] items-center overflow-hidden border-b border-red-600/20 bg-gradient-to-b from-black via-zinc-950 to-black px-4 py-16 sm:min-h-[80vh] sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,38,38,0.22),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-6xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-red-500 sm:text-base">
          Durham Region
        </p>
        <h1 className="mb-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Bin &amp; Gone
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg font-medium text-zinc-300 sm:text-xl">
          Junk removal and bin rental. Clear pricing. Fast pickup.
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#book-now"
            className="inline-flex min-h-[52px] w-full min-w-[200px] items-center justify-center rounded-xl bg-red-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-red-900/45 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-red-700/50 sm:w-auto"
          >
            Book Now
          </a>
          <a
            href="#book-now"
            className="inline-flex min-h-[52px] w-full min-w-[200px] items-center justify-center rounded-xl border-2 border-red-500/80 bg-black/40 px-8 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400 hover:bg-red-950/40 sm:w-auto"
          >
            Quote
          </a>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-red-600/25 bg-zinc-950/80 px-5 py-4 text-sm text-zinc-300 shadow-inner shadow-black/40 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-2 sm:text-base">
          <span className="flex items-center justify-center gap-2">
            <span className="text-red-500" aria-hidden>
              ✓
            </span>
            Licensed &amp; insured
          </span>
          <span className="hidden h-4 w-px bg-zinc-700 sm:block" aria-hidden />
          <span className="flex items-center justify-center gap-2">
            <span className="text-red-500" aria-hidden>
              ✓
            </span>
            Same-day (often)
          </span>
          <span className="hidden h-4 w-px bg-zinc-700 sm:block" aria-hidden />
          <a
            href="tel:9052606688"
            className="flex items-center justify-center gap-2 font-semibold text-white transition hover:text-red-400"
          >
            <span className="text-red-500" aria-hidden>
              ☎
            </span>
            905-260-6688
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
