import Vue from 'vue'
import { getList } from '@/services/xhr/demo'

/*
  状态组件:
    1. 处理输入
    2. 处理输出（回调）
    3. 暂无需处理 插槽
*/

const hoc = (component) =>
  Vue.component('withHoc', {
    props: component.props,
    data() {
      return { tableData: [] }
    },
    methods: {},
    created() {
      getList({}).then((res) => {
        this.tableData = res.result.data
      })
    },
    mounted() {},
    beforeDestroy() {},
    render(createElement) {
      const extraProps = {
        data: this.tableData,
      }
      return createElement(component, { props: { ...this.$props, ...extraProps }, on: this.$listeners })
    },
  })

export default hoc
