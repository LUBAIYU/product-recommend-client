import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from '@/states/userState'
import { showFailToast } from 'vant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/product',
      name: '主页',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: '注册',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/info',
      name: '个人信息',
      component: () => import('../views/UserInfoView.vue')
    }
  ]
})

router.beforeEach((to) => {
  if (to.name === '登录' || to.name === '注册') {
    return true
  }
  const loginUser = getCurrentUser()
  if (!loginUser) {
    showFailToast('未登录')
    return { name: '登录' }
  }
})

export default router
