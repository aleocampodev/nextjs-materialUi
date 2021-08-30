export const TRANSACTION_SLUGS = [
  "buy",
  "rent",
] as const;

export type Transaction = {
  id: number;
  slug: typeof TRANSACTION_SLUGS[number];
  propertyTypes: number[];
};
