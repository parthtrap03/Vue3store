// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'

import router from './router.js'


// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const myApp = createApp(App)

myApp.use(pinia);
myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
myApp.use(router)
// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
