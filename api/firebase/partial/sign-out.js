
import firebase from '~/plugins/firebase'
const auth = firebase.auth()

export const signOut = async () => {
  const result = await auth.signOut()
  console.log(result)
  return result
}
