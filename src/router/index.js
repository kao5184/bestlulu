import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function _ (name) {
  return () => System.import(`@/pages/${name}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _('Home/Index')
    },
    {
      path: '/posts',
      name: 'Posts',
      component: _('Posts/Index')
    }
  ]
})
