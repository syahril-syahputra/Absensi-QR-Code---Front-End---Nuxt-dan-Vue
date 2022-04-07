const endPoint = '/admin/detail-department'

export const state = () => ({
  data: [],
  isInit: false,
})

export const getters = {
  detail(state) {
    return (id) => {
      return state.data.find((a) => a.id == id)
    }
  },
}

export const actions = {
  //context isinya banyak, ada commit state dispatch dan getter
  async init({ commit }, payload) {
    try {
      const data = await this.$axios.$get(endPoint + "/" + payload)

      console.log(endPoint + "/" + payload)
      commit('initData', data)
    } catch (error) {
      console.log(error)
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
//mutation
export const mutations = {
  initData(state, data) {
    state.data = data
    state.isInit = true
  },
  addData(state, data) {
    state.data.push(data)
  },
  deleteData(state, id) {
    const index = state.data.findIndex((obj) => obj.id == id)
    state.data.splice(index, 1)
  },
  updateData(state, payload) {
    const index = state.data.findIndex((obj) => obj.id == payload.id)
    state.data[index] = payload
  },
}
