<script lang="ts">
//import { RouterLink, RouterView } from "vue-router";
import headerCom from "./components/headerCom.vue";
import productsCom from "./components/productsCom.vue";
import json from "./data/data.json";

export default {
  data() {
    return {
      products: json,
    };
  },
};
</script>

<template>
  <headerCom />
  <productsCom :productsList="json" />
</template>

<style scoped></style>

