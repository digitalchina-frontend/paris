<template>
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
</template>

<script>
import DcTable, { ColumnTitle as DcColumnTitle } from '@/components/_DC/Table'

export default {
  components: {
    DcTable,
    DcColumnTitle,
  },
  data() {
    return {
      columns: [
        {
          dataIndex: 'textField',
          key: 'textField',
          title: 'Text',
        },
        {
          dataIndex: 'customField',
          key: 'customField',
          title: 'Custom',
          customRender: (text) => `爱好: ${text}`,
        },
        // {
        //   dataIndex: 'name',
        //   key: 'name',
        //   slots: { title: 'customTitle' },
        //   scopedSlots: { customRender: 'name' },
        // },
        // {
        //   title: 'Age',
        //   dataIndex: 'age',
        //   key: 'age',
        // },
        // {
        //   title: 'Address',
        //   dataIndex: 'address',
        //   key: 'address',
        // },
        // {
        //   title: 'Tags',
        //   key: 'tags',
        //   dataIndex: 'tags',
        //   scopedSlots: { customRender: 'tags' },
        // },
        // {
        //   title: 'Action',
        //   key: 'action',
        //   scopedSlots: { customRender: 'action' },
        // },
      ],
      data: [
        {
          textField: '唐僧',
          customField: '唠叨',
        },
        {
          textField: '八戒',
          customField: '贪婪',
        },
        {
          textField: '悟空',
          customField: '较真',
        },
        {
          textField: '沙僧',
          customField: '勤勉',
        },
        // {
        //   key: '1',
        //   name: 'John Brown',
        //   age: 32,
        //   address: 'New York No. 1 Lake Park',
        //   tags: ['nice', 'developer'],
        // },
        // {
        //   key: '2',
        //   name: 'Jim Green',
        //   age: 42,
        //   address: 'London No. 1 Lake Park',
        //   tags: ['loser'],
        // },
        // {
        //   key: '3',
        //   name: 'Joe Black',
        //   age: 32,
        //   address: 'Sidney No. 1 Lake Park',
        //   tags: ['cool', 'teacher'],
        // },
      ],
    }
  },
}
</script>

<style></style>
