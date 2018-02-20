import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('user')
export default {
  data () {
    return {
      $_IsGuest_result: false
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
      const result = this.$_IsGuest_role === 'guest'
      this.guest = result
      return result
    }
  }
}
