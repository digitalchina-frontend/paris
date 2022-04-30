import Vue from 'vue'
// 手动注册 各种 antd 组件
import { Form, Input, Select, Button, Card, Row, Col, Table, Icon } from 'ant-design-vue'
// 手动引入 antd global.less
import '../src/global.less'

Vue.component(Form.name, Form)
Vue.component(Form.Item.name, Form.Item)
Vue.component(Input.name, Input)
Vue.component(Select.name, Select)
Vue.component(Select.Option.name, Select.Option)
Vue.component(Button.name, Button)
Vue.component(Card.name, Card)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Table.name, Table)
Vue.component(Icon.name, Icon)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
