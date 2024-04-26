<script setup lang="ts">
import { delCartAPI } from '@/apis/cart'
import { showFailToast, showSuccessToast } from 'vant'
import { purchaseProductsAPI } from '@/apis/product'

interface CartList {
  cartList: API.CartInfo[]
}

const props = withDefaults(defineProps<CartList>(), {
  cartList: () => []
})

const emit = defineEmits(['getCartList'])

//取消购物车
const cancelCart = async (cartId: number | string) => {
  const res = await delCartAPI(cartId)
  if (res.code === 200) {
    showSuccessToast('取消成功')
  } else {
    showFailToast(res.message)
  }
  emit('getCartList')
}

//购买商品
const purchaseProducts = async (cartId: number | string) => {
  const res = await purchaseProductsAPI(cartId)
  if (res.code === 200) {
    showSuccessToast('购买成功')
  } else {
    showFailToast(res.message)
  }
  emit('getCartList')
}
</script>

<template>
  <van-card v-for="cart in props.cartList"
            :key="cart.cartId"
            :title="cart.name"
            :desc="cart.description"
            :price="cart.price"
            :thumb="cart.image"
            :num="cart.num">
    <template #footer>
      <van-button plain type="danger" size="mini" @click="cancelCart(cart.cartId)">取消</van-button>
      <van-button plain type="primary" size="mini" @click="purchaseProducts(cart.cartId)">购买</van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>