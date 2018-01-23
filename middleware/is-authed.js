// export default function ({ store, redirect, error }) {
//   console.log(error)
//   if (!store.state.user.auth) {
//     console.log(error)
//     // return redirect('/admin')
//   }
// }
process.env.DEBUG = 'nuxt:*'
export default function ({ store, redirect, error }) {
  if (store.state.user.auth) {
    return redirect('/admin')
  }
}
