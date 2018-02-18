import * as firebaseSignIn from '~/api/firebase/partial/sign-in'
import * as firebaseUsers from '~/api/firebase/users'
import { signOut as firebaseSignOut } from '~/api/firebase/partial/sign-out'

export const state = () => ({
  auth: 'true',
  account: {},
  errors: {}
})

export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  },
  setAccount (state, { account }) {
    state.account = account
  },
  setErrors (state, { errors }) {
    state.errors = errors
  }
}

export const actions = {
  setAuth ({ commit }, auth) {
    commit('setAuth', auth)
  },
  setAccount ({ commit }, account) {
    commit('setAccount', { account })
  },
  /**
   * 各SNSアカウントを使用したログイン
   * @param {*} param0
   * @param {string} sns sns名称
   */
  async signInBySns ({ commit }, sns) {
    await firebaseSignIn.bySns(sns).catch(error => {
      commit('setErrors', error)
    })
    const result = await firebaseUsers.item()
    commit('setAuth', result.auth)
    commit('setAccount', result.account)
  },

  /**
   * 各SNSアカウントを使用したログイン
   * @param {*} param0
   * @param {object} payload ログイン情報
   */
  async signInByEmail ({ commit }, payload) {
    await firebaseSignIn
      .byEmail(payload.email, payload.password)
      .catch(error => {
        commit('setErrors', error)
      })
    const result = await firebaseUsers.item()
    commit('setAuth', result.auth)
    commit('setAccount', result.account)
  },

  async signOut ({ commit }) {
    await firebaseSignOut().catch(error => {
      commit('setErrors', error)
    })
    commit('setAuth', false)
    commit('setAccount', {})
  }
}

export const getters = {
  auth: state => state.auth,
  account: state => state.account
}
