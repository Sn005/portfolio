import * as firebase from '~/api/firebase/partial/sign-in'
import { fetch as usersFetch } from '~/api/firebase/users'

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
    await firebase.signInBySns(sns).catch(error => {
      commit('setErrors', error)
    })
    const result = await usersFetch()
    commit('setAuth', result.auth)
    commit('setAccount', result.account)
  }
}

export const getters = {
  auth: state => state.auth,
  account: state => state.account
}
