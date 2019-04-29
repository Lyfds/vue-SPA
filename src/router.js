import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/',
          name: 'index',
          component: Index
        },
        {
          path: '/haokan',
          name: 'haokan',
          component: () => import('./views/Haokan.vue')
        },
        {
          path: '/faxian',
          name: 'faxian',
          component: () => import('./views/Faxian.vue')
        },
        {
          path: '/wode',
          name: 'wode',
          component: () => import('./views/Wode.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue')
    }
  ]
})
