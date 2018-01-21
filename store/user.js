export const state = () => ({
  auth: false,
  account: {}
})

export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  },
  setAccount (state, { account }) {
    state.account = account
  }
}

export const actions = {
  setAuth ({ commit }, auth) {
    commit('setAuth', auth)
  },
  setAccount ({ commit }, account) {
    commit('setAccount', { account })
  }
}
