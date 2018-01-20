
import firebase from '~/plugins/firebase'

/**
 * 認証を行う
 */
function auth () {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      resolve(user || false)
    })
  })
}
export default auth
