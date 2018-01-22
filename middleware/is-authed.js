// export default function ({ store, redirect, error }) {
//   console.log(error)
//   if (!store.state.user.auth) {
//     console.log(error)
//     // return redirect('/admin')
//   }
// }
export default function ({ store, redirect }) {
  if (store.user.state.auth) {
    return redirect('/admin')
  }
  // if (!store.state.user.auth) {
  //   error({
  //     message: store.state.user,
  //     statusCode: 403
  //   })
  // }
}
