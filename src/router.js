import { createRouter, createWebHistory } from 'vue-router'
import AppLoginForm from '@/components/AppAuthorization/AppLoginForm'
import AppRegisterForm from '@/components/AppAuthorization/AppRegisterForm'
import AppRemainingCalc from '@/components/AppRemainingCalc'
import AppPageNotFound from './components/AppPageNotFound'
import AppMenu from '@/components/AppMenu/AppMenu'
import TheCongratz from '@/components/AppAuthorization/TheCongratz'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: AppLoginForm,
      name: 'login',
      alias: '/',
      meta: { cantLogin: true }
    },
    {
      path: '/register',
      component: AppRegisterForm,
      name: 'register'
    },
    {
      path: '/calories',
      component: AppRemainingCalc,
      name: 'caloriesCalc'
    },
    {
      path: '/menu',
      component: AppMenu,
      name: 'menu'
    },
    {
      path: '/:notFound(.*)',
      component: AppPageNotFound,
      name: 'notFound'
    },
    {
      path: '/success-register',
      component: TheCongratz,
      name: 'true-register'
    }]
})
export default router
