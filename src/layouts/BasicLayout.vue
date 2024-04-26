<script setup lang="ts">

</script>

<template>
  <van-nav-bar title="主页" left-arrow @click-left="$router.back()">
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