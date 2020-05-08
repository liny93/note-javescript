import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import News from '@/components/News'
import Home from '@/components/Home'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
