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
  border-collapse: collapse;
}
thead, tbody {
  vertical-align: middle;
}
thead {
  color: var(--text-subdued);
  border-bottom: 1px solid var(--text-subdued);
}
</style>
