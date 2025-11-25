import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'instant' }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Impressum',
      name: 'impressum',
      component: () => import('../views/Impressum.vue')
    },
    {
      path: '/Datenschutz',
      name: 'datenschutz',
      component: () => import('../views/Datenschutz.vue')
    },
  ]
})

export default router
