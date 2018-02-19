import firebase from '~/plugins/firebase'
import { auth } from './partial/auth'
const db = firebase.firestore()
const usersCol = db.collection('users')

/**
 * 単体ユーザー情報取得
 */
export const item = async () => {
  const user = await auth()
  if (!user) return {}
  const userDoc = usersCol.doc(user.uid)
  const userData = (await userDoc.get()).data()
  return {
    auth: true,
    account: {
      permission: userData ? userData.permission : false,
      role: userData ? userData.role : 'guest'
    }
  }
}
