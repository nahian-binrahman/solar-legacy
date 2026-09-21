export type BrandColor =
  | "forest"
  | "solar"
  | "white"
  | "beige"
  | "charcoal";

export interface SolarSystemSpec {
  id: string;
  name: string;
  category: "Residential" | "Estate" | "Commercial";
  efficiencyRating: string;
  annualYield: string;
  storageCapacity: string;
  warrantyYears: number;
  highlight: string;
}

export interface ComponentDemoItem {
  name: string;
  description: string;
  category: string;
}
