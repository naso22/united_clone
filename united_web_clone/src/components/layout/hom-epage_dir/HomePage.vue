<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
    <product-slider></product-slider>
    <news-component></news-component>
    <ranking-section></ranking-section>
</template>

<script>
import TheSarch from "@/components/layout/hom-epage_dir/TheSarch.vue";
import CategoryFilter from '@/components/layout/hom-epage_dir/CategoryFilter.vue'
import ProductSlider from '@/components/layout/hom-epage_dir/ProductSlider.vue'
import NewsComponent from '@/components/layout/hom-epage_dir/NewsComponent.vue'
import RankingSection from "@/components/layout/hom-epage_dir/RankingSection.vue";

export default {
    components:{
        RankingSection,
        TheSarch,
        CategoryFilter,
        ProductSlider,
        NewsComponent
    }
}
</script>