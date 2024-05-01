<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProductList from '@/components/ProductList.vue'
import { recommendProductsAPI } from '@/apis/product'
import { showFailToast } from 'vant'

//商品列表
const productList = ref<API.ProductInfo[]>([])

//商品推荐
const recommendProducts = async () => {
  const res = await recommendProductsAPI({
    count: 5
  })
  if (res.code === 200) {
    productList.value = res.data
  } else {
    showFailToast(res.message)
  }
}

onMounted(() => recommendProducts())
</script>

<template>
  <van-cell title="猜您喜欢" v-if="productList&&productList.length>0" />
  <ProductList :product-list="productList" />
  <van-empty description="暂无商品" v-if="!productList||productList.length<1"></van-empty>
</template>

<style scoped>

</style>