<template>
  <a-form layout="inline" :form="form" @submit="submit">
    <a-row :gutter="48">
      <a-col :md="8" :sm="24" v-for="item in items" :key="item.name">
        <dc-form-item :item="item"></dc-form-item>
      </a-col>
      <a-col :md="24" :sm="24">
        <span class="table-page-search-submitButtons">
          <a-button type="primary" html-type="submit">查询</a-button>
          <a-button style="margin-left: 8px">重置</a-button>
        </span>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
import DcFormItem from '@/components/_DC/FormItem'

export default {
  components: {
    DcFormItem,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      // TODO: 增加类型效验 ASAP !!
      default: () => [],
    },
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: this.name }),
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('表单数据: ', values)
        }
      })
    },
  },
}
</script>

<style></style>
