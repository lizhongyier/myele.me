import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Discover from './views/Discover.vue'
import Order from './views/Order.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/discover',
      name: 'discover',
      component: Discover
    },{
      path: '/order',
      name: 'order',
      component: Order
    },{
      path: '/user',
      name: 'user',
      component: User
    }]
})
