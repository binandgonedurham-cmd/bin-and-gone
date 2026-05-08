const BIN_PRICING = [
  {
    size: "4 Yard Bin",
    threeDay: "$350",
    sevenDay: "$390",
    included: "1 ton included",
    extra: "$125 per additional ton",
  },
  {
    size: "9 Yard Bin",
    threeDay: "$475",
    sevenDay: "$525",
    included: "1 ton included",
    extra: "$125 per additional ton",
  },
  {
    size: "11 Yard Bin",
    displaySize: "11 Yard Bin (Most Popular)",
    threeDay: "$575",
    sevenDay: "$625",
    included: "1 ton included",
    extra: "$125 per additional ton",
    featured: true,
  },
  {
    size: "15 Yard Bin",
    threeDay: "$699",
    sevenDay: "$749",
    included: "1 ton included",
    extra: "$125 per additional ton",
  },
];

function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-b border-orange-500/20 bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
          Transparent Rates
        </p>
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Bin Rental Pricing
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-zinc-300 sm:text-base">
          Professional bin rental pricing designed for cleanouts, renovations, and
          construction projects.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {BIN_PRICING.map((bin, index) => (
            <article
              key={bin.size}
              className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 ${
                bin.featured
                  ? "border-orange-400 bg-zinc-900 shadow-[0_16px_45px_-16px_rgba(251,146,60,0.6)]"
                  : "border-zinc-800 bg-black shadow-[0_14px_35px_-16px_rgba(0,0,0,0.75)] hover:-translate-y-1 hover:border-orange-500/60 hover:shadow-[0_18px_45px_-18px_rgba(251,146,60,0.45)]"
              }`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {bin.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-black">
                  Most Popular
                </span>
              )}

              <h3 className="mb-5 text-2xl font-extrabold text-white">
                {bin.displaySize ?? bin.size}
              </h3>

              <div className="mb-5 space-y-3">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    3-Day
                  </p>
                  <p className="text-3xl font-black tracking-tight text-orange-400">
                    {bin.threeDay}
                  </p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    7-Day
                  </p>
                  <p className="text-3xl font-black tracking-tight text-white">
                    {bin.sevenDay}
                  </p>
                </div>
              </div>

              <ul className="mb-6 space-y-2 text-sm text-zinc-200">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-orange-400" aria-hidden>
                    ✔
                  </span>
                  <span>{bin.included}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-orange-400" aria-hidden>
                    ✔
                  </span>
                  <span>{bin.extra}</span>
                </li>
              </ul>

              <a
                href="#book-now"
                className="mt-auto inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                Get a Quote
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-black/70 p-6 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.85)] sm:p-8">
          <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
            All bins include delivery &amp; pickup, 1 ton included, flexible
            rental periods, same-day service available, and $125 per additional
            ton.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
