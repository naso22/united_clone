<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
  <div class="product">
      <div class="product__container">
          <div class="product__img">
              <img :src=productImg>
          </div>
          <div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
      <div class="product-detail">
          <h2 class="product__name">{{productName}}</h2>
          <p class="product__overview">{{overView}}</p>
          <div class="product__price">
              <p class="product__price-value text_m">{{price}}</p>
              <p class="product__points text_s">{{houseCardPoint}}</p>
          </div>
          <p class="product__size text_s">{{size}}</p>
          <div class="product__action">
          <OderButtom @click="oderButtom">選択して注文</OderButtom>
              <div class="product__favorite-btn">
                  <div class="product__favorite-btn-container">
                      <sarch-button>お気に入り追加</sarch-button>
                  </div>
              </div>
          </div>
          <div>
              <ul class="product__menu">
                  <li>商品説明</li>
                  <li>サイズ・商品詳細</li>
                  <li>レビュー</li>
              </ul>
              <p></p>
          </div>
      </div>
  </div>
    <base-dialog v-if="modalOpen"></base-dialog>
</template>

<script>
import TheSarch from "@/components/layout/hom-epage_dir/TheSarch.vue";
import CategoryFilter from "@/components/layout/hom-epage_dir/CategoryFilter.vue";
import OderButtom from "@/components/ui/OderButtom.vue";
import SarchButton from '@/components/ui/SarchButton.vue';
import {ref, onMounted, computed} from "vue";
import { useStore } from 'vuex';
import BaseDialog from "@/components/layout/OderDialog/BaseDialog.vue";

export default {
    components:{
        BaseDialog,
        OderButtom,
        TheSarch,
        CategoryFilter,
        SarchButton,
    },
    props:['id'],
    setup(props){

        const selectedProduct = ref('')
        const store =useStore();

        onMounted(()=>{
            selectedProduct.value = store.getters['products/products'].find(
                (product) => product.id === props.id)
        });

        const productImg = computed(()=>{
            return selectedProduct.value.img
        })

        const productName = computed(()=>{
            return selectedProduct.value.name
        })

        const overView = computed(()=>{
            return selectedProduct.value.overview
        })

        const price = computed(()=>{
            return selectedProduct.value.price
        })

        const houseCardPoint = computed(()=>{
            return selectedProduct.value.points
        })

        const size= computed(()=>{
            return selectedProduct.value.size
        })

        let modalOpen =ref(false);
        function oderButtom(){
           modalOpen.value =!modalOpen.value
        }


        return {
            productImg,
            productName,
            overView,
            price,
            houseCardPoint,
            size,
            oderButtom,
            modalOpen
        }
    }
}
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
}
.product__img{
    width:500px ;
    height: 600px;
    margin: 20px;
}

.product{
    margin-left: auto;
    margin-right: auto;
    width:1024px ;
    display: flex;
    justify-content: space-between;
}

.product-detail{
width: 400px;
}

.product__favorite-btn-container{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 60px;
    margin-top: 20px;

}

.product__menu{
    display: flex;
    justify-content: space-between;
}

.product__action{
    margin-top: 20px;


}


.product__price-value{
  margin-top:25px ;
    margin-bottom:25px ;
}

.text_s{
    font-size: 0.8rem;
    margin-top: 10px;
}

.text_m{
    font-size: 1.2rem;
}

h2{
    margin-top: 30px;
    font-size:2rem;
}
</style>