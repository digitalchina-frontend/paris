<template>
  <h2>Odoo List</h2>
</template>

<script>
import { geAllTypeTree } from '@/api/odoo'

export default {
  data() {
    return {
      data: null,
    }
  },

  async created() {
    const result = await geAllTypeTree()
    console.log(result)
  },
}
</script>

<style>
</style>
