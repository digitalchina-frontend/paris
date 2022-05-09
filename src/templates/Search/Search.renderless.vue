<script>
/*
  无渲染组件 也称为 状态组件 封装业务
*/
export default {
  props: {
    render: {
      type: Function,
      default: (h) => null,
    },
  },
  data() {
    return {}
  },
  render() {
    return this.$props.render({})
  },
}
</script>
