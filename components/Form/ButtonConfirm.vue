<template>
  <button
    @click="submit"
    class="border flex items-center border-primaryColor px-10 py-2 bg-primaryColor text-sm font-bold text-white rounded-md"
    :class="
      !enable ? 'opacity-50 cursor-wait' : 'cursor-pointer hover:bg-secendaryColor'
    "
  >
    <div
      style="border-top-color: transparent"
      :class="enable ? 'hidden' : 'visible'"
      class="w-4 h-4 mr-2 border-2 border-white border-solid rounded-full animate-spin"
    ></div>
    <slot />
  </button>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations('button', ['toogle']),
    submit() {
      if (this.enable) {
        this.toogle(false)
        this.$emit('press')
      }
    },
  },
  computed: {
    ...mapState('button', ['enable']),
  },
}
</script>

<style></style>
