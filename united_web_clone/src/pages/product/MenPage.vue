<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
    <product-slider></product-slider>
    <news-component></news-component>
    <ranking-section></ranking-section>
    <h2>menpage</h2>
</template>
<script>
import ProductSlider from "@/components/layout/hom-epage_dir/ProductSlider.vue";
import TheSarch from "@/components/layout/hom-epage_dir/TheSarch.vue";
import RankingSection from "@/components/layout/hom-epage_dir/RankingSection.vue";
import NewsComponent from "@/components/layout/hom-epage_dir/NewsComponent.vue";
import CategoryFilter from "@/components/layout/hom-epage_dir/CategoryFilter.vue";
export default {
    components:{
        CategoryFilter, NewsComponent, RankingSection, TheSarch, ProductSlider,
    }
}
</script>