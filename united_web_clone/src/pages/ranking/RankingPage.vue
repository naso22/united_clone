<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
  <div class="ranking-block">
          <h2>ランキング</h2>
      <div>
          <div class="buttom-content">
              <div><sarch-button>絞り込み条件を指定</sarch-button></div>
              <div><sarch-button>売り上げ金額</sarch-button></div>
          </div>
              <ul>
                  <div class="product"><product-card></product-card></div>
                  <div class="product"><product-card></product-card></div>
                  <div class="product"><product-card></product-card></div>
                  <div class="product"><product-card></product-card></div>
                  <div class="product"><product-card></product-card></div>
                  <div class="product"><product-card></product-card></div>
                  <div class="product"><product-card></product-card></div>
                  <div class="product"><product-card></product-card></div>

              </ul>
  </div>
  </div>
</template>
<script>
import ProductCard from "@/components/ui/ProductCard.vue";
import SarchButton from "@/components/ui/SarchButton.vue"
import TheSarch from "@/components/layout/hom-epage_dir/TheSarch.vue";
import CategoryFilter from '@/components/layout/hom-epage_dir/CategoryFilter.vue'
export default({
    components: {
        SarchButton,
        ProductCard,
        TheSarch,
        CategoryFilter
    }
})
</script>

<style scoped>
.ranking-block{
    margin-left: auto;
    margin-right: auto;
    max-width:1080px ;
}
ul{
    display: flex;
    flex-wrap:wrap;
}

h2{
    text-align: center;
    margin: 40px;
}

.buttom-content{
    display: flex;
    justify-content:center;
    margin: 70px auto;
    max-width: 400px;


}

.product{
    width: 160px;
    margin: 10px;
}
</style>