export const state = () => ({
  account: {}
})

export const mutations = {
  setAccount (state, { account }) {
    state.account = account
  }
}

export const actions = {
  setAccount ({ commit }, account) {
    commit('setAccount', { account })
  }
}
