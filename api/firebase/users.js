import firebase from '~/plugins/firebase'
import { auth } from './partial/auth'
const db = firebase.firestore()
const usersCol = db.collection('users')

/**
 * 単体ユーザー情報取得
 */
export const fetch = async () => {
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
