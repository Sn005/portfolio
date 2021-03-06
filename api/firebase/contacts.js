import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const col = db.collection('contacts')

/**
 * 一覧情報取得
 */
export const items = async () => {
  const colData = await col.get()
  return colData.docs.map(function (doc) {
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
  if (!item.exists) return false
  let result = item.data()
  result.id = id
  return result
}

/**
 * 情報をfirebaseに送信する
 * @param {string} id 対象記事のID
 * @param {objext} payload 送信情報
 * @return {Object} 取得した情報
 */
export const send = async (payload) => {
  payload.created = firebase.firestore.FieldValue.serverTimestamp()
  const result = await col.add(payload).catch(error => {
    console.log(error)
    return false
  })
  return result
}

/**
 * 情報を更新する
 * @param {string} id 対象記事のID
 * @param {objext} payload 送信情報
 */
export const update = async (id, payload) => {
  await col.doc(id).set(payload).catch(error => {
    console.log(error)
  })
}

/**
 * 対象アイテムを削除する
 * @param {string} id 対象記事のID
 * @return {boolean} 削除判定
 */
export const remove = async (id) => {
  const doc = col.doc(id)
  const item = await doc.get().catch(error => {
    console.log(error)
  })
  if (!item.exists) return false
  await doc.delete().catch(error => {
    console.log(error)
  })
  return true
}
