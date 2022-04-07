<template>
  <div>
    <nuxt-child />
    <div class="flex justify-center">
      <div class="w-full max-w-4xl p-5">
        <div class="items-end flex items-center justify-between p-2">
          <span
            class="
              text-sm
              font-bold
              text-primaryColor
              hover:text-secendaryColor
              cursor-pointer
            "
            @click="$router.push('/admin')"
            >Kembali</span
          >
          <div>
            <button
              @click="$router.push('/admin/' + $route.params.department + '/create/')"
              class="
                bg-primaryColor
                text-sm
                font-bold
                text-white
                hover:bg-secendaryColor
                cursor-pointer
                px-4
                py-2
                rounded-lg
              "
            >
              Tambah Pekerja
            </button>

            <input
              type="text"
              v-show="hidden"
              class="px-4 py-2 outline-none rounded-sm text-sm text-gray-700"
              v-model="textSearch"
              placeholder="Search"
            />
          </div>
        </div>
        <table class="w-full bg-gray-600 mt-2">
          <thead>
            <tr class="bg-gray-200">
              <th>No</th>
              <th>PN</th>
              <th>Nama</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="
                bg-white
                odd:bg-gray-50
                text-sm text-gray-600
                hover:bg-blue-300
                cursor-pointer
              "
              v-for="(item, index) in data"
              :key="item.id"
              @click="
                $router.push($route.params.department + '/edit/' + item.id)
              "
            >
              <td class="p-3 text-center">{{ index + 1 }}{{ item.id }}</td>
              <td class="p-3 text-center">{{ item.pn }}</td>
              <td class="p-3">{{ item.nama }}</td>
              <td class="p-3">{{ item.username }}</td>
              <td class="p-3">{{ item.password }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      textSearch: '',
    }
  },
  methods: {
    ...mapActions('employe', ['init']),
  },

  computed: {
    ...mapState('employe', ['data']),
    filtered() {
      return this.data.filter((row) => {
        const string = this.textSearch
          .toLowerCase()
          .replace(new RegExp('\\\\', 'g'), '\\\\')
        return row.nama.toLowerCase().match(string)
      })
    },
  },
  async mounted() {
    await this.init(this.$route.params.department)
  },
}
</script>


<style scoped>
th {
  @apply p-3 text-gray-700 text-sm;
}
td {
  @apply border-l border-gray-200;
}
</style>
