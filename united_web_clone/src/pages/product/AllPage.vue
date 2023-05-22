<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
    <product-slider></product-slider>
    <news-component></news-component>
    <ranking-section :top-four-products="topFourProducts"></ranking-section>
    <h2>allpage</h2>
</template>
<script>
import ProductSlider from "@/components/layout/hom-epage_dir/ProductSlider.vue";
import TheSarch from "@/components/layout/hom-epage_dir/TheSarch.vue";
import RankingSection from "@/components/layout/hom-epage_dir/RankingSection.vue";
import NewsComponent from "@/components/layout/hom-epage_dir/NewsComponent.vue";
import CategoryFilter from "@/components/layout/hom-epage_dir/CategoryFilter.vue";
import {onMounted ,computed} from "vue";
import {useStore} from "vuex";

export default {
    components: {
        CategoryFilter, NewsComponent, RankingSection, TheSarch, ProductSlider,
    },
    setup(){
        const store = useStore();
        onMounted(()=>{
            loadProducts()
        })
        function loadProducts(){
            store.dispatch('products/loadProducts');
        }

           const topFourProducts= computed(() =>{
                 const allProducts = store.getters['products/products'];
                 return allProducts.slice(0, 4);
             });
             return{
                 topFourProducts
             }
    }
}
</script>