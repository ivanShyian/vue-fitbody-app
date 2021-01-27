import focusDirective from '@/directives/focusDirective'
import { mapGetters } from 'vuex'

export const registerMixin = {
  directives: {
    focus: focusDirective
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('register', { value: 'currentText' })
  },
  methods: {
    setField(event) {
      if (event.target.value !== '') {
        this.$store.commit('register/setText', event.target.value)
        this.$store.commit('register/notEmpty')
      } else {
        this.$store.commit('register/isEmpty')
      }
    }
  }
}
