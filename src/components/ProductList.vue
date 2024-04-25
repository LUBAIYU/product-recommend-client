<script setup lang="ts">
interface ProductList {
  productList: API.ProductInfo[]
}

const props = withDefaults(defineProps<ProductList>(), {
  productList: () => []
})
</script>

<template>
  <van-card v-for="product in props.productList"
            :key="product.id"
            :title="product.name"
            :desc="product.description"
            :price="product.price"
            :thumb="product.image">
    <template #footer>
      <van-button plain type="primary" size="mini">加入购物车</van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>