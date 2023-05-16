<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
    <product-slider></product-slider>
    <news-component></news-component>
  <h2>WomenPage</h2>
</template>

<script>
import TheSarch from "@/components/layout/TheSarch.vue";
import CategoryFilter from '@/components/layout/CategoryFilter.vue'
import ProductSlider from '@/components/layout/ProductSlider.vue'
import NewsComponent from '@/components/layout/NewsComponent.vue'

export default {
    components:{
        TheSarch,
        CategoryFilter,
        ProductSlider,
        NewsComponent
    }
}
</script>