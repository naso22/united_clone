import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store/index.js'
import ProductCard from "@/components/ui/ProductCard.vue";
import SarchButton from '@/components/ui/SarchButton.vue';

const app=createApp(App)
      app.use(router);
      app.use(store);
      app.component('paroduct-card',ProductCard);
      app.component('sarch-button',SarchButton);
      app.mount('#app')
