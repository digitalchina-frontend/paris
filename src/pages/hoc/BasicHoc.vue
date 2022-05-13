<script>
/*
  首先 选择 HOC 的目的是什么？

    1. 代码复用
      1.1 一部分代码是模板可以复用
      1.2 一部分代码是可配置的
*/
import Vue from 'vue'
import Foo from './Foo.vue'

const hoc = (component) => {
  return Vue.component('withHoc', {
    props: component.props,
    data() {
      return {}
    },
    methods: {
      handleChange() {},
    },
    mounted() {},
    beforeDestroy() {},
    render(createElement) {
      return createElement(component, {
        props: this.$props,
        on: this.$listeners,
      })
    },
  })
}

export default {
  functional: true,
  render(h, { props }) {
    return h(hoc(Foo), { props: props.default.data() })
  },
}
</script>

<style></style>
