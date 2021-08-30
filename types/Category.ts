export const CATEGORY_SLUGS = [
  "residential",
  "commercial",
  "industrial",
] as const;

export type Category = {
  id: number;
  slug: typeof CATEGORY_SLUGS[number];
};
