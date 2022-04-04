<template>
  <select
    :value="selected"
    @change="change"
    class="w-full bg-white border border-gray-300 rounded-md p-2 text-sm"
    :class="selected == null ? 'text-gray-400' : 'text-gray-700'"
  >
    <option value="" selected disabled hidden class="text-gray-400">
      Choose a category for your entry
    </option>
    <option
      :value="item.id"
      v-for="item in data"
      :key="item.id"
      class="text-gray-700"
    >
      {{ item.code + ' : ' + item.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: ['data', 'selected'],

  methods: {
    change(val) {
      this.$emit('input', val.target.value)
    },
  },
}
</script>

<style></style>
