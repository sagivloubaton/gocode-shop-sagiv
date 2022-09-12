<script setup lang="ts">
import productCom from "./productCom.vue";
</script>

<template>
  <section class="products">
    <productCom />
    <productCom />
    <productCom />
    <productCom />
    <productCom />
    <productCom />
    <productCom />
    <productCom />
    <productCom />
  </section>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 920px) {
  .products .product-card:first-child,
  .products .product-card:nth-child(2) {
    flex: 2 46%;
  }
}
</style>

