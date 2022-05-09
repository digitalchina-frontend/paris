<script>
import DcTable from '@/components/_DC/Table'
import Renderless from './Search.renderless.vue'

// jsx 参考: https://github.com/vuejs/jsx-vue2
export default {
  functional: true,
  // JSX 语法
  render: (h, { props }) => {
    const scopedSlots = {
      name: (text) => <a>{text}</a>,
      customTitle: () => <a-icon type="smile-o" />,
    }
    return (
      <Renderless
        render={() => (
          <DcTable dataSource={props.data} columns={props.columns} scopedSlots={scopedSlots}>
            <template slot="customTitle">
              <a-icon type="smile-o" /> Name
            </template>
          </DcTable>
        )}
      />
    )
  },
}
</script>
