<template>
    <NavbarComponent />
    <div id="container">
      <q-form @submit="onSubmit" id="orders_form" class="q-gutter-md">
        <q-input filled v-model="form.name" label="Your name *" lazy-rules />
        <q-input filled v-model="form.contact" type="number" label="Your Contact *" lazy-rules />
        <q-input filled type="text" v-model="form.address" label="Your Address *" lazy-rules />
  
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
        </div>
      </q-form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  import NavbarComponent from '../components/Homepage/Navbar.vue';
  import { useCartStore } from "../store.js";
  import { db, collection, addDoc } from "../firebase";
  
  const cartStore = useCartStore()
  
  const form = reactive ({
    name: "",
    contact: null,
    address: "",
    order: cartStore.cart,
    total: cartStore.cartTotal
  });
  
  const onSubmit = async (event) => {
    event.preventDefault();
  
    if (!form.name || !form.contact || !form.address) {
      alert('Please enter data');
      return;
    }
  
    try {
      const docRef = await addDoc(collection(db, "orders"), form);
      console.log("Document written with ID:", docRef.id);
      alert('Data saved successfully');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Error saving data');
    }
  };
  </script>
  
  <style scoped>
  #container {
    margin-top: 10px;
  }
  #orders_form {
    width: 50%;
  }
  </style>
  