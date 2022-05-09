<template>
  <renderless>
    <dc-table :dataSource="data" :columns="columns">
      <template v-slot:name="text">
        <a>{{ text }}</a>
      </template>
      <template v-slot:customTitle> <a-icon type="smile-o" /> Name </template>
      <template v-slot:tags="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </template>
      <template v-slot:action="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </template>
    </dc-table>
  </renderless>
</template>

<script>
import DcTable from '@/components/_DC/Table'
import Renderless from './Create.renderless.vue'

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
    Renderless,
  },
}
</script>

<style></style>
