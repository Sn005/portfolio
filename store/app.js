export const state = () => ({
  drawer: false
})

export const mutations = {
  toggleDrawer (state) {
    state.drawer = !state.drawer
  }
}

export const actions = {
  toggleDrawer ({ commit }, result) {
    commit('toggleDrawer', { drawer: result })
  }
}

export const getters = {
  drawer: state => state.drawer
}
