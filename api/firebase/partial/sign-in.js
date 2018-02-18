
import firebase from '~/plugins/firebase'
const auth = firebase.auth()

/**
 * 各SNSアカウントを使用したログイン
 */
export const bySns = async (sns) => {
  const providers = {
    'google': new firebase.auth.GoogleAuthProvider(),
    'twitter': new firebase.auth.TwitterAuthProvider(),
    'facebook': new firebase.auth.FacebookAuthProvider()
  }
  const result = await auth.signInWithPopup(providers[sns])
  return result
}

/**
 * e-mailアカウントによるログイン
 * @param {string} email メールアドレス
 * @param {string} password パスワード
 */
export const byEmail = async (email, password) => {
  const result = await auth.signInWithEmailAndPassword(email, password)
  return result
}
