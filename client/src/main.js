import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
