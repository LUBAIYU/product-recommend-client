<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ProductList from '@/components/ProductList.vue'
import { recommendProductsAPI } from '@/apis/product'
import { showFailToast } from 'vant'

//商品列表
const productList = ref<API.ProductInfo[]>([])
//当前页码
const current = ref<number>(1)
//每页记录数
const pageSize = ref<number>(5)
//总记录数
const total = ref<number>(0)

//商品推荐
const recommendProducts = async () => {
  const res = await recommendProductsAPI({
    current: current.value,
    pageSize: pageSize.value
  })
  if (res.code === 200) {
    productList.value = res.data.records
  } else {
    showFailToast(res.message)
  }
}

//onMounted(() => recommendProducts())
</script>

<template>
  <van-cell title="猜您喜欢" v-if="productList&&productList.length>0" />
  <ProductList :product-list="productList" />
  <van-pagination style="margin-top: 10px" v-if="productList&&productList.length>0" v-model="current"
                  :total-items="total"
                  :items-per-page="pageSize"></van-pagination>
  <van-empty description="暂无商品" v-if="!productList||productList.length<1"></van-empty>
</template>

<style scoped>

</style>