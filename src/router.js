import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
  path: '/',
  redirect: '/dashboard'
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/DashboardPage.vue')
}, {
  path: '*',
  name: 'error',
  component: () => import(/* webpackChunkName: "error" */ '@/pages/error/NotFoundPage.vue'),
  meta: {
    layout: 'error'
  }
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    console.log(to)
    console.log(from)
    
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes
})

/**
 * Before each route update
 */
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)

  return next()
})

/**
 * After each route update
 */
router.afterEach((to, from) => {
  console.log(to)
  console.log(from)
})

export default router
