<template>
  <div class="ranking">
      <div class="ranking-title">
              <h2>ランキング</h2>
              <div class="ranking-title__s">RANKING</div>
          <p class="ranking-title__s"><a href="">もっと見る</a></p>
      </div>
          <ul>
          <product-card></product-card>
              <product-card></product-card>
              <product-card></product-card>
              <product-card></product-card>
          </ul>
  </div>
</template>

<script>
import ProductCard from "@/components/ui/ProductCard.vue";
export default {
    components:{
        ProductCard
    }
}
</script>

<style scoped>
.ranking{
    border-top: rgb(220,219,218) solid 1px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1080px;
}

.ranking-title{
  text-align: center;
    margin: 50px;
}

.ranking-title__s{
    font-size: 0.75rem;
}

h2{
    margin: 5px;
}

ul{
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
}



</style>