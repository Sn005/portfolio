import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('user')
export default {
  data () {
    return {
      isGuest: false
    }
  },
  computed: {
    ...mapGetters(['account']),
    $_IsGuest_role () {
      return this.account.role
    }
  },
  methods: {
    $_IsGuest_define () {
      this.isGuest = this.$_IsGuest_role === 'guest'
      return this.isGuest
    }
  }
}
