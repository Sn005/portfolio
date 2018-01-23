import { auth } from '~/api/firebase/partial/auth'
export default async function ({ redirect }) {
  const isAuthed = await auth()
  // if (!isAuthed) {
  //   return redirect('/auth/login')
  // } else {
  //   return redirect('/admin')
  // }
}
