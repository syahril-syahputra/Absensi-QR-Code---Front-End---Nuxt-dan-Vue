<template>
  <div>
    <div class="flex justify-center">
      <div class="w-full max-w-4xl p-5">
        <div class="items-end flex justify-between p-2">
          <span
            class="
              text-sm
              font-bold
              text-primaryColor
              hover:text-secendaryColor
              cursor-pointer
            "
            @click="$router.back()"
            >Kembali</span
          >
          <input
            type="text"
            class="px-4 py-2 outline-none rounded-sm text-sm text-gray-700"
            v-model="textSearch"
            placeholder="Search"
          />
        </div>
        <table class="w-full bg-gray-600 mt-2">
          <thead>
            <tr class="bg-gray-200">
              <th>No</th>
              <th>PN</th>
              <th>Nama</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white odd:bg-gray-50 text-sm text-gray-600"
              v-for="(item, index) in filtered"
              :key="item.id"
            >
              <td class="p-3 text-center">{{ index + 1 }}</td>
              <td class="p-3 text-center">{{ item.pn }}</td>
              <td class="p-3">{{ item.nama }}</td>
              <td class="p-3 text-xs font-bold text-center">
                <label v-if="item.time_scan" class="text-green-500"
                  >Hadir</label
                >
                <label v-else class="text-red-400">Tidak Hadir</label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      textSearch: '',
    }
  },
  watch: {
    async '$route.params.date'(value) {
      this.data = []
      this.textSearch = ''
      const department = this.$route.params.department
      const date = this.$route.params.date
      const result = await this.$axios.$get(
        '/admin/department/' + department + '/' + date
      )
      this.data = result
    },
  },
  computed : {
    filtered() {
      return this.data.filter((item) => {
        const string = this.textSearch
          .toLowerCase()
          .replace(new RegExp('\\\\', 'g'), '\\\\')
        return item.nama.toLowerCase().match(string)
      })
    },
  },
  async created() {
    const department = this.$route.params.department
    const date = this.$route.params.date
    const result = await this.$axios.$get(
      '/admin/department/' + department + '/' + date
    )
    this.data = result
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
