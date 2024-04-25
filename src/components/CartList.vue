<script setup lang="ts">
interface CartList {
  cartList: API.CartInfo[]
}

const props = withDefaults(defineProps<CartList>(), {
  cartList: () => []
})
</script>

<template>
  <van-card v-for="cart in props.cartList"
            :key="cart.id"
            :title="cart.name"
            :desc="cart.description"
            :price="cart.price"
            :thumb="cart.image"
            :num="cart.num">
    <template #footer>
      <van-button plain type="danger" size="mini">取消</van-button>
      <van-button plain type="primary" size="mini">购买</van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>