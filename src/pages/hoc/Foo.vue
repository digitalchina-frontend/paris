<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <dc-table :dataSource="data" :columns="columns"> </dc-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import DcTable from '@/components/_DC/Table'

export default {
  props: ['data', 'columns'],
  components: {
    DcTable,
  },
}
</script>

<style></style>
