
import firebase from '~/plugins/firebase'
const auth = firebase.auth()

/**
 * 各SNSアカウントを使用したログイン
 * @returns {Promise} signInWithPopup実行結果
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
 * @returns {Promise} signInWithEmailAndPassword実行結果
 */
export const byEmail = async (email, password) => {
  const result = await auth.signInWithEmailAndPassword(email, password)
  return result
}
