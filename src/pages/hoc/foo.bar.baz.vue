<script>
/*
  业务组件配置
*/
export default {
  data() {
    return {
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
    }
  },
  methods: {},
  watch: {},
  computed: {},
  props: {},
  foo: {},
}
</script>
