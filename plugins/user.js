import users from '~/api/firebase/users'

async function user ({ store }) {
  const result = await users.show()
  store.dispatch('user/setAccount', result.account)
  store.dispatch('user/setAuth', result.auth)
}

export default user
