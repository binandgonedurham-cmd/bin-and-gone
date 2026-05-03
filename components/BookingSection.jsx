import { useState } from "react";
import { DEFAULT_SERVICE_ID, normalizeServiceId } from "../constants/services";
import ServiceSelector from "./ServiceSelector";
import BookingForm from "./BookingForm";

function BookingSection() {
  const [serviceType, setServiceType] = useState(DEFAULT_SERVICE_ID);

  const handleServiceChange = (id) => {
    setServiceType(normalizeServiceId(id));
  };

  return (
    <section
      id="book-now"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto min-w-0 max-w-6xl space-y-10 sm:space-y-12">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Book
        </h2>
        <p className="mx-auto max-w-xl text-center text-sm text-zinc-500 sm:text-base">
          Pick a service, send your info — we&apos;ll reply with a quote.
        </p>
        <ServiceSelector value={serviceType} onChange={handleServiceChange} />
        <BookingForm serviceType={serviceType} />
      </div>
    </section>
  );
}

export default BookingSection;
