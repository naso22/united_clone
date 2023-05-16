import {createRouter,createWebHistory} from 'vue-router';

import WoMenPage from "@/pages/product/WoMenPage.vue";
import MenPage from "@/pages/product/MenPage.vue";
import AllPage from "@/pages/product/AllPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',redirect:'/women'},
        {path:'/women',component:WoMenPage},
        {path:'/men',component:MenPage},
        {path:'/all',component:AllPage},
    ]
});

export default router;