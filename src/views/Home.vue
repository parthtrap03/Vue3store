<template>
    <div>
<NavbarComponent/>
<BannerComponent welcomemsg="Welcome to vue shop"/>
<ProductsComponent/>
  </div>
</template>

<script setup>

import NavbarComponent from "../components/Homepage/Navbar.vue";
import BannerComponent from "../components/Homepage/Banner.vue";
import ProductsComponent from "../components/Homepage/Products.vue";  
</script>

<style scoped>

</style>