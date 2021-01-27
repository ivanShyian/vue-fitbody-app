import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login'
import store from '../store'
import NotFound from '../views/NotFound'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/auth',
      component: Login,
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
      component: () => import('../components/calories/AppCalories'),
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
      component: NotFound,
      meta: {
        layout: 'auth',
        auth: false
      }
    },
    {
      path: '/registered',
      name: 'registered',
      component: () => import('../components/registration/RegisterCongrats'),
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
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
