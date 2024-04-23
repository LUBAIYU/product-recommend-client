<script setup lang="ts">
import { ref } from 'vue'
import { updateUserInfoAPI, uploadAvatarAPI } from '@/apis/user'
import { showFailToast, showSuccessToast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()
//用户信息
const userInfo = ref<API.UserInfo>({
  address: '',
  age: '',
  createTime: '',
  gender: '',
  id: '',
  phone: '',
  updateTime: '',
  userAvatar: '',
  userName: '',
  userPassword: ''
})

//上传组件绑定的属性
const userAvatar = ref([])

//上传图片
const uploadAvatar = async (file: any) => {
  const res = await uploadAvatarAPI(file)
  if (res.code === 200) {
    userInfo.value.userAvatar = res.data
  } else {
    showFailToast(res.message)
  }
}

//修改信息
const updateUserInfo = async () => {
  const res = await updateUserInfoAPI(userInfo.value)
  if (res.code === 200) {
    showSuccessToast('修改成功')
    router.back()
  } else {
    showFailToast(res.message)
  }
}

</script>

<template>
  <van-form @submit="updateUserInfo">
    <van-cell-group inset>
      <van-field label="头像">
        <template #input>
          <van-image
            :src="userInfo.userAvatar"
            fit="contain" v-if="userInfo.userAvatar != ''" />
          <van-uploader v-model="userAvatar" :after-read="uploadAvatar" :max-count="1"></van-uploader>
        </template>
      </van-field>
      <van-field
        v-model="userInfo.userName"
        name="用户名"
        label="用户名"
        placeholder="用户名"
      />
      <van-field
        name="性别"
        label="性别">
        <template #input>
          <van-radio-group v-model="userInfo.gender" direction="horizontal">
            <van-radio name="0">男</van-radio>
            <van-radio name="1">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="userInfo.age"
        name="年龄"
        label="年龄"
        placeholder="年龄"
      />
      <van-field
        v-model="userInfo.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
      />
      <van-field
        v-model="userInfo.address"
        name="收货地址"
        label="收货地址"
        placeholder="收货地址"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        保存
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>