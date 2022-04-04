<template>

  <div>
    <nuxt-child />
    <div class="flex justify-center">
      <div class="w-full max-w-4xl p-5">
        <div class="items-end flex justify-between p-2">
          <button @click="$router.push('/admin/create')" class="bg-primaryColor text-sm font-bold text-white hover:bg-secendaryColor cursor-pointer px-4 py-2 rounded-lg">Tambah Department</button>

          <input
            type="text"
            class="px-4 py-2 outline-none rounded-sm text-sm text-gray-700"
            v-model="textSearch"
            placeholder="Search"
          />
        </div>
        <table class="w-full bg-gray-600">
          <thead>
            <tr class="bg-gray-200">
              <th>No</th>
              <th>Department</th>
              <th>Jumlah Pekerja</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white odd:bg-gray-50 text-sm text-gray-600"
              v-for="(item, index) in filtered"
              :key="item.id"
            >
              <td class="p-3 text-center">{{ index + 1 }}</td>
              <td class="p-3">{{ item.name }}</td>
              <td class="p-3 text-center">{{ item.employe_count }}</td>

              <td class="p-3 text-center">
                <button
                  class="
                    bg-primaryColor
                    hover:bg-secendaryColor
                    py-2
                    px-4
                    text-white
                    font-bold
                    rounded-lg
                  "
                  @click="detail(item.id)"
                >
                  Daftar Pekerja
                </button>
                <button
                  class="
                    bg-red-600
                    hover:bg-red-400
                    py-2
                    px-4
                    text-white
                    font-bold
                    rounded-lg
                  "
                  @click="$router.push('admin/edit/' + item.id)"
                >
                  Edit / Hapus
                </button>
              </td>
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
    ...mapActions('department', ['init']),


  },
  computed: {
    ...mapState('department', ['data']),
    filtered() {
      return this.data.filter((item) => {
        const string = this.textSearch
          .toLowerCase()
          .replace(new RegExp('\\\\', 'g'), '\\\\')
        return item.name.toLowerCase().match(string)
      })
    },
  },
  async mounted() {
    await this.init()
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
