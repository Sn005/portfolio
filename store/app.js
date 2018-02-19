export const state = () => ({
  isDrawer: false
})

export const mutations = {
  toggleDrawer (state) {
    state.isDrawer = !state.isDrawer
  }
}

export const actions = {
  toggleDrawer ({ commit }) {
    commit('toggleDrawer')
  }
}

export const getters = {
  isDrawer: state => state.isDrawer
}
