import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login'
import store from '../store'
import NotFound from '../views/NotFound'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
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
      component: () => import('../views/home/HomeCalories'),
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
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home'),
      alias: '/home',
      redirect: '/home/main',
      meta: {
        layout: 'main',
        auth: true
      },
      children: [
        {
          path: '/home/main',
          name: 'main',
          component: () => import('../views/home/HomeMain'),
          meta: {
            layout: 'main',
            auth: true
          }
        },
        {
          path: '/home/nutrition',
          name: 'nutrition',
          component: () => import('../views/home/HomeNutrition'),
          meta: {
            layout: 'main',
            auth: true
          }
        },
        {
          path: '/activities',
          name: 'activities', // comp /home/activities
          meta: {
            layout: 'main',
            auth: true
          }
        },
        {
          path: '/home/calories',
          name: 'calories',
          component: () => import('../views/home/HomeCalories'),
          meta: {
            layout: 'main',
            auth: true
          }
        }
      ]
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
