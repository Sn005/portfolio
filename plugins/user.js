import users from '~/api/firebase/users'

async function user ({ store }) {
  const result = await users.show()
  store.dispatch('user/setAuth', result.auth)
  store.dispatch('user/setAccount', result.account)
}

export default user
