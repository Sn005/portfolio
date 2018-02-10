export const state = () => ({
  isDrawer: false,
  isVisit: false
})

export const mutations = {
  toggleDrawer (state) {
    state.isDrawer = !state.isDrawer
  },
  setVisit (state) {
    state.isVisit = true
  }
}

export const actions = {
  toggleDrawer ({ commit }) {
    commit('toggleDrawer')
  },
  setVisit ({ commit }) {
    commit('setVisit')
  }
}

export const getters = {
  isDrawer: state => state.isDrawer,
  isVisit: state => state.isVisit
}
