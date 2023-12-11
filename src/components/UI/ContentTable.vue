<script setup lang="ts"></script>

<template>
  <table>
    <thead>
      <tr>
        <slot name="header"></slot>
      </tr>
    </thead>
    <tbody>
      <slot name="body"></slot>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 1rem 1rem;
}
thead, tbody {
  vertical-align: middle;
}
thead {
  color: var(--text-subdued);
}
</style>
