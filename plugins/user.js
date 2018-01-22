import { fetch as usersFetch } from '~/api/firebase/users'
async function user ({ store }) {
  const result = await usersFetch()
  store.dispatch('user/setAuth', result.auth)
  store.dispatch('user/setAccount', result.account)
}

export default user
