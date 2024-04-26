<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { logoutAPI, updateUserInfoAPI, uploadAvatarAPI } from '@/apis/user'
import { showFailToast, showSuccessToast, type UploaderFileListItem } from 'vant'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
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
const userAvatar = ref<UploaderFileListItem[]>([])

//上传图片
const uploadAvatar = async (file: any) => {
  const formData = new FormData()
  formData.append('multipartFile', file.file)
  const res = await uploadAvatarAPI(formData)
  if (res.code === 200) {
    userInfo.value.userAvatar = res.data
    userAvatar.value = [{ url: userInfo.value.userAvatar, isImage: true }]
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

//获取登录用户信息
const getLoginUser = () => {
  const loginUser = userStore.getCurrentUser()
  if (loginUser) {
    userInfo.value = loginUser
    userInfo.value.gender = userInfo.value.gender + ''
    userAvatar.value = [{ url: userInfo.value.userAvatar, isImage: true }]
  }
}

//退出登录
const logout = async () => {
  const res = await logoutAPI()
  if (res.code === 200) {
    userStore.setCurrentUser(undefined)
    await router.push('/login')
  } else {
    showFailToast(res.message)
  }
}

onMounted(() => getLoginUser())
</script>

<template>
  <div class="avatar-style">
    <van-uploader preview-size="180" v-model="userAvatar" :after-read="uploadAvatar"
                  :max-count="1">
    </van-uploader>
  </div>
  <van-form @submit="updateUserInfo">
    <van-cell-group inset>
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
    <div style="text-align: end; margin: 10px 20px 10px 0">
      <span style="color: #5d9ad9;cursor: pointer;"
            @click="logout">退出登录</span>
    </div>
  </van-form>
</template>

<style scoped>
.avatar-style {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 20px 0;
}
</style>