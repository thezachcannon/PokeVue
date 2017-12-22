import Vue from 'vue'
import Router from 'vue-router'
import DefaultView from '../views/DefaultView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app',
      component: DefaultView,
      children: []
    },
    {
      path: '*',
      redirect: '/app'
    }
  ]
})
