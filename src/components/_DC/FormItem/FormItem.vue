<template>
  <component :is="component" v-bind="item" />
</template>

<script>
import * as Types from './index'

export default {
  props: {
    item: {
      type: Object,
      // TODO: 增加类型效验 ASAP !!
      required: true,
    },
  },
  computed: {
    component() {
      // TODO: 增加异常处理 ASAP !!
      return Types[this.item.type]
    },
  },
}
</script>

<style></style>
