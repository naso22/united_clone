import {createRouter,createWebHistory} from 'vue-router';
import AllPage from "@/pages/product/AllPage.vue";
import RankingPage from "@/pages/ranking/RankingPage.vue";
import ProductDetail from "@/pages/ditail/ProductDetail.vue";
import FovoritePage from "@/pages/fovorite/FovoritePage.vue";
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',redirect:'/all'},
        {path:'/all',component:AllPage},
        {path:'/ranking' ,component:RankingPage},
        {path:'/product/:id', component:ProductDetail, props:true},
        {path :'/favorite', component:FovoritePage,}
    ]
});

export default router;