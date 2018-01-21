import firebase from '~/plugins/firebase'
import auth from './patial/auth'
const db = firebase.firestore()
const usersCol = db.collection('users')

export default {
  async show () {
    const user = await auth()
    if (!user) return {}
    const userDoc = usersCol.doc(user.uid)
    const userData = (await userDoc.get()).data()
    return {
      auth: true,
      account: {
        uid: user.uid,
        name: userData.name || user.displayName,
        role: userData.role,
        profilePicUrl: user.photoURL
      }
    }
  }

}
