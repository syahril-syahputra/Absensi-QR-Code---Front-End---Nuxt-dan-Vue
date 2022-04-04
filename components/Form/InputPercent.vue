<template>
  <div class="border rounded-md border-gray-300 flex items-center">
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="text-gray-500 focus:border-lucy w-full py-2 outline-none px-3 outline-slate-200 text-sm"
      :placeholder="placeholder"
    />
    <label class="border-l font-bold text-gray-500 border-gray-300 p-2"
      >%</label
    >
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'value'],
}
</script>

<style></style>
