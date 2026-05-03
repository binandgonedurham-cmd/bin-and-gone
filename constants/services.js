export const DEFAULT_SERVICE_ID = "in-home";

export const SERVICE_LABELS = {
  "in-home": "In-Home Pickup",
  curbside: "Curbside Pickup",
  "bin-rental": "Bin Drop-Off Rental",
};

export function normalizeServiceId(id) {
  if (
    typeof id === "string" &&
    Object.prototype.hasOwnProperty.call(SERVICE_LABELS, id)
  ) {
    return id;
  }
  return DEFAULT_SERVICE_ID;
}
