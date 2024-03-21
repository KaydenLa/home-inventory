import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/supplies',
      name: 'supplies',
      component: () => import('../views/Supplies.vue')
    },
    {
      path: '/seasoning',
      name: 'seasoning',
      component: () => import('../views/Seasoning.vue')
    },
    {
      path: '/ingredients',
      name: 'ingredients',
      component: () => import('../views/Ingredients.vue')
    }
  ]
})

export default router
