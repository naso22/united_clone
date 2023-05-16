<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
    <product-slider></product-slider>
  <h2>WomenPage</h2>
</template>

<script>
import TheSarch from "@/components/layout/TheSarch.vue";
import CategoryFilter from '@/components/layout/CategoryFilter.vue'
import ProductSlider from '@/components/layout/ProductSlider.vue'

export default {
    components:{
        TheSarch,
        CategoryFilter,
        ProductSlider
    }
}
</script>