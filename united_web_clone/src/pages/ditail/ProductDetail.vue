<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
  <div class="product">
      <div>
          <div class="block"></div>
          <div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
      <div class="product_rigth">
          <h2>H****</h2>
          <p>＜NIKE＞DUNK LOW Black/スニーカー</p>
          <p>¥13,200(税込)</p>
          <p>ハウスカードポイント：120pt還元</p>
          <p>サイズ： 26cm 26.5cm 27cm 27.5cm 28cm 28.5cm 29cm</p>
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


export default {
    components:{
        OderButtom,
        TheSarch,
        CategoryFilter,
        SarchButton
    },
}
</script>

<style>
.block{
    border: #8f8e8d solid 1px;
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

.product_rigth{
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
width: 100%;
}

p{
    margin-bottom: 20px;
    font-size: 0.75rem;
}
</style>