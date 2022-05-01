<template>
  <a-table :columns="columns" :data-source="data"> </a-table>
</template>

<script>
export default {
  name: 'DcTable',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
}
</script>

<style></style>
