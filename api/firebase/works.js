import firebase from '~/plugins/firebase'
const db = firebase.firestore()
const worksCol = db.collection('works')

/**
 * 一覧情報取得
 */
export const items = async () => {
  const snapshot = await worksCol.get()
  return snapshot.docs.map(function (doc) {
    let data = doc.data()
    data['id'] = doc.id
    return data
  })
}
