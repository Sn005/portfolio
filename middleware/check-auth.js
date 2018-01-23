export default function ({ store, error }) {
  if (!store.state.user.auth) {
    error({
      message: store.state.user.auth,
      statusCode: 403
    })
  }
}
