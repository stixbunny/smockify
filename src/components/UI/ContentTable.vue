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

<style>
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
thead,
tbody {
  vertical-align: middle;
}
thead {
  color: var(--text-subdued);
  border-bottom: 1px solid var(--text-subdued);
  font-size: var(--fs-small);
}
thead > tr > th {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.5rem 0.4rem;
}
tbody > tr > td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-block: 0.4rem;
}
</style>
