import firebase from '~/plugins/firebase'
const storage = firebase.storage()

/**
 * firebase storageへの画像アップロードを行う
 * @param {array} datas 対象の画像情報群
 * @return {boolean} アップロード成功判定
 */

export const send = async (datas) => {
  for (let data of datas) {
    const ref = storage.ref(data.path)
    const file = data.file
    const result = await ref.put(file).catch(error => {
      console.log(error)
      return false
    })
    if (!result) return false
  }
  return true
}

/**
 * 引数で受け取った画像情報群の表示URLを返す
 * @param {array} datas 対象の画像情報群
 * @return {Object} 画像情報を格納したオブジェクト
 */
export const fetchs = async (datas) => {
  let results = []
  for (let data of datas) {
    const ref = storage.ref(data.path)
    const url = await ref.getDownloadURL()
      .catch(error => {
        console.log(error)
        return false
      })
    if (!url) return false
    const item = {
      path: data.path,
      url: url
    }
    results = [...results, item]
  }
  return results
}

/**
 * 引数で受け取ったパスのファイルを削除する
 * @param {string} path ファイルパス
 */
export const remove = async (path) => {
  await storage.ref(path)
    .delete()
    .catch(error => console.log(error))
}
