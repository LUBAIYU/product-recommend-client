<script setup lang="ts">
import { ref } from 'vue'
import { LoginAPI } from '@/apis/user'
import { showFailToast, showSuccessToast } from 'vant'
import { useRouter } from 'vue-router'
import { setCurrentUser } from '@/states/userState'

const router = useRouter()
//登录信息
const form = ref<API.LoginParams>({
  userName: '',
  userPassword: ''
})

//用户登录
const userLogin = async () => {
  const res = await LoginAPI(form.value)
  if (res.code === 200) {
    showSuccessToast('登录成功')
    setCurrentUser(res.data)
    await router.push('/')
  } else {
    showFailToast(res.message)
  }
}
</script>

<template>
  <van-image style="margin-left: 38px" round width="300px" height="300px"
             src="https://img2.imgtp.com/2024/04/23/XLgN4nom.png" fit="cover" />
  <van-form @submit="userLogin">
    <van-cell-group inset>
      <van-field
        v-model="form.userName"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名',trigger:'onBlur' }]"
      />
      <van-field
        v-model="form.userPassword"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码',trigger:'onBlur' }]"
      />
    </van-cell-group>
    <div style="text-align: end; margin: 10px 20px 10px 0">还没有账号？请
      <span style="color: #5d9ad9;cursor: pointer;"
            @click="$router.push('/register')">注册</span>
    </div>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>
.login-image {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>