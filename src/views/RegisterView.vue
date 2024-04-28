<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { RegisterAPI } from '@/apis/user'
import { showFailToast, showSuccessToast } from 'vant'

const router = useRouter()
//注册信息
const form = ref<API.RegisterParams>({
  userName: '',
  userPassword: '',
  confirmPassword: ''
})

//用户注册
const userRegister = async () => {
  const res = await RegisterAPI(form.value)
  if (res.code === 200) {
    showSuccessToast('注册成功')
    await router.push('/user/login')
  } else {
    showFailToast(res.message)
  }
}

//校验密码和确认密码是否一致
const validatePassword = (value: any) => {
  if (value === '') {
    return '请填写确认密码'
  }
  if (value !== form.value.userPassword) {
    return '密码不一致'
  }
  return true
}
</script>

<template>
  <van-image style="margin-left: 38px" round width="300px" height="300px"
             src="src/assets/images/register.png" fit="cover" />
  <van-form @submit="userRegister">
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
      <van-field
        v-model="form.confirmPassword"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{validator:validatePassword}]"
      />
    </van-cell-group>
    <div style="text-align: end; margin: 10px 20px 10px 0">已经有账号？请
      <span style="color: #5d9ad9;cursor: pointer;"
            @click="$router.push('/login')">登录</span>
    </div>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        注册
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>