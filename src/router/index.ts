import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/user/info',
      name: '个人信息',
      component: () => import('../views/UserInfoView.vue')
    }
  ]
})

export default router
