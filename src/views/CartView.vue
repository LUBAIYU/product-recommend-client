<script setup lang="ts">
import { ref } from 'vue'
import CartList from '@/components/CartList.vue'

//购物车列表
const cartList = ref<API.CartInfo[]>([])
</script>

<template>
  <CartList :cart-list="cartList" />
  <van-empty description="暂无商品" v-if="!cartList||cartList.length<1"></van-empty>
</template>

<style scoped>

</style>