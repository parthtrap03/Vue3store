<template>
    <div id="addproductform">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="form.title"
          label="Product Title *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
  
        <q-input
          filled
          type="number"
          v-model="form.price"
          label="Product Price *"
          lazy-rules
          
        />
        <q-file
         v-model="file"
         label="Choose Product Image" 
         @update:modelValue="fileupload"
         />
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </template>
<script setup>
import { ref, reactive } from "vue";

import { getStorage,
     ref as firebaseref,
     uploadBytesResumable,
     getDownloadURL,
     addDoc, 
     collection,
     db,
     } 
     from "../../firebase.js";


const file = ref(null);

const form = reactive({
    title:"",
    price: 0,
    imageUrl:"",
});
const fileupload  =  () => {

const storage = getStorage();

const storageRef = firebaseref(storage, "product/"+ file.value.name);

const uploadTask =  uploadBytesResumable(storageRef, file.value);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on(
    'state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      form.imageUrl= downloadURL
    });
  }
);

};
const onSubmit =async () => {
    const docRef = await addDoc(collection(db, "vue3store"), form);
    console.log("document written with ID: ", docRef.id);
    console.log(form)
};
</script>

<style scoped>
#addproductform{
    width: 50%;
};

</style>