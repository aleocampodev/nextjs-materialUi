export const PROPERTY_TYPE_SLUGS = [
  "apartment",
  "studio",
  "cabin",
  "house",
  "farm",
  "lot",
  "warehouse",
  "office",
] as const;

export type PropertyType = {
  id: number;
  slug: typeof PROPERTY_TYPE_SLUGS[number];
};
