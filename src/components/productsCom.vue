<script setup lang="ts">
import productCom from "./productCom.vue";
import type { PropType } from "vue";
import type { productType } from "../types/product";

const props = defineProps(["productsList"]);
</script>

<template>
  <section class="products">
    <productCom
      v-for="product in productsList"
      :product="product"
      :key="product.id"
    />
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

