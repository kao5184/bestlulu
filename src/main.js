// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { MdApp, MdToolbar, MdIcon, MdButton, MdContent, MdList, MdDrawer, MdTabs, MdCard } from 'vue-material/dist/components'

Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdIcon)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdList)
Vue.use(MdDrawer)
Vue.use(MdTabs)
Vue.use(MdCard)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
