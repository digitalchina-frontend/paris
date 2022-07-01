<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
        <a-form-item label="Note">
          <a-input v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
        </a-form-item>
        <a-form-item label="Gender">
          <a-select
            v-decorator="['gender', { rules: [{ required: true, message: 'Please select your gender!' }] }]"
            placeholder="Select a option and change input text above"
            @change="handleSelectChange"
          >
            <a-select-option value="male"> male </a-select-option>
            <a-select-option value="female"> female </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit"> Submit </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import { postBar } from '@/services/xhr/demo'

export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'bar' }),
    }
  },
  methods: {
    /*
      async & await 应该比 promise 更容易理解
    */
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          console.log('有效表单提交值: ', values)
          try {
            const {
              result: {
                data: { id },
              },
            } = await postBar(values)
            this.openNotification(`提交成功，id: ${id}`)
            this.form.resetFields()
          } catch (error) {
            console.error('提交失败: ', error)
            this.openNotification('提交失败', 'error')
          } finally {
          }
        }
      })
    },
    openNotification(message, type = 'success') {
      this.$notification.open({
        message: message,
        description: message,
        icon:
          type === 'success' ? (
            <a-icon type="smile" style="color: #108ee9" />
          ) : (
            <a-icon type="frown" style="color: #ff5500" />
          ),
      })
    },
    handleSelectChange(value) {
      // console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      })
    },
  },
}
</script>
