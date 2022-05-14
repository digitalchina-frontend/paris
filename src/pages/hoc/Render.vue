<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <dc-table :dataSource="data" :columns="columns"> </dc-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
/*
  渲染组件:
    1. 接受 props
    2. 设计内部状态
    3. 设计派生状态
    4. 处理渲染
*/
import DcTable from '@/components/_DC/Table'

export default {
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    DcTable,
  },
}
</script>

<style></style>
