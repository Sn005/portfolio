export default function ({ store, error }) {
  console.log('test')
  if (!store.state.user.account.isLogin) {
    error({
      message: store.state.user.account.isLogin,
      statusCode: 403
    })
  }
}
