import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/scanner',
      name: 'scanner',
      component: () => import('@/views/PersonalScanner.vue'),
    },
    {
      path: '/defense',
      name: 'defense',
      component: () => import('@/views/PersonalDefense.vue'),
    },
  ],
})

export default router
