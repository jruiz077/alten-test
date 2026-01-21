<template>
  <div id="content">
    <header>
      <h1>The <em>Alten</em> path calculator</h1>
      <p>
        Calculate the path of a category within a nested category structure.
      </p>
    </header>
    <p>
      <textarea
        v-model="categories"
        cols="60"
        rows="25"
        placeholder="Enter Categories" />
    </p>
    <p>
      <input
        v-model="categoryName"
        type="text"
        placeholder="Enter a Category Name" />
      <button @click="getPathCategory">Get Path</button>
    </p>
    <PathResult :path="pathValue" :error="errorMessage" />
  </div>
</template>
<script setup lang="ts">
/**
 * Alten Test Application - Main Page
 * This component allows users to input a nested category structure in JSON format
 * and a category name to find its path within the structure.
 * It utilizes the getCategoryPath utility function to compute the path.
 */

import { getCategoryPath } from "@/utils/pathCalculator";
import type { Category } from "@/types/category";
import { ref } from "vue";

const categories = ref(JSON.stringify(DEFAULT_CATEGORIES, null, 4));
const categoryName = ref("");
const pathValue = ref<string | null>("");
const errorMessage = ref("");

// Function to calculate the path of the specified category
const getPathCategory = () => {
  errorMessage.value = "";
  try {
    const parsedCategories: Category[] = JSON.parse(categories.value);
    pathValue.value = getCategoryPath(parsedCategories, categoryName.value);
    console.log("Calculated path:", pathValue.value);
    if (pathValue.value === null) {
      errorMessage.value =
        "The specified category does not exist in the provided structure.";
    }
  } catch (error) {
    errorMessage.value = "Invalid JSON input for categories: " + error;
  }
};
</script>
