import firebase from '~/plugins/firebase'
const db = firebase.firestore()
const doc = db.collection('about').doc('index')

/**
 * 情報取得
 */
export const item = async () => {
  const result = await doc.get().catch(error => {
    console.log(error)
  })
  return result.data()
}

/**
 * 情報をfirebaseに送信する
 * @param {objext} payload 送信情報
 */
export const send = async (payload) => {
  await doc.set(payload).catch(error => {
    console.log(error)
  })
}
