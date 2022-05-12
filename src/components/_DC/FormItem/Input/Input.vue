<template>
  <a-form-item :label="label">
    <a-input
      :disabled="disabled"
      :placeholder="placeholder"
      v-decorator="[name, { rules: [...rules] }]"
      @change="change"
    />
  </a-form-item>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: () => '请输入',
    },
    name: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    change(e) {},
  },
}
</script>

<style></style>
