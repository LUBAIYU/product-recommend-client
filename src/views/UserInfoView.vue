<script setup lang="ts">
import { ref } from 'vue'

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
</script>

<template>
  <van-uploader>
    <van-image round :src="userInfo.userAvatar" />
  </van-uploader>
  <van-form>
    <van-cell-group inset>
      <van-field
        v-model="userInfo.userName"
        name="用户名"
        label="用户名"
        placeholder="用户名"
      />
      <van-field
        v-model="userInfo.gender"
        name="性别"
        label="性别"
        placeholder="性别"
      />
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
        name="收获地址"
        label="收获地址"
        placeholder="收获地址"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>