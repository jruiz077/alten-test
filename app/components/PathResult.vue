<template>
  <section class="path-result">
    <div v-if="error" class="error">
      <h2>No path found</h2>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="path" class="success">
      <h2>Path Result</h2>
      <p>
        <code>{{ path }}</code>
      </p>
    </div>
    <div v-else class="placeholder">
      <p>Enter a category name and click Calculate to see the path.</p>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  path: string | null;
  error?: string;
}>();
</script>
<style scoped>
.error {
  color: #dc2626;
}

.success {
  color: #059669;
}

.success code {
  background: #dcfce723;
  font-size: 1.5rem;
}

.placeholder {
  color: #6b7280;
  font-style: italic;
}
</style>
