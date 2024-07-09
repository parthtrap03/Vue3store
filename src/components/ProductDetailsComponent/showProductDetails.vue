<template>
    <div id="container">
        <div id="lhs">
         <img :src="product.imageUrl" alt="" />
        </div>

        <div id="rhs">
            <p>{{ product.title }}</p>
            <p>{{ product.price }}</p>
            <q-btn @click="addtoCart(product)" id="addtocart_btn" :disable="buttondisable" color="black" label="Add to Cart"/>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { db, doc, getDoc } from "../../firebase.js";
import { useRoute } from "vue-router";
import { useCartStore } from "../../store.js";
const route = useRoute();
const product = ref({});
const cartStore= useCartStore()
onMounted(async () => {
    
const docRef = doc(db, "vue3store", route.params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  let prod = docSnap.data();
  prod.id = docSnap.id;

  product.value = prod;
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

});

const addtoCart =(product) =>{
  cartStore.addtoCart(product)
}; 
</script>

<style scoped>
#addtocart_btn {
    width: 40%;

}
#container {
     
    display: flex;
    margin-top: 5%;
}
#lhs{
    display: flex;
    flex: 4;

}
#lhs img {
    width: 100%;

}
#rhs {
   display: flex;
    flex: 6;
    flex-direction: column;
    margin-left: 3%;
    font-size: 180%;
    font-family: monospace;
    font-weight: bold;
}
</style>