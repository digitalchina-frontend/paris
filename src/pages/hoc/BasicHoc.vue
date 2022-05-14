<script>
/*
  首先 选择 HOC 的目的是什么？

    1. 代码复用
      将一个页面的代码分成2个部分
      1.1 一部分代码是模板可以复用
      1.2 一部分代码是业务配置 随业务变化

    hoc 参考：
      * https://segmentfault.com/p/1210000012743259/read
      * https://medium.com/bethink-pl/higher-order-components-in-vue-js-a79951ac9176
*/

import Render from './Render.vue'
import Renderless from './Renderless'

export default {
  functional: true,
  render(h, { props }) {
    // 这里的实现依赖于 路由组件的接口设计 https://v3.router.vuejs.org/zh/guide/essentials/passing-props.html#%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%BC%8F
    return h(Renderless(Render), { props: props.default.data() })
  },
}
</script>

<style></style>
