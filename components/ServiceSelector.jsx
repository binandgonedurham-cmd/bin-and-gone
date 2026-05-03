import { SERVICE_LABELS } from "../constants/services";

const OPTIONS = [
  {
    id: "in-home",
    description: "We load everything. You don’t lift.",
    highlight: "Full Service",
    Icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden={true}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    id: "curbside",
    description: "Items at the curb — we grab and go.",
    highlight: "Quick Pickup",
    Icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden={true}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12 0v.75m-12 0v-.75m12 0h-12"
        />
      </svg>
    ),
  },
  {
    id: "bin-rental",
    description: "Bin dropped off. You fill it. We haul it.",
    highlight: "Best for Renovations",
    Icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden={true}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 10.5h-18M8.25 10.5V18a1.5 1.5 0 001.5 1.5h4.5a1.5 1.5 0 001.5-1.5v-7.5M5.25 10.5L6 6h12l.75 4.5M9 6V4.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75V6"
        />
      </svg>
    ),
  },
];

function baseCardClass(isOn) {
  const shared =
    "fade-in min-w-0 w-full rounded-2xl border-2 p-5 text-left transition-all duration-300 ease-out " +
    "min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] sm:p-6 " +
    "active:scale-[0.99] motion-safe:hover:-translate-y-1 " +
    "focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-red-500";
  if (isOn) {
    return (
      `${shared} ` +
      "scale-[1.01] lg:scale-[1.02] border-red-500 bg-zinc-950/95 " +
      "shadow-[0_0_0_1px_rgba(239,68,68,0.35),0_20px_50px_-12px_rgba(239,68,68,0.28)] " +
      "motion-reduce:scale-100"
    );
  }
  return (
    `${shared} ` +
    "border-zinc-700/90 bg-zinc-950/70 hover:border-zinc-500 hover:bg-zinc-900/80"
  );
}

function ServiceSelector({ value, onChange }) {
  const selected =
    OPTIONS.some((o) => o.id === value) ? value : OPTIONS[0].id;

  const select = (id) => {
    onChange?.(id);
  };

  return (
    <div className="w-full min-w-0">
      <h2 className="mb-8 text-center text-xl font-extrabold tracking-tight text-white sm:mb-10 sm:text-2xl">
        Service
      </h2>
      <div
        className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        role="radiogroup"
        aria-label="Service type"
      >
        {OPTIONS.map((opt, i) => {
          const isOn = selected === opt.id;
          const { Icon } = opt;
          const title = SERVICE_LABELS[opt.id];
          return (
            <button
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={isOn}
              onClick={() => select(opt.id)}
              className={baseCardClass(isOn)}
              style={{ animationDelay: `${90 + i * 75}ms` }}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 ${
                    isOn
                      ? "bg-red-500/15 text-red-500 ring-1 ring-red-500/50"
                      : "bg-zinc-900 text-zinc-500 ring-1 ring-zinc-700"
                  } `}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <span
                  className={`max-w-[52%] shrink-0 rounded-full px-2.5 py-1.5 text-[10px] font-bold uppercase leading-tight tracking-wide sm:text-xs ${
                    isOn ? "bg-red-500 text-white" : "bg-zinc-800 text-zinc-300"
                  } `}
                >
                  {opt.highlight}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                {opt.description}
              </p>
              {isOn && (
                <p className="mt-3 text-xs font-semibold text-red-500">
                  Selected
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceSelector;
