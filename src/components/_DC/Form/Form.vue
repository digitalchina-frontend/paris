<template>
  <a-form layout="inline">
    <a-row :gutter="48">
      <a-col :md="8" :sm="24" v-for="item in items" :key="item.name">
        <dc-form-item :item="item"></dc-form-item>
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
    items: {
      type: Array,
      // TODO: 增加类型效验 ASAP !!
      default: () => [],
    },
  },
}
</script>

<style></style>
