<template>
  <div class="ranking">
      <div class="ranking-title">
              <h2>ランキング</h2>
              <div class="ranking-title__s">RANKING</div>
          <p class="ranking-title__s"><router-link to="/ranking">もっと見る</router-link></p>
      </div>
          <ul>
                  <product-card class="ranking__card"
                                v-for="product in topFourProducts"
                                :key='product.id'
                                :id='product.id'
                                :img="product.img"
                                :maker='product.maker'
                                :kinds='product.kinds'
                                :price=product.price>
                  </product-card>
          </ul>
  </div>
</template>

<script>
import ProductCard from "@/components/ui/ProductCard.vue";
import {computed} from "vue";
import { useStore } from 'vuex';

export default {
    components:{
        ProductCard
    },
    setup(){
        const store = useStore();
        const topFourProducts= computed(() =>{
            return  store.getters['products/products'];
        })

        console.log(store)

        return{topFourProducts}

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
    margin: 5px;
}

h2{
    margin: 5px;
}

ul{
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
}

.ranking__card{
    width: 250px;
}



</style>