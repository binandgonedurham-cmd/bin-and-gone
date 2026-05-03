function FixedFooterBanner() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-red-700/50 bg-red-600 shadow-[0_-4px_24px_rgba(0,0,0,0.35)]"
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-3 py-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:px-6 sm:py-3">
        <a
          href="tel:9052606688"
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border-2 border-white/90 bg-white px-4 py-3 text-center text-sm font-bold text-red-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-50 hover:shadow-lg sm:w-auto sm:min-w-[200px] sm:px-6"
        >
          905-260-6688
        </a>
        <a
          href="#book-now"
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border-2 border-white/30 bg-red-700 px-4 py-3 text-center text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-red-800 hover:shadow-lg sm:w-auto sm:min-w-[200px] sm:px-6"
        >
          Quote
        </a>
      </div>
    </div>
  );
}

export default FixedFooterBanner;
