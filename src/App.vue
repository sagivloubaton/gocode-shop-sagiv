<script setup lang="ts">
//import { RouterLink, RouterView } from "vue-router";
import { reactive } from "vue";
import headerCom from "./components/headerCom.vue";
import productsCom from "./components/productsCom.vue";
import json from "./data/data.json";

const state = reactive({ products: json });
</script>

<template>
  <headerCom />
  <productsCom :productsList="json" />
</template>

<style scoped></style>

