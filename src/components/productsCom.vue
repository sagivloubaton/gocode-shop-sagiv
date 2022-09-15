<script lang="ts">
import productCom from "./productCom.vue";
import { defineComponent, type PropType } from "vue";
import type { productType } from "../types/product";
export default defineComponent({
  props: {
    productsList: Object as PropType<productType[]>,
  },
  components: { productCom },
});
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

