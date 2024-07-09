import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue"; 
import Admin from "./views/Admin.vue";
import ProductDetails from "./views/ProductDetails.vue";
import Orders from "./views/Orders.vue";

const routes = [
    { path: "/", component: Home },
    {
         path: "/admin",
         component: Admin,
       },
{
 path:"/productdetails/:id",
 component: ProductDetails,
},
{
   path: "/order",
   component: Orders,
},
];
 
 const router = createRouter({

    history: createWebHashHistory(),
    routes,
 });

 export default router;