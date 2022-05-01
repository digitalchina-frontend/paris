<script>
export default {
  name: 'DcTable',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  render() {
    return <a-table columns={this.columns} data-source={this.data}></a-table>
  },
}
</script>

<style></style>
