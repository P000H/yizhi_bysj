import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'
import detail from '@/pages/detail'
import commodity from '@/pages/commodity'
import cart from '@/pages/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: commodity,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta:{
        keepAlive:true
      }
    }
  ]
})
