export default {
  data () {
    return {
      guest: false
    }
  },
  methods: {
    isGuest (role) {
      const result = role === 'guest'
      this.guest = result
      return result
    }
  }
}
