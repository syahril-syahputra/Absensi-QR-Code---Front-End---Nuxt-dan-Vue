
const endPoint = '/admin/department'
export const state = () => ({
  data: [],
  absensi: []
})
export const getters = {
  detail(state) {
    return (id) => {
      return state.data.find((a) => a.id == id)
    }
  },
}
export const actions = {
  async init({ commit }, payload) {
    try {
      const response = await this.$axios.$get(endPoint)

      commit('initData', response)
    } catch (error) {
      alert("Terjadi Kesalahan")
      console.log("fail", error)
    }

  },
  async initAbsensi({ commit }, payload) {
    try {
      const response = await this.$axios.$get(endPoint + "/" + payload)

      commit('initDataAbsensi', response)
    } catch (error) {
      alert("Terjadi Kesalahan")
      console.log("fail", error)
    }
  },
  async add({ commit }, payload) {
    try {
      const result = await this.$axios.$post(endPoint, payload)
      console.log(result)
      commit('addData', result)
      return [result, null]
    } catch (error) {
      return [null, error.response.data.message]
    }
  },
  async delete({ commit }, payload) {
    try {
      const result = await this.$axios.$delete(endPoint + '/' + payload)
      console.log(result)
      commit('deleteData', payload)

      return [result, null]
    } catch (error) {
      return [null, error.response.data.message]
    }
  },
  async update({ commit }, payload) {
    try {
      const result = await this.$axios.$patch(
        endPoint + '/' + payload.id,
        payload.data
      )

      commit('updateData', result)
      return ['result', null]
    } catch (error) {
      return [null, error.response.data.message]
    }
  },

}
export const mutations = {
  initData(state, payload) {
    state.data = payload
  },
  initDataAbsensi(state, payload) {
    state.absensi = payload
  },
  addData(state, data) {
    state.data.push(data)
  },
  deleteData(state, id) {
    const index = state.data.findIndex((obj) => obj.id == id)
    state.data.splice(index, 1)
  },
  updateData(state, payload) {
    console.log(payload)
    const index = state.data.findIndex((obj) => obj.id == payload.id)
    state.data[index].name = payload.name
  },
}
