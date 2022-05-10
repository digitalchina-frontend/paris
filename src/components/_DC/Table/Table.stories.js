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
    //   title: 'Action',
    //   // _ aka text 字段 为空
    //   customRender: (_, record) => (
    //     <div>
    //       <a vOn:click={() => this.actionHandler(record)}>{record.textField}</a>
    //       <a-divider type="vertical" />
    //       <a vOn:click={() => this.actionHandler(record)}>{record.customField}</a>
    //       <a-divider type="vertical" />
    //       <a class="ant-dropdown-link">
    //         {' '}
    //         更多操作 <a-icon type="down" />{' '}
    //       </a>
    //     </div>
    //   ),
    // },
  ],
  dataSource: [
    {
      key: '0',
      textField: '唐僧',
      customField: '唠叨',
    },
    {
      key: '1',
      textField: '八戒',
      customField: '贪婪',
    },
    {
      key: '2',
      textField: '悟空',
      customField: '较真',
    },
    {
      key: '3',
      textField: '沙僧',
      customField: '勤勉',
    },
  ],
}
