import firebase from '~/plugins/firebase'
const storage = firebase.storage()

export const send = async (datas) => {
  for (let data of datas) {
    const ref = storage.ref(data.name)
    const file = data.file
    await ref.put(file).catch(() => false)
  }
  return true
}

export const fetchs = async (datas) => {
  let results = []
  for (let data of datas) {
    const ref = storage.ref(data.name)
    const url = await ref.getDownloadURL()
      .catch(error => console.log(error))
    results = [...results, url]
  }
  return results
}
