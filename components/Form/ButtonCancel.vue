<template>
  <button
    @click="batal"
    :disabled="!enable"
    :class="enable ? 'cursor-pointer' : 'opacity-60 cursor-auto'"
    class="border mr-3 border-gray-300 px-10 py-2 text-sm font-bold text-gray-600 hover:bg-gray-50 rounded-md"
  >
    <slot />
  </button>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
  methods : {
    batal(){

      this.$router.go(-1)
    },

  },
  computed : {

  ...mapState('button', ['enable'])
  }
}
</script>

<style></style>
