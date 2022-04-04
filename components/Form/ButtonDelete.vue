<template>
  <div
    @click="submit"
    class="text-gray-500 items-center justify-center "
    :class="!enable ? 'opacity-50 cursor-wait' : 'cursor-pointer hover:text-gray-900'"
  >

    <label class="cursor-pointer ml-1 font-bold text-sm">Delete</label>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations('button', ['toogle']),
    submit() {
      if (this.enable) {
        // this.toogle(false)
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
