import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import 'mint-ui/lib/style.css'
import '@/style/common.scss'

Vue.config.productionTip = false
var list = [MintUI, VueLazyload]
list.map((item) => Vue.use(item))
// Vue.use(MintUI)
// Vue.use(VueLazyload, {
//   loading: require('style/image/default.png')
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
