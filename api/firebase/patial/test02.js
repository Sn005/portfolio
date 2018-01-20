import firebase from '~/plugins/firebase'
import sample from './init'

export default function () {
  const db = firebase.firestore()
  console.log(db)

  const init = sample.firestore()
  console.log(init)
}
