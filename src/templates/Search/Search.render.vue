<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <dc-form :items="items" name="filter-form"></dc-form>
      </div>
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
import { DcTable, DcForm } from '@/components/_DC'

export default {
  components: {
    DcTable,
    DcForm,
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
