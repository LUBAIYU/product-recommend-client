<script setup lang="ts">
import { ref } from 'vue'
import ProductList from '@/components/ProductList.vue'
import { searchProductsAPI } from '@/apis/product'
import { showFailToast } from 'vant'

//商品名称
const name = ref<string>('')

//总记录数
const total = ref<number>(0)
//搜索商品的列表
const productList = ref<API.ProductInfo[]>([])

//当前页码
const current = ref<number>(1)
//每页记录数
const pageSize = ref<number>(5)

//搜索商品
const searchProducts = async () => {
  const res = await searchProductsAPI({
    current: current.value,
    pageSize: pageSize.value,
    name: name.value
  })
  if (res.code === 200) {
    productList.value = res.data.records
    total.value = res.data.total
  } else {
    showFailToast(res.message)
  }
}
</script>

<template>
  <van-search v-model="name" placeholder="请输入搜索关键词" @search="searchProducts"></van-search>
  <ProductList :product-list="productList" />
  <van-pagination style="margin-top: 10px" v-if="productList&&productList.length>0" v-model="current"
                  :total-items="total"
                  :items-per-page="pageSize"></van-pagination>
  <van-empty description="暂无商品" v-if="!productList||productList.length<1"></van-empty>
</template>

<style scoped>

</style>