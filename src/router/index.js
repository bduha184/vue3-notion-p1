import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/note/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/views/study/binding',
      component: () => import('../views/study/BindingPage.vue')
    },
    {
      path: '/views/study/directive',
      component: () => import('../views/study/DirectivePage.vue')
    },
    {
      path: '/views/study/event',
      component: () => import('../views/study/EventPage.vue')
    },
  ]
})

export default router
