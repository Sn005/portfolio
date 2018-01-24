// import { sync } from 'vuex-router-sync'
// import store from '~store'
// import router from '~router'

// sync(store, router)
import { sync } from 'vuex-router-sync'
export default ({app: {store, router}}) => {
  sync(store, router)
}
