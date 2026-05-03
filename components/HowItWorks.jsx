const steps = [
  {
    title: "Quote",
    description: "Pick a service and send your address.",
    icon: (
      <svg
        className="h-10 w-10 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden={true}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "Schedule",
    description: "We confirm price and your time window.",
    icon: (
      <svg
        className="h-10 w-10 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden={true}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5"
        />
      </svg>
    ),
  },
  {
    title: "Gone",
    description: "We load or swap the bin. You’re done.",
    icon: (
      <svg
        className="h-10 w-10 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden={true}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-b border-red-600/20 bg-zinc-950 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-3 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          How
        </h2>
        <p className="mx-auto mb-12 max-w-md text-center text-zinc-500">
          Simple whether it’s a pickup or a bin.
        </p>
        <ol className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="slide-up group relative rounded-2xl border border-red-600/25 bg-black/60 p-6 shadow-lg shadow-black/30 transition-all duration-300 hover:border-red-500/50 hover:shadow-red-900/20"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-600/10 ring-1 ring-red-600/30 transition group-hover:bg-red-600/20">
                {step.icon}
              </div>
              <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-red-500">
                Step {index + 1}
              </span>
              <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
