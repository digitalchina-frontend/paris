<script>
import T from 'ant-design-vue/es/table/Table'

export default {
  name: 'DcTable',
  props: Object.assign({}, T.props, {
    rowKey: {
      type: [String, Function],
      default: 'key',
    },
    dataSource: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  }),
  render() {
    const props = {}

    Object.keys(T.props).forEach((k) => {
      this[k] && (props[k] = this[k])
      return props[k]
    })

    // console.log('props:', props)
    // console.log('slots:', this.$slots)
    // console.log('scopedSlots:', this.$scopedSlots)

    const table = (
      <a-table {...{ props, scopedSlots: { ...this.$scopedSlots } }}>
        {
          // 非作用域插槽
          Object.keys(this.$slots).map((name) => {
            console.log('name', this.$slots[name])
            return <template slot={name}>{this.$slots[name]}</template>
          })
        }
      </a-table>
    )

    return table
  },
}
</script>
