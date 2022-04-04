<template>
  <div class="flex">
    <div
      v-for="item in dataMenu"
      :key="item.value"
      class="mr-5 py-2 text-gray-400 ustify-center items-center"
    >

      <label
        class="text-sm"
        :class="selectedMenu >= item.step ? 'font-bold text-gray-700' : ''"
      >
        {{ item.title }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataMenu', 'selectedMenu'],
  methods: {},
}
</script>

<style>
.iconRadio {
  background-color: #ff2353;
  color: #dddddd;
}

.iconRadioFinish {
  background-color: #00be39;
  color: #dddddd;
}
</style>
