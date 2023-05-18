<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
  <div class="product">
      <div>
          <div class="block">
              <img :src=productImg>
          </div>
          <div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
      <div class="product-detail">
          <h2>{{productName}}</h2>
          <p class="text_s">{{overView}}</p>
          <div class="product-detail__price">
              <p class="text_m">{{price}}</p>
              <p class="text_s">{{houseCardPoint}}</p>
          </div>
          <p class="text_s">{{size}}</p>
          <div class="action">
          <OderButtom></OderButtom>
              <div class="fovorite_btn">
                  <div style="display: flex; justify-content: flex-end;">
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

</template>

<script>
import TheSarch from "@/components/layout/hom-epage_dir/TheSarch.vue";
import CategoryFilter from "@/components/layout/hom-epage_dir/CategoryFilter.vue";
import OderButtom from "@/components/ui/OderButtom.vue";
import SarchButton from '@/components/ui/SarchButton.vue';
import {ref, onMounted, computed} from "vue";
import { useStore } from 'vuex';

export default {
    components:{
        OderButtom,
        TheSarch,
        CategoryFilter,
        SarchButton
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


        return {
            productImg,
            productName,
            overView,
            price,
            houseCardPoint,
            size
        }
    }
}
</script>

<style>
.block{
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

.fovorite_btn{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 60px;
}

.product__menu{
    display: flex;
    justify-content: space-between;
}

.action{
    margin-top: 20px;


}


.product-detail__price{
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