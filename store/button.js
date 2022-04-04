export const state = () => ({
  enable : true
})

export const mutations = {

  toogle(state, payload){
     state.enable = payload
  },

}
