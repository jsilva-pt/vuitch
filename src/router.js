import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: () => import(/* webpackChunkName: "StreamSearch" */ './views/StreamSearch.vue')
    },
    {
      path: '/channel/:name',
      name: 'stream-details',
      component: () => import(/* webpackChunkName: "StreamDetails" */ './views/StreamDetails.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
