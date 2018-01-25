import firebase from '~/plugins/firebase'
const db = firebase.firestore()
const col = db.collection('definedCategory')

/**
 * 一覧情報取得
 */
export const items = async () => {
  const result = await col.doc('index').get().catch(error => {
    console.log(error)
  })
  return result.data()
}
