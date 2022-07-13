<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <a-table :columns="columns" :data-source="data"> </a-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { getFoo } from '@/services/xhr/demo'

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  // {
  //   title: 'Action',
  //   key: 'action',
  // },
]

export default {
  data() {
    return {
      columns,
      data: [],
    }
  },
  async created() {
    // 嵌套式的结构语法
    const {
      result: { data },
    } = await getFoo()
    this.data = data
  },
}
</script>

<style>
</style>
