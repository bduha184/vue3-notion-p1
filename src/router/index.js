import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/note/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    // {
    //   path: '/about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
