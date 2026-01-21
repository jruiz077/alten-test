import { describe, it, expect } from "vitest";
import { getCategoryPath } from "./pathCalculator";
import type { Category } from "@/types/category";

const categories: Category[] = [
  {
    name: "category1",
    subcategories: [
      { name: "category2", subcategories: [] },
      {
        name: "category3",
        subcategories: [{ name: "category4", subcategories: [] }],
      },
    ],
  },
  { name: "category5", subcategories: [] },
];

describe("getCategoryPath", () => {
  it("returns correct path for nested categories", () => {
    expect(getCategoryPath(categories, "category4")).toBe(
      "/category1/category3/category4",
    );
    expect(getCategoryPath(categories, "category2")).toBe(
      "/category1/category2",
    );
    expect(getCategoryPath(categories, "category5")).toBe("/category5");
  });

  it("returns null if category does not exist", () => {
    expect(getCategoryPath(categories, "nonexistent")).toBeNull();
  });
});
