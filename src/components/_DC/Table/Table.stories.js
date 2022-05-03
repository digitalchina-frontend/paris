import Table from './Table.vue'

export default {
  title: 'COMPONENTS/Table',
  component: Table,
  argTypes: {
    onLeftClick: { action: 'onLeftClick' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Table },
  template: '<Table v-bind="$props"/>',
})

export const Primary = Template.bind({})

Primary.args = {
  columns: [
    {
      dataIndex: 'name',
      key: 'name',
      slots: { title: 'customTitle' },
      scopedSlots: { customRender: 'name' },
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
      scopedSlots: { customRender: 'tags' },
    },
    {
      title: 'Action',
      key: 'action',
      scopedSlots: { customRender: 'action' },
    },
  ],
  dataSource: [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ],
}
