import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  //用户登录状态
  const currentUser = ref<API.UserInfo>()
  //设置用户登录状态
  const setCurrentUser = (user: API.UserInfo | undefined) => {
    currentUser.value = user
  }
  //获取用户登录状态
  const getCurrentUser = () => {
    return currentUser.value
  }
  //返回
  return {
    setCurrentUser,
    getCurrentUser
  }
})