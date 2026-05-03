import { useEffect, useId, useState } from "react";
import {
  DEFAULT_SERVICE_ID,
  SERVICE_LABELS,
  normalizeServiceId,
} from "../constants/services";

function BookingForm({ serviceType }) {
  const formId = useId();
  const [submitStatus, setSubmitStatus] = useState("idle");

  const normalized = normalizeServiceId(serviceType);
  const serviceLabel =
    SERVICE_LABELS[normalized] ?? SERVICE_LABELS[DEFAULT_SERVICE_ID];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitStatus("success");
    form.reset();
  };

  const fieldClass =
    "w-full min-h-[48px] rounded-lg border border-zinc-700 bg-black px-3 py-3 text-base text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 sm:min-h-0 sm:px-4";

  useEffect(() => {
    setSubmitStatus("idle");
  }, [normalized]);

  return (
    <form
      onSubmit={handleSubmit}
      className="slide-up mx-auto w-full max-w-2xl min-w-0 rounded-2xl border border-red-600/30 bg-zinc-950 p-5 shadow-xl shadow-black/40 sm:p-8"
    >
      <h3 className="mb-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        Free quote
      </h3>

      <div className="mb-5 rounded-xl border border-zinc-700/80 bg-black/50 p-4 sm:p-5">
        <label
          className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500"
          htmlFor={`${formId}-service-readonly`}
        >
          Service
        </label>
        <p
          id={`${formId}-service-readonly`}
          className="text-base font-bold text-red-500 sm:text-lg"
        >
          {serviceLabel}
        </p>
        <input type="hidden" name="serviceType" value={normalized} />
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <div className="min-w-0 sm:col-span-2">
          <label
            htmlFor={`${formId}-name`}
            className="mb-1.5 block text-sm font-semibold text-zinc-200"
          >
            Name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            className={fieldClass}
            required
          />
        </div>

        <div className="min-w-0 sm:col-span-2">
          <label
            htmlFor={`${formId}-phone`}
            className="mb-1.5 block text-sm font-semibold text-zinc-200"
          >
            Phone
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(905) 555-0100"
            className={fieldClass}
            required
          />
        </div>

        <div className="min-w-0 sm:col-span-2">
          <label
            htmlFor={`${formId}-address`}
            className="mb-1.5 block text-sm font-semibold text-zinc-200"
          >
            Address
          </label>
          <input
            id={`${formId}-address`}
            name="address"
            type="text"
            autoComplete="street-address"
            placeholder="Street, city, postal code"
            className={fieldClass}
            required
          />
        </div>

        <div className="min-w-0 sm:col-span-2">
          <label
            htmlFor={`${formId}-message`}
            className="mb-1.5 block text-sm font-semibold text-zinc-200"
          >
            Message
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={4}
            placeholder="What’s going? Any timing or access notes?"
            className={`${fieldClass} min-h-[120px] resize-y sm:min-h-[140px]`}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full min-h-[52px] items-center justify-center rounded-xl bg-red-500 px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-red-900/30 transition duration-300 ease-out hover:scale-[1.01] hover:bg-red-400 hover:shadow-red-600/40 active:scale-[0.99] motion-reduce:transform-none sm:py-4 sm:text-lg"
      >
        Send
      </button>

      {submitStatus === "success" && (
        <p
          className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-center text-sm leading-relaxed text-red-100"
          role="status"
        >
          Got it — we&apos;ll get back to you shortly.
        </p>
      )}

      <p className="mt-4 text-center text-sm text-zinc-500 sm:text-left">
        Free quote · Fast reply · Durham-based
      </p>
    </form>
  );
}

export default BookingForm;
