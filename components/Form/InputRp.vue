<template>
  <div class="border rounded-md border-gray-300 flex items-center">
    <label class="border-r text-sm text-gray-500 border-gray-300 p-2">Rp</label>
    <input
      type="text"
      :value="value.toLocaleString('en')"
      @input="$emit('input', Number($event.target.value.split(',').join('')))"
      class="w-full text-gray-500 focus:border-lucy py-2 text-right outline-none px-3 outline-slate-200 text-sm"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'value'],
  methods: {},
}
</script>

<style></style>
