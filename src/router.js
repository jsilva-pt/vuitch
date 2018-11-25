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
      component: () => import(/* webpackChunkName: "StreamDetails" */ './views/StreamDetails.vue'),
      beforeEnter: (to, from, next) => {
        if (from.name === null) {
          // build history when accessing directly the stream page
          window.history.replaceState({}, null, process.env.BASE_URL)
          window.history.pushState({}, null, process.env.BASE_URL + to.params.name)
        }
        next()
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
