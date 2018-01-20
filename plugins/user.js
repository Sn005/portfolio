import fetchUser from '~/api/firebase/patial/fetchUser'
async function user () {
  const result = await fetchUser()
  console.log(result)
}

export default user
