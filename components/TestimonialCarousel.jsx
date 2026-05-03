import { useCallback, useEffect, useState } from "react";

const REVIEWS = [
  {
    id: "1",
    quote: "On time, clean bin, easy pickup. Great for our reno.",
    name: "Sarah M.",
    detail: "Whitby",
  },
  {
    id: "2",
    quote:
      "Fair price, clear comms. 20-yard garage cleanout was painless.",
    name: "James T.",
    detail: "Oshawa",
  },
  {
    id: "3",
    quote: "Pro crew, no driveway damage. Using them on the next flip.",
    name: "Priya K.",
    detail: "Ajax",
  },
  {
    id: "4",
    quote: "Tight deadline — they made it work.",
    name: "Marcus L.",
    detail: "Pickering",
  },
];

const INTERVAL_MS = 6500;

function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const count = REVIEWS.length;

  const goTo = useCallback(
    (next) => {
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [count]);

  const active = REVIEWS[index];

  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-b border-red-600/20 bg-black px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Reviews
        </h2>

        <div className="relative overflow-hidden rounded-2xl border border-red-600/30 bg-zinc-950 p-8 shadow-xl shadow-black/40 sm:p-10">
          <div
            key={active.id}
            className="fade-in"
            role="region"
            aria-live="polite"
            aria-label={`Review ${index + 1} of ${count}`}
          >
            <svg
              className="mb-4 h-8 w-8 text-red-600/80"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden={true}
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="mb-6 text-lg font-medium leading-relaxed text-zinc-200 sm:text-xl">
              “{active.quote}”
            </blockquote>
            <footer className="flex flex-wrap items-baseline gap-2">
              <cite className="not-italic font-bold text-white">
                {active.name}
              </cite>
              <span className="text-zinc-500">·</span>
              <span className="text-sm text-zinc-400">{active.detail}</span>
            </footer>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="min-h-[44px] min-w-[44px] rounded-lg border border-zinc-600 bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-400"
              aria-label="Previous review"
            >
              Previous
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Review slides">
              {REVIEWS.map((r, i) => (
                <button
                  key={r.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-red-500"
                      : "w-2.5 bg-zinc-600 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="min-h-[44px] min-w-[44px] rounded-lg border border-zinc-600 bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-400"
              aria-label="Next review"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
