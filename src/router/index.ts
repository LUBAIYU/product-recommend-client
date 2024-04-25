import { createRouter, createWebHistory } from 'vue-router'
import { showFailToast } from 'vant'
import { getLoginUserAPI } from '@/apis/user'
import { useUserStore } from '@/stores/userStore'

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
    },
    {
      path: '/search',
      name: '搜索',
      component: () => import('../views/SearchView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  const userStore = useUserStore()
  if (to.name === '登录' || to.name === '注册') {
    return true
  }
  const loginUser = userStore.getCurrentUser()
  if (loginUser) {
    return
  }
  const res = await getLoginUserAPI()
  if (res.code === 200) {
    userStore.setCurrentUser(res.data)
    return
  }
  showFailToast('未登录')
  return { name: '登录' }
})

export default router
