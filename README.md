# Alten Test - Category Path Calculator

A Nuxt 4 application that calculates the hierarchical path of a category within a nested category structure using recursive tree traversal.

## 📋 Project Overview

This application solves the problem of finding the complete path to a specific category within a deeply nested category tree structure. Given a hierarchical category structure and a category name, it returns the full path from root to the target category.

### Example

Given this category structure:
```json
[
  {
    "name": "category1",
    "subcategories": [
      {
        "name": "category2",
        "subcategories": []
      },
      {
        "name": "category3",
        "subcategories": [
          {
            "name": "category4",
            "subcategories": []
          }
        ]
      }
    ]
  },
  {
    "name": "category5",
    "subcategories": []
  }
]
```

Searching for `"category4"` returns: `/category1/category3/category4`

## 🚀 Features

- **Recursive Path Finding**: Efficient DFS algorithm to traverse nested category structures
- **Interactive UI**: Real-time JSON input validation and path calculation
- **TypeScript Support**: Full type safety with TypeScript
- **Error Handling**: User-friendly error messages for invalid input or missing categories
- **Vue 3 Composition API**: Modern Vue.js patterns with `<script setup>`

## 🏗️ Project Structure

```
app/
├── components/
│   └── PathResult.vue        # Displays the calculated path result
├── pages/
│   └── index.vue             # Main application page
├── types/
│   └── category.ts           # TypeScript interface for Category
└── utils/
    └── pathCalculator.ts     # Core algorithm implementation
```

## 🧮 Algorithm

The `getCategoryPath` function uses a **Depth-First Search (DFS)** approach:

1. Iterates through each category in the array
2. Returns immediately if the category name matches
3. Recursively searches subcategories
4. Builds the path string by prepending parent category names

**Time Complexity**: O(n) where n is the total number of categories  
**Space Complexity**: O(h) where h is the height of the tree (recursion stack)

## 🛠️ Setup

Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

## 💻 Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun run dev
```

## 🎯 How to Use

1. Open the application in your browser
2. Enter a valid JSON category structure in the textarea (or use the default)
3. Type the category name you want to find in the search input
4. Click **"Get Path"** button
5. View the calculated path or error message


## 🔧 Tech Stack

- **Nuxt 4** - Vue.js framework
- **TypeScript** - Type safety
- **Vue 3** - Composition API with `<script setup>`
- **Vitest** - Unit testing framework
- **Vue Test Utils** - Vue component testing
- **ESLint** - Code linting

## 🧪 Testing

Run tests once:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

### Test Coverage

- **PathResult.vue** - Component rendering for success, error, and placeholder states
- **index.vue** - Main page functionality, path calculation, and error handling
- **pathCalculator.ts** - Core algorithm unit tests

## 📚 Documentation

- [Nuxt 4 Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 📄 License

This project is part of an Alten technical assessment.
