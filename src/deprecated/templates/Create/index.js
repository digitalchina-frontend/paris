import Create from './Create.vue'

export default {
  functional: true,
  render(h, { props }) {
    return h(Create, { props: props.default.data() })
  },
}
