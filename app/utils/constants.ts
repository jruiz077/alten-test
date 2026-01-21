// Define the default category structure
const DEFAULT_CATEGORIES = [
  {
    name: "category1",
    subcategories: [
      {
        name: "category2",
        subcategories: [],
      },
      {
        name: "category3",
        subcategories: [
          {
            name: "category4",
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: "category5",
    subcategories: [],
  },
];
export { DEFAULT_CATEGORIES };
