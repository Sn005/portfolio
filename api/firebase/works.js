import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const col = db.collection('works')

/**
 * 一覧情報取得
 */
export const items = async () => {
  const snapshot = await col.get()
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
  const item = await col.doc(id).get().catch(error => {
    console.log(error)
  })
  let result = item.data()
  result.id = id
  return result
}

/**
 * 情報をfirebaseに送信する
 * @param {string} id 対象記事のID
 * @param {objext} payload 送信情報
 */
export const send = async (id, payload) => {
  await col.doc(id).set(payload).catch(error => {
    console.log(error)
  })
}
