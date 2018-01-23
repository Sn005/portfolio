import { auth } from '~/api/firebase/partial/auth'
export default async function ({ redirect }) {
  const isAuthed = await auth()
  if (Object.keys(isAuthed).length) {
    return redirect('/admin')
  }
}
