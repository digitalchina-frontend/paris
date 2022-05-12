<script>
import DcTable from '@/components/_DC/Table'
import Renderless from './Search.renderless.vue'

// JSX 参考: https://github.com/vuejs/jsx-vue2
/*
  1. stateless (renderful) and renderless (stateful) 组件模式
  2. 布局 和 物业代码
*/
export default {
  functional: true,
  render: (h, { props }) => {
    const scopedSlots = {
      name: (text) => <a>{text}</a>,
      customTitle: () => <a-icon type="smile-o" />,
    }
    const { data, columns } = props.default
    return (
      <Renderless
        render={() => (
          <a-card bordered={false}>
            <div class="table-page-search-wrapper">
              <DcTable dataSource={data} columns={columns} scopedSlots={scopedSlots}>
                <template slot="customTitle">
                  <a-icon type="smile-o" /> Name
                </template>
              </DcTable>
            </div>
          </a-card>
        )}
      />
    )
  },
}
</script>
