<script setup lang="ts">
import { addCartAPI } from '@/apis/cart'
import { showFailToast, showSuccessToast } from 'vant'

interface ProductList {
  productList: API.ProductInfo[]
}

const props = withDefaults(defineProps<ProductList>(), {
  productList: () => []
})

//加入购物车
const addCart = async (productId: number | string) => {
  const res = await addCartAPI(productId)
  if (res.code === 200) {
    showSuccessToast('添加成功')
  } else {
    showFailToast(res.message)
  }
}
</script>

<template>
  <van-card v-for="product in props.productList"
            :key="product.id"
            :title="product.name"
            :desc="product.description"
            :price="product.price"
            :thumb="product.image">
    <template #footer>
      <van-button plain type="primary" size="mini" @click="addCart(product.id)">加入购物车</van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>