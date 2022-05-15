/*
  业务组件配置
*/
export default {
  data() {
    return {
      items: [
        {
          type: 'Input',
          label: '文本字段1',
          name: 'text1',
          rules: [
            {
              required: true,
              message: '请输入文本字段1',
            },
          ],
          placeholder: '文本字段1占位符',
        },
      ],
      columns: [
        {
          dataIndex: 'name',
          key: 'name',
          title: () => (
            <div>
              <a-icon type="smile-o" /> Custom (Title | Column)
            </div>
          ),
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
    }
  },
}
