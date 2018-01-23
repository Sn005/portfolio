export default function ({ store, redirect, error }) {
  if (store.state.user.auth) {
    return redirect('/admin')
  }
}
