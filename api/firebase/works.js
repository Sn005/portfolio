import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const col = db.collection('works')

/**
 * 一覧情報取得
 */
export const items = async () => {
  const results = await col.get()
  return results.docs.map(function (doc) {
    let data = doc.data()
    data['id'] = doc.id
    return data
  })
}

/**
 * 単体情報取得
 * @param {string} id 対象記事のID
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
 * 掲載順位を指定してアイテムを取得
 * @param {int} order 対象記事の掲載順位
 */
export const fetchItemByOrder = async (order) => {
  const results = await col.where('order', '==', order).get()
  const item = results.docs.reduce(doc => {
    console.log(doc.exists)
    if (!doc.exists) return false
    return doc.data()
  })
  // console.log(item.reduce(function (a, b) { return a + b }))
  return item[0]
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

/**
 * 対象アイテムを削除する
 * @param {string} id 対象記事のID
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
