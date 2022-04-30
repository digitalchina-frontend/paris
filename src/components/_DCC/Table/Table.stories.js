import Table from './Table.vue'

export default {
  title: 'COMPONENTS/Table',
  component: Table,
  argTypes: {
    onLeftClick: { action: 'onLeftClick' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Table },
  template: '<Table v-bind="$props"/>',
})

export const Primary = Template.bind({})

Primary.args = {}
