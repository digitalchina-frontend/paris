<script>
import DcTable from '@/components/_DC/Table'
import Renderless from './Search.renderless.vue'

export default {
  functional: true,
  // JSX 语法
  render: (h, { props }) => (
    <Renderless render={({ data, columns }) => <DcTable dataSource={data} columns={columns} />} />
  ),
}
</script>
