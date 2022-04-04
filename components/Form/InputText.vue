<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="inputHappened"
      class="w-full border border-gray-300 text-gray-500 focus:border-lucy py-2 outline-none px-3 outline-slate-200 rounded-md text-sm"
      :placeholder="placeholder"
    />
    <label v-if="note" class="text-xs text-gray-700 ml-1">
      {{ note }}
    </label>
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'note', 'value'],
  methods: {
    inputHappened(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style></style>

<!---
<template>
  <input
    type="text"
    @input="$emit('input', $event.target.value)"
    class="w-full border border-gray-300 text-gray-500 focus:border-lucy py-2 outline-none px-3 outline-slate-200 rounded-md text-sm"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: ['placeholder'],
}
</script>

<style></style>--->
