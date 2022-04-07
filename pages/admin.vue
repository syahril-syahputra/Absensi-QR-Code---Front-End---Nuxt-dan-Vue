<template>
  <div>
    <div class="bg-primaryColor text-white p-5 font-bold flex justify-between">
      <h1>Daftar Hadir Doa Pagi RO Malang</h1>
      <div>
        <span class="mr-5 text-gray-200 hover:text-white cursor-pointer" @click="$router.push('/dashboard')">Monitor</span>
        <span class="mr-5 text-gray-200" >|</span>
      <span
        @click="logout"
        class="text-gray-300 hover:text-white cursor-pointer"
        >Logout</span
      >
      </div>
    </div>

    <nuxt-child />
  </div>
</template>

<script>
export default {

  methods: {
    async logout() {
      try {
        await this.$auth.logout()
      } catch (error) {
        alert(error)
      }
    },
  },
}
</script>

<style>
</style>
