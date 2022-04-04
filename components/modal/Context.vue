<template>
  <div
    class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  >
    <div
      class="relative w-full p-3 my-6 mx-auto md:min-w-1/3 md:max-w-5xl"
      :class="max ? '' : 'md:w-min'"
    >
      <div
        class="border-0 overflow-hidden rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
      >
        <div class="bg-primaryColor px-5 pt-5 pb-3 flex justify-between">
          <label class="text-white font-bold text-lg">{{ title }}</label>

        </div>
        <div class="px-5 py-4">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'max'],
  methods: {
    close() {
      this.$router.go(-1)
    },
  },
  transition: 'modal-fade',
}
</script>

<style>
</style>
