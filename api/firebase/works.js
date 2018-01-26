import firebase from '~/plugins/firebase'
import { send as storageSend } from './partial/storage'

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

/**
 * 情報をfirebaseに送信する
 * @param {string} id 対象記事のID
 * @param {objext} payload 送信情報
 */
export const send = async (id, payload) => {
  await storageSend(payload.eyecatch)
  // firebaseには画像名を登録するのでpayloadを変更する必要があるが
  // スマートな形で実現したい
  // await worksCol.doc(id).set(payload).catch(error => {
  //   console.log(error)
  // })
  // const storageRef = storage.ref(payload.eyecatch.name)
  // const file = payload.eyecatch.blob
  // storageRef.put(file).then(function (snapshot) {
  //   console.log('Uploaded a blob or file!')
  // })
}
