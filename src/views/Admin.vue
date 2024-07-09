<template>
    <div>
        <h4> This is Admin Page </h4>
        <NavbarCompoment />
        <addProductFormVue/>

       
        {{form}}
    
    </div>
</template>

<script setup>
import addProductFormVue from '../components/AdminComponents/addProductForm.vue';
import NavbarCompoment from '../components/Homepage/Navbar.vue';

//const name = ref("");
//const contact= ref("0");

 
</script>

<style scoped></style>