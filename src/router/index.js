import { createRouter, createWebHistory } from 'vue-router'
import AppLoginForm from '@/views/AppLoginForm'
import store from '../store'
import AppPageNotFound from '../components/AppPageNotFound'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: AppLoginForm,
      name: 'login',
      meta: {
        layout: 'auth',
        auth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/AppAuthorization/AppRegisterForm'),
      meta: {
        layout: 'auth',
        auth: false
      }
    },
    {
      path: '/calories',
      name: 'calories',
      component: () => import('../components/AppRemainingCalc'),
      meta: {
        layout: 'main',
        auth: true
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/AppMenu/AppMenu'),
      alias: '/',
      meta: {
        layout: 'main',
        auth: true
      }
    },
    {
      path: '/:notFound(.*)',
      name: 'notFound',
      component: AppPageNotFound,
      meta: {
        layout: 'auth',
        auth: false
      }
    },
    {
      path: '/success-register',
      name: 'true-register',
      component: () => import('../components/AppAuthorization/TheCongratz'),
      meta: {
        layout: 'auth',
        auth: false
      }
    }]
})
router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth
  if (requireAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/login?message=login')
  } else {
    next()
  }
})

export default router
