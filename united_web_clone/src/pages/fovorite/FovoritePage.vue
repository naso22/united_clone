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
              <ul class="fovorite-product__list">
                      <favorite-card
                                    v-for="product in favoriteProducts"
                                    :key='product.id'
                                    :id='product.id'
                                    :img="product.img"
                                    :maker='product.maker'
                                    :kinds='product.kinds'
                                    :price=product.price
                                    @load-favorite="loadFavorite">
                      </favorite-card>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import TheSarch from "@/components/layout/hom-epage_dir/TheSarch.vue";
import CategoryFilter from "@/components/layout/hom-epage_dir/CategoryFilter.vue";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import FavoriteCard from "@/components/ui/FavoriteCard.vue";

export default {
    components:{
        FavoriteCard,
        TheSarch,
        CategoryFilter
    },
    setup(){
        const store = useStore();
        onMounted(()=>{
            loadFavorite()
        })
       function loadFavorite(){
           store.dispatch('favorites/loadFavorite');
           console.log('lll')
        }

        const favoriteProducts= computed(() =>{
            return store.getters['favorites/favorites'];
        });

        return{
            favoriteProducts,
            loadFavorite
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

.fovorite-product__box{

}


.fovorite-nav{
    display: flex;
    justify-content: center;
}

.favorite-nav__item{
    margin-right: 20px;
}



.fovorite-product__list{
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 1000px;
}

</style>