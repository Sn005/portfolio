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

/**
 * 単体情報取得
 */
export const item = async (id) => {
  const item = await worksCol.doc(id).get().catch(error => {
    console.log(error)
  })
  let result = item.data()
  result.id = id
  return result
}

export const send = async (id, payload) => {
  await worksCol.doc(id).set(payload).catch(error => {
    console.log(error)
  })
}
