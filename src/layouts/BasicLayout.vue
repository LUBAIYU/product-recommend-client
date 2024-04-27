<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const DEFAULT_TITLE = '主页'
const title = ref<string | undefined>(DEFAULT_TITLE)

router.beforeEach(to => {
  title.value = to.name as string ?? DEFAULT_TITLE
})
</script>

<template>
  <van-nav-bar :title="title" left-arrow @click-left="$router.back()">
    <template #right>
      <van-icon name="search" size="18" @click="$router.push('/search')" />
    </template>
  </van-nav-bar>
  <div id="content">
    <router-view />
  </div>
  <van-tabbar route>
    <van-tabbar-item icon="home-o" to="/product">主页</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/info">个人</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
#content {
  padding-bottom: 50px;
}
</style>