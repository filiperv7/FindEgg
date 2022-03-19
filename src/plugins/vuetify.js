import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#fc8020',
        secondary: '#b0bec5',
        accent: '#cdc5aa',
        error: '#b71c1c',
        buttom: '#053864'
      },
      dark: {
        primary: '#c93',
        buttom: '#053864'
      }
    }
  }
})
