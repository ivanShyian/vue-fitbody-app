import { createRouter, createWebHistory } from 'vue-router'
import AppLoginForm from '@/views/Login'
import store from '../store'
import AppPageNotFound from '../views/NotFound'

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
      component: () => import('../views/Register'),
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
      component: () => import('../views/Menu'),
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
      component: () => import('../components/registration/RegisterCongratz'),
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
