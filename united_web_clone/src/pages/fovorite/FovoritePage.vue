<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
  <div class="favorite">
      <div class="fovorite-titile">
          <h2 class="favorite-title__headline">
              お気に入り
          </h2>
      </div>
      <div class="fovorite-select">
          <ul class="fovorite-nav">
              <li class="favorite-nav__item">商品</li>
              <li>スタッフ</li>
          </ul>
      </div>
      <div class="fovorite-product">
          <div class="fovorite-product__box">
              <ul>
                 <product-card>

                 </product-card>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import TheSarch from "@/components/layout/hom-epage_dir/TheSarch.vue";
import CategoryFilter from "@/components/layout/hom-epage_dir/CategoryFilter.vue";
import ProductCard from "@/components/ui/ProductCard.vue";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";

export default {
    components:{
        ProductCard,
        TheSarch,
        CategoryFilter
    },
    setup(){
        const store = useStore();
        onMounted(()=>{
            loadProducts()
        })
        function loadProducts(){
            store.dispatch('favorites/loadFavorite');
        }

        const favoriteProducts= computed(() =>{
            return store.getters['favorites/products'];
        });
        return{
            favoriteProducts
        }
    }
}
</script>

<style scoped>
.favorite{
    margin-right: 0;
    margin-left: 0;
}

.favorite-title__headline{
    text-align: center;
    margin: 30px;
    font-weight: lighter;
}

.fovorite-select{
   border-bottom: 1px solid #858181;
}


.fovorite-nav{
    display: flex;
    justify-content: center;
}

.favorite-nav__item{
    margin-right: 20px;
}
</style>