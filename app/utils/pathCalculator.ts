import type { Category } from "@/types/category";

/**
 * Recursively finds the path to a category by its name.
 * @param categories - Array of Category objects to search through.
 * @param categoryName - The name of the category to find.
 * @returns The path to the category as a string, or null if not found.
 */
const getCategoryPath = (
  categories: Category[],
  categoryName: string,
): string | null => {
  for (const category of categories) {
    if (category.name === categoryName) return `/${category.name}`;
    const subPath = getCategoryPath(category.subcategories, categoryName);
    if (subPath) return `/${category.name}${subPath}`;
  }
  return null;
};

export { getCategoryPath };
