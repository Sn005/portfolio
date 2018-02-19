import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('user')
export default {
  data () {
    return {
      guest: false
    }
  },
  computed: {
    ...mapGetters(['account']),
    role () {
      return this.account.role
    }
  },
  methods: {
    isGuest () {
      const result = this.role === 'guest'
      this.guest = result
      return result
    }
  }
}
