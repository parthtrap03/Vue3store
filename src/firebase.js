import { initializeApp } from "firebase/app";
//firebase Firestore functions
import { getFirestore, collection, getDocs, addDoc, doc, getDoc, } from "firebase/firestore/lite";
//firebase storage functions
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

    const firebaseConfig = {
        apiKey: "AIzaSyDxAjzp6VUwrNcicAGOVsl58-19g5VReHQ",
        authDomain: "vue3-online-store.firebaseapp.com",
        projectId: "vue3-online-store",
        storageBucket: "vue3-online-store.appspot.com",
        messagingSenderId: "25401689850",
        appId: "1:25401689850:web:d393b7ec3e1fa4219e2b43",
        measurementId: "G-TK6LWM9HBR"
      };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    app,
    db,
    collection,
    getDocs,
    addDoc,
    doc,
    getDoc,
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    
};