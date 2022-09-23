import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/index',
    name: 'home',
    component: ()=> import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
