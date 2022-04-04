<template>
  <div>
    <div class="flex justify-center">
      <div class="w-full max-w-4xl p-5">
        <div class="items-end flex justify-between p-2">
          <v-date-picker :masks="{ L: 'DD MMMM YYYY' }" v-model="date">
            <template v-slot="{ inputValue, inputEvents }">
              <label class="text-sm font-bold text-gray-700">Tanggal : </label>
              <input
                class="
                  bg-white
                  border
                  outline-none
                  px-4
                  py-2
                  rounded-sm
                  text-sm text-gray-700
                "
                :value="inputValue"
                v-on="inputEvents"
              />
            </template>
          </v-date-picker>

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
              <th>Hadir</th>
              <th>Tidak Hadir</th>
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
                <div
                  v-show="isLoading"
                  style="border-top-color: transparent"
                  class="
                    mx-auto
                    w-4
                    h-4
                    self-center
                    border-2 border-secendaryColor border-solid
                    rounded-full
                    animate-spin
                  "
                ></div>
                <label v-show="!isLoading">
                  {{ absensi[item.id] ? absensi[item.id][0].jumlahHadir : 0 }}
                </label>
              </td>
              <td class="p-3 text-center">
                <div
                  v-show="isLoading"
                  style="border-top-color: transparent"
                  class="
                    mx-auto
                    w-4
                    h-4
                    self-center
                    border-2 border-secendaryColor border-solid
                    rounded-full
                    animate-spin
                  "
                ></div>
                <label v-show="!isLoading"
                  >{{
                    item.employe_count -
                    (absensi[item.id] ? absensi[item.id][0].jumlahHadir : 0)
                  }}
                </label>
              </td>
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
                  Detail
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
      date: new Date(),
      isLoading: false,
    }
  },
  watch: {
    date: function () {
      this.changeDate()
    },
  },
  methods: {
    ...mapActions('department', ['init', 'initAbsensi']),
    async changeDate() {
      this.isLoading = true

      const dateFormated =
        this.date.getFullYear() +
        '-' +
        (this.date.getMonth() + 1) +
        '-' +
        this.date.getDate()

      await this.initAbsensi(dateFormated)

      this.isLoading = false
    },
    detail(id) {
      const dateFormated =
        this.date.getFullYear() +
        '-' +
        (this.date.getMonth() + 1) +
        '-' +
        this.date.getDate()

      this.$router.push("/dashboard/" + id + "/" + dateFormated)
    },
  },
  computed: {
    ...mapState('department', ['data', 'absensi']),
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
    this.changeDate()
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
