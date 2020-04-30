import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from '@/axios/index.js'
import util from './util/util.js'
import directive from './directive'
import './assets/scss/index.scss'
import './assets/font/font.scss'
import { post, get, deleteRun, put } from '@/axios/http.js'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$put = put
Vue.prototype.$deleteRun = deleteRun
Vue.prototype.$util = util
Vue.prototype.$env = process.env.NODE_ENV

// 禁止右键审查
if (process.env.NODE_ENV == 'production') {
  util.noViewing()
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
