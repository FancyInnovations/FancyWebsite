import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/FancyNpcs',
      name: 'fancynpcs',
      component: () => import('../views/plugin/impl/FancyNpcs/FancyNpcs.vue')
    },
    {
      path: '/FancyNpcs/commands',
      name: 'fancynpcscommands',
      component: () => import('../views/plugin/impl/FancyNpcs/FancyNpcsCommands.vue')
    },
    {
      path: '/FancyNpcs/api',
      name: 'fancynpcsapi',
      component: () => import('../views/plugin/impl/FancyNpcs/FancyNpcsApi.vue')
    },
    {
      path: '/FancyHolograms',
      name: 'fancyholograms',
      component: () => import('../views/plugin/impl/FancyHolograms/FancyHolograms.vue')
    },
    {
      path: '/FancyHolograms/commands',
      name: 'fancyhologramscommands',
      component: () => import('../views/plugin/impl/FancyHolograms/FancyHologramsCommands.vue')
    },
    {
      path: '/FancyHolograms/api',
      name: 'fancyhologramssapi',
      component: () => import('../views/plugin/impl/FancyHolograms/FancyHologramsApi.vue')
    },
  ]
})

export default router
