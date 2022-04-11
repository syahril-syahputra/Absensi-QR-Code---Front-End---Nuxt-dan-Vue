<template>
  <div class="flex bg-forbg flex-row items-center justify-between h-screen">
    <div class="flex flex-1 flex-col items-center justify-center">
      <qrcode-vue :value="value" background="#EFEFEF" :size="size" level="L" />
      <h1 class="mt-5 text-3xl font-bold">Scan Me</h1>
    </div>
    <div
      class="
        flex flex-1
        max-w-2xl
        flex-col
        p-5
        bg-white
        mr-10
        rounded-md
        shadow
      "
    >
      <h1 class="my-2 font-bold text-gray-700 text-xl">Login</h1>
      <label class="my-2 text-gray-700 text-sm font-bold">Email</label>
      <input
        v-model="username"
        class="border border-gray-400 rounded-lg p-2 mb-3 text-sm"
        placeholder="Masukan Email / Username"
        type="text"
      />
      <label class="my-2 text-gray-700 text-sm font-bold">Password</label>
      <input
        v-model="password"
        class="border border-gray-400 rounded-lg p-2 mb-3 text-sm"
        placeholder="Masukan Password"
        type="password"
        name=""
        id=""
      />
      <div class="justify-between items-center flex">
        <label class="font-bold text-gray-500">Lupa Password ?</label>
        <button
          @click="login"
          class="
            bg-blue-600
            px-10
            text-white
            font-bold
            py-3
            rounded-2xl
            cursor-pointer
            hover:bg-blue-500
          "
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  data() {
    return {
      value: 'Arhiel',
      size: 450,
      username: '',
      password: '',
    }
  },
  mounted() {
    const today = new Date()
    this.value =
      today.getFullYear() + '' + (today.getMonth() + 1) + today.getDate()
  },
  methods: {
    async login() {
      if (this.username === '' || this.password === '') {
        alert('Masukan Email/Username dan Password Anda')
      } else {
        try {
          await this.$auth.loginWith('laravelSanctum', {
            data: {
              email: this.username,
              password: this.password,
            },
          })
        } catch (error) {
          if(error.response.status === 401){
            alert("Email Atau Password Salah")
          }else
          {
            console.log(error)
            alert("Terjadi Kesalahan Dengan Code Error " + error.response.status)
          }
        }
      }
    },
  },
  components: {
    QrcodeVue,
  },
}
</script>

<style>
</style>
