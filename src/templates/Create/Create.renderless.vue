<script>
/*
  无渲染组件 也称为 状态组件 封装业务
*/
export default {
  props: {},
  data() {
    return {}
  },
  render() {
    return this.$scopedSlots.default({})
  },
}
</script>
