<template>
 <div id="products">
      <div @click="showProduct(product.id)" v-for="product in products" :key="product.id" id="individual_product">
        
       <img :src=product.imageUrl alt="">
       <p>{{product.title}}</p>
       <p>{{product.price}}</p>
      </div> 
</div>

</template>

<script setup>


import { ref, onMounted} from "vue";
import {useRouter} from "vue-router"
import {db, collection, getDocs } from "../../firebase.js";

const products = ref([]);
const router = useRouter()

 onMounted(async ()=> {
const result = await getDocs(collection(db, "vue3store"));
result.forEach((doc) => {     
let product = doc.data();
product.id = doc.id;
console.log("product:", product);

products.value.push(product);
});
console.log("products:", products.value);
});
const showProduct = (id) => {
    console.log(id);
router.push(`productdetails/${id}`);

};
</script>

<style scoped>
#products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
 margin-top: 3%;
}
#products img {
    width: 100%;
}
</style>