import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Notifications from '@kyvg/vue3-notification'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { createPinia } from 'pinia'
const pinia = createPinia()

loadFonts()


createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueAxios, axios)
  .use(pinia)
  .use(Notifications)
  .mount('#app')
