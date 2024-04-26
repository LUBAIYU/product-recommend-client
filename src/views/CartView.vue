<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CartList from '@/components/CartList.vue'
import { listCartsAPI } from '@/apis/cart'
import { showFailToast } from 'vant'

//购物车列表
const cartList = ref<API.CartInfo[]>([])
//当前页码
const current = ref<number>(1)
//每页记录数
const pageSize = ref<number>(5)
//总记录数
const total = ref<number>(0)

//获取购物车列表
const getCartList = async () => {
  const res = await listCartsAPI({
    current: current.value,
    pageSize: pageSize.value
  })
  if (res.code === 200) {
    cartList.value = res.data.records
  } else {
    showFailToast(res.message)
  }
}

onMounted(() => getCartList())
</script>

<template>
  <CartList :cart-list="cartList" @get-cart-list="getCartList" />
  <van-pagination style="margin-top: 10px" v-if="cartList&&cartList.length>0" v-model="current"
                  :total-items="total"
                  :items-per-page="pageSize"></van-pagination>
  <van-empty description="暂无商品" v-if="!cartList||cartList.length<1"></van-empty>
</template>

<style scoped>

</style>