import firebase from '~/plugins/firebase'
const storage = firebase.storage()

export const send = async (files) => {
  for (let file of files) {
    console.log(file.name)
    const ref = storage.ref(file.name)
    const blob = file.blob
    await ref.put(blob).catch(() => false)
  }
  return true
}
