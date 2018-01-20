import firebase from '~/plugins/firebase'
import auth from './auth'
const db = firebase.firestore()
const usersCol = db.collection('users')

async function fetchUser () {
  // return true
  const user = await auth()
  if (!user) return {}
  const userDoc = usersCol.doc(user.uid)
  const userData = (await userDoc.get()).data()
  return {
    isLogin: true,
    uid: user.uid,
    name: userData.name || user.displayName,
    role: userData.role,
    profilePicUrl: user.photoURL
  }
}
export default fetchUser
