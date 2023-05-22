<template>
    <the-sarch></the-sarch>
  <category-filter></category-filter>
  <div class="ranking-block">
          <h2>ランキング</h2>
      <div>
          <div class="buttom-content">
             <sarch-button class="buttom">絞り込み条件を指定</sarch-button>
             <sarch-button class="buttom">売り上げ金額</sarch-button>
          </div>
              <ul>
                  <product-card class="product"
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
  </div>
</template>
<script>
import ProductCard from "@/components/ui/ProductCard.vue";
import SarchButton from "@/components/ui/SarchButton.vue"
import TheSarch from "@/components/layout/hom-epage_dir/TheSarch.vue";
import CategoryFilter from '@/components/layout/hom-epage_dir/CategoryFilter.vue'
import {useStore} from "vuex";
import {computed} from "vue";
export default({
    components: {
        SarchButton,
        ProductCard,
        TheSarch,
        CategoryFilter
    },
    setup(){
        const store = useStore();

        const topFourProducts= computed(() =>{
           return store.getters['products/products'];
        });

        return{topFourProducts}

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
    margin-top: 70px;
}

h2{
    text-align: center;
    margin: 40px;
}

.buttom-content{
    display: flex;
    justify-content:center;
    height: 50px;


}

.product{
    width: 160px;
    margin: 10px;
}

.buttom{
    width:250px;
    height: 40px;
    margin: 10px;

}
</style>